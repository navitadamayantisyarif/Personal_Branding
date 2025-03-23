document.addEventListener("DOMContentLoaded", function() {
    console.log("Website Personal Branding siap!");
    
    const sections = document.querySelectorAll("section");
    
    window.addEventListener("scroll", function() {
        sections.forEach(section => {
            let position = section.getBoundingClientRect();
            if(position.top < window.innerHeight - 100 && position.bottom > 100) {
                section.style.backgroundColor = "#e8f0fe";
            } else {
                section.style.backgroundColor = "white";
            }
        });
    });
});
