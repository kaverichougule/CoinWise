let searchButton=document.querySelector("#input")
let searchInput=document.querySelector("#searchInput")
let audio=new Audio('./images/audio1.mp3')

async function fetchData(url){
    let response= await fetch(url)
    response=await response.json()
    // console.log(response);
    return response;
}
async function moreInfo(apiSymbol){
    audio.play()

    let data=await fetchData(`https://api.coingecko.com/api/v3/coins/${apiSymbol}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`)
    // console.log(data);
    location.href=`details.html?id=${apiSymbol}`
}
searchButton.addEventListener("click",async()=>{
    let response= await fetchData(`https://api.coingecko.com/api/v3/search?query=${searchInput.value}`)
    console.log(response);
    let search_list=document.querySelector(".search_list")
    // console.log(search_list);
    // let count=1;
    // location.href=`${location.pathname}?q=${searchInput.value}`

    search_list.innerHTML=``
    response.coins.map((data,idx)=>{
        let single_result=document.createElement('div')
        single_result.classList.add("single_result")
        single_result.innerHTML=`
            <div class="left">
                <p>${idx+1}</p>
                <img src="${data.large}" alt="Coin Logo">
                <div class="coin_name">
                    <h3>${data.name}</h3>
                    <h3 class="coin_symbol">(${data.symbol})</h3>
                </div>
            </div>
            <button onclick="moreInfo('${data.api_symbol}')">More Info</button>
        `
        // console.log(single_result);
        search_list.append(single_result)
    })

})
