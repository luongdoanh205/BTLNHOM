// Chọn nút gửi và lắng nghe sự kiện click
document.addEventListener("DOMContentLoaded", function () {
    const submitButton = document.querySelector(".submit-button");
    
    submitButton.addEventListener("click", function (event) {
        // Ngăn chặn việc gửi form
        event.preventDefault();
        
        // Hiển thị thông báo đã gửi câu hỏi
        alert("Đã gửi câu hỏi!");
        
        // Nếu muốn xóa các thông tin đã nhập sau khi gửi câu hỏi
        document.querySelector("form").reset();
    });
});