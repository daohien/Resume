window.onload = function() {
    // header
    function headers() {
        var header = document.querySelector(".header");
        window.addEventListener("scroll", () => {
            var y = window.scrollY;
            if(y > 100){
                header.classList.add("active");
            } else {
                header.classList.remove("active");
            }
        })
        var navbar = document.querySelector(".navbar");
        var menu = document.querySelector(".menu");
        var check = "checkFirst";
        navbar.addEventListener("click", ()=>{
            if(check === "checkFirst") {
                check = "checkSecond";
                navbar.classList.add("active");
                menu.classList.add("active");
            } else if(check === "checkSecond"){
                check = "checkFirst";
                navbar.classList.remove("active");
                menu.classList.remove("active")
            }
        })
    }
    headers()

    new WOW().init();


}