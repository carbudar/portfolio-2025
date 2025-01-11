document.addEventListener('DOMContentLoaded', () => {
    function makeHeader(){
        // Select the placeholder for the header
        const headerPlaceHolder = document.querySelector('.headerPlaceHolder');
        
        // Create the header container and its child elements
        const header = document.createElement('div');
        const headerLeft = document.createElement('div');
        const headerCenter = document.createElement('div');
        const headerRight = document.createElement('div');
        const logoImg = document.createElement('img');
        
        // Set classes for styling
        header.classList.add('header');
        headerLeft.classList.add('header-left');
        headerCenter.classList.add('header-center');
        headerRight.classList.add('header-right');
        logoImg.classList.add('logo-img');
        
        // Set content for the left and right sections
        headerLeft.innerHTML = "Carla Budar, 2025 | Design and Technology";
        headerRight.innerHTML = "email instagram home";
        
        // Set the logo image source
        logoImg.src = "assets/logo header yellow.png";
        logoImg.alt = "carbudar logo";
        
        // Append the logo to the center section
        headerCenter.appendChild(logoImg);
        
        // Append the sections to the header container
        header.appendChild(headerLeft);
        header.appendChild(headerCenter);
        header.appendChild(headerRight);
        
        // Append the header to the placeholder in the DOM
        headerPlaceHolder.appendChild(header);

    }

    makeHeader();
    
});
