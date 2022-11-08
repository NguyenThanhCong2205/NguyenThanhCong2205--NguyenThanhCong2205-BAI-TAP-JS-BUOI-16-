// Bai 1
function findMin() {
  var a = 0;
  var b = 0;
  var sum = "";
  for (n = 1; n < 10000; n++)
    if (((a += n), a > 10000)) {
      console.log(n);
      console.log(a);
      console.log((b = n));
      break;
    }
  sum = "Số nguyên dương nhỏ nhất: " + b;

  document.getElementById("txtResult1").innerHTML = sum;
}

// Bai 2
function tinhTong() {
  var x = document.getElementById("inputX").value * 1;
  var n = document.getElementById("inputN").value * 1;
  sum = 0;
  for (var i = 1; i <= n; i++) {
    sum += Math.pow(x, i);
  }
  sum = "Tổng: " + sum;

  document.getElementById("txtResult2").innerHTML = sum;
}

//Bai 3

function tinhGT() {
  var num = document.getElementById("inputN1").value * 1;
  var result = 1;
 
  for (var i = 1; i <= num; i++) {
    result *= i;
  }
    
  result = "Giai thừa: " + result;
  document.getElementById("txtResult3").innerHTML = result;
}


function taoDiv(){
  var a = 10  
  var content = "";

  for (var  n = 1; n <= 10; n++)
   if(n % 2 === 0){
    content += "<div class='bg-danger text-white p-2'>Div chẵn</div>"
   }else(
    content +="<div class='bg-primary text-white  p-2'>Div lẻ </div>"
   )
 
  document.getElementById("txtResult4").innerHTML = content;
  content += "\a";

}
