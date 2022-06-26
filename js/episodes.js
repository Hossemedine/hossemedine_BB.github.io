
let season = localStorage.page
let array = []

let api = fetch("./breaking_bad.txt")
  .then(response => response.text())

api.then(function (text) {
  array = csvToArray(text)
  mainFunction(array)
})
function csvToArray(text, delimiter = "/") {

  // slice from start of text to the first \n index
  // use split to create an array from string by delimiter
  const headers = text.slice(0, text.indexOf("\n")).split(delimiter);
  // slice from \n index + 1 to the end of the text
  // use split to create an array of each csv value row
  const rows = text.slice(text.indexOf("\n") + 1).split("\n");


  const arr = rows.map(function (row) {
    const values = row.split(delimiter);
    const el = headers.reduce(function (object, header, index) {
      object[header] = values[index];
      return object;
    }, {});
    return el;
  });

  // return the array
  return arr;
}


function mainFunction(array) {
  var newArray = array.filter(function (e) {
    return e.Season === season;
  });
  listCreaction(newArray);
}


function listCreaction(newArray) {
  var episodes_options = document.getElementById('episode_select') 
  episodes_options.innerHTML =`<option></option>`
  for (let i = 0; i < newArray.length; i++) {
    
    episodes_options.innerHTML += `
  
    <option value="${newArray[i].Episode}" onclick="showinfo(this)"> Episode ${newArray[i].Episode}: ${newArray[i].Title}</option>
    `
  }
}


var ep = document.getElementById('info')
function showInfo(e) {
 
  var newArray = array.filter(function (e) {
    return e.Season === season;
  });
  

  
  info.innerHTML = `
                <H1>${newArray[e - 1].Title}</H1>
                <span><H3>summary :</H3>${newArray[e - 1].Summary} </span> 
                <span><h3>Relace date :</h3>${newArray[e - 1].Date}</span>  
                <span><h3>duration</h3>${newArray[e - 1].Duration_mins}</span>
                <span><h3>Rating_IMDB</h3>${newArray[e - 1].Rating_IMDB}</span>
     
`}

for (let i=0 ; i<5 ; i++){
  linkes[i].addEventListener('click',function(){
     // redirect()
     season = linkes[i].id
    
      localStorage.setItem("page" , linkes[i].id)
           ep.innerHTML=``
      mainFunction(array)
      itiateSeasonNumber()


      
      



  })}

 function itiateSeasonNumber(){
  let per ;
  x=parseInt(season)
  console.log('x',x,typeof(x))
 
  switch(x) {
    case 1:
        per='One';
        break;
    case 2:
      per='Tow';
        break;
    case 3:
      per='Three';
      break;
    case 4:
      per='Four';
      break;
    case 5:
      per='Five';
          
    break;
    default:

  }



  document.getElementById('season_n').innerHTML=`<h1>Season <span>${per}</span></h1>`
 }itiateSeasonNumber()