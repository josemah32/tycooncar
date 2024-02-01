let money = 100000;
let carsOwned = 0;
let carList = [];

function updateMoney() {
    document.getElementById("money").innerText = `Money: $${money}`;
}

function updateCarList() {
    const carListContainer = document.getElementById("car-list");
    carListContainer.innerHTML = "<h3>Cars Owned:</h3>";

    for (let i = 0; i < carList.length; i++) {
        const car = carList[i];
        const carItem = document.createElement("div");
        carItem.innerHTML = `<p>${car.name} - Value: $${car.value}</p>`;

        // Agrega la imagen del coche
        const carImage = document.createElement("img");
        carImage.src = "car.png";  // Ajusta la ruta de la imagen según tu estructura de archivos
        carImage.alt = "Car Image";
        carImage.style.width = "50px";  // Ajusta el tamaño según tus necesidades

        carItem.appendChild(carImage);
        carListContainer.appendChild(carItem);
    }
}

function buyCar() {
    const carPrice = 1000;
    if (money >= carPrice) {
        money -= carPrice;
        carsOwned++;

        // Add the purchased car to the list
        const newCar = {
            name: `Car ${carsOwned}`,
            value: 5000  // You can set an initial value for the car
        };
        carList.push(newCar);

        updateMoney();
        updateCarList();
    } else {
        alert("Not enough money to buy a car!");
    }
}

function sellCar() {
    const carPrice = 500;
    if (carsOwned > 0) {
        money += carPrice;
        carsOwned--;

        // Remove the last car from the list (you can implement logic to choose which car to sell)
        const soldCar = carList.pop();

        updateMoney();
        updateCarList();
    } else {
        alert("You don't own any cars to sell!");
    }
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
