const showBtn = document.querySelectorAll('.add-btn')
console.log(showBtn)
showBtn.forEach((e)=>{
    e.addEventListener('click', function(){
        e.classList.toggle('active')
        this.parentElement.parentElement.classList.toggle('active')
    })
})

function showTeamContact(){

}