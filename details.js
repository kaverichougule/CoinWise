let Coin_container=document.querySelector(".Coin_container");

let params=new URLSearchParams(window.location.search)
let paramsSearch=params.get('id')

// console.log(params);
// console.log(paramsSearch);

async function detailInfo(apiSymbol){
    let data=await fetch(`https://api.coingecko.com/api/v3/coins/${apiSymbol}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`)
    data=await data.json()
    console.log(data);
    Coin_container.innerHTML=`
        <img src="${data.image.large}" alt="Coin-logo" class="coin_img">

        <div class="right_moreInfo">
            <div class="coin_name">
                <h1>${data.name}</h1>
                <h1 class="coin_symbol">(${data.symbol})</h1>
            </div>
            <div class="coin_price">
                <p>₹ ${data.market_data.current_price.inr}</p>
                <p>$ ${data.market_data.current_price.usd}</p>
                <p>€ ${data.market_data.current_price.eur}</p>
                <p>£ ${data.market_data.current_price.gbp}</p>
            </div>
            <h3>Description: </h3>
            <p id="coin-description">
                ${data.description.en}
            </p>
        </div>
    `
}
detailInfo(paramsSearch)