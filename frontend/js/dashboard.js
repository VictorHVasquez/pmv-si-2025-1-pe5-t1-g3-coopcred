const navButtons = document.querySelectorAll('.nav-btn');
const sections = document.querySelectorAll('.section-panel');

navButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    navButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const target = btn.dataset.target;
    sections.forEach(section => {
      section.id === target ? section.classList.add('active') : section.classList.remove('active');
    });
  });
});

// Geração automática do número da conta
const contaNumeroInput = document.getElementById('conta-numero');
function gerarNumeroConta() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

contaNumeroInput.value = gerarNumeroConta();

// Armazenamento local temporário das contas
const contas = [];

// Formulário de cadastro de conta
const formConta = document.getElementById('conta-cadastro-form');
formConta.addEventListener('submit', (e) => {
  e.preventDefault();

  const nome = formConta['conta-nome'].value.trim();
  const telefone = formConta['conta-telefone'].value.trim();
  const email = formConta['conta-email'].value.trim();
  const endereco = formConta['conta-endereco'].value.trim();
  const tipo = formConta['conta-tipo'].value;
  const numeroConta = formConta['conta-numero'].value;

  // Criar conta
  const conta = { nome, telefone, email, endereco, tipo, numero: numeroConta };
  contas.push(conta);

  alert('Conta cadastrada com sucesso!');

  formConta.reset();
  contaNumeroInput.value = gerarNumeroConta();

  preencherTabelaContas(contas);
});

// Preencher tabela com contas
const tabelaContasBody = document.querySelector('#tabela-contas tbody');

function preencherTabelaContas(lista) {
  tabelaContasBody.innerHTML = '';

  if (lista.length === 0) {
    tabelaContasBody.innerHTML = '<tr><td colspan="6" style="text-align:center;">Nenhuma conta cadastrada.</td></tr>';
    return;
  }

  lista.forEach((conta) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${conta.nome}</td>
      <td>${conta.telefone}</td>
      <td>${conta.email}</td>
      <td>${conta.endereco}</td>
      <td>${conta.tipo}</td>
      <td>${conta.numero}</td>
    `;
    tabelaContasBody.appendChild(tr);
  });
}

// Filtrar contas pela busca
const buscaInput = document.getElementById('busca-conta');
buscaInput.addEventListener('input', () => {
  const termo = buscaInput.value.toLowerCase();

  const contasFiltradas = contas.filter((conta) => {
    return (
      conta.nome.toLowerCase().includes(termo) ||
      conta.email.toLowerCase().includes(termo) ||
      conta.numero.includes(termo)
    );
  });

  preencherTabelaContas(contasFiltradas);
});

// Formulário de cadastro de usuário
const formUsuario = document.getElementById('usuario-cadastro-form');
formUsuario.addEventListener('submit', (e) => {
  e.preventDefault();

  const nome = formUsuario['usuario-nome'].value.trim();
  const email = formUsuario['usuario-email'].value.trim();
  const senha = formUsuario['usuario-senha'].value;
  const setor = formUsuario['usuario-setor'].value.trim();

  alert(`Usuário ${nome} cadastrado com sucesso!`);

  formUsuario.reset();
});

// Logout
document.getElementById('logout-btn').addEventListener('click', () => {
  alert('Logout realizado!');
});