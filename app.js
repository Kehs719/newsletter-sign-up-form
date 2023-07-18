const input = document.getElementById("email");
const sub = document.getElementById("sub");
const errorText = document.getElementById("error");
const card = document.getElementById("card");
const success = document.getElementById("success");
const emailTxt = document.getElementById("email-txt");
const dismiss = document.getElementById('dismiss');

const regex =simplify it to correct the validation error like this: /^\w+([.-]?\w+)@@[a-zA-Z0-9]+([.-]?[a-zA-Z0-9]+)(\w{2,})+$/;

dismiss.addEventListener("click", () => {
    success.classList.remove('success')
    success.classList.add("none")
    card.classList.remove("none")
    card.classList.add("card")
    input.value="";

})

sub.addEventListener("click", () => {
    ValidateEmail(input.value)
})


function ValidateEmail(mail) {
    if (regex.test(mail)) {

        if (input.classList = "email-error") {
            errorText.classList.remove('error-txt')
            errorText.classList.add('none')

            input.classList.remove('email-error')
            input.classList.add('email')

        }
        card.classList.remove("card")
        card.classList.add("none")
        success.classList.remove('none')
        success.classList.add("success")
        emailTxt.innerHTML = input.value;
        return (true)
    } else {
        errorText.classList.remove('none')
        errorText.classList.add('error-txt')

        input.classList.remove('email')
        input.classList.add('email-error')
    }
}
