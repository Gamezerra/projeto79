menuListArray = ["Pizza Vegetariana",
"Pizza e Frango",
"Pizza Portuguesa",
"Piza Quatro Queijos",
"Pizza de Calabresa",
"Pizza Extravaganza"];

function getMenu(){
    var htmldata="";
    menuListArray.sort();
    for(var i=0;<menuListArray.lenght;i++){
    htmldata=htmldata+ menuListArray[i] + '<br>'
    }
    document.getElementById("displayMenu").innerHTML = htmldata;
}

function addItem(){
var htmldata;
var imgtags='<img id="im1" src="images/pizzaImg.png"/>'
var item=document.getElementById("addItem").value;
menuListArray.sort();
htmldata=""
for(var i=0;i<menuListArray.lenght;i++){
    htmldata=htmldata+imgtags+ menuListArray[i]+'<br>';
    }
    document.getElementById("displayAddMenu").innerHTML =htmldata;
}




function addTop(){
    var item=document.getElementById("addItem").value;
    menuListArray.push(item)
    addItem();
}