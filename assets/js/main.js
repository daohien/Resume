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
    }
    headers()

    new WOW().init();
}