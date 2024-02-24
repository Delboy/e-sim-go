// Change Background of Header when scrolling & stop bundle footer from scrolling over main footer
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header");
  const scroll = window.scrollY;

  const footer = document.querySelector(".footer");

  const bundleFooter = document.querySelector(".bundle-footer");
  const bundleFooterBtmMargin = 48; /* 48px is the height of the bottom margin of the bundle footer element */

  const footerHeight = footer.offsetHeight;
  const footerHeightString = footerHeight.toString() + 'px';
  
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
    bundleFooter.classList.add("absolute");
    bundleFooter.style.bottom = footerHeightString;
  } else {
    bundleFooter.classList.remove("absolute");
    bundleFooter.style.bottom = "3rem";
  }

  if (scroll > 100) {
    header.classList.add("scrolled");
  }

  if (scroll < 100) {
    header.classList.remove("scrolled");
  }
});

// Toggles Side Nav
const sideNavToggle = () => {
    const status = mainNav.getAttribute("data-open");
    if (status === "false") {
        mainNav.setAttribute("data-open", "true");
    } else {
        mainNav.setAttribute("data-open", "false");
    }
};

const hamburger = document.querySelector(".hamburger");
const exit = document.querySelector(".exit");
const mainNav = document.querySelector(".main-nav");
hamburger.addEventListener("click", sideNavToggle);
exit.addEventListener("click", sideNavToggle);


// Highlights Selected Bundle and updates bundle footer info
const bundles = document.querySelectorAll(".bundle-card");

bundles.forEach((bundle) => {
  bundle.addEventListener("click", () => {
    clearSelectedBundle();

    bundle.setAttribute("data-selected", "true");
    const size = bundle.getAttribute("data-size");
    let price = bundle.getAttribute("data-price");
    const period = bundle.getAttribute("data-period");

    const currencySelected = document
      .querySelector(".dropdown-selected")
      .textContent.charAt(4);

    price = currencyConvertor(price, currencySelected);

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
    toggleOpenStatus(question);
  });
});

// Open Nav dropdowns
const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach((dropdown) => {
  dropdown.addEventListener("click", () => {
    toggleOpenStatus(dropdown);
  });
});

// Updates currency selected
const currencies = document.querySelectorAll(".currency-option");
const selectedCurrency = document.querySelector(".dropdown-selected");
currencies.forEach((currency) => {
  currency.addEventListener("click", () => {
    selectedCurrency.textContent = currency.textContent;

    const symbol = currency.textContent.substring(
      currency.textContent.length - 1
    );
    updateCurrency(symbol);
    sideNavToggle();
  });
});

// Toggles open status on elements data attribute
const toggleOpenStatus = (element) => {
  const openStatus = element.getAttribute("data-open");
  if (openStatus === "true") {
    element.setAttribute("data-open", "false");
  } else {
    element.setAttribute("data-open", "true");
  }
};

// Updates Currency symbol and price on bundles
const updateCurrency = (symbol) => {
  const currencySymbols = document.querySelectorAll(".currency-symbol");
  const bundles = document.querySelectorAll(".bundle-card");

  bundles.forEach((bundle) => {
    const price = bundle.getAttribute("data-price");
    let newPrice = currencyConvertor(price, symbol);

    const childrenPrice = bundle.querySelector(".bundle-price");
    childrenPrice.textContent = symbol + Math.round(newPrice) + ".00";

    const dataSelected = bundle.getAttribute("data-selected");

    if (dataSelected === "true") {
      const footerCost = document.querySelector(".footer-cost");
      footerCost.textContent = Math.round(newPrice);
    }
  });

  currencySymbols.forEach((currencySymbol) => {
    currencySymbol.textContent = symbol;
  });
};

// Convert Currency
const currencyConvertor = (num, symbol) => {
  switch (symbol) {
    case "£":
      num = num;
      return Math.round(num);
    case "€":
      num = num * 1.17;
      return Math.round(num);
    case "$":
      num = num * 1.27;
      return Math.round(num);
    default:
      break;
  }
};
