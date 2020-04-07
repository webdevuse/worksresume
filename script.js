document.addEventListener(
    "DOMContentLoaded",
    function() {

    }

);
let n = 0;


function but() {
    if (n == 0) {
        document.getElementById("mystyle").href = "dark-theme/style.css";
        n++;
    } else if (n == 1) {
        document.getElementById("mystyle").href = "light-theme/style.css";
        n--;
    }
}