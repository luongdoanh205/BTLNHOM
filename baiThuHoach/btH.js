var wrapper = document.querySelector('.wrapper')
function send(){
    var arr = document.getElementsByTagName('input');
    var check = 0;
    for(var i = 0; i < arr.length; i++){
        if(arr[i].checked){
            check++;
        }
    }
    if (check < 2){
        alert('Cần điền đầy đủ thông tin')
        return;
    }
    wrapper.classList.remove('hienW');
    var bang1 = document.querySelector('.bang1')
    var bang2 = document.querySelector('.bang2')
    var row = document.querySelector('.hang1')
    if(row){
        row.cells[5].innerText = "Hoàn thành";
        bang1.removeChild(row);   
        bang2.appendChild(row)
    }
    
}
function huy(){
    wrapper.classList.remove('hienW');
}
function hien(){
    wrapper.classList.add('hienW')
}

