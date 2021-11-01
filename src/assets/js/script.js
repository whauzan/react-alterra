(function () {
    var forms = document.querySelectorAll(".needs-validation");
    Array.prototype.slice.call(forms).forEach(function (form) {
        form.addEventListener(
            "submit",
            function (event) {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add("was-validated");
            },
            false
        );
    });
})();

function passValues() {
    var fullname = document.getElementById("fullname").value;
    var email = document.getElementById("email").value;
    var phonenumber = document.getElementById("phone-number").value;
    var nationallity = document.getElementById("nationality").value;
    var message = document.getElementById("message").value;

    localStorage.setItem("namavalue", fullname);
    localStorage.setItem("emailvalue", email);
    localStorage.setItem("phonevalue", phonenumber);
    localStorage.setItem("nationalvalue", nationallity);
    localStorage.setItem("messagevalue", message);
    return false;
}

function deleteStorage() {
    localStorage.clear();
    location.href = './home.html';
}