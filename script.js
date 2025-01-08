document.addEventListener('DOMContentLoaded', () => {
    const backBtn = document.querySelector('.back-button');
    
    if (backBtn) { 
        backBtn.addEventListener('click', () => {
            console.log("Back button clicked");
            history.back();
        });
    } else {
        console.log("Back button not found");
    }
   

     // Select the elements
     const email = document.querySelector('.email');
     const linkedin = document.querySelector('.linkedin');
     const instagram = document.querySelector('.instagram');
 
     // Email Click Event
     email.addEventListener('click', (e) => {
         e.preventDefault(); // Prevent default behavior to make sure we handle it in JS
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
        window.location.href="aboutme.html"
    })

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
const pages = ["content", "content", "content", "content"];  // Function reference for the first element

// Directory navigation
for (let dirNum = 1; dirNum <= pages.length; dirNum++) {
    const container = document.querySelector(`#dirContainer${dirNum}`);
    container.addEventListener('click', () => {
        if (dirNum === 1) {
            // If it's the first button (index 0), perform the scrollToAbout function
            pages[dirNum - 1](); // Calls scrollToAbout function
        } else {
            // For other buttons, perform page redirection
            document.location.href = `${pages[dirNum - 1]}.html`;
        }
    });
}

    // JavaScript to update the existing h3 element with current date and time
    const dynamicTimeElement = document.getElementById('dynamic-time');

    function updateTime() {
        const currentDate = new Date();
        const date = currentDate.toLocaleDateString('en-US');
        const time = currentDate.toLocaleTimeString('en-US');
        dynamicTimeElement.textContent = `New York, NY -  ${date}, ${time}`;
    }

    // Call updateTime immediately to set the current time
    updateTime();

    // Optionally, update the time dynamically every second
    setInterval(updateTime, 1000); // Updates every second

    function scrollToAbout() {
        // Scroll smoothly to the div with the id 'targetDiv'
        document.getElementById('aboutMe').scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }

});
