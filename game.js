let money = 1000000;
let carList = [];
let baseCarPrice = 5000;  // Precio base del primer coche
let adjustmentCost = 500;  // Costo de ajuste del coche

// Función para comprar un coche
function buyCar() {
    const newCar = {
        id: carList.length + 1,
        name: "Car " + (carList.length + 1), // Asignar un nombre al coche
        value: baseCarPrice + (carList.length * 1000),  // Precio aumenta con cada compra
        image: "default_car_image.png"  // Imagen predeterminada del coche
    };

    carList.push(newCar);
    money -= newCar.value;

    updateMoney();
    updateCarList();
}

// Función para vender un coche
function sellCar() {
    if (carList.length > 0) {
        const soldCar = carList.pop();
        money += soldCar.value * 0.8;  // Vender el coche con un descuento del 20%

        alert(`Sold ${soldCar.name} for $${soldCar.value * 0.8}.`);
        updateMoney();
        updateCarList();
    } else {
        alert("You don't own any cars to sell!");
    }
}

// Función para ajustar un coche
function adjustCar() {
    const selectedCar = carList[carList.length - 1];  // Seleccionar el último coche comprado

    if (carList.length > 0) {
        // Verificar si el coche ya ha sido mejorado
        if (!selectedCar.upgraded) {
            selectedCar.image = "upgraded_car_image.png";
            selectedCar.upgraded = true;  // Marcar que el coche ha sido mejorado
        }

        // Puedes permitir al jugador ajustar diversas propiedades aquí
        selectedCar.value += 1000;

        // Restar el costo del ajuste
        money -= adjustmentCost;

        alert(`Adjusted ${selectedCar.name}! New value: $${selectedCar.value}. You were charged $${adjustmentCost}.`);
        updateMoney();
        updateCarList();
    } else {
        alert("You don't own any cars to adjust!");
    }
}

// Función para actualizar el dinero en el DOM
function updateMoney() {
    const moneyElement = document.getElementById("money");
    moneyElement.textContent = `Money: $${money}`;
}

// Función para actualizar la lista de coches en el DOM
function updateCarList() {
    const carListElement = document.getElementById("car-list");
    carListElement.innerHTML = "";

    carList.forEach(car => {
        const carDiv = document.createElement("div");
        const carImage = car.image || "default_car_image.png";  // Usar imagen predeterminada si no hay una específica
        carDiv.innerHTML = `<img src="${carImage}" alt="Car Image" style="width: 50px; height: 30px; margin-right: 10px;"> ${car.name} - Value: $${car.value}`;
        carListElement.appendChild(carDiv);
    });
}

// Función para actualizar el dinero en el DOM
function updateMoney() {
    const moneyElement = document.getElementById("money");
    moneyElement.textContent = `Money: $${money}`;
}

// Función para actualizar la lista de coches en el DOM
function updateCarList() {
    const carListElement = document.getElementById("car-list");
    carListElement.innerHTML = "";

    carList.forEach(car => {
        const carDiv = document.createElement("div");
        carDiv.innerHTML = `<img src="car_image.png" alt="Car Image" style="width: 50px; height: 30px; margin-right: 10px;"> ${car.name} - Value: $${car.value}`;
        carListElement.appendChild(carDiv);
    });
}

function toggleCheatMenu() {
    const cheatMenu = document.getElementById("cheat-menu");
    cheatMenu.style.display = cheatMenu.style.display === "none" ? "block" : "none";
}

function generateMoneyOnClick() {
    const moneyGeneratedOnClick = 10;  
    money += moneyGeneratedOnClick;
    updateMoney();
}

function openCheatMenu() {
    const cheatMenu = document.getElementById("cheat-menu");
    cheatMenu.style.display = "block";
}

function applyCheatCode() {
    const cheatCodeInput = document.getElementById("cheat-code").value;

    if (cheatCodeInput === "elnanogana33") {
        // Aplicar código de trampa para dinero infinito
        money = Infinity;
        updateMoney();
        alert("Cheat code applied! You now have infinite money.");
    } else {
        alert("Invalid cheat code. Try again.");
    }

    // Ocultar el menú después de aplicar el código
    const cheatMenu = document.getElementById("cheat-menu");
    cheatMenu.style.display = "none";
}


// Initial setup
updateMoney();
updateCarList();
