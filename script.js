const form = document.getElementById("signInForm")
const userinput = document.getElementById("username")
const userpassword = document.getElementById("password")
const confirmPassword = document.getElementById("confirmPassword")
const TOS = document.getElementById("agreeToTos")
const errorMessage = document.getElementById('errorMessage')

form.addEventListener("submit", e => {
  e.preventDefault()
  errorMessage.innerHTML = ''

  if (userinput.value === "") {
    errorMessage.innerHTML += 'Enter a valid UserName<br>'
  }

  if (userpassword.value === "") {
    errorMessage.innerHTML += 'Incorrect password<br>'
  }

  if (confirmPassword.value === "") {
    errorMessage.innerHTML += 'Please confirm your password<br>'
  }

  if (!TOS.checked) {
    errorMessage.innerHTML += 'Please agree to the TOS<br>'
  }

  if (userpassword.value !== confirmPassword.value) {
    errorMessage.innerHTML += 'Passwords don\'t match'
    errorMessage.style.color = "red"
  }
})
