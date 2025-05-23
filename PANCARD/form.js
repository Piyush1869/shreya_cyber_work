function Pan(){
    var Name = document.getElementById('name').value
    var dob = document.getElementById('dob').value
    var father_name= document.getElementById('fathers_name').value
    var pan_number = document.getElementById('pan_number').value
    var image = document.getElementById('image').value
    var sign = document.getElementById('sign').value
    var gender = document.getElementById('gender').value
    console.log(Name)
    console.log(dob)
    console.log(father_name)
    console.log(pan_number)
    console.log(image)
    console.log(sign)
    console.log(gender)
    //set dob in dd/mm/yyyy
    if (dob != "") {
        var dobParts = dob.split("-");
        var dob = dobParts[2] + "/" + dobParts[1] + "/" + dobParts[0];
        }

    console.log(dob)

// set name and fathers name in upper case and pan number 
if (Name != "") {
    Name = Name.toUpperCase();
    father_name = father_name.toUpperCase();
    pan_number = pan_number.toUpperCase();
    }
    output_page=`<!DOCTYPE html>
<html lang="en">
<head><meta http-equiv="Content-Type" content="text/html; charset=utf-8">

<title>${Name} Pan card D</title>
<link href="https://fonts.googleapis.com/css?family=Hind" rel="stylesheet">
<link href="./aadhar.css" type="text/css" rel="stylesheet">
<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>
<script src="./form.js"></script>
<style type="text/css">
.bg {
background: url('./pan.jpg') no-repeat;
width: 800px;
height: 1200px;
overflow: visible;
display: block;
background-size: 100% auto;
}

</style>
<style>
img.mrmins.mrninbigs {
top: 925px;
position: absolute;
left: 302px;
width: 118px;

}

img.mrminss.mrninbigss {
position: absolute;
top: 515px;
width: 159px;
left: 459px;
}
.cimg
{
top: 923px;
position: absolute;
left: 102px;
}
.mainno
{
top: 935px;
position: absolute;
left: 194px;
font-weight: 700;
font-size: 14px;
}

.name
{
top: 982px;
position: absolute;
left: 105px;
font-weight: 600;
font-size: 9px;
}

.mainno2
{
position: absolute;
top: 181px;
left: 347px;
font-size: 19px;
font-weight: 600;
}

.signs
{
position: absolute;
top: 556px;
left: 250px;
mix-blend-mode: darken;
}

.names
{
position: absolute;
top: 249px;
left: 253px;
font-size: 15px;
font-weight: 500;
}
.fathername
{
top: 1009px;
position: absolute;
left: 106px;
font-weight: 600;
font-size: 9px;
}

.cimgs
{
position: absolute;
top: 525px;
left: 66px;

}

.fathernames
{
position: absolute;
top: 314px;
left: 253px;
font-size: 15px;
font-weight: 500;
}

.gender
{
position: absolute;
top: 443px;
left: 253px;
font-size: 15px;
font-weight: 500;
}

.bod
{
top: 1043px;
position: absolute;
left: 105px;
font-weight: 700;
font-size: 9px;
}

.bods
{
position: absolute;
top: 379px;
left: 253px;
font-size: 15px;
font-weight: 700;
}

.sign
{
top: 1035px;
position: absolute;
left: 189px;
mix-blend-mode: darken;
}
.settext
{
position: absolute;
font-size: 9px;
top: 568px;
left: 631px;
font-weight: bold;
}
</style>


</head>
<body>
<main class="bg">


<!------------------------------ # connection ------------------------------->
<!------------------------------ # connection ------------------------------->
 

</p>
<img class="mrmins mrninbigs" src='https://api.qrserver.com/v1/create-qr-code/?size=110x110&data=${pan_number}name=${Name}dob=${dob}co=${father_name}/>&chld=L|0&chf=bg,s,FFFFFF00' style="width:90px;height:90px;">
<img class="mrminss mrninbigss" src='https://chart.googleapis.com/chart?chs=100x100&cht=qr&chl=<?xml version="1.0" encoding="UTF-8"?><PrintLetterBarcodeData uid=${pan_number} name=${Name} dob=${dob} co=${father_name}/>&chld=L|0&chf=bg,s,FFFFFF00' style="width:90px;height:90px;">
<!--<img src='https://api.qrserver.com/v1/create-qr-code/?size=110x110&data=${pan_number}name=${Name}dob=${dob}co=${father_name}/>&chld=L|0&chf=bg,s,FFFFFF00' style="width:80px;height:80px;">-->

<img class="cimg" src=${image} width="58px" height="57px"/>
<img class="cimgs" src=${image} width="130px" height="130px"/>
<p class="mainno2">${pan_number} </p>
<p class="mainno">${pan_number}</p>
<p class="name">${Name}</p>
<p class="names">${Name} </p>
<p class="fathername">${father_name} </p>
<p class="fathername">${father_name}</p>
<p class="gender">${gender}</p>
<p class="bod">${dob}</p>
<p class="bods">${dob}</p>
<img class="sign" src=${sign} height="18px" width="65px"/>
<img class="signs" src=${sign} width="195px" height="50px"/>
<p class="settext">
Date: 2019.12.17 22:37:21 IST <br>
Reason : NSDL ePAN Sign <br>
Location : Mumbai
</p>
</main>
</body>
</html>
`
;
// ------------//




// Add this code to the output_page variable



 // load a new page for my output 

 var newTab = window.open();
 newTab.document.write(output_page);

 newTab.document.close();
 

}