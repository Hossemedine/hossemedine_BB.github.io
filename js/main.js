//============fetch api
let api= fetch ('https://www.breakingbadapi.com/api/characters').then(resp => resp.json())
//=================================================

// i used the promise to fire the main function after the fetch is done succecfuly
api.then(function(e){
    main(e)
})

// Variables decleration
let data 
let char_box=document.getElementById('char_box')
let currentPage=1
let pagination=document.getElementById('pagination')
let p_num=document.getElementById('p_num')
let totalElement
let totalPages


//this is the main function that call all other function
function main(e){
    data =e
    totalElement=data.length
    totalPages=Math.ceil(totalElement/10)
    pag()
    showElements()
}

// this function create the pagination bar
function pag(){
    pagination.innerHTML=`
    <span class="prev_btn" id="prev_btn" onclick="updateCurrentPage(this)"><<</span>
        <span id="p_num" class="p_num">page${currentPage} of${totalPages}</span>
        <span class="next_btn" id="next_btn" onclick="updateCurrentPage(this)">>></span>
    `
    }

    //this function update the current page after ech click on the next or prev btn
function updateCurrentPage(btn){
    if(btn.textContent === "<<" && currentPage >1){    
        currentPage =currentPage -1
    }
    if(btn.textContent == '>>' && currentPage<totalPages){
        currentPage = currentPage +1
    }
    pag()
    showElements()
}


// this function is responsible for showing the data in a form of cards
function showElements(){
    char_box.innerHTML=``
    for (let i=(currentPage-1)*10  ;i<currentPage*10 ; i++){
        if(i>totalElement){
            
            break
        }

        char_box.innerHTML +=`
        <div class="card">
    <img src="${data[i].img}" alt="avatr">
    <div class="container">
    <h3><b>${data[i].name}</b></h3>
    <h5>NickName:${data[i].nickname}</h5> 
    <p><span>occupation: </span> ${data[i].occupation}</p>
    <p><span>portrayed: </span> ${data[i].portrayed}</p>
</div>
</div>
        `
        
    

    }
    
}

/*======================================================================== */
                    //I hope i explained the code well
/*======================================================================== */


    /*================Episodes page======================*/

    
    



















