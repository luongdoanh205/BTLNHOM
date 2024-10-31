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
    
    document.getElementById("additional-options").classList.remove("hidden");
}

function hideAdditional() {
    
    document.getElementById("additional-options").classList.add("hidden");
}
function addRow() {
    var table = document.getElementById("confirmation-table").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow();
    var sttCell = newRow.insertCell(0);  
    var ngayTaoCell = newRow.insertCell(1);  
    var trangThaiCell = newRow.insertCell(2);  
    var noiNhanCell = newRow.insertCell(3);  
    var ghiChuCell = newRow.insertCell(4); 
    var huyCell = newRow.insertCell(5);  

    var rowCount = table.rows.length;
    sttCell.innerHTML = rowCount - 1;

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

