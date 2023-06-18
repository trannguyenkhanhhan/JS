// function button(){
//     document.getElementById("location").innerHTML="";
//     document.getElementById("plan").innerHTML="";

//     // hiển thị địa điểm du lịch
//     let destination=document.getElementById("destination").value
//     let location = document.getElementById("location")
//     location.innerText=destination

//     // hiển thị số ngày
//     let day = document.getElementById("days").value
//     for (let i = 1; i<=day; i++){
//         let div = document.createElement("div")
//         let img = document.createElement("img")
//         img.innerHTML="https://img.icons8.com/?size=512&id=WwP9ajtrQdZj&format=png"
//         document.getElementById("plan").appendChild(div)
//         div.appendChild(img)
//         div.innerText= "day "+ i +":" + img
//     }
// }





function destination(destination) {
    document.getElementById("location").innerHTML = " ";
    let h3 = document.createElement("h3");
    h3.innerText = "Ho Chi Minh, Vietnam";  //destination
    document.getElementById("location").appendChild(h3);
}

// function button() { 
//     document.getElementById("plan").innerHTML = " ";
//     let day = document.getElementById("days").value
//     for (let i = 1; i<=day; i++){
//         let div = document.createElement("div")
//         let img = document.createElement("img")
//         img.style.height='50px'
//         img.setAttribute("src", "https://img.icons8.com/?size=512&id=WwP9ajtrQdZj&format=png");
//         document.getElementById("plan").appendChild(div)
//          div.appendChild(img);
//         div.innerText= "Day "+ i +":" + img.appendChild("https://img.icons8.com/?size=512&id=WwP9ajtrQdZj&format=png")
// }
// }


