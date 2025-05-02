document.querySelectorAll("nav a").forEach(link => {
    link.onclick = (e) => {
        e.preventDefault();
        document.getElementById(link.getAttribute("href").substring(1))
            .scrollIntoView({ behavior: "smooth" });
    };
});
