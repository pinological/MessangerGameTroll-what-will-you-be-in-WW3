function okboomer() {
    var guy = ["Photoguy", "badass army guy", "confuse guy", "bush guy", "cricket guy", "tea lover", "guy with elite pass", "melee weapons guy", "guy who stole lran weapons", "chad"];
    let getran = function(start, range) {
        let getrand = Math.floor((Math.random() * range) + start);
        while (getrand > range) {
            getrand = Math.floor((Math.random() * range) + start);
        }
        return getrand;
    }
    console.log("ok boomer");
    console.log(getran(1, 10));
    let numb = getran(1, 10);
    document.getElementById("maintext").innerHTML = "You will be that " + " " + guy[(numb - 1)];
    document.getElementById("main").innerHTML = "<img src=" + "/photo/" + numb + ".jpg>";
}