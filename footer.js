document.addEventListener("DOMContentLoaded",()=>{
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
fineprint.innerHTML = '<p>&copy; 2025 Carla Budar. All rights reserved. Designed and developed with passion and creativity.</p>'
fineprint.classList.add('fineprint')



 

    contactTitle.appendChild(contactTitleH1)

    footerContainer.appendChild(contactTitle);
    footerContainer.appendChild(contactInfo);
    footerContainer.appendChild(fineprint);



    footer.appendChild(footerContainer);

})