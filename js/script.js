document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.service-card').forEach(button => {
        button.addEventListener('click', () => {
            const id = button.getAttribute('data-id');

            document.querySelectorAll('.service-card').forEach(btn => {
                btn.classList.remove('active');
            });
            button.classList.add('active');

            document.querySelectorAll('.content').forEach(content => {
                content.classList.add('hidden');
            });
            const contentActive = document.querySelector(`.content[data-id="${id}"]`);
            contentActive.classList.remove('hidden');
        });
    });

    const header = document.querySelector(".header");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 0) {
            header.classList.add("scrolling");
        } else {
            header.classList.remove("scrolling");
        }
    });


    const toggleHeader = document.getElementById("toggle-header");
    const menuHeader = document.getElementById("menu-header");
    toggleHeader.addEventListener("click", () => {
        menuHeader.classList.toggle('active');
        toggleHeader.classList.toggle("active");

    })

});