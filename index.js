const passwordLength = 10
const includeLowercase = true
const includeUppercase = true
const includeNumbers = true
const includeSymbols = true

const result = document.getElementById('result')


function generatePassword
(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols){
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz'
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const numberChars = '0123456789'
    const symbolChars = '!@#$%&*+_-{}[]'

    let allowedChars = ''
    let password = ''

    allowedChars += includeLowercase ? lowercaseChars : ''
    allowedChars += includeUppercase ? uppercaseChars : ''
    allowedChars += includeNumbers ? numberChars : ''
    allowedChars += includeSymbols ? symbolChars : ''

    if(length <= 0) {
        return "Give a valid password"
    }

    if(allowedChars.length === 0) {
        return `Select a set of characters`
    }

    for (let i = 0; i < length; i++){
        const randomIndex = Math.floor(Math.random() * allowedChars.length)
        password += allowedChars[randomIndex]
    }

    result.textContent = password

}

function activatePassword(){
    const password = generatePassword
(passwordLength, includeLowercase, includeUppercase, includeNumbers, includeSymbols)
    return password
}