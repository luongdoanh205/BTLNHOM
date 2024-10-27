// Hàm hiển thị thông báo khi nhấn nút "Xác Nhận"
function confirmSubmission() {
    alert("Đã xác nhận");
}

// Gắn sự kiện 'click' cho nút "Xác Nhận"
document.getElementById("confirmButton").addEventListener("click", confirmSubmission);
