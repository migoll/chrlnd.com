document.addEventListener("DOMContentLoaded", () =>{
    const accordionHeaders = document.querySelectorAll(".accordion-header");

    accordionHeaders.forEach(header =>{
        header.addEventListener("click", () => {
            const item = header.nextElementSibling;

            item.classList.toggle("show");

            const icon = header.querySelector("i");
            if (item.classList.contains("show")) {
                icon.classList.remove("fa-circle-plus");
                icon.classList.add("fa-circle-minus");
                icon.classList.add("active-icon");
            } else {
                icon.classList.remove("fa-circle-minus");
                icon.classList.add("fa-circle-plus")
                icon.classList.remove("active-icon");
            }

        })
    })
})