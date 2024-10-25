var thongbao = document.querySelector('.hocphi');
var hientb = document.querySelector('.thong-bao')
var menu = document.querySelector('.menu')
var menuclick = document.querySelector('.menuclick')
var profile = document.querySelector('.profile')
var profileclick = document.querySelector('.imgmeo')

var ktTB = false;
var ktMN = false;
var ktPF = false;
var mobile = false;
thongbao.addEventListener('click', () => {
   hientb.classList.add('hienTB')
})  

document.addEventListener('click', function(event) {
    if(ktTB == true ) {
        ktTB = false;
        return;
    }
    if (!hientb.contains(event.target) && !thongbao.contains(event.target)) {
        hientb.classList.remove('hienTB'); // Ẩn hộp thông báo
    }
});

menuclick.addEventListener('click', () => {
    menu.classList.add('hienMN')
}) 
document.addEventListener('click', function(event) {
    if(ktMN == true ) {
        ktMN = false;
        return;
    }
    if (!menu.contains(event.target) && !menuclick.contains(event.target)) {
        menu.classList.remove('hienMN'); // Ẩn hộp thông báo
    }
}); 
 
// profile
profileclick.addEventListener('click', () => {
    profile.classList.add('hienPF')
})
document.addEventListener('click', function(event) {
    if(ktPF == true ) {
        ktPF     = false;
        return;
    }
    if (!profile.contains(event.target) && !profileclick.contains(event.target)) {
        profile.classList.remove('hienPF'); // Ẩn hộp thông báo
    }
}); 


let slider = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let dots = document.querySelectorAll('.slider .dots li');
let text = document.querySelector('.anm-text');

let lengthItems = items.length - 1;
let active = 0;
text.classList.add("animated-text")

next.onclick = function(){
    active = active + 1 <= lengthItems ? active + 1 : 0;
    reloadSlider();
}
prev.onclick = function(){
    active = active - 1 >= 0 ? active - 1 : lengthItems;
    reloadSlider();
}
let refreshInterval = setInterval(()=> {next.click()}, 3000);


function reloadSlider(){
    ktTB = true;
    ktMN = true;
    ktPF = true;
    mobile = true;
    if (active == 0){
        text.classList.add("animated-text")
    } else{
        text.classList.remove("animated-text")
    }

    slider.style.left = -items[active].offsetLeft + 'px';
    let last_active_dot = document.querySelector('.slider .dots li.active');
    last_active_dot.classList.remove('active');
    dots[active].classList.add('active');

    clearInterval(refreshInterval);
    refreshInterval = setInterval(()=> {next.click()}, 3000); 
}

dots.forEach((li, key) => {
    li.addEventListener('click', ()=>{
         active = key;
         reloadSlider();
    })
})
window.onresize = function(event) {
    reloadSlider();
};

var MNhd = document.querySelector('.MNdthoai');
var traiBD = document.querySelector('.traibody')
MNhd.onclick = function(){
    traiBD.classList.add('hienMNhd');
    
}
document.addEventListener('click', function(event) {
    if(mobile == true ) {
        mobile = false;
        return;
    }
    if (!traiBD.contains(event.target) && !MNhd.contains(event.target)) {
        traiBD.classList.remove('hienMNhd'); // Ẩn hộp thông báo
    }
});
