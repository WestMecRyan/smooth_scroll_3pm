const scrollLinks = document.querySelectorAll('.scroll-link');
scrollLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const id = e.target.getAttribute('href').slice(1);
        const element = document.getElementById(id);
        const vhInPixels = window.innerHeight * 0.20;
        let position = element.offsetTop - vhInPixels;

        window.scrollTo({
            left: 0,
            top: position,
            // behavior: "smooth"
        })
    })
})