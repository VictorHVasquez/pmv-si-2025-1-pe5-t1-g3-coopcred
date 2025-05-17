const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
const bcrypt = require('bcrypt');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const pool = new Pool({
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// Registro
app.post('/register', async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ error: 'Preencha todos os campos' });
  }

  try {
    // Verifica se usuário já existe
    const exists = await pool.query('SELECT * FROM usuarios WHERE username = $1', [username]);
    if (exists.rowCount > 0) {
      return res.status(400).json({ error: 'Usuário já existe' });
    }

    // Hash da senha
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insere usuário no banco
    await pool.query(
      'INSERT INTO usuarios (username, email, password) VALUES ($1, $2, $3)',
      [username, email, hashedPassword]
    );

    res.status(201).json({ message: 'Usuário registrado com sucesso' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro no servidor' });
  }
});

// Login
app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const result = await pool.query('SELECT * FROM usuarios WHERE username = $1', [username]);
    const user = result.rows[0];

    if (!user) {
      return res.status(401).json({ error: 'Usuário ou senha inválidos' });
    }

    // Compara senha
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(401).json({ error: 'Usuário ou senha inválidos' });
    }

    // Login OK - aqui você pode criar um token JWT, sessão, etc
    res.json({ message: 'Login bem-sucedido' });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro no servidor' });
  }
});


// Listar usuários
app.get('/users', async (req, res) => {
  try {
    const result = await pool.query('SELECT id, username, email FROM usuarios ORDER BY id');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar usuários' });
  }
});

// Criar usuário
app.post('/users', async (req, res) => {
  const { username, email } = req.body;
  try {
    await pool.query('INSERT INTO usuarios (username, email, password) VALUES ($1, $2, $3)', [username, email, '']); // Atenção: para senha pode deixar vazio ou ajustar para hash default
    res.status(201).json({ message: 'Usuário criado' });
  } catch (err) {
    res.status(500).json({ error: 'Erro ao criar usuário' });
  }
});

// Atualizar usuário
app.put('/users/:id', async (req, res) => {
  const id = req.params.id;
  const { username, email } = req.body;
  try {
    await pool.query('UPDATE usuarios SET username=$1, email=$2 WHERE id=$3', [username, email, id]);
    res.json({ message: 'Usuário atualizado' });
  } catch (err) {
    res.status(500).json({ error: 'Erro ao atualizar usuário' });
  }
});

// Deletar usuário
app.delete('/users/:id', async (req, res) => {
  const id = req.params.id;
  try {
    await pool.query('DELETE FROM usuarios WHERE id=$1', [id]);
    res.json({ message: 'Usuário deletado' });
  } catch (err) {
    res.status(500).json({ error: 'Erro ao deletar usuário' });
  }
});


app.listen(port, () => {
  console.log(`Backend rodando na porta ${port}`);
});