let slider=document.querySelector(".slider")
async function sliderData(){
    let bitcoinRate=await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr')
    bitcoinRate=await bitcoinRate.json()
    let bitcoinIndiaPrice=bitcoinRate.bitcoin.inr;
    let response=await fetch("https://api.coingecko.com/api/v3/search/trending")
    response =await response.json()
    console.log(response.coins);

    for(let i=0;i<response.coins.length;i++){
        // console.log(response.coins[i].item.name);
        let div=document.createElement("div")
        div.classList.add("flex-item-small")
        let price=Math.round(response.coins[i].item.price_btc*bitcoinIndiaPrice*10000)/10000;
        console.log(price);
        div.innerHTML=`
            <div class="flex-item-small card">
                <img src="${response.coins[i].item.thumb}" class="f-left card-image" alt="Coin Image">
                <div class="f-left">
                    <h1>${response.coins[i].item.name} (${response.coins[i].item.symbol})</h1>
                    <p>₹ ${price}</p>
                </div>
            </div>
        `
        slider.append(div)
    }
    
}

window.onload=function(){
    sliderData()
}