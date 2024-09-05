const observer = new IntersectionObserver(
    function (entries) {
        entries.forEach((entry) => {
            if (entry.isIntersecting === true) {
                entry.target.classList.add("scroll-show")
            } else {
                entry.target.classList.remove("scroll-show")
            }
        })
    },
    { threshold: [0.45] }
)

const elements = document.querySelectorAll(".scroll-animation")

elements.forEach((entry) => {
    observer.observe(entry)
})

const elements2 = document.querySelectorAll(".scroll-animation2")

elements2.forEach((entry) => {
    observer.observe(entry)
})