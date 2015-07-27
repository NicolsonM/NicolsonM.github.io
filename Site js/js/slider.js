// JavaScript source code
var imgSldr = new Object();
var slider = document.getElementById("slider");
imgSldr.leftS = document.getElementById("buts1");
imgSldr.rightS = document.getElementById("buts2");
leftS.addEventListener("click",
    function () {
        slider.style.left = "960px";
    }, false
    );
rightS.addEventListener("click",
    function () {
        slider.style.right = "960px";
    }, false
    );
