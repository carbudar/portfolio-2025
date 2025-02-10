let container = document.querySelector('.doorContainer');
let stickyParent = document.querySelector('.stickyParent')

function hybridScroll(){
    const stickySection = [...document.querySelectorAll('.sticky')]

    window.addEventListener('scroll',(e)=>{
        for (let i = 0; i < stickySection.length; i++){
            transform(stickySection[i])
        }

    })

    function transform(section) {
        const offsetTop = section.parentElement.offsetTop;
        const scrollSection = section.querySelector('.scrollSection');
        const doorContainer = document.querySelector('#doorContainer');
        
    
        const scrollWidth = doorContainer.scrollWidth - window.innerWidth;
        stickyParent.style.height = "200vh"
    
        // Calculate scroll percentage
        let percentage = ((window.scrollY - offsetTop) / window.innerHeight) * 100;
        
        // Clamp percentage between 0 and 100
        percentage = Math.max(0, Math.min(percentage, 100));
    
        // Convert percentage into actual scroll distance
        let translateX = -(percentage / 100) * scrollWidth; 
    
        scrollSection.style.transform = `translate3d(${translateX}px, 0, 0)`;
    }
    
}
hybridScroll();