const header = document.querySelector("header");
const frontPage = document.querySelector(".front-page")

const frontPageOptions = { }

const frontPageObserver = new IntersectionObserver(function(
    entries, 
    frontPageOptions
) {
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            header.classList.add('nav-scrolled');
        }
    })
}, 
frontPageOptions);

frontPageObserve.observe(frontPage);