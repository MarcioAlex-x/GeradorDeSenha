
let sliderElement = document.getElementById("slider")
let buttonElement = document.getElementById("button")

let sizePassword = document.getElementById("valor")
let password = document.getElementById("password")

let containerPassword = document.getElementById("container-password")

let charset = "abcdefghijklmnopqrstuvxywzABCDEFGHIJKLMNOPQRSTUVXYWZ0123456789"

let novaSenha = ''

sizePassword.innerHTML = sliderElement.value

slider.oninput = function(){
    sizePassword.innerHTML = this.value
}

function generatePassword(){
    let pass = ''
    for(let i = 0, n=charset.length; i < sliderElement.value; i++){
        pass += charset.charAt(Math.floor(Math.random() * n))
    }
    password.innerHTML = pass
    containerPassword.classList.remove("hide")
    novaSenha = pass

}

function copyPassword(){
    navigator.clipboard.writeText(novaSenha)
    alert("Senha copiada")
    
}

