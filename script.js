const apiUrl = "https://api.qrserver.com/v1/create-qr-code/";

const text = document.getElementById("text");
const sizes = document.getElementById("sizes");
const CraftQRCodeBtn = document.getElementById("CraftQRCodeBtn");
const downloadBtn = document.getElementById("downloadBtn");

let size = sizes.value;
const container = document.getElementById("container");

CraftQRCodeBtn.addEventListener('click',(e) =>{
    e.preventDefault();
    isEmptyInput();
    // CraftQRCode();
});
sizes.addEventListener('change', (e) => {
    size = e.target.value;
    if(text.value.length > 0){
   CraftQRCode();
    }
    
});

downloadBtn.addEventListener('click', () => {
    let img = document.querySelector('#container img');
    if (img) {
        downloadBtn.setAttribute("href", img.getAttribute('src'));
        downloadBtn.setAttribute("download", "qrcode.png");
    }
});

function isEmptyInput() {
    if (text.value.length > 0) {
        // return true;
        CraftQRCode();
    } else {
        alert("Enter Valid Name");
        // return false;
    }
}

function CraftQRCode() {
    container.innerHTML = "";
    const url = `${apiUrl}?size=${size}x${size}&data=${encodeURIComponent(text.value)}`;
    const img = document.createElement("img");
    img.src = url;
    container.appendChild(img);

}
