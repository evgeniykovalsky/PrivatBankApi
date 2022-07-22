
'use strict'; 

 let url = '/privat.json';
 let selectOblast=document.getElementById('oblast');




let request = new XMLHttpRequest();
request.open('GET', url);
request.responseType = 'text'; // now we're getting a string!
request.send();

request.onload = function() {
  let data = request.response; // get the string from the response
 let  pbViddilennia = JSON.parse(data); // convert it to an object
 // console.log(pbViddilennia);
  showViddilennia(pbViddilennia);
  
}

function showViddilennia(jsonObj) {
  let  pbVid = jsonObj;
  let oblastList=[];

  for (var i = 0; i < pbVid.length; i++) {
    if(pbVid[i].country=='Украина'){

       if(!oblastList.includes(pbVid[i].city)){
        let option = document.createElement('option');
        option.value=pbVid[i].city;
        option.innerText=pbVid[i].city;
        option.classList.add('my');
      
        selectOblast.appendChild(option);

        oblastList.push(pbVid[i].city);
        console.log(oblastList[i]);
      
        
       }
      }
    
  }
}