let hostels = [];

function addHostel() {
    let name = document.getElementById("name").value;
    let location = document.getElementById("location").value;
    let price = document.getElementById("price").value;
    let type = document.getElementById("type").value;

    if (name === "" || location === "" || price === "" || type === "") {
        alert("Please fill all fields");
        return;
    }

    let hostel = {
        name: name,
        location: location,
        price: price,
        type: type
    };

    hostels.push(hostel);
    displayHostels();
    clearFields();
}

function displayHostels() {
    let table = document.getElementById("hostelList");
    table.innerHTML = "";

    hostels.forEach((hostel, index) => {
        let row = `
            <tr>
                <td>${hostel.name}</td>
                <td>${hostel.location}</td>
                <td>${hostel.type}</td>
                <td>${hostel.price}</td>
                <td>
                    <button class="delete-btn" onclick="deleteHostel(${index})">
                        Delete
                    </button>
                </td>
            </tr>
        `;
        table.innerHTML += row;
    });
}

function deleteHostel(index) {
    hostels.splice(index, 1);
    displayHostels();
}

function clearFields() {
    document.getElementById("name").value = "";
    document.getElementById("location").value = "";
    document.getElementById("price").value = "";
    document.getElementById("type").value = "";
}
