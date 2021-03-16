// Show default results after the page has been loaded
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
// On option changes from the select show required results (desc or asc)
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
// Function that create and fill the table
function createTable(data) {
    // Parse the json string into the object
    data_obj = JSON.parse(data);

    document.getElementById("table_container").innerHTML = '';

    // Creation of the table
    var table = document.createElement("table"), rowH, headerA,
        headerB, row, cellA, cellB;

    rowH = document.createElement("tr");
    headerA = document.createElement("th");
    headerB = document.createElement("th");

    headerA.innerHTML = "nome";
    headerB.innerHTML = "data";

    table.appendChild(rowH);
    rowH.appendChild(headerA);
    rowH.appendChild(headerB);

    // Append the table inside parent container
    document.getElementById("table_container").appendChild(table);

    for (let key in data_obj) {
        // Create rows and cells with For loop
        row = document.createElement("tr");
        cellA = document.createElement("td");
        cellB = document.createElement("td");

        dataTime = new Date(data_obj[key].data);

        // Fill with data
        cellA.innerHTML = data_obj[key].nome;
        // Setting european format date
        cellB.innerHTML = dataTime.toLocaleDateString();

        // Append rows and cells
        table.appendChild(row);
        row.appendChild(cellA);
        row.appendChild(cellB);
    }
}
