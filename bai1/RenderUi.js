//Text A
const txta=document.createElement("Text");
txta.innerHTML="A";
txta.style.fontSize='30px';
txta.style.marginRight='50px';
document.body.appendChild(txta);

//Input A
const ina=document.createElement("input");
document.body.appendChild(ina);
const cach=document.createElement("br");
document.body.appendChild(cach);

//Text B
const txtb=document.createElement("Text");
txtb.innerHTML="B";
txtb.style.fontSize='30px';
txtb.style.marginRight='50px';
document.body.appendChild(txtb);

//Input B
const inb=document.createElement("input");
inb.style.margin=50;
document.body.appendChild(inb);
const cachb=document.createElement("br");
document.body.appendChild(cachb);

//Button Tong
const tong=document.createElement("button");
tong.innerHTML="Tinh tong";
tong.style.color="blue";
tong.style.margin='20px';
tong.style.fontSize='20px'
document.body.appendChild(tong);
tong.onclick=function(){
    var a=parseInt(ina.value);
    var b=parseInt(inb.value);
    const Xuat=document.createElement('span');
    Xuat.innerHTML=a+b;
    document.body.appendChild(Xuat);
};

