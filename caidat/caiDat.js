function showCD(sectionId) {
    document.querySelectorAll('.content-section').forEach(function(section) {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
}
var hienSdt;
function hienpass(chonId) {
    hienSdt = document.getElementById(chonId)
    hienSdt.classList.add('themWr');
}
var ansdt = document.querySelectorAll('.anSDT')
ansdt.forEach(function(index){
    index.addEventListener('click', () =>{
    hienSdt.classList.remove('themWr');
})})

var pass = '123454321'
var arr1 = document.querySelectorAll('.nhapSdt input');
let kt1 = false;
let kt2 = false;

arr1[0].onchange = function(e){
    if (e.target.value != pass){
        document.querySelector('.matkhaup').style.display = 'block';
        kt1 = false;
    } else{
        document.querySelector('.matkhaup').style.display = 'none';
        kt1 = true;
        console.log('OK')
    }
}
arr1[1].onchange = function(e){
    if (isNaN(e.target.value)){
        document.querySelector('.matkhaup2').style.display = 'block';
        kt2 = false;
    } else{
        document.querySelector('.matkhaup2').style.display = 'none';
        kt2 = true;
        console.log('OK')
    }
}
if(kt1 == true && kt2 == true){
}
document.querySelector('.guiSdt').onclick = () => {
    if(kt1 == true && kt2 == true){
        console.log('KKKK')        
        hienSdt.classList.remove('themWr');
    } else{
        alert('Cần điền đầy dủ thông tin');
    }
}
