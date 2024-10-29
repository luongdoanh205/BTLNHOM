function addRow() {
    var loaiGiay = document.getElementById("loai-giay").value;
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
    // var noiNhanCell = newRow.insertCell(4);
    var ghiChuCell = newRow.insertCell(4);
    var huyCell = newRow.insertCell(5);

    var rowCount = table.rows.length;
    sttCell.innerHTML = rowCount -1;

    loaiGiayCell.innerHTML = loaiGiay;

    var currentDate = new Date();
    var dateString = currentDate.toLocaleDateString('vi-VN') + ' ' + currentDate.toLocaleTimeString('vi-VN', { hour12: false });
    ngayTaoCell.innerHTML = dateString;

    trangThaiCell.innerHTML = "Chờ xác nhận!";
    // noiNhanCell.innerHTML = "";
    ghiChuCell.innerHTML = "";
    huyCell.innerHTML = '<button onclick="deleteRow(this)">Hủy</button>';
}

function deleteRow(btn) {
    var row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);
}
