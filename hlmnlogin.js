var dialog = document.querySelector("dialog");

document.querySelector("#open-popup").onclick = function() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username && password) {
        dialog.showModal();
    } 
};


document.querySelector(".IYA-btn").onclick = function() {
    dialog.close();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if(username ==="user"&& password==="halo123"){
        window.location.href = 'g.html';
    } else alert ("akun ini tidak ditemukan");
};

document.querySelector("#acucu-btn").onclick = function() {
    dialog.close();
    alert("anda tidak login");
}