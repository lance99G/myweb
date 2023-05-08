function toggleNavbar() {
    var navbar = document.getElementById("navbar");
    if (navbar.classList.contains("hidden")) {
        navbar.classList.remove("hidden");
    } else {
        navbar.classList.add("hidden");
    }
}