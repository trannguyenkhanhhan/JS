// // bài 1
function tinhNamNhuan(year){
    if( year % 400 == 0 || ( year % 4 == 0 && year % 100 !== 0)){
        console.log("Năm "+ year +" là năm nhuận ")
    }else{
        console.log("Năm "+ year +" là năm không nhuận ")

    }
}
tinhNamNhuan(2024);


// bài 2
function phanLoaiTamGiac(a, b, c) {
    let sum = a + b + c
    if (sum == 180) {
        if (a > 90 || b > 90 || c > 90) {
            console.log("Đây là tam giác tù")
        } else if (a < 90 && b < 90 && c < 90 && a!=b && a!=c) {
            console.log("Đây là tam giác nhọn")
        } else if (a == 90 || b == 90 || c == 90) {
            console.log("Đây là tam giác vuông")
        } else {
            console.log("Đây là tam giác đều")
        }
    } else {
        console.log("Tam giác không hợp lệ ")

    }
}
phanLoaiTamGiac(60, 50, 70);


// bài 3
function hcn(cr,cd){
    let S= cr*cd;
    let P= (cr +cd )*2;
    console.log("Diện tích hình chữ nhật là: "+S)
    console.log("chu vi hình chữ nhật là: "+P)
}
hcn(2,4)


// bài 4
function circle(radius){
    const pi = 3.14;
    let C = radius * 2 * pi;
    let S = radius * radius * pi;
    let D = radius * 2;
    console.log("Diện tích tam giác là " + S)
    console.log("Chu vi tam giác là " + C)
    console.log("Đường kính tam giác là " + D)
}
circle( 3, 4 )