// Toggles Side Nav
const hamburger = document.querySelector(".hamburger");
const exit = document.querySelector(".exit");
const mainNav = document.querySelector(".main-nav");

const sideNavToggle = () => {
    const status = mainNav.getAttribute("data-open");
    if (status === "false") {
        mainNav.setAttribute("data-open", "true");
        
    } else {
        mainNav.setAttribute("data-open", "false");
    }
};

hamburger.addEventListener("click", sideNavToggle);
exit.addEventListener("click", sideNavToggle);


// Highlights Selected Bundle 
const bundles = document.querySelectorAll('.bundle-card');

bundles.forEach(bundle => {
    bundle.addEventListener('click', () => {
        clearSelectedBundle();
        
        bundle.setAttribute('data-selected', 'true')
        const size = bundle.getAttribute('data-size')
        const price = bundle.getAttribute('data-price')
        const period = bundle.getAttribute('data-period')
        
        setFooterValues(size, price, period)
    })
})

const clearSelectedBundle = () => {
    bundles.forEach(bundle => {
        bundle.setAttribute('data-selected', 'false')
    })
}

// Send Selected bundle info to bundle footer
const setFooterValues = (size, price, period) => {
     const footerSize = document.querySelector('.footer-size')
     const footerPrice = document.querySelector('.footer-cost')
     const footerPeriod = document.querySelector('.footer-period')

    footerSize.textContent = size + "GB";
    footerPrice.textContent = price;
    footerPeriod.textContent = period + " Day Bundle"
}


// Open FAQ question dropdown 
const questions = document.querySelectorAll('.question');

questions.forEach(question => {
    question.addEventListener('click', () => {
        const openStatus = question.getAttribute('data-open');
        if(openStatus === 'true'){
            question.setAttribute('data-open', 'false')
        } else {
            question.setAttribute('data-open', 'true')
        }

    })
})