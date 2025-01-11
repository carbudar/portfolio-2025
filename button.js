document.addEventListener('DOMContentLoaded',()=>{

//button
function createButton(size, buttonText, className, color){
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

    buttonContent.addEventListener('mouseover',()=>{
        const buttonContentRect = buttonContent.getBoundingClientRect();
        buttonExpand.style.width = `${buttonContentRect.width}px`
        buttonExpand.style.height = `${buttonContentRect.height}px`
        buttonExpand.style.backgroundColor = color
        buttonContent.style.color = "#126889"
        console.log("mouse over button")
    })

    buttonContent.addEventListener('mouseout',()=>{
        buttonExpand.style.width = "0"
        console.log("mouse outside button")
        buttonContent.style.color = "#FFD2FF"
    })
}

    createButton("h1","Back to Top", "backToTop","#EDED14")

    createButton("h2","Email", "email","#EDED14")
    createButton("h2","LinkedIn", "linkedin","#EDED14")
    createButton("h2","Instagram", "instagram","#EDED14")

    createButton("h3","Back", "backBtn","#EDED14")

})