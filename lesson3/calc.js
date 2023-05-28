function del() {
    document.getElementById("io").innerHTML = " ";
}

function clickButton(c) {
    let io = document.getElementById("io").innerText;
    io = io + c;
    document.getElementById("io").innerText = io
}

function calc() {
    let io = document.getElementById("io").innerText;
    if (io.includes("+") ||
        io.includes("-") ||
        io.includes("*") ||
        io.includes("/")
    ) {
        document.getElementById("result").
        innerText = eval(io);
        del();

    } else {
        alert("Phép tính không hợp lệ ");
        del();
    }


}