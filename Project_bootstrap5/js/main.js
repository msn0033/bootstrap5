const progressDiv=document.querySelector(".progress-Div"),
      progressBars=document.querySelectorAll(".progress-bar"),
      counterDiv=document.querySelector(".counter-Div"),
      counterTag=document.querySelectorAll(".counter-Div h3");

          /* Scroll Out Initialize */
      ScrollOut({
        targets:".progress-Div , .counter-Div"
      });

         /* Scroll Out Initialize */
      window.addEventListener("scroll",()=>{
          //progress Bar
          if(progressDiv.dataset.scroll=="in")
          {
              progressBars.forEach(el=>{
                  let valueNow =el.getAttribute("aria-valuenow");
                  el.style.width=valueNow + "%";
                
                  let counterSpan=el.parentElement.parentElement.querySelector(".progress-value span");
                  let timer=setInterval(() => {
                      if(Number(counterSpan.textContent)< valueNow)
                      {
                          counterSpan.textContent=Number(counterSpan.textContent)+1;
                         
                        
                      }
                      else
                      {
                          clearInterval(timer);
                      }
                      
                  }, 500);
              });
          }
          else{
              progressBars.forEach(el=>{
                  el.style.width = 0 +"%";
                  el.parentElement.parentElement.querySelector(".progress-value span").textContent=0;
                  
              })
              

          }

          //counter
          if(counterDiv.dataset.scroll=="in")
          {
              counterTag.forEach(element => {
                  let timer=setInterval(() => {

                  
                    if(Number(element.innerText)<element.dataset.counter){
                        element.innerText=Number(element.innerText)+1;
                    }
                    else{
                        clearInterval(timer);
                    }
                  }, 1000);
                   
              });
          }
          else
          {
            counterTag.forEach(element => {
                  element.innerText=0;
                  
              });
          }
          


      });

         /* initialize AOS */
      AOS.init( {
       
      });

      //####################################################################
                 //portfolio
      //####################################################################


                     /* filter itesm */

    const liItems=document.querySelectorAll("#portfolio .list-group li"),
          filterd_items=document.querySelectorAll(".filterd-items a");
          liItems.forEach(el=>{
              el.addEventListener('click',()=>{
                  document.querySelector("#portfolio .list-group li.active").classList.remove("active");
                  el.classList.add("active");
                  let valuefilter=el.getAttribute("data-filter");
                  console.log(valuefilter);
                  filterd_items.forEach(item=>{
                      console.log(item);
                      if(item.classList.contains(valuefilter)){
                          item.classList.add("active");
                          item.classList.remove("hidden");
                        
                      }
                      else{
                         item.classList.add("hidden");
                         item.classList.remove("active");
                         
                      }
                  })
              });
          });


          /* ###### lightGallery   ###### */
          lightGallery(document.getElementById('lightgallery'));


          
 /* ###### Mapbox GL JS   ###### */



navigator.geolocation.getCurrentPosition(success,error)
const po=navigator.geolocation.postion;
    function success(po){
        renderMap([po.coords.longitude,po.coords.latitude]);
        console.log(po);
    }
    function error(po){
        console.log(po.message);
    }
     
function renderMap(coords){

mapboxgl.accessToken = 'pk.eyJ1IjoibXNuMDAzMyIsImEiOiJja3d0Y3FmOGIxZjEwMndwbTVpeGpsM2xkIn0.qDQf-ub-80o1GqTQtnlJJQ';
var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/streets-v11',
center:coords,
zoom:13,

});


// Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl(),'top-left');
map.addControl(
    new MapboxDirections({
    accessToken: mapboxgl.accessToken
    }),
    'bottom-left'
    );
}


// test map


//document.querySelector('#find-me').addEventListener('click','');






    
