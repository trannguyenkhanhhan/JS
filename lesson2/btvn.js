// bài 1
function min(a,b){
    if(a<b){
        console.log("giá trị nhỏ nhất của 2 số: " + a)
    } else {
        console.log("giá trị nhỏ nhất của 2 số: " + b)
    }
}
min(3,3);



// bài 2
function  btvn2() {
    let a = document.getElementById("show_search_advance");
    let table = document.getElementById("search_advance");
    let title = a.innerHTML
    if ( title == "Tìm kiếm nâng cao") {
        table.style.display = "table-row";
        a.innerHTML = "Bỏ tìm kiếm nâng cao";
    }
    else {
        table.style.display = "none";
        a.innerHTML = "Tìm kiếm nâng cao";
    }

}
