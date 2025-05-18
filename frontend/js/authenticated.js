// Seleciona o formulário de login pelo ID
const loginForm = document.getElementById('login-form');
// Seleciona o formulário de registro pelo ID
const registerForm = document.getElementById('register-form');
// Define a URL base da API, pegando da variável global ou usando a URL padrão
const API = window.API_URL || 'http://44.204.138.207:3000';

// Adiciona um evento para quando o formulário de login for enviado
loginForm.addEventListener('submit', async (e) => {
  e.preventDefault(); // Evita o comportamento padrão de envio do formulário (recarregar a página)
  
  // Cria um objeto FormData com os dados do formulário de login
  const formData = new FormData(loginForm);
  // Converte os dados do formulário em um objeto simples (chave: valor)
  const data = Object.fromEntries(formData.entries());

  // Envia uma requisição POST para a rota /login da API com os dados do formulário
  const res = await fetch(`${API}/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data) // Converte o objeto em JSON para enviar no corpo da requisição
  });

  // Aguarda a resposta da API no formato JSON
  const result = await res.json();
  // Exibe uma mensagem de alerta com o retorno da API (mensagem de sucesso ou erro)
  alert(result.message || result.error);

  // Se o login foi bem-sucedido (status HTTP 200), redireciona para a página autenticada
  if (res.ok) window.location.href = 'dashboard.html';
});

// Adiciona um evento para quando o formulário de registro for enviado
registerForm.addEventListener('submit', async (e) => {
  e.preventDefault(); // Evita recarregar a página ao enviar o formulário
  
  // Cria um objeto FormData com os dados do formulário de registro
  const formData = new FormData(registerForm);
  // Converte os dados do formulário em um objeto simples (chave: valor)
  const data = Object.fromEntries(formData.entries());

  // Envia uma requisição POST para a rota /register da API com os dados do formulário
  const res = await fetch(`${API}/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data) // Converte o objeto em JSON para enviar no corpo da requisição
  });

  // Aguarda a resposta da API no formato JSON
  const result = await res.json();
  // Exibe uma mensagem de alerta com o retorno da API (mensagem de sucesso ou erro)
  alert(result.message || result.error);
});


// Seleciona a div onde mensagens de status (erro/sucesso) serão exibidas
const msgDiv = document.getElementById('msg');
// Seleciona o corpo da tabela onde os usuários serão listados
const usersTableBody = document.querySelector('#usersTable tbody');
// Seleciona o formulário para adicionar novos usuários
const addUserForm = document.getElementById('addUserForm');

// Função para buscar os usuários da API e atualizar a tabela
async function fetchUsers() {
  msgDiv.textContent = ''; // Limpa mensagens anteriores
  try {
    // Faz a requisição GET para buscar a lista de usuários
    const res = await fetch('http://44.204.138.207:3000/users');
    if (!res.ok) throw new Error('Erro ao buscar usuários'); // Se falhar, lança erro
    
    // Converte a resposta em JSON (lista de usuários)
    const users = await res.json();

    // Limpa o conteúdo atual da tabela
    usersTableBody.innerHTML = '';
    // Para cada usuário, cria uma linha na tabela com campos editáveis e botões
    users.forEach(user => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${user.id}</td>
        <td><input type="text" value="${user.username}" data-id="${user.id}" class="edit-username" /></td>
        <td><input type="email" value="${user.email}" data-id="${user.id}" class="edit-email" /></td>
        <td>
          <button class="btn-update" data-id="${user.id}">Salvar</button>
          <button class="btn-delete" data-id="${user.id}">Excluir</button>
        </td>
      `;
      usersTableBody.appendChild(tr); // Adiciona a linha na tabela
    });
    // Após renderizar a tabela, adiciona os event listeners para os botões
    addUserListeners();
  } catch (err) {
    // Em caso de erro, exibe a mensagem para o usuário
    msgDiv.textContent = err.message;
    msgDiv.className = 'error';
  }
}

// Função para adicionar event listeners nos botões de atualizar e deletar usuários
function addUserListeners() {
  // Botões de atualizar usuário
  document.querySelectorAll('.btn-update').forEach(btn => {
    btn.onclick = async () => {
      const id = btn.dataset.id; // Pega o ID do usuário do atributo data-id
      // Pega os valores atuais dos inputs de username e email correspondentes
      const username = document.querySelector(`.edit-username[data-id="${id}"]`).value.trim();
      const email = document.querySelector(`.edit-email[data-id="${id}"]`).value.trim();

      // Validação simples: campos não podem estar vazios
      if (!username || !email) {
        msgDiv.textContent = 'Usuário e email são obrigatórios';
        msgDiv.className = 'error';
        return;
      }
      try {
        // Envia requisição PUT para atualizar o usuário na API
        const res = await fetch(`http://44.204.138.207:3000/users/${id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username, email }),
        });
        if (!res.ok) throw new Error('Erro ao atualizar usuário');

        // Exibe mensagem de sucesso e atualiza a lista
        msgDiv.textContent = 'Usuário atualizado com sucesso';
        msgDiv.className = 'success';
        fetchUsers();
      } catch (err) {
        // Em caso de erro, exibe mensagem para o usuário
        msgDiv.textContent = err.message;
        msgDiv.className = 'error';
      }
    };
  });

  // Botões de deletar usuário
  document.querySelectorAll('.btn-delete').forEach(btn => {
    btn.onclick = async () => {
      const id = btn.dataset.id; // Pega o ID do usuário do atributo data-id
      // Confirmação para evitar exclusão acidental
      if (!confirm('Confirma exclusão do usuário?')) return;
      try {
        // Envia requisição DELETE para remover o usuário da API
        const res = await fetch(`http://44.204.138.207:3000/users/${id}`, { method: 'DELETE' });
        if (!res.ok) throw new Error('Erro ao deletar usuário');

        // Exibe mensagem de sucesso e atualiza a lista
        msgDiv.textContent = 'Usuário deletado com sucesso';
        msgDiv.className = 'success';
        fetchUsers();
      } catch (err) {
        // Em caso de erro, exibe mensagem para o usuário
        msgDiv.textContent = err.message;
        msgDiv.className = 'error';
      }
    };
  });
}

// Event listener para o formulário de adicionar novo usuário
addUserForm.addEventListener('submit', async (e) => {
  e.preventDefault(); // Evita o envio padrão do formulário (recarregar a página)
  
  // Pega os valores dos inputs do formulário, removendo espaços extras
  const username = document.getElementById('username').value.trim();
  const email = document.getElementById('email').value.trim();

  // Validação simples: campos obrigatórios
  if (!username || !email) {
    msgDiv.textContent = 'Usuário e email são obrigatórios';
    msgDiv.className = 'error';
    return;
  }
  try {
    // Envia requisição POST para adicionar novo usuário na API
    const res = await fetch('http://44.204.138.207:3000/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, email }),
    });
    if (!res.ok) throw new Error('Erro ao adicionar usuário');

    // Exibe mensagem de sucesso, limpa o formulário e atualiza a lista
    msgDiv.textContent = 'Usuário adicionado com sucesso';
    msgDiv.className = 'success';
    addUserForm.reset();
    fetchUsers();
  } catch (err) {
    // Em caso de erro, exibe mensagem para o usuário
    msgDiv.textContent = err.message;
    msgDiv.className = 'error';
  }
});

// Inicializa a aplicação carregando a lista de usuários
fetchUsers();
