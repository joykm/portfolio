var table = document.createElement("table");
table.setAttribute("id", "domTable");
document.getElementById("dom-manipulation-table").appendChild(table);

table.style.width = "50%";

var tHeader = document.createElement("thead");
table.appendChild(tHeader);

var tBody = document.createElement("tbody");
table.appendChild(tBody);

//---Table---//

for(var i = 0; i < 4; i++) {
    var row = document.createElement("tr");
    
    if(i === 0) {
        tHeader.appendChild(row);
        for(var j = 0; j < 4; j++) {
            var cell = document.createElement("th");
            cell.style.textAlign = "center";
            cell.style.border = "thin solid black";
            cell.style.backgroundColor = "white";
            cell.textContent = "Header " + (j+1);
            row.appendChild(cell);
        }
    }
    else {
        tBody.appendChild(row);
        for(var k = 0; k < 4; k++) {
            var cell = document.createElement("td");
            cell.style.border = "thin solid black";
            cell.style.textAlign = "center";
            cell.style.backgroundColor = "white";
            cell.textContent = (i) + ", " + (k+1);
            row.appendChild(cell);
        }
    }
}

//---Create Button---//
var upArrow = document.createElement("button");
upArrow.setAttribute("id", "upArrow");
upArrow.setAttribute("class", "btn btn-primary dom-button");
upArrow.style.height = "35px";
upArrow.style.fontWeight = "bold";
upArrow.style.fontSize = "15px"
upArrow.style.width = "35px";
upArrow.textContent = "↑"

var leftArrow = document.createElement("button");
leftArrow.setAttribute("id", "leftArrow");
leftArrow.setAttribute("class", "btn btn-primary dom-button");
leftArrow.style.height = "35px";
leftArrow.style.width = "35px";
leftArrow.style.fontWeight = "bold";
leftArrow.style.fontSize = "15px"
leftArrow.textContent = "←"

var downArrow = document.createElement("button");
downArrow.setAttribute("id", "downArrow");
downArrow.setAttribute("class", "btn btn-primary dom-button");
downArrow.style.height = "35px";
downArrow.style.width = "35px";
downArrow.style.fontWeight = "bold";
downArrow.style.fontSize = "15px"
downArrow.textContent = "↓"

var rightArrow = document.createElement("button");
rightArrow.setAttribute("id", "rightArrow");
rightArrow.setAttribute("class", "btn btn-primary dom-button");
rightArrow.style.height = "35px";
rightArrow.style.width = "35px";
rightArrow.style.fontWeight = "bold";
rightArrow.style.fontSize = "15px"
rightArrow.textContent = "→"

document.getElementById("dom-manipulation-up").appendChild(upArrow);
var newLine1 = document.createElement("br");
document.getElementById("dom-manipulation-left-down-right").appendChild(leftArrow);
document.getElementById("dom-manipulation-left-down-right").appendChild(downArrow);
document.getElementById("dom-manipulation-left-down-right").appendChild(rightArrow);

var markCell = document.createElement("button");
markCell.setAttribute("id", "markCell");
markCell.setAttribute("class", "btn btn-primary dom-button");
markCell.style.height = "35px";
markCell.style.width = "115px";
markCell.style.fontWeight = "bold";
markCell.style.fontSize = "15px"
markCell.textContent = "Mark Cell";
document.getElementById("dom-manipulation-mark-cell").appendChild(markCell);

var clearCells = document.createElement("button");
clearCells.setAttribute("id", "clearCells");
clearCells.setAttribute("class", "btn btn-primary dom-button");
clearCells.style.height = "35px";
clearCells.style.width = "115px";
clearCells.style.fontWeight = "bold";
clearCells.style.fontSize = "15px"
clearCells.textContent = "Clear Cells";
document.getElementById("dom-manipulation-clear-cells").appendChild(clearCells);

//---Button Functions---//
selected = tBody.firstElementChild.firstElementChild;
selected.style.border = "thick solid black";
// selected.style.["boxShadow"] = "10px 20px 30px blue";

row = 0;
column = 0;

function moveUp() {
    if(row > 0) {
        // alert("length: " + tBody.children.length + ", row: " + row);
        row--;
        selected.style.border = "thin solid black";
        selected = selected.parentNode.parentNode;
        selected = selected.children[row].children[column];
        selected.style.border = "thick solid black";
    }   
}

function moveLeft() {
    if(selected.previousElementSibling != null) {
        selected.style.border = "thin solid black";
        selected = selected.previousElementSibling;
        selected.style.border = "thick solid black";
        column--;
    }
}
function moveDown() {
    if(row < tBody.children.length - 1) {
        // alert("length: " + tBody.children.length + ", row: " + row);
        row++;
        selected.style.border = "thin solid black";
        selected = selected.parentNode.parentNode;
        selected = selected.children[row].children[column];
        selected.style.border = "thick solid black";
    }   
}

function moveRight() {
    if(selected.nextElementSibling != null) {
        selected.style.border = "thin solid black";
        selected = selected.nextElementSibling;
        selected.style.border = "thick solid black";
        column++;
    }
}

function colorCell() {
    selected.style.backgroundColor = "#007bff";
    selected.style.color = "white";
    selected.fontWeight = bold;
}

function resetCells() {
    var table = document.getElementById("domTable"); 
    for (var i = 0, row; row = table.rows[i]; i++) {        
        for (var j = 0, cell; cell = row.cells[j]; j++) { 
            cell.style.backgroundColor = 'white';      
            cell.style.color = "black";
        }  
    }
}

document.getElementById("upArrow").addEventListener("click",moveUp);
document.getElementById("leftArrow").addEventListener("click",moveLeft);
document.getElementById("downArrow").addEventListener("click",moveDown);
document.getElementById("rightArrow").addEventListener("click",moveRight);
document.getElementById("markCell").addEventListener("click",colorCell);
document.getElementById("clearCells").addEventListener("click",resetCells);