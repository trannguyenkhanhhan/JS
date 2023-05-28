function Location(key) {
    document.getElementById("location").innerHTML = " ";
    let h3 = document.createElement("h3");
    h3.innerText = key;
    document.getElementById("location").appendChild(h3);
}

function Plan(plan) {
    document.getElementById("plan").innerHTML = " ";
    let h3plan = document.createElement("h3")
    h3plan.insertAdjacentHTML("afterbegin", plan);
    let div = document.createElement("div");
    div.appendChild(h3plan);
    document.getElementById("plan").appendChild(div);

}

function search() {
    let locationInput = document.getElementById("locationInput").value;
    let timeInput = document.getElementById("timeInput").value;

    const url = `https://ai-trip-planner.p.rapidapi.com/current.json?q=${locationInput}&days=${timeInput}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'e5d99d8ea1msh823c45fa45d01f4p1f77a5jsn73eb789f46dc',
            'X-RapidAPI-Host': 'ai-trip-planner.p.rapidapi.com'
        }
    };
    fetch(url, options).then((res) => {
        return res.json();
    }).then((data) => {
        Location(data.key);
        Plan(data.plan)
    })
}
