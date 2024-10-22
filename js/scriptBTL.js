var thongbao = document.querySelector('.hocphi');
var hientb = document.querySelector('.thong-bao')
var menu = document.querySelector('.menu')
var menuclick = document.querySelector('.menuclick')
var profile = document.querySelector('.profile')
var profileclick = document.querySelector('.imgmeo')
thongbao.addEventListener('click', () => {
   hientb.classList.add('hienTB')
})  

document.addEventListener('click', function(event) {
    if (!hientb.contains(event.target) && !thongbao.contains(event.target)) {
        hientb.classList.remove('hienTB'); // Ẩn hộp thông báo
    }
});

menuclick.addEventListener('click', () => {
    menu.classList.add('hienMN')
}) 
document.addEventListener('click', function(event) {
    if (!menu.contains(event.target) && !menuclick.contains(event.target)) {
        menu.classList.remove('hienMN'); // Ẩn hộp thông báo
    }
}); 
 
// profile
profileclick.addEventListener('click', () => {
    profile.classList.add('hienPF')
})
document.addEventListener('click', function(event) {
    if (!profile.contains(event.target) && !profileclick.contains(event.target)) {
        profile.classList.remove('hienPF'); // Ẩn hộp thông báo
    }
}); 
