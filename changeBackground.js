window.addEventListener("scroll", changeBackgroundColor);
function changeBackgroundColor() {
    console.log("Function is running!");

    const pageContainer = document.querySelector('.landing-page-container');
    const blurEffect = document.querySelector('.blurEffect')
    const header = document.querySelector('.header')
    const logoImage = document.querySelector(".logo-img");

    const scrollTop = window.scrollY; // Vertical scroll position
    const docHeight = document.documentElement.scrollHeight; // Total height of the document
    const windowHeight = window.innerHeight; // Height of the viewport

    console.log("Document Height:", docHeight);
    console.log("Window Height:", windowHeight);
    console.log("Scroll Top:", scrollTop);

    // Calculate percentage of page scrolled and round it down
    const scrollPercentage = Math.floor((scrollTop / (docHeight - windowHeight)) * 100);


    if (scrollPercentage <= 30) { //background color white default
        pageContainer.style.backgroundColor = "#F9F7F2"
        header.style.backgroundColor = "#126889"
        blurEffect.style.opacity = "0"
        header.style.color = "#EDED14"
        logoImage.src = "assets/logo header yellow.png";
        
    } else{//background color change to teal
            pageContainer.style.backgroundColor = "#126889"
            header.style.backgroundColor = "#F9F7F2"
            header.style.color = "#126889"
            logoImage.src = "assets/logo header teal.png";
    }

    if (scrollPercentage >= 40) {
        blurEffect.style.opacity = "10" , 1000
    }
    console.log(scrollPercentage)

}