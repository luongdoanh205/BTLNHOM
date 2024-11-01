function check() {
    try{
        let test = "__test__";
        localStorage.setItem(test, test);
        localStorage.removeItem(test);
        return true;
    } 
    catch(e){
        return false;
    }
}
function capnhatthongtin(){
    if(!check()) {
        alert("Trình duyệt của bạn không hỗ trợ Local Storage.");
        return;
    }
    const fieldNames = {
        hoten: "Họ và tên",
        masv: "Mã sinh viên",
        khoa: "Khóa",
        dantoc: "Dân tộc",
        tongiao: "Tôn giáo",
        quoctich: "Quốc tịch",
        cmnd: "Số CMND/Thẻ căn cước",
        noicap: "Nơi cấp CMND/Thẻ căn cước",
        hokhautinh: "Hộ khẩu tỉnh/thành phố",
        hokhauquan: "Hộ khẩu quận/huyện",
        hokhauxa: "Hộ khẩu xã/phường",
        diachibaotin: "Địa chỉ báo tin",
        sdtgiadinh: "Số điện thoại gia đình",
        lop: "Lớp",
        mabhyt: "Mã số BHYT",
        mabhxh: "Mã số BHXH",
        cmndnguoigiaho: "CMND/Thẻ căn cước của người giám hộ",
        hotenbo: "Họ tên Bố",
        namsinhbo: "Năm sinh Bố",
        nghenghiepbo: "Nghề nghiệp, chức vụ Bố",
        noilamviecbo: "Nơi làm việc Bố",
        dtbo: "Điện thoại Bố",
        hotenme: "Họ tên Mẹ",
        namsinhme: "Năm sinh Mẹ",
        nghenghiepme: "Nghề nghiệp, chức vụ Mẹ",
        noilamviecme: "Nơi làm việc Mẹ",
        dtme: "Điện thoại Mẹ"
    };
    let c = true;
    const requiredFields = [
        "dantoc", "tongiao", "quoctich", "cmnd", "noicap",
        "hokhautinh", "hokhauquan", "hokhauxa", "diachibaotin",
        "sdtgiadinh", "lop", "cmndnguoigiaho", "hotenbo",
        "nghenghiepbo", "noilamviecbo", "hotenme", "nghenghiepme", "noilamviecme"
    ];
    for(const field of requiredFields){
        const value = document.getElementById(field).value.trim();
        if (!value) {
            alert(`Vui lòng nhập ${fieldNames[field]}.`);
            c = false;
        }
        localStorage.setItem(field, value);
    }
    for(const field in fieldNames){
        if (!requiredFields.includes(field)){
            const value = document.getElementById(field).value.trim();
            localStorage.setItem(field, value); 
        }
    }
    if (c){
        alert("Thông tin đã được cập nhật!");
    }
}
function loadThongTin(){
    if(!check()) {
        alert("Trình duyệt của bạn không hỗ trợ Local Storage.");
        return;
    }
    const fields = [
        "hoten", "masv", "khoa", "dantoc", "tongiao", "quoctich", "cmnd",
        "noicap", "hokhautinh", "hokhauquan", "hokhauxa",
        "diachibaotin", "sdtgiadinh", "lop", "mabhyt", "mabhxh", "cmndnguoigiaho",
        "hotenbo", "namsinhbo", "nghenghiepbo", "noilamviecbo", "dtbo",
        "hotenme", "namsinhme", "nghenghiepme", "noilamviecme", "dtme"
    ];
    fields.forEach(field =>{
        const value = localStorage.getItem(field);
        if (value){
            document.getElementById(field).value = value;
        }
    });
}
window.onload = loadThongTin;
