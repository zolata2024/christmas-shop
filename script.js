let openModalBts = document.querySelectorAll(".open-modal")
let modal = document.querySelector(".modal")
let crossModal = document.querySelector(".close-modal")

openModalBts.forEach(btn => {
    btn.addEventListener("click", () => modal.classList.add("active"))
})

crossModal.addEventListener("click", () => modal.classList.remove("active"))

let token = "7880605502:AAH24U8qWy1Z0GDzEYYSnRQ-GqmPv24PzIU"
let chatid = "-1002339936600"
let url = `https://api.telegram.org/bot${token}/sendMessage`

let form = document.querySelector("form")
let allInputs = document.querySelectorAll("input")
let select = document.querySelector("select")

form.addEventListener("submit", (event) => {
    event.preventDefault()

    let message = `New order:\n\nFull Name: ${allInputs[0].value}\nPhone: ${allInputs[1].value}\nAdress: ${allInputs[2].value}\nBox: ${select.value}`

    let params = { chat_id: chatid, text: message }

    fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(params)
    }).then(()=>{
        alert("Order has been Accepted")
        location.reload()
    })
})