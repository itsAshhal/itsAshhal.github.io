
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".navmenu a");

window.addEventListener("scroll", () => {
    let scrollY = window.pageYOffset;

    sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100; // offset for sticky header
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id");

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            navLinks.forEach((link) => {
                link.classList.remove("active");
                if (link.getAttribute("href") === `#${sectionId}`) {
                    link.classList.add("active");
                }
            });
        }
    });
});

document.querySelectorAll(".navmenu a").forEach(link => {
    link.addEventListener("click", function () {
        document.querySelectorAll(".navmenu a").forEach(el => el.classList.remove("active"));
        this.classList.add("active");
    });
});


