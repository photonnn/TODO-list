const mobileBtn = document.querySelector(".mobile");
mobileBtn.addEventListener('click', () => {
    const sidebar = document.querySelector("#sidebar");
    if (sidebar.style.display == "flex") {
        sidebar.style.display = "none";
    } else {
        sidebar.style.display = "flex";
        mobileBtn.style.display = "none";
    }
});

const sidebar = document.querySelector("#sidebar");
window.addEventListener('resize', () => {
    if (sidebar.style.display == "none" && window.innerWidth > "1024") {
        sidebar.style.display = "flex";
    }
})

const content = document.querySelector("#content");
content.addEventListener("click", () => {
    if (window.innerWidth < "1024") {
        sidebar.style.display = "none";
        mobileBtn.style.display = "initial";
    }
})