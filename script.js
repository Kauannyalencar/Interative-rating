const submitBtn = document.querySelector(".submit");
const container = document.querySelector("main")
const btns = document.querySelectorAll(".rating-class")
const thanksState = document.querySelector(".thanks-state")
const spanRate = document.querySelector(".n-selected")
let has = false;

function setRating() {
    const array = Array.from(btns)
    array.some((item) => {
        if (item.classList.contains("change-rating")) {
            has = true
            spanRate.textContent = this.textContent
           item.classList.remove("change-rating") 
        }else if (this.classList.contains("change-rating")) {
            this.classList.remove('change-rating')
        } else {
            has = true
            spanRate.textContent = this.textContent
            this.classList.add("change-rating")
        }
    })    
}



submitBtn.addEventListener("click", () =>{
    if (has === true) {
        container.style.display = "none"
        thanksState.classList.add("thanks-mensage");
        
    }else{
        thanksState.classList.remove("thanks-mensage")
       
    }
})


for (const btn of btns) {
    btn.addEventListener("click", setRating)
}

