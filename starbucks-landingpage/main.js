let hamburger=document.querySelector(".fa-bars")
let navbar=document.querySelector(".navbar")
let body=document.querySelector("body")
let choice=document.querySelector(".choice")
let slider=document.querySelector(".slider")
let input=document.querySelector("input")
let inputSpan=document.querySelector(".input-span")
let starbucksReward=document.querySelector(".starbucks-reward")
let footerDiv=document.querySelectorAll(".footer-div")


input.addEventListener("input",function(){
    const value = input.value.trim()

  if (value) {
    input.dataset.state = 'valid'
  } else {
    input.dataset.state = 'invalid'
  }
  if(input.value != ""){
      inputSpan.style.transform="translateY(-15px)"
  }else{
      inputSpan.style.transform=""
  }

})




hamburger.addEventListener("click",function(){
    navbar.classList.toggle("active")
    body.classList.toggle("body-dark")
})

choice.addEventListener("click",function(e){
    let choices=["choice-25","choice-50","choice-150","choice-200","choice-400"]
    let slide=[0,100,200,300,400]
    let images=["img-1","img-2","img-3","img-4","img-5"]
    let current=images.keys()
    let texts=["text-1","text-2","text-3","text-4","text-5"]
    for(let i=0; i<choices.length; i++){
        if(e.target.parentElement.classList.contains(choices[i]) 
        || e.target.classList.contains(choices[i]) /* target choice classes */
        ||e.target.parentElement.parentElement.classList.contains(choices[i]) ){ /* target span star*/
            slider.style.transform=`translateX(${slide[i]}%)`
            for( x of current){
                if(x == i){
                    document.querySelector(`.${images[i]}`).style.display="block" 
                    document.querySelector(`.${texts[i]}`).style.display="block"
                }else{
                    document.querySelector(`.${images[x]}`).style.display="none"
                    document.querySelector(`.${texts[x]}`).style.display="none"
                }
            }
        }
    }
})

document.addEventListener("scroll",()=>{
    if(window.innerWidth<=500){
        if(window.scrollY>100){
            starbucksReward.style.position="fixed"
            starbucksReward.style.width="100%"
            starbucksReward.style.top="0"
            starbucksReward.style.zIndex="10"
        }else{
            starbucksReward.style=""
        }
    }else{
        starbucksReward.style=""
    }  
})

function showDetails(){
    this.classList.toggle("active")


}

footerDiv.forEach(div =>{
    div.addEventListener("click",showDetails)
})

