let container=document.createElement('div')
container.setAttribute("class",'container p-3 border border-dark ')

let heading=document.createElement('h3');
heading.setAttribute('class','p-3 m-3 text-center text-dark  justify-content-center');
heading.innerText="DOM Maniplation With Forms";
document.body.appendChild(heading)


let form=document.createElement('form');
form.setAttribute('class','row g-3');
//First Name Field
let div1=document.createElement('div');
div1.setAttribute('class','col-md-4');
// Label for First Name
let labelFirst=document.createElement('label');
labelFirst.setAttribute('for','FirstName');
labelFirst.setAttribute('class','form-label');
labelFirst.innerText='First Name';
// Input for First Name
let inputFirst=document.createElement('input');
inputFirst.setAttribute('type','text');
inputFirst.setAttribute('class','form-control');
inputFirst.setAttribute('id','inputFirst4');

div1.appendChild(labelFirst);
div1.appendChild(inputFirst);
form.appendChild(div1);

//Last Name Field
let div2=document.createElement('div');
div2.setAttribute('class','col-md-4');
//Last Name Label
let labelLast=document.createElement('label');
labelLast.setAttribute('for','LastName');
labelLast.setAttribute('class','form-label');
labelLast.innerText='Last Name';
//Input field for Last Name 
let inputLast=document.createElement('input');
inputLast.setAttribute('type','text');
inputLast.setAttribute('class','form-control');
inputLast.setAttribute('id','inputFirst4');

div2.appendChild(labelLast);
div2.appendChild(inputLast);
form.appendChild(div2);

//Gender Field
let div3=document.createElement('div');
div3.setAttribute('class','col-md-4');
//Last Name Label
let labelGender=document.createElement('label');
labelGender.setAttribute('for','Gender');
labelGender.setAttribute('class','form-label');
labelGender.innerText='Gender';

//Input field for Last Name 
let inputGender=document.createElement('input');
inputGender.setAttribute('type','text');
inputGender.setAttribute('class','form-control');
inputGender.setAttribute('id','Genderselect');
div3.appendChild(labelGender);
div3.appendChild(inputGender);
form.appendChild(div3);


let div4=document.createElement('div');
div4.setAttribute('class','col-12');
//Address Label
let labelAddress=document.createElement('label');
labelAddress.setAttribute('for','Address');
labelAddress.setAttribute('class','form-label');
labelAddress.innerText='Address';
//Input field for Address 
let inputAddress=document.createElement('input');
inputAddress.setAttribute('type','text');
inputAddress.setAttribute('class','form-control');
inputAddress.setAttribute('id','inputFirst4');

div4.appendChild(labelAddress);
div4.appendChild(inputAddress);
form.appendChild(div4);

//pincode
let div5=document.createElement('div');
div5.setAttribute('class','col-md-4');
//Pincode Label
let labelPincode=document.createElement('label');
labelPincode.setAttribute('for','Pincode');
labelPincode.setAttribute('class','form-label');
labelPincode.innerText='Pincode';
//Input field for Pincode
let inputPincode=document.createElement('input');
inputPincode.setAttribute('type','text');
inputPincode.setAttribute('class','form-control');
inputPincode.setAttribute('id','inputFirst4');

div5.appendChild(labelPincode);
div5.appendChild(inputPincode);
form.appendChild(div5);

//State
let div6=document.createElement('div');
div6.setAttribute('class','col-md-4');
//State Label
let labelState=document.createElement('label');
labelState.setAttribute('for','Pincode');
labelState.setAttribute('class','form-label');
labelState.innerText='State';
//Input field for State
let inputState=document.createElement('input');
inputState.setAttribute('type','text');
inputState.setAttribute('class','form-control');
inputState.setAttribute('id','inputFirst4');

div6.appendChild(labelState);
div6.appendChild(inputState);
form.appendChild(div6);

//Country
let div7=document.createElement('div');
div7.setAttribute('class','col-md-4');
//Country Label
let labelCountry=document.createElement('label');
labelCountry.setAttribute('for','Country');
labelCountry.setAttribute('class','form-label');
labelCountry.innerText='Country';
//Input field for Country
let inputCountry=document.createElement('input');
inputCountry.setAttribute('type','text');
inputCountry.setAttribute('class','form-control');
inputCountry.setAttribute('id','inputFirst4');

div7.appendChild(labelCountry);
div7.appendChild(inputCountry);
form.appendChild(div7);




//choice of food using radio button
let divf=document.createElement('div');
divf.setAttribute('class','col-md-3');
//food Label
let labelfoodH=document.createElement('label');
labelfoodH.setAttribute('for','Country');
labelfoodH.setAttribute('class','form-label');
labelfoodH.innerText='Choose atleast 2 places you like';
divf.appendChild(labelfoodH);
form.appendChild(divf);


let divc1=document.createElement('div');
divc1.setAttribute('class','form-check');

let inputfood1=document.createElement('input');
inputfood1.setAttribute('type','radio');
inputfood1.setAttribute('class','form-check-input m-1');
inputfood1.setAttribute('id','gridcheck');

let labelfood1=document.createElement('label');
labelfood1.setAttribute('for','gridcheck');
labelfood1.setAttribute('class','form-check-label');
labelfood1.innerText='Beach';

divc1.appendChild(inputfood1);
divc1.appendChild(labelfood1);
form.appendChild(divc1);

let divc2=document.createElement('div');
divc2.setAttribute('class','form-check');

let inputfood2=document.createElement('input');
inputfood2.setAttribute('type','radio');
inputfood2.setAttribute('class','form-check-input m-1');
let labelfood2=document.createElement('label');
labelfood2.innerText='Temple';

divc2.appendChild(inputfood2);
divc2.appendChild(labelfood2);
form.appendChild(divc2);

let divc3=document.createElement('div');
divc3.setAttribute('class','form-check');
let inputfood3=document.createElement('input');
inputfood3.setAttribute('type','radio');
inputfood3.setAttribute('class','form-check-input m-1');
let labelfood3=document.createElement('label');
labelfood3.innerText='Restaurant';
divc3.appendChild(inputfood3);
divc3.appendChild(labelfood3);
form.appendChild(divc3);

let divc4=document.createElement('div');
divc4.setAttribute('class','form-check');
let inputfood4=document.createElement('input');
inputfood4.setAttribute('type','radio');
inputfood4.setAttribute('class','form-check-input m-1');
let labelfood4=document.createElement('label');
labelfood4.innerText='Library';
divc4.appendChild(inputfood4);
divc4.appendChild(labelfood4);
form.appendChild(divc4);


//submit
let div9=document.createElement('div');
div9.setAttribute('class','col-auto');

let button=document.createElement('button');
button.setAttribute('type','submit');
button.setAttribute('class','btn btn-primary');
button.innerText='Submit';
div9.appendChild(button);
form.appendChild(div9);

container.appendChild(form);
document.body.appendChild(container);
