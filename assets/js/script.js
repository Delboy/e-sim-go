// Change Background of Header when scrolling & stop bundle footer from scrolling over main footer
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");
  const scroll = window.scrollY;

  const footer = document.querySelector(".footer");

  const bundleFooter = document.querySelector('.bundle-footer')
  const bundleFooterBtmMargin = 48; /* 48px is the height of the bottom margin of the bundle footer element */

  const footerHeight = footer.offsetHeight;
  const windowHeight = window.innerHeight;
  
  const body = document.body,
    html = document.documentElement;

  const pageHeight = Math.max(
    body.scrollHeight,
    body.offsetHeight,
    html.clientHeight,
    html.scrollHeight,
    html.offsetHeight
  );

  if (
    scroll + windowHeight >
    pageHeight - footerHeight + bundleFooterBtmMargin
  ) {
    bundleFooter.classList.add('absolute')
  } else {
    bundleFooter.classList.remove('absolute')
  }

  if (scroll > 100) {
    header.classList.add("scrolled");
  }

  if (scroll < 100) {
    header.classList.remove("scrolled");
  }
});

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
const bundles = document.querySelectorAll(".bundle-card");

bundles.forEach((bundle) => {
  bundle.addEventListener("click", () => {
    clearSelectedBundle();

    bundle.setAttribute("data-selected", "true");
    const size = bundle.getAttribute("data-size");
    const price = bundle.getAttribute("data-price");
    const period = bundle.getAttribute("data-period");

    setFooterValues(size, price, period);
  });
});

const clearSelectedBundle = () => {
  bundles.forEach((bundle) => {
    bundle.setAttribute("data-selected", "false");
  });
};

// Send Selected bundle info to bundle footer
const setFooterValues = (size, price, period) => {
  const footerSize = document.querySelector(".footer-size");
  const footerPrice = document.querySelector(".footer-cost");
  const footerPeriod = document.querySelector(".footer-period");

  footerSize.textContent = size + "GB";
  footerPrice.textContent = price;
  footerPeriod.textContent = period + " Day Bundle";
};

// Open FAQ question dropdown
const questions = document.querySelectorAll(".question");

questions.forEach((question) => {
  question.addEventListener("click", () => {
    const openStatus = question.getAttribute("data-open");
    if (openStatus === "true") {
      question.setAttribute("data-open", "false");
    } else {
      question.setAttribute("data-open", "true");
    }
  });
});
