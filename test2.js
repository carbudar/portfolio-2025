const doors = [
    { detail: "assets/doors/door white detail.png", blank: "assets/doors/door white blank.png", color: "#F8F6F1" },
    { detail: "assets/doors/door green detail.png", blank: "assets/doors/door green blank.png", color: "#353F30" },
    { detail: "assets/doors/door pink detail.png", blank: "assets/doors/door pink blank.png", color: "#F7D3FB" },
    { detail: "assets/doors/door teal detail.png", blank: "assets/doors/door teal blank.png", color: "#306685" },
];
function createButton(size, buttonText, className, highlightColor,color){
    const buttonPlaceHolder = document.querySelector(`.${className}`);
    if (!buttonPlaceHolder) {
        console.error(`Placeholder for button with class "${className}" not found.`);
        return;
      }

    //button is container for flex
    const button = document.createElement('div');
    button.classList.add('button');
    
    //button expand is the moving animation element
    const buttonExpand = document.createElement('div');
    buttonExpand.classList.add('button-expand')

    //button content is text title
    const buttonContent = document.createElement('div')
    const buttonTitle = document.createElement(size);
    buttonTitle.innerHTML = buttonText

    buttonContent.appendChild(buttonTitle)
    buttonContent.classList.add('buttonContent')

    button.appendChild(buttonExpand)
    button.appendChild(buttonContent)
    buttonPlaceHolder.appendChild(button);

    buttonContent.style.color = color

    buttonContent.addEventListener('mouseover',()=>{
        const buttonContentRect = buttonContent.getBoundingClientRect();
        buttonExpand.style.width = `${buttonContentRect.width}px`
        buttonExpand.style.height = `${buttonContentRect.height}px`
        buttonExpand.style.backgroundColor = highlightColor
        buttonContent.style.color = "#126889"
        console.log("mouse over button")
    })

    buttonContent.addEventListener('mouseout',()=>{
        buttonExpand.style.width = "0"
        console.log("mouse outside button")
        buttonContent.style.color = color
    })
}



createButton("h1","Back to Top", "backToTop","#EDED14")
createButton("h2","Email", "email","#EDED14")
createButton("h2","LinkedIn", "linkedin","#EDED14")
createButton("h2","Instagram", "instagram","#EDED14")

createButton("h3","Back", "backBtn","#EDED14")

createButton("h2","Previous Poject", "content-previous","#EDED14","#EDED14")
createButton("h2","Back To Top", "content-backToTop","#EDED14","#EDED14")
createButton("h2","Next Project", "content-next","#EDED14","#EDED14")
createButton("h3","Home", "home-button-header","#EDED14","#EDED14")


const loadProjects = async () => {
    try {
        // Get the section from the URL query parameter
        const urlParams = new URLSearchParams(window.location.search);
        const section = urlParams.get('section'); 

        if (!section) {
            console.error('No section specified in the URL');
            return;
        }

        // Fetch data from the projects.json file
        const response = await fetch('projects.json');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();

        // Check if the section exists in the JSON data
        if (!data[section]) {
            console.error(`Section "${section}" not found in the JSON file`);
            return;
        }
        

        // Get the container to append the project divs to
        const doorContainer = document.getElementById('doorContainer');
        doorContainer.innerHTML = ''; // Clear previous content

        const scrollNotice = document.createElement('div')
        scrollNotice.classList.add('scrollNotice')

        scrollNotice.innerHTML = "Scroll horizontally to view more projects"

        doorContainer.appendChild(scrollNotice)
       
        // Iterate over each project in the selected section
        Object.keys(data[section]).forEach((key, index) => {
            const project = data[section][key];

            // Create a container for each project
            const eachProject = document.createElement('div');
            eachProject.classList.add('eachDoor');

            // Create the thumbnail container
            const thumbnailContainer = document.createElement('div');
            thumbnailContainer.classList.add('thumbnailContainer');

            // Add the thumbnail image
            const thumbnailPic = document.createElement('img');
            thumbnailPic.src = project.documentation.thumbnail;
            thumbnailPic.classList.add('thumbnailPic');

            // Create an unordered list to display materials
            const topicList = document.createElement('ul');
            topicList.classList.add('materialList');

            // Populate the list with materials from the project
            project.material.forEach((material) => {
                const listItem = document.createElement('li');
                listItem.textContent = material;
                topicList.appendChild(listItem);
            });

            thumbnailContainer.appendChild(thumbnailPic);
            thumbnailContainer.appendChild(topicList);

            // Create the door image
            const doorImage = document.createElement('img');
            doorImage.classList.add('doorImage');
            doorImage.src = doors[index % doors.length].detail;

            // Create a project details div
            const projectDiv = document.createElement('div');
            projectDiv.classList.add('project');
            projectDiv.innerHTML = `
                <h3>${project.name}</h3>
                <p><strong>Year:</strong> ${project.year}</p>
            `;
            
            // Append elements to the project container
            eachProject.appendChild(doorImage);
            eachProject.appendChild(thumbnailContainer);
            eachProject.appendChild(projectDiv);

            // Append the project container to the main door container
            doorContainer.appendChild(eachProject);
            const clickIndicator = document.createElement('div')
            clickIndicator.classList.add('clickIndicator')
            clickIndicator.innerHTML = "Click to learn more"
            doorContainer.appendChild(clickIndicator)

         

            const updateHoverState = (isHovering) => {
                const door = doors[index % doors.length];
                doorImage.src = isHovering ? door.blank : door.detail;
                doorContainer.style.backgroundColor = isHovering ? door.color : '';
                thumbnailContainer.style.display = isHovering ? "block" : "none";
                projectDiv.style.marginTop = isHovering ? "60vh" : "150vh";
                doorImage.style.paddingBottom = isHovering ? "9vh" : "0vh"; 

                

              

                if (isHovering && door.color === "#353F30") { 
                    topicList.style.color = "#FFD2FF"; // Pink
                } else if (isHovering && door.color === "#306685") { 
                    topicList.style.color = "#EDED14"; // yellow
                } else {
                    topicList.style.color = ""; // Reset to default
                }

                
            

        

                const handleClick = () => {
                    // Navigate to projectinfo.html
                    window.location.href = `project-info.html?project=${encodeURIComponent(project.name)}`;
                };
            
                if (isHovering) {
                    // Add 'hovered' class to the current door
                    eachProject.classList.add('hovered');
                    
                    // Add 'blurred' class to all siblings
                    document.querySelectorAll('.eachDoor').forEach((door) => {
                        if (door !== eachProject) {
                            door.classList.add('blurred');
                        }
                    });
            
                    // Attach click event to navigate
                    eachProject.addEventListener('click', handleClick);
                } else {
                    // Remove 'hovered' class and reset siblings
                    eachProject.classList.remove('hovered');
                    document.querySelectorAll('.eachDoor').forEach((door) => {
                        door.classList.remove('blurred');
                    });
            
                    // Remove click event listener
                    eachProject.removeEventListener('click', handleClick);
                }
            };
              
         
            // Attach shared event listeners
            [doorImage, thumbnailContainer, projectDiv].forEach(element => {
                element.addEventListener('mouseover', () => updateHoverState(true));
                element.addEventListener('mouseout', () => updateHoverState(false));
            });

            // const projectTitle = document.createElement('h1')
            // projectTitle.classList.add('projectTitle')
            // const titleContainer = document.querySelector('.content-left')
            // projectTitle.innerHTML = "test"
            // titleContainer.appendChild(projectTitle)
          
        });

        
        
    } catch (error) {
        console.error('Error loading JSON file:', error);
    }




};

const loadProjectInfo = async () => {
    try {
        // Get the project name from the URL query parameter
        const urlParams = new URLSearchParams(window.location.search);
        const projectName = urlParams.get('project'); // e.g., "Project Name"

        if (!projectName) {
            console.error('No project specified in the URL');
            return;
        }

        // Fetch data from the projects.json file
        const response = await fetch('projects.json');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();

        // Find the project in the JSON data
        let projectList = null;
        Object.values(data).forEach(section => {
            Object.values(section).forEach(project => {
                if (project.name === projectName) {
                    projectList = project;
                }
            });
        });

        if (!projectList) {
            console.error(`Project "${projectName}" not found in the JSON file`);
            return;
        }

        // Select the content-left and content-center containers
        const titleContainer = document.querySelector('.content-left');
        const contentCenter = document.querySelector('.content-center');
        const materialContainer = document.querySelector('.content-right');
        if (!titleContainer || !contentCenter) {
            console.error('Required containers not found');
            return;
        }

        // Create and append the project title in .content-left
        const projectTitle = document.createElement('h1');
        projectTitle.classList.add('projectTitle');
        projectTitle.innerHTML = `<h1>${projectList.name}</h1> <h3>${projectList.year}</h3>`;
        titleContainer.appendChild(projectTitle);

        // Create and append project details in .content-center
        const projectDetails = document.createElement('div');
        projectDetails.classList.add('projectDetails');
        projectDetails.innerHTML = `
            <h3><strong>Description:</strong></h3> <p>${projectList.info || 'No description available'}</p>
        `;

        contentCenter.appendChild(projectDetails);

        // Progress title
        const progressTitleContainer = document.querySelector('.progressTitle');
        const progressTitle = document.createElement('h1');
        progressTitle.innerHTML = "Process";
        progressTitleContainer.appendChild(progressTitle);

        // Create a container for materials
        const projectMaterials = document.createElement('div');
        projectMaterials.classList.add('projectMaterials');
        projectMaterials.innerHTML = `<h3><b>Materials:</b></h3>`;
        
        const materialList = document.createElement('ul');
        materialList.classList.add('materialListContent');
        (materialList.innerHTML = projectList.material?.length 
            ? projectList.material.map(m => `<li>${m}</li>`).join('') 
            : '<li>Not specified</li>');

        projectMaterials.appendChild(materialList);
        materialContainer.appendChild(projectMaterials);

        // Link button
        if (projectList.haveLink) {
            createButton("h2", "Visit Project", "visitSite", "#EDED14", "#EDED14");
            const siteButton = document.querySelector('.visitSite');
            siteButton.style.marginBottom = "1vh";
            
            siteButton.addEventListener('click', () => {
                window.open(projectList.link, '_blank'); // Opens in a new tab
            });
        }

        // ==================== ADDING DOCUMENTATION IMAGES ====================
        if (projectList.documentation) {
            const documentationContainer = document.querySelector('.progressPhoto');
        
            Object.keys(projectList.documentation).forEach((key) => {
                if (key !== "thumbnail") { // Skip the first image
                    const filePath = projectList.documentation[key];
        
                    // Create either an image or video element based on file extension
                    if (filePath.match(/\.(jpeg|jpg|png|gif|webp)$/i)) {
                        // Create and append image
                        const img = document.createElement("img");
                        img.src = filePath;
                        img.classList.add("documentationImage");
                        documentationContainer.appendChild(img);

                        img.addEventListener('click',()=>{
                            window.open(filePath)
                        })
                    } else if (filePath.match(/\.(mp4|webm|ogg|mov)$/i)) {
                        // Create and append video
                        const video = document.createElement("video");
                        video.src = filePath;
                        video.classList.add("documentationVideo");
                        video.controls = true; // Enables play, pause, volume controls
                        documentationContainer.appendChild(video);
                    }

                  
                }
            });
        }

        
        
     
        // ======================================================================

    } catch (error) {
        console.error('Error loading project information:', error);
    }
};

// Call the function to load projects


loadProjects();
loadProjectInfo();
