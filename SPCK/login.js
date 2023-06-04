const loginForm = document.getElementById("loginForm");


loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let data = JSON.parse(localStorage.getItem("data"));
    if(data == null){
        alert("you don't have an account, please register")
    }else{
        let username = document.getElementById("username").value;
        let password = document.getElementById("password").value;
        for( let i = 0; i < data.length; i++){
            if (data [i].username == username && data[i].password == password)
            {
                window.location="trip_planner.html";
                alert("Logged in successfully");
                return;
            }
            else{
                alert("incorrect information");
            }
           }
       }
        
    }
);