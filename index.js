const qrCodeElement = document.querySelector(".qr-code");
const btn = document.querySelector("button");
const input = document.querySelector("input");

btn.addEventListener("click", qrCodeGenerator);

input.addEventListener("keydown", (event)=>{
    if(event.key == "Enter"){
        qrCodeGenerator();
    }
})

function qrCodeGenerator(){
    if(input.value=="") alert("Please enter Text or URL!");
    else{
        qrCodeElement.innerHTML="";
        const text = input.value;
        const qrCode  = new QRCode(qrCodeElement, {
            text: text,
            width: 200,
            height: 200,
            colorDark : "#000000",
            colorLight : "#ffffff",
            correctLevel : QRCode.CorrectLevel.H
        })
    }
};