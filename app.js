
//Phone increment button event handler
const phoneAdd = document.getElementById("phoneAdd");
phoneAdd.addEventListener("click",function(){

    incrementDecrement("phoneUnit","+","phonePrice")
    updateTotal();
})


//Phone decrement button event handler
const phoneMinus = document.getElementById("phoneMinus");
phoneMinus.addEventListener("click",function(){
 
    incrementDecrement("phoneUnit","-","phonePrice")
    updateTotal();   
})


////case increment button event handler
const caseAdd = document.getElementById("caseAdd");
caseAdd.addEventListener("click",function(){

    incrementDecrement("caseUnit","+","casePrice")
    updateTotal();
})



//case decrement button event handler
const caseMinus = document.getElementById("caseMinus");
caseMinus.addEventListener("click",function(){
 
    incrementDecrement("caseUnit","-","casePrice")
    updateTotal();    
})




//remove cart items

const removeItem1 = document.getElementById("removeItem1");
removeItem1.addEventListener("click",function(){
    document.getElementById("item1").style.display = "none";
    document.getElementById("phonePrice").innerText = "0";
    updateTotal(); 
})



const removeItem2 = document.getElementById("removeItem2");
removeItem2.addEventListener("click",function(){
    document.getElementById("item2").style.display = "none";
    document.getElementById("casePrice").innerText = "0";
    updateTotal(); 
})




//Checkout button feature

const checkOut = document.getElementById("checkOut");
checkOut.addEventListener("click",function(){
    alert("Your Order Is Accepted . Thanks for shopping");
})







//Increment and decrement items function

function incrementDecrement(unitId,status,priceId){
    let unit = document.getElementById(unitId).value;
    let unitNumber = parseFloat(unit);
    let price = document.getElementById(priceId).innerText;
    let priceNumber = parseFloat(price);
    const mainPrice = priceNumber / unitNumber;

    if(status=="+"){
        document.getElementById(unitId).value = ++unitNumber;
        let totalUnitPrice =  mainPrice * unitNumber;
        document.getElementById(priceId).innerText = totalUnitPrice;
    }

    else if(status=="-"){
        unitNumber--;
        if(unitNumber>0){
            document.getElementById(unitId).value = unitNumber;
            let totalUnitPrice =  mainPrice * unitNumber;
            document.getElementById(priceId).innerText = totalUnitPrice;
            
        }
    }
    
}



//Update total function

function updateTotal(){
   

    const phonePriceAll = document.getElementById("phonePrice").innerText;
    const casePriceAll = document.getElementById("casePrice").innerText;




    const phonePriceNumber = parseFloat(phonePriceAll);
    const casePriceNumber = parseFloat(casePriceAll);



    const allPrice = phonePriceNumber + casePriceNumber;
    let allTax = (allPrice/100)*5;
    let totalAmount = allPrice + allTax;

    document.getElementById("subtotal").innerText =  allPrice;
    
    document.getElementById("tax").innerText = allTax.toFixed(1);

    document.getElementById("total").innerText = totalAmount;

    if(allPrice==0 && allTax == 0 && totalAmount == 0){
        document.getElementById("checkOut").style.display = "none";
    }
  
}









