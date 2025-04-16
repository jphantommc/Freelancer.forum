const freelancers = [
    {name: "Theo", price: 25, occupation: "Programmer" },
    {name: "Spongebob", price: 50, occupation: "Chef"},
];

const max = 10;

const randomNames = [
    "Patrick", "Timmy", "Cosmo", "Johnny", "Wonda", "Gary", "Squidward", "Carl", "Ed", "Eddie",
];

const randomPrice = [10, 25, 42, 54, 62, 45, 84, 35, 71, 100];

const randomOccupation = [
    "Doctor", "Salesman", "Detailer", "Producer", "Farmer", "Principle", "Mechanic", "Plumber",
];

const calculateAveragePrice = () => {
    const total = freelancers.reduce(
      (sum, freelancer) => sum + freelancer.price,
      0
    );
    return freelancers.length === 0 ? 0 : total / freelancers.length;
  };

const addFreelancerIntervalId = setInterval(addFreelancer, 5000);
render()

function render() {
    const freelancersId = document.querySelector("freelancers");
    freelancersId.innerHTML = 
    `<tr>
        <th>Name</th>
        <th>occupation</th>
        <th>Starting Price</th>
    </tr>`;
    freelancers.forEach((freelancer) => {
        const tr = document.createElement("tr");
        const tdName = document.createElement("td");
        tdName.textContent = freelancer.name;

        const tdOccupation = document.createElement("td");
        tdOccupation.textContent = freelancer.occupation;

        const tdPrice = document.createElement("td");
        tdPrice.classList.add("price");
        tdPrice.textContent = $$(freelancer.price);

        tr.appendChild(tdName);
        tr.appendChild(tdOccupation);
        tr.appendChild(tdPrice);
    })
}

function addFreelancer() {
  const name = randomNames[Math.floor(Math.random() * randomNames.length)];
  const price = randomPrices[Math.floor(Math.random() * randomPrices.length)];
  const occupation =
    randomOccupations[Math.floor(Math.random() * randomOccupations.length)];

  freelancers.push({ name, price, occupation });
  render();
}