
// function plan(activities) {
//     document.getElementById("plan").innerHTML = " ";
//     let day = document.getElementById("day").value

//     for (let i = 1; i <= day; i++) {
//         let divmain = document.createElement("div")
//         document.getElementById("plan").appendChild(divmain)
//         let div1 = document.createElement("div")
//         let div2 = document.createElement("div")
//         divmain.appendChild(div1);
//         divmain.appendChild(div2);
//         divmain.style.display = "flex"
//         divmain.style.flexDirection = "column"
//         div1.innerText = "Day " + i + ":"
//         div2.innerText = activities
//     }
// }

function createTravelPlan(day, destination) {
    let travelPlans = localStorage.getItem("travelPlans")
    travelPlans = [];
    const newTravelPlan = {
        day: day,
        destination: destination
    };

    const url = `https://ai-trip-planner.p.rapidapi.com/?days=${newTravelPlan.day}&destination=${newTravelPlan.destination}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '4ef3a1f9d5msh1778acb92f14d5fp1e9061jsn5d9d208a48d1',
            'X-RapidAPI-Host': 'ai-trip-planner.p.rapidapi.com'
        }
    };
    fetch(url, options).then((res) => {
        return res.json();
    }).then((data) => {
        document.getElementById("location").innerHTML = " ";
        let h3 = document.createElement("h3");
        h3.innerText = data.key;
        document.getElementById("location").appendChild(h3);

        document.getElementById("plan").innerHTML = " ";
        let day = data.plan
        for(let i = 1; i <= day.length; i++){
        let divmain = document.createElement("div")
        document.getElementById("plan").appendChild(divmain)
        let div1 = document.createElement("div")
        let div2 = document.createElement("div")
        divmain.appendChild(div1);
        divmain.appendChild(div2);
        divmain.style.width = "22%"
        divmain.style.display = "flex"
        divmain.style.flexDirection = "column"
        div2.style.display = "flex"
        div2.style.flexDirection = "column"
        div1.innerText = "Day " + i + ":"
        let activities = day[i-1].activities
        div2.innerText = JSON.stringify(day[i-1].activities)

        }
    })

}



function button() {
    let destination = document.getElementById("destination").value;
    let day = document.getElementById("day").value;
    createTravelPlan(day, destination)


}