// JavaScript source code
window.onload = function () {
    var slider = document.getElementById("slider");
   prev = document.getElementById("buts1");
    next = document.getElementById("buts2");
    prev.addEventListener("click",
        function () {
            slider.style.left = "960px";
        }, false
        );
    next.addEventListener("click",
        function () {
            slider.style.right = "960px";
        }, false
        );

}
