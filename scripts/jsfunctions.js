window.onload = function () {

  //Variables used for top banner slider
  let sliderImages = document.querySelectorAll(".slide"),
    arrowLeft = document.querySelector("#arrow-left"),
    arrowRight = document.querySelector("#arrow-right"),
    current = 0;

  //Clear all images
  function reset() {
    for (let i = 0; i < sliderImages.length; i++) {
      sliderImages[i].style.display = "none";
    }
  }

  //Initialize the slider of top banner
  function startSlide() {
    reset();
    sliderImages[0].style.display = "block";
  }

  //Sliding left animation of top banner
  function slideLeft() {
    reset();
    sliderImages[current - 1].style.display = "block";
    current--;
  }

  //Sliding right animation of top banner
  function slideRight() {
    reset();
    sliderImages[current + 1].style.display = "block";
    current++;
  }

  //Event listener of Left arrow click
  arrowLeft.addEventListener("click", function () {
    if (current === 0) {
      current = sliderImages.length;
    }
    slideLeft();
  });

  //Event listener of Right arrow click
  arrowRight.addEventListener("click", function () {
    if (current === sliderImages.length - 1) {
      current = -1;
    }
    slideRight();
  });

  //Call of start slide when Webpage loads
  startSlide();

  //Variables used in the navigation bar for when it is in smaller form and uses the responsive mobile menu
  const navbar = document.querySelector(".topnav");
  const menuBtn = document.querySelector(".menu-btn");
  const closeBtn = document.querySelector(".cancel-btn");

  //With help of css opens side menu
  function openMenu() {
    navbar.classList.add("show");
    menuBtn.classList.add("hide");
  }

  //With help of css closes side menu
  function closeMenu() {
    navbar.classList.remove("show");
    menuBtn.classList.remove("hide");
  }

  //When scrolling - calls the scroll animation function.
  window.onscroll = function () { scrollAnimation() };

  //Function which makes the top navigation bar sticky and become opaque
  function scrollAnimation() {
    this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
  }

  //Event listener for Menu Button
  menuBtn.addEventListener("click", function () {
    openMenu();
  });

  //Event listener for Close Button
  closeBtn.addEventListener("click", function () {
    closeMenu();
  });


  //Variables used for increasing text size
  var increasedSize = false;
  const textSize = document.querySelector(".textsize");

  //Sets the boolean value for whether or not text size is increased or not
  function setIncreasedSize(value) {
    increasedSize = value;
  }

  //Event listener for when increased text size button is clicked
  textSize.addEventListener("click", function () {
    increaseTextSize(increasedSize);
  });

  //Function that increases the text size of all text in body of web page. 
  //Changes the colour of the icon to ensure that user knows text size has been increased.
  function increaseTextSize(increasedSize) {
    if (increasedSize == false) {
      setIncreasedSize(true);
      document.getElementById("maincontent").style.fontSize = "x-large";
      document.getElementById("textsizeparent").classList.add("increased");
    }
    else {
      setIncreasedSize(false);
      document.getElementById("maincontent").style.fontSize = "initial";
      if (getCookie("preferredContrast") == 'css/preferred.css') {
        document.getElementById("textsizeparent").classList.remove("increased");
      }
      else {
        document.getElementById("textsizeparent").classList.remove("increased");
      }
    }
  }

  //Calls checkCookie function when webpage laods.
  //Cookie stores the users preferred colour style.
  checkCookie();
};

//Changes the secondary style sheet of webpage between the preferred and alternate css file
//This changes the colour scheme of the webpage to give higher contrast ratio for users with visual impairment
function toggleTheme() {
  var theme = document.getElementsByClassName('stylesheet')[0];

  // Change the value of href attribute  
  // to change the css sheet.
  if (theme.getAttribute('href') == 'css/preferred.css') {
    theme.setAttribute('href', 'css/alternate.css');
    createCookie("preferredContrast", 'css/alternate.css', 7);
  } else {
    theme.setAttribute('href', 'css/preferred.css');
    createCookie("preferredContrast", 'css/preferred.css', 7);
  }
}

//Sets the theme of the website when webpage loads based on value from cookie
function toggleThemeOnLoad(themeType) {
  var theme = document.getElementsByClassName('stylesheet')[0];

  theme.setAttribute('href', themeType);
}

//Creates or alters the cookie when the change in website style is made
//Allows for style to be applied consistently on all web pages of the website
//Cookie is valid for one day
function createCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/"
}

//Function which gets the value stored in the cookie if there is a cookie
function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

//Checks if cookie exists and what the stored value is - loads storeds value
//If cookie does not exist - loads preferred css file.
function checkCookie() {
  let themeType = getCookie("preferredContrast");
  if (themeType != '') {
    toggleThemeOnLoad(themeType);
  }
  else {
    toggleThemeOnLoad('css/preferred.css')
  }
}