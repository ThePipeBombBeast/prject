function clicky() {
    var x = document.getElementById("loogin");
    if (x.className.indexOf("logindown") == -1) {
        x.className += " logindown";
    } else {
        x.className = x.className.replace(" logindown", "");
    }
}