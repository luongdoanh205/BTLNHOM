function openModal(modalId){
    const modal = document.getElementById(modalId);
    if(modal){
        modal.style.display = 'flex';
    } 
    else{
        console.error(`Không tìm thấy`);
    }
}
function closeModal(modalId){
    const modal = document.getElementById(modalId);
    if(modal){
        modal.style.display = 'none';
    } 
    else{
        console.error(`Không tìm thấy`);
    }
}
window.addEventListener('click', function(event){
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal =>{
        if(event.target === modal){
            modal.style.display = 'none';
        }
    });
});
