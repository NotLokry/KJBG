document.addEventListener("DOMContentLoaded", function () {
    fetch("/img/fotkes/list.json").then(res => res.json()).then(json =>{
        const container = document.getElementById("main_container");
        for (let i = 0; i < json.length; i++) {
            const img = document.createElement("img");
            img.src = "/img/fotkes/"+json[i];
            img.classList.add("photobooth_photo");
            img.style.left = `${Math.random() * (container.clientWidth - 100)}px`;
            img.style.top = `${Math.random() * 10000}px`;
            img.style.transform = `rotate(${Math.random() * 360}deg)`;
    
            container.appendChild(img);
        }
        
    })
    const scrollButton = document.createElement("button");
    scrollButton.innerText = "Back to Top";
    scrollButton.style.position = "fixed";
    scrollButton.style.bottom = "20px";
    scrollButton.style.right = "20px";
    scrollButton.style.padding = "10px 20px";
    scrollButton.style.fontSize = "16px";
    scrollButton.style.cursor = "pointer";
    scrollButton.style.display = "none"; // Hide initially
    scrollButton.style.background = "#333";
    scrollButton.style.color = "#fff";
    scrollButton.style.border = "none";
    scrollButton.style.borderRadius = "5px";

    document.body.appendChild(scrollButton);

    window.addEventListener("scroll", function () {
        if (window.scrollY > 150) {
            scrollButton.style.display = "block";
        } else {
            scrollButton.style.display = "none";
        }
    });

    scrollButton.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});
