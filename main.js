
/*===================================================================
                  Get api
======================================================================*/ 
async function getApi(){
    const response = await fetch ("https://www.breakingbadapi.com/api/characters/");
    const data = await response.json(); 
    let charbox =document.querySelector('#char_box');
    for(let i=0 ; i< data.length ; i++){
        charbox.innerHTML += `
        <div class="card">
        <img src="${data[i].img}" alt="avatr">
        <div class="container">
        <h2><b>${data[i].name}</b></h2>
        <h3>NickName:${data[i].nickname}</h3> 
        <p><span>occupation: </span> ${data[i].occupation}</p>
        <p><span>portrayed: </span> ${data[i].portrayed}</p>
    </div>
</div>
`}
    }getApi();




