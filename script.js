// TODO: add code here
window.addEventListener("load", function() {
    
   let astronautsList;   
   let astronautsListResponse = myFetch();
   astronautsListResponse.then(function (result) {
    astronautsList = result;
       console.log(astronautsList);
   }).then(function () {
       console.log(astronautsList); 
       let htmlData="";
       for (i=0;i<astronautsList.length;i++)
       {
           htmlData += `<div class="astronaut">
                <div class="bio">
                <h3>${astronautsList[i].firstName} ${astronautsList[i].lastName}</h3>
                <ul>
                    <li>Hours in space: ${astronautsList[i].hoursInSpace}</li>
                    <li>Active: ${astronautsList[i].active}</li>
                    <li>Skills: ${astronautsList[i].skills.toString()}</li>
                </ul>
                </div>
                <img class="avatar" src="${astronautsList[i].picture}">
            </div>`;
       }           
       console.log(htmlData);  
       document.getElementById("container").innerHTML = htmlData;       
   })

});

async function myFetch() {
    let astronauts ;
    astronauts  = await fetch("https://handlers.education.launchcode.org/static/astronauts.json");
    astronauts  = await astronauts .json();
    return astronauts ;
}