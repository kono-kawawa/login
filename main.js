
    var id = document.querySelector('#id');
    id.addEventListener("focusout", checkId);
    var error = document.querySelectorAll('.error_next_box');

function checkId() {
    var idPattern = /[a-zA-Z0-9_-]{5,20}/;
    if(id.value === "") {
        error[0].innerHTML = "필수 정보입니다.";
        error[0].style.display = "block";
    } else if(!idPattern.test(id.value)) {
        error[0].innerHTML = "형식이 다릅니다";
        error[0].style.display = "block";
    } else {
        error[0].innerHTML = "pass";
        error[0].style.display = "none";
    }
}
