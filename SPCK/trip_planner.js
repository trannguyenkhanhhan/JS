function destination(destination) {
    document.getElementById("location").innerHTML = " ";
    let h3 = document.createElement("h3");
    h3.innerText = destination;
    document.getElementById("location").appendChild(h3);
}

function plan(activities) {
    document.getElementById("plan").innerHTML = " ";
    let day = document.getElementById("day").value

    for (let i = 1; i <= day; i++) {
        let divmain = document.createElement("div")
        document.getElementById("plan").appendChild(divmain)
        let div1 = document.createElement("div")
        let div2 = document.createElement("div")
        divmain.appendChild(div1);
        divmain.appendChild(div2);
        divmain.style.display = "flex"
        divmain.style.flexDirection = "column"
        div1.innerText = "Day " + i + ":"
        div2.innerText = activities
    }
}


function button() {
    let destination = document.getElementById("destination").value;
    let day = document.getElementById("day").value;

    const url = `https://ai-trip-planner.p.rapidapi.com/current.json?destination=${destination}&days=${day}`;
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
        destination(key);
        plan(data.plan.activities)
    })
}