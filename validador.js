
function senhavalidada () {
    let senha = document.getElementById('txtsenha').value
    let regex = /[a-z]/
    let regexM = /[A-Z]/
    let regexNumber = /[1-9]/
    let regexCaractere = /[!-*]/
    if (regex.test(senha) && regexM.test(senha) && regexNumber.test(senha) && regexCaractere.test(senha) && senha.length >= 8) {
        document.querySelector('.contem').innerHTML =
        `<ul>
            <li>Pelo menos 8 caracteres &#10004</li>
            <li>Pele menos 1 número &#10004</li>
            <li>Pelo menos 1 letra minuscula &#10004</li>
            <li>Pelo menos 1 caractere Especial &#10004</li>
            <li>Pelo menos 1 letra Maiúscula &#10004</li>
        </ul>`
    } else {
        alert("Senha Invalida, por favor verifique se está seguindo todas as diretrizes de segurança descritas abaixo !")
    }
}
