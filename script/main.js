// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }
            form.classList.add('was-validated')
        }, false)
    })
})()

/*=============== TELEGRAM BOT ===============*/
let form = document.querySelector("#contact-form");
let contactName = document.querySelector("#validationName");
let contactLastName = document.querySelector("#validationLastName");
let contactPhone = document.querySelector("#validationPhoneNumber");
let contactLocation = document.querySelector("#validationLocation");
let check = document.querySelector("#invalidCheck");
let toast = document.querySelector(".toast");

// FOR SEND BOT
let bot = {
    TOKEN: "6595201002:AAEhyP9yPVomWKZNO9xHzjyZOpeoNqGomO4",
    chatID: "-1001999807098",
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let name = document.getElementById("validationName").value;
    let lastName = document.getElementById("validationLastName").value;
    let phone = document.getElementById("validationPhoneNumber").value;
    let location = document.getElementById("validationLocation").value;

    let sendMessage = `Mijoz %0A Ismi: ${name} %0A Familiyasi: ${lastName} %0A Telefon raqami: ${phone} %0A Manzili: ${location}`


    if (contactName.value == "" || contactLastName.value == "" || contactPhone.value == "" || contactLocation.value == "") {
        alert("Bosh joy to'ldirilmagan!");
    } else if (!check.checked) {
        alert("Rozilik tugmasi bosilmagan!")
    } else {
        fetch(`https://api.telegram.org/bot${bot.TOKEN}/sendMessage?chat_id=${bot.chatID}&text=${sendMessage}`, {
            method: "GET"
        })
            .then(success => {
                contactName.value = "";
                contactLastName.value = "";
                contactPhone.value = "";
                contactLocation.value = "";
                toast.classList.add("show");
                setTimeout(function () {
                    toast.classList.remove("show");
                }, 5000);
            }, error => {
                alert("Xabaringiz jo'natilmadi, iltimos keginroq urunib ko'ring!");
                contactName.value = "";
                contactLastName.value = "";
                contactPhone.value = "";
                contactLocation.value = "";
            })
    }
})