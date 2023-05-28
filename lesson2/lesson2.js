// // hàm không có thông số
// function hello1(){
//     console.log("hello");
// }

// hello1();

// // hàm  có thông số
// function hello2(name){
//     console.log("hello "+name);
// }
// hello2("Hân")

// hàm có trả về giá trị (return)

// function sub(a, b, c){
//     return a - b - c;
// }
// let x = sub(9, 5, 2)
// console.log(x);


// function mul(a, b, c){
//     return a * b * c;
// }
// let y = mul(2, 2, 4)
// console.log(y);


// function sub(a, b, c){
//     return a / b / c;
// }
// let z = sub(10, 2, 5)
// console.log(z);



// function phanLoaiSo(x){
//     let lamtron = x.toFixed();
// let thapphan = x-lamtron;

// if (x<0){
//     console.log(x +" là số âm");
//  }

//  else if (x==0){
//     console.log(x +" là số 0");
// }

// else if (x>0 && thapphan==0) {
//     console.log(x +" là số nguyên dương");
//  }

// else {
//     console.log(x +" là số thập phân dương ");
//  }
// }
// phanLoaiSo(9.6)


// function so(x, y, z, Max){
//     if (Max<x){
//         Max=x
//     }

//     if ( Max < y){
//         Max = y
//     }
//     if ( Max < z){
//         Max = z
//     }
//     console.log("Số lớn nhất là: " + Max)
// }
// so(5, 10, 9, 0);



// function So(dtb){
//     if (dtb >= 9) {
//     console.log("Hạng A")
// }
// else if (dtb >= 7 && điểm < 9) {
//     console.log("Hạng B")
// }
// else if (dtb >= 5 && điểm < 7) {
//     console.log("Hạng C")
// }
// else {
//     console.log("Hạng F")
// }
// }
// So(1);




function PTB2(a, b, c) {
    if (a == 0) {
        let x = -c / b;
        console.log("Nghiệm của phương trình là: " + x);
    } else {
        let delta = (b * b) - (4 * a * c);
        if (delta < 0) {
            console.log("Phương trình vô nghiệm");
        } else if (delta == 0) {
            let x = (-1 * b) / (2 * a);
            console.log("Phương trình có nghiệm kép, x = " + x);
        } else {
            let x1 = (-1 * b + Math.sqrt(delta)) / (2 * a);
            let x2 = (-1 * b - Math.sqrt(delta)) / (2 * a);
            console.log("Phương trình có 2 nghiệm phân biệt: x1 = " + x1 + ";x2 = " + x2);
        }
    }
}
PTB2(1, -11, 30);

