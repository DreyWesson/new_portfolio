export default function aboutTabs() {
    const about = document.querySelector("#about"),
        tabs = document.querySelector(".about-tabs");
    tabs.addEventListener("click", (e) => {
        if (
            e.target.classList.contains("tab-item") &&
            !e.target.classList.contains("active")
        ) {
            const target = e.target.getAttribute("data-target");
            tabs.querySelector(".active").classList.remove(
                "outer-shadow",
                "active"
            );
            e.target.classList.add("active", "outer-shadow");
            about
                .querySelector(".tab-content.active")
                .classList.remove("active");
            about.querySelector(target).classList.add("active");
        }
    });
}
