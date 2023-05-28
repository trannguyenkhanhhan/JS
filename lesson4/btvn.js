function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }
function ChooseColor(){
    let color = document.getElementById("color").value
    let hex = document.getElementById("HEX")
    let rgb = document.getElementById("RGB")
    let c = document.getElementById("select")
    console.log(color)
   
    if (hex != color){
        hex.innerHTML = color
        var result = hexToRgb(color)
        rgb.innerHTML ='(' + result.r+','+ result.g+','+ result.b+')'
        c.style.backgroundColor = color
    } 
}   
