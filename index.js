// Add row function
function addRow() {
    // Create a new div for the row
    var newColumn = document.createElement('div');
    newColumn.setAttribute("class", "column");

    // Set the inner HTML with input fields and a remove button
    newColumn.innerHTML = `
        <input class="input-text" type="text" name="name[]" placeholder="Exercise Name">
        <input class="input-number" type="text" name="weight[]" placeholder="Weight">
        <input class="input-number" type="text" name="#-of-sets[]" placeholder="# of Sets">
        <button class="del-btn" onclick="removeRow(this.parentNode)">-</button>
    `;

    // Append the new row to the parent container
    document.getElementById('inRows').appendChild(newColumn);
}

// Remove row function
function removeRow(node) {
    node.remove(); // Remove the row (div element)
}
