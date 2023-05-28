const loginForm = document.getElementById("loginForm");


loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let data = JSON.parse(localStorage.getItem("data"));
    if(data == null){
        alert("Chưa có thông tin đăng ký, vui lòng đăng ký trước")
    }else{
        let username = document.getElementById("username").value;
        let password = document.getElementById("password").value;
        for( let i = 0; i < data.length; i++){
            if (data [i].username == username && data[i].password == password)
            {
                alert("Đăng nhập thành công");
                return;
            }
           }
       }
        alert("Username hoặc password không đúng !!!");
    }
);