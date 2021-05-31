function menuTransition()
{
    const menu = document.querySelector(".menu");
    const navLink = document.querySelector(".links");

    menu.addEventListener("click", () => {
        
        menu.classList.toggle('toggle');
        navLink.classList.toggle("link-active");

    });
}
menuTransition();