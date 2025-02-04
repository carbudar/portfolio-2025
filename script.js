document.addEventListener('DOMContentLoaded', () => {

    makeHeader();
    makeFooter()
    backBtn();
    floorDirectory()
    DateAndTime();
    backToTop();
    window.addEventListener("scroll", changeBackgroundColor);


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
        header.style.fontSize = "100%"
        header.style.fontWeight = "100%"
        
        // Set content for the left and right sections
        headerLeft.innerHTML = "Carla Budar, 2025 | Design and Technology";
        

        
        
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
    function makeFooter(){
        const footer = document.querySelector('.footer')
    footer.classList.remove('footer');
    
    //div container
        const footerContainer = document.createElement('div')
        footerContainer.classList.add('footer')
    
    //left grid
        const contactTitle = document.createElement('div')
        const contactTitleH1 = document.createElement('h1')
        contactTitleH1.innerHTML= "Contact"
        contactTitle.classList.add('contact-title')
    
    //right grid
        const contactInfo = document.createElement('div');
        const contactDetails = [
            { text: "Email: budac616@newschool.edu", link: "mailto:budac616@newschool.edu" },
            { text: "LinkedIn: Carla Budar", link: "https://www.linkedin.com/in/carlabudar" },
            { text: "Instagram: @carbudar", link: "https://www.instagram.com/carbudar" }
        ];
    
        // Create and append h2 elements with links dynamically
        contactDetails.forEach(detail => {
            const h2 = document.createElement('h2');
            
            const a = document.createElement('a');
            a.href = detail.link;
            a.innerHTML = detail.text;
            a.target = "_blank"; 
    
            // Append the anchor to h2
            h2.appendChild(a);
            
            // Append the h2 to contactInfo
            contactInfo.appendChild(h2);
        });
    
        contactInfo.classList.add('contact-info');
    
    //fine print
    const fineprint = document.createElement('div')
    fineprint.innerHTML = '<p>&copy; 2025 Carla Budar. All rights reserved. Designed and developed with 🤎 somewhere in New York City.</p>'
    fineprint.classList.add('fineprint')
    
        contactTitle.appendChild(contactTitleH1)
        footerContainer.appendChild(contactTitle);
        footerContainer.appendChild(contactInfo);
        footerContainer.appendChild(fineprint);
    
    
    
        footer.appendChild(footerContainer);
    }
    function backBtn (){
        const backBtn = document.querySelector('.backBtn')
        if (backBtn) { 
            backBtn.addEventListener('click', () => {
                console.log("Back button clicked");
                history.back();
            });
        } else {
            console.log("Back button not found");
        }
    }

    function contactBtn (){
          // Select the elements
          const email = document.querySelector('.email');
          const linkedin = document.querySelector('.linkedin');
          const instagram = document.querySelector('.instagram');
      
          // Email Click Event
          email.addEventListener('click', (e) => {
              e.preventDefault();
              window.location.href = 'mailto:budac616@newschool.edu';
          });
      
          // LinkedIn Click Event
          linkedin.addEventListener('click', (e) => {
              e.preventDefault();
              window.open("https://www.linkedin.com/in/carlabudar/", "_blank");
          });
      
          // Instagram Click Event
          instagram.addEventListener('click', (e) => {
              e.preventDefault();
              window.open("https://www.instagram.com/carbudar/", "_blank");
          });
  
      
          const nameBtn = document.querySelector('#nameBtn');
          nameBtn.addEventListener('click',()=>{
              scrollToAbout()
          })
    }

    contactBtn()

    function floorDirectory(){ //directory button
        const floors = document.querySelectorAll('.directory > div[id^="dirContainer"]');
        // Iterate over each container
        floors.forEach((dir) => {
            const activeImage = dir.querySelector('.active');
            const inactiveImage = dir.querySelector('.inactive');  

            // Find the corresponding directory-title dynamically based on the id
            const directoryTitle = dir.querySelector('.directory-title' + dir.id.slice(-1));

            directoryTitle.classList.add('directoryTitleStyle')

            // Mouseover: make active image visible, scale up, and add specific text over the image
            dir.addEventListener('mouseover', () => {
                activeImage.classList.add('visible');
                inactiveImage.classList.add('hide');
                directoryTitle.style.display = 'block'; // Show the title on hover
            });

            // Mouseout: reset to inactive image, revert scale, and remove text
            dir.addEventListener('mouseout', () => {
                activeImage.classList.remove('visible');
                inactiveImage.classList.remove('hide');
                directoryTitle.style.display = 'none'; // Hide the title on mouseout
            });

        
        });

        // Loop through each container and set z-index based on its position
        floors.forEach((container, index) => {
            container.style.zIndex = floors.length - index; // Reverse the order for z-index
        });
    const pages = [scrollToAbout,
                    "content.html?section=product",
                    "content.html?section=cc",
                    "content.html?section=website"]  // Function reference for the first element

    // Directory navigation
    for (let dirNum = 1; dirNum <= pages.length; dirNum++) {
        const container = document.querySelector(`#dirContainer${dirNum}`);
        container.addEventListener('click', () => {
            const action = pages[dirNum - 1];
            if (typeof action === "function") {
                // If the action is a function, execute it (e.g., scrollToAbout)
                action();
            } else if (typeof action === "string") {
                // Redirect to the page with the query parameter
                window.location.href = action; // Use the URL string directly
            }
        });


    }

    }
    function DateAndTime(){
        const dynamicTime = document.querySelector('#dynamic-time');

        const dynamicTimeElement = document.createElement('h3');
        dynamicTime.appendChild(dynamicTimeElement);

    function updateTime() {
        const currentDate = new Date();
        const options = {
            timeZone: 'America/New_York', // Force New York timezone
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
        };

        dynamicTimeElement.textContent = `New York, NY - ${new Intl.DateTimeFormat('en-US', options).format(currentDate)}`;
    }

    updateTime();

    setInterval(updateTime, 1000);
    }
    function scrollToAbout() {
        // Scroll smoothly to the div with the id 'targetDiv'
        document.getElementById('aboutMe').scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
    function changeBackgroundColor() {
        const pageContainer = document.querySelector('.page-container');
        const blurEffect = document.querySelector('.blurEffect')
        const header = document.querySelector('.header')
        const logoImage = document.querySelector(".logo-img");

        const scrollTop = window.scrollY; // Vertical scroll position
        const docHeight = document.documentElement.scrollHeight; // Total height of the document
        const windowHeight = window.innerHeight; // Height of the viewport

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

    }
    function backToTop() {
        // Select both back-to-top buttons
        const backToTop = document.querySelector('.backToTop');
    
        // Add the scroll-to-top event for .backToTop
        if (backToTop) {
            backToTop.addEventListener('click', () => {
                window.scrollTo({
                    top: 0, // Scroll to the top of the page
                    behavior: 'smooth' // Smooth scrolling
                });
            });
        }
    }
    

    
   
}); //DOMContentLoaded
