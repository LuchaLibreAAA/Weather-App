outputcenter.style.display=`none`;

async function fetchdata(place) {
    const KEY=`95deb52009084fc9b86123003263001`;

try{
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${KEY}&q=${place}`);    
    


if(response.status==400 ){
   throw new Error(`place not found`);
   }
   else if(response.status>400 ){
   throw new Error(`Internal server error`);
   }
   else {}
    
  const data=await response.json();

  //  console.log(data); only for deployment
     
    bigcityname.textContent=`${data.location.name.toUpperCase()} , ${(data.location.country).toUpperCase()}`;
  let temp=data.current.temp_c;
  temperature.textContent=`${temp}°C`
  let cond=data.current.condition.text;
  remarks.textContent=cond;
  let emo=data.current.condition.icon;
  emoji.innerHTML=`<img src=${emo}>`;
  let humidity=data.current.humidity;
  property1.textContent=`Humidity : ${humidity} %`;

}
catch(error){
    console.log(error);
    bigcityname.textContent=error;
      temperature.textContent=null;
 emoji.innerHTML=``;
 property1.textContent=``;
  remarks.textContent=``;
}
}
submit.addEventListener("click",()=>{

let placename=document.getElementById("cityname").value;
fetchdata(placename);

outputcenter.style.display=`inline-block`;
if (getComputedStyle(userinterface).marginTop === '700px') {// get computed references back to the css stylesheet which is not possible normally
    userinterface.style.marginTop = '100px';
}

}

)
