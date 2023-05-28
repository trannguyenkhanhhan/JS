// let han1 = document.getElementById("han1");
// han1.style = "color: beige; background-color: black; margin: 20px;";
// console.log(han1.innerHTML);

let divImg = document.getElementById("img");

divImg.style = "border: 1px solid black; height: 100px";

let img = document.createElement("img");
img.src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKr5wT7rfkjkGvNeqgXjBmarC5ZNoZs-H2uMpML8O7Q4F9W-IlUQibBT6IPqyvX45NOgw&usqp=CAU";
img.style = "width:100px";
console.log(img);
divImg.appendChild(img)