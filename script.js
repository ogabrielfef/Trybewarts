function validateForm() {
    if (document.getElementById('email').value == 'tryber@teste.com' && document.getElementById('senha').value == "123456") {
        return window.alert('Olá, Tryber!')
    }
    return window.alert('Email ou senha inválidos.')
}

document.getElementById('login').addEventListener('click', validateForm);

document.getElementById("agreement").addEventListener("click", function(event){
    if (document.getElementById('agreement').checked == true) {
        document.getElementById("submit-btn").disabled = false;
    }
  });