document.getElementById('apply-coupon').addEventListener('click', function(){
    const totalBalanceElement = document.getElementById('total-balance');
    const totalBalance = parseFloat(totalBalanceElement.innerText);
    const appliedDiscount = totalBalance*0.3;
    const updatedBalance = totalBalance - appliedDiscount;
    const updatedBalanceElement = document.getElementById('updated-balance-element');
    updatedBalanceElement.innerText = updatedBalance;
})




document.getElementById('apply-coupon-30').addEventListener('click', function(){
    const inputValueBalance = document.getElementById('input-total');
    const inputBalance = parseFloat(inputValueBalance.value);
    const appliedCoupon = document.getElementById('coupon').value;
    const updatedBalanceElement2 = document.getElementById('updated-balance-display');
    console.log(appliedCoupon.toUpperCase());
    var myReferrence = "DISCO30";
    var coupon = myReferrence.trim();
    console.log(coupon);
    if(appliedCoupon.toUpperCase() === coupon){
        const appliedDiscount2 = inputBalance * 0.3;
        updatedBalance2 = inputBalance - appliedDiscount2;
        updatedBalanceElement2.innerText = updatedBalance2;
        // let appliedCoupon = '';
    }else{
        alert('Please apply valid coupon');
    }
    // console.log(inputBalance);
})