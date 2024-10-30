// Kiểm tra xem Local Storage có hỗ trợ không
function isLocalStorageSupported() {
    try {
        let test = "__test__";
        localStorage.setItem(test, test);
        localStorage.removeItem(test);
        return true;
    } catch (e) {
        return false;
    }
}
// Hàm lưu trữ thông tin vào Local Storage
function capnhatthongtin() {
    if (!isLocalStorageSupported()) {
        alert("Trình duyệt của bạn không hỗ trợ Local Storage.");
        return;
    }
    const fieldNames = {
        hoten: "Họ và tên",
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
        cmndnguoigiaho: "CMND/Thẻ căn cước của người giám hộ",
        hotenbo: "Họ tên Bố",
        nghenghiepbo: "Nghề nghiệp, chức vụ Bố",
        noilamviecbo: "Nơi làm việc Bố",
        hotenme: "Họ tên Mẹ",
        nghenghiepme: "Nghề nghiệp, chức vụ Mẹ",
        noilamviecme: "Nơi làm việc Mẹ"
    };
    let isValid = true;
    // Các trường bắt buộc
    const requiredFields = [
        "dantoc", "tongiao", "quoctich", "cmnd", "noicap",
        "hokhautinh", "hokhauquan", "hokhauxa", "diachibaotin",
        "sdtgiadinh", "lop", "cmndnguoigiaho", "hotenbo",
        "nghenghiepbo", "noilamviecbo", "hotenme", "nghenghiepme", "noilamviecme"
    ];
    for (const field of requiredFields) {
        const value = document.getElementById(field).value.trim();
        if (!value) {
            alert(`Vui lòng nhập ${fieldNames[field]}.`);
            isValid = false;
            break; // Dừng lại nếu có trường không hợp lệ
        }
        localStorage.setItem(field, value); // Lưu thông tin nếu hợp lệ
    }
    if (isValid) {
        alert("Thông tin đã được cập nhật!");
    }
}
// Hàm tải thông tin từ Local Storage khi trang tải lại
function loadThongTin() {
    if (!isLocalStorageSupported()) {
        alert("Trình duyệt của bạn không hỗ trợ Local Storage.");
        return;
    }   
    const fields = [
        "hoten", "masv", "khoa", "dantoc", "tongiao", "quoctich", "cmnd",
        "ngaycap", "noicap", "hokhautinh", "hokhauquan", "hokhauxa",
        "diachibaotin", "sdtgiadinh", "lop", "mabhyt", "mabhxh", "cmndnguoigiaho",
        "hotenbo", "namsinhbo", "nghenghiepbo", "noilamviecbo", "dtbo",
        "hotenme", "namsinhme", "nghenghiepme", "noilamviecme", "dtme"
    ];
    fields.forEach(field => {
        const value = localStorage.getItem(field);
        if (value) {
            document.getElementById(field).value = value;
        }
    });
}
// Gọi hàm loadThongTin khi tải trang
window.onload = loadThongTin;