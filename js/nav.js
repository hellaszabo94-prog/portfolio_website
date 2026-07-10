document.addEventListener("DOMContentLoaded",() => {
    const btn = document.querySelector(".mobile button.navRwd");
    btn.addEventListener("click",() => {
        const navliste = document.querySelector(".mobile  ul");
        navliste.classList.toggle("visible");
    });
    
    const navelemente = document.querySelectorAll(".mobile li");
    for(let i=0; i<navelemente.length; i++) {
        navelemente[i].addEventListener("click",() => {
            const navliste = document.querySelector(".mobile  ul");
            navliste.classList.remove("visible");
        });
    }
});