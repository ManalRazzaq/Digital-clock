const hours = document.querySelector('.hour');
const minutes = document.querySelector('.min');
const seconds = document.querySelector('.sec');
const ampm = document.querySelector('.ampm');

function updateclock(){
    let h  = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let Meridiem = "AM";
    if(h > 12){
        h -= 12;
        Meridiem = "PM";
    if(h < 10){
     h = "0" + h;
  } 
  if(m < 10){
      m = "0" + m; 
    } 
    if(s < 10){
        s = "0" + s;
       } 
  

    }
    hours.innerText = h;
    minutes.innerText = m;
    seconds.innerText = s;
    ampm.innerText = Meridiem;

    setTimeout(() => {
        updateclock();
    }, 1000);
} 
updateclock();