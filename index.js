
let buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        alert("تمت إضافة البطاقة إلى السلة!");
    });
});
