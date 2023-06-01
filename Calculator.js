let heading=document.createElement('h5');
heading.setAttribute('class','p-3 m-3 bg-primary text-center text-bg-dark border border-dark justify-content-center');
heading.innerText="Basic Calculator Program Using DOM";
document.body.appendChild(heading)


let containerDIV=document.createElement('div');
containerDIV.setAttribute('class','container p-3 m-3  text-center d-flex align-content-center justify-content-center');

let containerDIV1=document.createElement('div');
containerDIV1.setAttribute('class','calculator p-2 m-5 bg-primary text-bg-dark border border-dark justify-content-center');
let form=document.createElement('form');


let containerDIV2=document.createElement('div');
containerDIV2.setAttribute('class','display')
let input=document.createElement('input');
input.setAttribute('type','text');
input.setAttribute('name','display');
input.setAttribute('class','form-control form-control-lg');
input.setAttribute('style','border-radius:0');
containerDIV2.appendChild(input);
form.appendChild(containerDIV2);

// First Row Elements
let containerDIV3=document.createElement('div');
containerDIV3.setAttribute('class','d-flex p-2 gap-1 justify-content-center bg-primary');
let input1=document.createElement('input');
input1.setAttribute('type','button');
input1.setAttribute('value',' AC ');
input1.setAttribute('style'," width:10vh");
input1.setAttribute('onclick'," display.value = '' ");

containerDIV3.appendChild(input1);

let input2=document.createElement('input');
input2.setAttribute('type','button');
input2.setAttribute('value','DEL');
input2.setAttribute('style'," width:10vh");
input2.setAttribute('onclick'," display.value = display.value.toString().slice(0,-1)");
containerDIV3.appendChild(input2);

let input3=document.createElement('input');
input3.setAttribute('type','button');
input3.setAttribute('value','.');
input3.setAttribute('style'," width:10vh");
input3.setAttribute('onclick'," display.value += '.' ");
containerDIV3.appendChild(input3);

let input4=document.createElement('input');
input4.setAttribute('type','button');
input4.setAttribute('value','/');
input4.setAttribute('style'," width:10vh");
input4.setAttribute('onclick'," display.value += '/' ");
containerDIV3.appendChild(input4);
form.appendChild(containerDIV3);

//Second Row
let containerDIV4=document.createElement('div');
containerDIV4.setAttribute('class','d-flex p-2 gap-1 justify-content-center bg-primary');
let inp1=document.createElement('input');
inp1.setAttribute('type','button');
inp1.setAttribute('value','7');
inp1.setAttribute('style'," width:10vh");
inp1.setAttribute('onclick'," display.value += '7' ");
containerDIV4.appendChild(inp1);

let inp2=document.createElement('input');
inp2.setAttribute('type','button');
inp2.setAttribute('value','8');
inp2.setAttribute('style'," width:10vh");
inp2.setAttribute('onclick'," display.value += '8' ");
containerDIV4.appendChild(inp2);

let inp3=document.createElement('input');
inp3.setAttribute('type','button');
inp3.setAttribute('value','9');
inp3.setAttribute('style'," width:10vh");
inp3.setAttribute('onclick'," display.value += '9' ");
containerDIV4.appendChild(inp3);

let inp4=document.createElement('input');
inp4.setAttribute('type','button');
inp4.setAttribute('value','*');
inp4.setAttribute('style'," width:10vh");
inp4.setAttribute('onclick'," display.value += '*' ");
containerDIV4.appendChild(inp4);
form.appendChild(containerDIV4);

//Third Row
let containerDIV5=document.createElement('div');
containerDIV5.setAttribute('class','d-flex p-2 gap-1  justify-content-center bg-primary');
let inpt1=document.createElement('input');
inpt1.setAttribute('type','button');
inpt1.setAttribute('value','4');
inpt1.setAttribute('style'," width:10vh");
inpt1.setAttribute('onclick'," display.value += '4' ");
containerDIV5.appendChild(inpt1);

let inpt2=document.createElement('input');
inpt2.setAttribute('type','button');
inpt2.setAttribute('value','5');
inpt2.setAttribute('style'," width:10vh");
inpt2.setAttribute('onclick'," display.value += '5' ");
containerDIV5.appendChild(inpt2);

let inpt3=document.createElement('input');
inpt3.setAttribute('type','button');
inpt3.setAttribute('value','6');
inpt3.setAttribute('style'," width:10vh");
inpt3.setAttribute('onclick'," display.value += '6' ");
containerDIV5.appendChild(inpt3);

let inpt4=document.createElement('input');
inpt4.setAttribute('type','button');
inpt4.setAttribute('value','-');
inpt4.setAttribute('style'," width:10vh");
inpt4.setAttribute('onclick'," display.value += '-' ");
containerDIV5.appendChild(inpt4);

form.appendChild(containerDIV5);

//Fourth Row
let containerDIV6=document.createElement('div');
containerDIV6.setAttribute('class','d-flex p-2 gap-1  justify-content-center bg-primary');
let in1=document.createElement('input');
in1.setAttribute('type','button');
in1.setAttribute('value','1');
in1.setAttribute('style'," width:10vh");
in1.setAttribute('onclick'," display.value += '1' ");
containerDIV6.appendChild(in1);

let in2=document.createElement('input');
in2.setAttribute('type','button');
in2.setAttribute('value','2');
in2.setAttribute('style'," width:10vh");
in2.setAttribute('onclick'," display.value += '2' ");
containerDIV6.appendChild(in2);

let in3=document.createElement('input');
in3.setAttribute('type','button');
in3.setAttribute('value','3');
in3.setAttribute('style'," width:10vh");
in3.setAttribute('onclick'," display.value += '3' ");
containerDIV6.appendChild(in3);

let in4=document.createElement('input');
in4.setAttribute('type','button');
in4.setAttribute('value','+');
in4.setAttribute('style'," width:10vh");
in4.setAttribute('onclick'," display.value += '+' ");
containerDIV6.appendChild(in4);

form.appendChild(containerDIV6);

//Fifth Row
let containerDIV7=document.createElement('div');
containerDIV7.setAttribute('class','d-flex p-2 gap-1  justify-content-center bg-primary');
let inpu1=document.createElement('input');
inpu1.setAttribute('type','button');
inpu1.setAttribute('value','0');
inpu1.setAttribute('style'," width:10vh");
inpu1.setAttribute('onclick'," display.value += '0' ");
containerDIV7.appendChild(inpu1);

let inpu2=document.createElement('input');
inpu2.setAttribute('type','button');
inpu2.setAttribute('value','00');
inpu2.setAttribute('style'," width:10vh");
inpu2.setAttribute('onclick'," display.value += '00' ");
containerDIV7.appendChild(inpu2);

let inpu3=document.createElement('input');
inpu3.setAttribute('type','button');
inpu3.setAttribute('value','%');
inpu3.setAttribute('style'," width:10vh");
inpu3.setAttribute('onclick'," display.value += '%' ");
containerDIV7.appendChild(inpu3);

let inpu4=document.createElement('input');
inpu4.setAttribute('type','button');
inpu4.setAttribute('value','=');
inpu4.setAttribute('style'," width:10vh");
inpu4.setAttribute('onclick'," display.value = eval(display.value) ");
containerDIV7.appendChild(inpu4);

form.appendChild(containerDIV7);


containerDIV1.appendChild(form);
containerDIV.appendChild(containerDIV1);
document.body.appendChild(containerDIV);

