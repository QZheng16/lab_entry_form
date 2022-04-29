



let updateTime = async ()=>{
    const today = new Date();
    const curDate = today.toLocaleDateString();
    let curTime = today.toLocaleTimeString();
    
    const date = document.querySelector(".nav_bot h3");
    const time = document.querySelector(".nav_bot p");
    
    
    date.innerText = curDate;
    time.innerText = curTime;

 
}


updateTime();

setInterval(updateTime, 1000);