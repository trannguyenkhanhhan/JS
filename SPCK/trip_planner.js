
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
            'X-RapidAPI-Key': 'e9366b32e5msh8530af5b9e13a14p1e2da2jsnb47c411fcb25',
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
        for (let i = 1; i <= day.length; i++) {
            let divmain = document.createElement("div")
            divmain.style.width = "22%"
            divmain.style.display = "flex"
            divmain.style.flexDirection = "column"


            let h4 = document.createElement("h4")
            divmain.appendChild(h4);
            h4.innerText = "Day " + i + ":"


            let activities = day[i - 1].activities
            let div1 = document.createElement("div")
            div1.style.display = "flex"
            div1.style.flexDirection = "column"
            let ul = document.createElement("ul")
            for (let n = 0; n < activities.length; n++) {
                let li = document.createElement("li")
                li.innerText = activities[n].time + " : " + activities[n].description
                ul.appendChild(li)
            }
            div1.appendChild(ul)
            divmain.appendChild(div1)
            document.getElementById("plan").appendChild(divmain)

        }
    })

}



function button() {
    let destination = document.getElementById("destination").value;
    let day = document.getElementById("day").value;
    createTravelPlan(day, destination)


}