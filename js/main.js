//Free memory / ssd / deliary
function freeProduct(price, fildPrice, condition) {
    const inputPrice = document.getElementById(fildPrice + '-cost').innerText;
    const inputNumber = parseInt(inputPrice);
    const inputNumberPrice = inputNumber.value = price;
    if (condition == true) {
        const memoryCost = document.getElementById('extra-memory-cost').innerHTML = inputNumberPrice;
       //total cost
       const regulurCharge = document.getElementById('regulerCost').innerText;
       const regulerChargeNumber = parseInt(regulurCharge);
       const totalMemory = regulerChargeNumber + memoryCost;
       document.getElementById('total').innerHTML = totalMemory;
    }
    else if (condition == false) {
        const ssdamount = document.getElementById('extra-ssd-cost').innerHTML = inputNumberPrice;
        //total cost
        const regulurCharge = document.getElementById('regulerCost').innerText;
        const regulerChargeNumber = parseInt(regulurCharge);
        const totalSsd = regulerChargeNumber + ssdamount;
        document.getElementById('total').innerHTML = totalSsd;
    }
    else if(condition == 'del'){
        dAmount = document.getElementById('extra-delivary-cost').innerHTML = inputNumberPrice;
        //total cost
       const regulurCharge = document.getElementById('regulerCost').innerText;
       const regulerChargeNumber = parseInt(regulurCharge);
       const totalDelivery = regulerChargeNumber + dAmount;
       document.getElementById('total').innerHTML = totalDelivery;
    }
}




// Extra cost 

function costProduct(price , fildPrice, condition) {
    const inputCost = document.getElementById(fildPrice + '-cost').innerText;
    const inputNumber = parseInt(inputCost);
    const fildNumberPrice = inputNumber.value = price;
    if (condition == true) {
        const memoryCost = document.getElementById('extra-memory-cost').innerHTML = fildNumberPrice;
        //total cost
        const regulurCharge = document.getElementById('regulerCost').innerText;
        const regulerChargeNumber = parseInt(regulurCharge);
        const totalMemory = regulerChargeNumber + memoryCost;
        document.getElementById('total').innerHTML = totalMemory;

    }
    else if (condition == '512ssd') {
        const ssdCost = document.getElementById('extra-ssd-cost').innerHTML = fildNumberPrice;
        //total cost
        const regulurCharge = document.getElementById('regulerCost').innerText;
        const regulerChargeNumber = parseInt(regulurCharge);
        const totalSsd = regulerChargeNumber + ssdCost;
        document.getElementById('total').innerHTML = totalSsd;
    }
    else if (condition == false) {
        const tbssd = document.getElementById('extra-ssd-cost').innerHTML = fildNumberPrice;
        //total cost
        const regulurCharge = document.getElementById('regulerCost').innerText;
        const regulerChargeNumber = parseInt(regulurCharge);
        const totalSsd = regulerChargeNumber + tbssd;
        document.getElementById('total').innerHTML = totalSsd;
    }
    else if (condition == 'dCost') {
        dCost = document.getElementById('extra-delivary-cost').innerHTML = fildNumberPrice;
        //total cost
        const regulurCharge = document.getElementById('regulerCost').innerText;
        const regulerChargeNumber = parseInt(regulurCharge);
        const totalSsd = regulerChargeNumber + dCost;
        document.getElementById('total').innerHTML = totalSsd;
    }
}
//////////////////////////////////////Total price////////////////////////////////// 
function totalPrice() {
    //Best Price
    const bestPrice = document.getElementById('regulerCost').innerText;
    const bestPriceNumber = parseInt(bestPrice);

    //Memory cost
    const memoryPrice = document.getElementById('extra-memory-cost').innerText;
    const memoryPriceNumber = parseInt(memoryPrice);

    //Storage Cost
    const storagePrice = document.getElementById('extra-ssd-cost').innerText;
    const storageNumber = parseInt(storagePrice);

    //Delivery Charge 
    const deliveryPrice = document.getElementById('extra-delivary-cost').innerText;
    const deliveryNumber = parseInt(deliveryPrice);

    //Total Price Sum
    const TotalResult = bestPriceNumber + memoryPriceNumber + storageNumber + deliveryNumber;
    document.getElementById('total').innerHTML = TotalResult;
    document.getElementById('totalAmount').innerHTML = TotalResult;

}


//////////////////////////////////////Promo code////////////////////////////////// 

function promoCode(inputText ,num) {
    const promoInput = document.getElementById(inputText).value;
    if (promoInput == num) {
        const totalAmount = document.getElementById('total').innerText;
        const totalNumber = parseInt(totalAmount);

        const discountPrice = totalNumber / 100;
        const discountNumber = discountPrice * 80;
        const mround = Math.round(discountNumber);
        document.getElementById('totalAmount').innerHTML = mround;
        promoInput.value == "";
    }
    
}




///////////////////////////////////////EVENT//////////////////////////////////////////

// Free memory- ssd- deliary //
    //memory
document.getElementById('8gb-memory').addEventListener('click', function () {
    freeProduct(0, 'extra-memory', true);
    totalPrice();
})
    //ssd
document.getElementById('256gb-ssd').addEventListener('click', function () {
    freeProduct(0 , 'extra-ssd', false);
    totalPrice();
})
    //delivary
document.getElementById('free-Delivery').addEventListener('click', function () {
    freeProduct(0, 'extra-delivary', 'del');
    totalPrice();
})




//extra cost ($)//
    
    //memory one device
document.getElementById('16gb-memory').addEventListener('click', function () {
    costProduct(180, 'extra-memory', true);
    totalPrice();
})

    //ssd two device

document.getElementById('512gb-ssd').addEventListener('click', function () {
    costProduct(100, 'extra-ssd', '512ssd');
    totalPrice();
})

document.getElementById('1tb-ssd').addEventListener('click', function () {
    costProduct(180, 'extra-ssd', false);
    totalPrice();
})


    //delivary one device

document.getElementById('delivery-cost').addEventListener('click', function () {
    costProduct(20, 'extra-delivary', 'dCost');
    totalPrice();
})




//promo code //

document.getElementById('promo').addEventListener('click', function () {
    promoCode('copun','stevekaku');
})