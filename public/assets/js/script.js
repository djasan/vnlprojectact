const burgerManager = () => {
    const burger = document.getElementById("burger");
    const navMenu = document.getElementById("navMenu");
    const user = document.getElementById("user");

    burger.addEventListener("click", () => {
        navMenu.classList.toggle("slideRight");
        navMenu.classList.toggle("slideLeft");
        user.classList.toggle("slideRight");
        user.classList.toggle("slideLeft");

        // Ajoutez ou retirez ces lignes en fonction de vos besoins
        document.body.style.overflow = document.body.style.overflow === "hidden" ? "auto" : "hidden";
    });
}

burgerManager();
