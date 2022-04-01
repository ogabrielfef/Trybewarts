function validateForm() {
    if (document.getElementById('email').value == 'tryber@teste.com' && document.getElementById('senha').value == "123456") {
        return window.alert('Olá Tryber')
    }
    return window.alert('Email ou senha inválidos.')
}

document.getElementById('login').addEventListener('click', validateForm)