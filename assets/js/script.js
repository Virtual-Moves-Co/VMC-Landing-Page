const showBtn = document.querySelectorAll('.add-btn')
showBtn.forEach((e)=>{
    e.addEventListener('click', function(){
        e.classList.toggle('active')
        this.parentElement.parentElement.classList.toggle('active')
    })
})
