const faqButton = document.querySelectorAll('.btn')
const faqQuestion = document.querySelectorAll('h2')

console.log(faqButton)

for(let i = 0; i<faqButton.length; i++){
    faqButton[i].addEventListener('click',function(){
       const btnExpandIcon = document.querySelectorAll('.expand')
       const btnConstrictIcon = document.querySelectorAll('.constrict')
       const faqanswer = document.querySelectorAll('.answer')
       

       if(!btnExpandIcon[i].classList.contains('!hidden')){
        btnExpandIcon[i].classList.add('!hidden')
        btnConstrictIcon[i].classList.remove('!hidden')
        faqanswer[i].classList.remove('hidden')

       }
       else{
        btnExpandIcon[i].classList.remove('!hidden')
        btnConstrictIcon[i].classList.add('!hidden')
        faqanswer[i].classList.add('hidden')

       }
    
    })
       
}

for(let i = 0; i < faqQuestion.length; i++){
    faqQuestion[i].addEventListener('click',function(){
        const btnExpandIcon = document.querySelectorAll('.expand')
        const btnConstrictIcon = document.querySelectorAll('.constrict')
        const faqanswer = document.querySelectorAll('.answer')
        
 
        if(!btnExpandIcon[i].classList.contains('!hidden')){
         btnExpandIcon[i].classList.add('!hidden')
         btnConstrictIcon[i].classList.remove('!hidden')
         faqanswer[i].classList.remove('hidden')
 
        }
        else{
         btnExpandIcon[i].classList.remove('!hidden')
         btnConstrictIcon[i].classList.add('!hidden')
         faqanswer[i].classList.add('hidden')
 
        }

    })
}

/*faqButton.addEventListener("click", function(){
    const btnIcon = document.querySelector('.last')
    const btnIconExpand = document.querySelector('.expand')
    const btnIconConstrict = document.querySelector('.constrict')
    
    if ( btnIcon && !btnIconExpand.classList.contains('!hidden')){
        btnIconConstrict.classList.remove('!hidden')
        document.querySelector('.last-paragraph').classList.remove('hidden')
        btnIconExpand.classList.add('!hidden')

    }
    else {
        btnIconConstrict.classList.add('!hidden')
        document.querySelector('.last-paragraph').classList.add('hidden')
        btnIconExpand.classList.remove('!hidden')
    }
        

    })
    */