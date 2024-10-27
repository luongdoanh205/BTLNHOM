document.getElementById("imageInput").addEventListener("change", function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const preview = document.getElementById("previewImage");
            preview.src = e.target.result;
            preview.style.display = "block";
        }
        reader.readAsDataURL(file);
    }
});
function showAdditional() {
    // Hiển thị phần lựa chọn tiếp theo khi chọn Tùy chọn 1
    document.getElementById("additional-options").classList.remove("hidden");
}

function hideAdditional() {
    // Ẩn phần lựa chọn tiếp theo khi chọn Tùy chọn 2
    document.getElementById("additional-options").classList.add("hidden");
}
function addRow() {
    var loaiGiay = document.getElementById("loai-tuyen").value;
    if (loaiGiay === "") {
        alert("Vui lòng chọn loại giấy xác nhận!");
        return;
    }

    var table = document.getElementById("confirmation-table").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow();
    var sttCell = newRow.insertCell(0);
    var loaiGiayCell = newRow.insertCell(1);
    var ngayTaoCell = newRow.insertCell(2);
    var trangThaiCell = newRow.insertCell(3);
    var noiNhanCell = newRow.insertCell(4);
    var ghiChuCell = newRow.insertCell(5);
    var huyCell = newRow.insertCell(6);

    var rowCount = table.rows.length;
    sttCell.innerHTML = rowCount -1;

    loaiGiayCell.innerHTML = loaiGiay;

    var currentDate = new Date();
    var dateString = currentDate.toLocaleDateString('vi-VN') + ' ' + currentDate.toLocaleTimeString('vi-VN', { hour12: false });
    ngayTaoCell.innerHTML = dateString;

    trangThaiCell.innerHTML = "Chờ xác nhận!";
    noiNhanCell.innerHTML = "";
    ghiChuCell.innerHTML = "";
    huyCell.innerHTML = '<button onclick="deleteRow(this)">Hủy</button>';
}

function deleteRow(btn) {
    var row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

