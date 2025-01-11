document.addEventListener('DOMContentLoaded',()=>{

    function doorImage(){
        const doors = [
            { 
                detail: "assets/doors/door white detail.png", 
                blank: "assets/doors/door white blank.png" 
            },
            { 
                detail: "assets/doors/door green detail.png", 
                blank: "assets/doors/door green blank.png" 
            },
            { 
                detail: "assets/doors/door pink detail.png", 
                blank: "assets/doors/door pink blank.png" 
            },
            { 
                detail: "assets/doors/door teal detail.png", 
                blank: "assets/doors/door teal blank.png" 
            }
        ];
    
    
        const doorImage = document.querySelector('#doorImage')
    
        doorImage.src = doors[2].detail
    }

    doorImage();
    
})