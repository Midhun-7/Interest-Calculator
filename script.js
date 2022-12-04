function compute()
{
    var principal = document.getElementById("principal").value;
    if(principal<=0){
        alert("Enter a positive number");
    }
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    document.getElementById("result1").innerHTML="If you deposit ";
    document.getElementById("result2").innerHTML=principal+",";
    document.getElementById("result3").innerHTML="\<br\>at an interest rate of ";
    document.getElementById("result4").innerHTML=rate+"%";
    document.getElementById("result5").innerHTML="\<br\>You will receive an amount of ";
    document.getElementById("result6").innerHTML=interest+",";
    document.getElementById("result7").innerHTML="\<br\>in the year "
    document.getElementById("result8").innerHTML=year;  
    document.querySelector("Button").addEventListener("click",updateRate);
}
// var slider = document.getElementById("rate");
// var output = document.getElementById("rate_val");
// output.innerHTML = slider.value;
// console.log(slider.oninput = function() {
//   output.innerHTML = this.value;
// });
function updateRate() 
{
    var rateval = document.getElementById("rate").value+"%";
    document.getElementById("rate_val").innerHTML=rateval;
}
        