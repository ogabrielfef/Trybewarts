function validateForm() {
  const getInputEmail = document.getElementById('email').value;
  const getInputSenha = document.getElementById('senha').value;
  if (getInputEmail === 'tryber@teste.com' && getInputSenha === '123456') {
    return window.alert('Olá, Tryber!');
  }
  return window.alert('Email ou senha inválidos.');
}

document.getElementById('login').addEventListener('click', validateForm);

document.getElementById('agreement').addEventListener('click', () => {
  if (document.getElementById('agreement').checked) {
    document.getElementById('submit-btn').disabled = false;
  }
});
