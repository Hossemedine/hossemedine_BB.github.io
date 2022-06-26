var random;
let quotes;
let quote_block=document.getElementById('quote_block');
let api= fetch ('https://www.breakingbadapi.com/api/quotes').
then(resp => resp.json())

api.then(function(e){
   
    quotes=e


})



function generateQuote(){

    let quote_block= document.getElementById('quote_block')
    random=(Math.ceil(Math.random()*70));

    quote_block.innerHTML=`
    <p><span class="q">'</span>${quotes[random].quote}<span>'</span></p>
    <h5><span class="author">Author: </span> ${quotes[random].author}</h5>
    `
    if (quote_block.classList.contains('visible')){
        quote_block.classList.remove('visible')
        quote_block.classList.add('hidden')
    }
    quote_block.style.transition=' ease-in-out 0.5s;'
    quote_block.classList.remove('hidden');
    quote_block.classList.add('visible');

    
}