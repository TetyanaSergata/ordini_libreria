$(document).ready(function () {
    let data = "desc";
    $.ajax({
        type: "POST",
        data: {order: data},
        url: "dbTable.php",
        success: function (dataRes) {
            createTable(dataRes);
        }
    });
});

$("#order").change(function (e) {
    e.preventDefault();
    let data = $(this).val();
    $.ajax({
        type: "POST",
        data: {order: data},
        url: "dbTable.php",
        success: function (dataRes) {
            createTable(dataRes);
        }
    });
});


function createTable(data) {
    // (B) PARSE THE JSON STRING INTO OBJECT FIRST
    data = JSON.parse(data);

    document.getElementById("table_container").innerHTML = '';
    // (C1) CREATE EMPTY TABLE
    // (C) GENERATE TABLE
    var table = document.createElement("table"), rowH, headerA, headerB,
        headerC, row, cellA, cellB, cellC;

    rowH = document.createElement("tr");
    headerA = document.createElement("th");
    headerB = document.createElement("th");
    headerC = document.createElement("th");

    headerA.innerHTML = "ID";
    headerB.innerHTML = "nome";
    headerC.innerHTML = "data";

    table.appendChild(rowH);
    rowH.appendChild(headerA);
    rowH.appendChild(headerB);
    rowH.appendChild(headerC);

    document.getElementById("table_container").appendChild(table);
    for (let key in data) {
        // ROWS & CELLS
        row = document.createElement("tr");
        cellA = document.createElement("td");
        cellB = document.createElement("td");
        cellC = document.createElement("td");

        dataTime = new Date(data[key].data);


        // KEY & VALUE
        cellA.innerHTML = key;
        cellB.innerHTML = data[key].nome;
        cellC.innerHTML = dataTime.toLocaleDateString();

        // ATTACH ROW & CELLS
        table.appendChild(row);
        row.appendChild(cellA);
        row.appendChild(cellB);
        row.appendChild(cellC);
    }
}
