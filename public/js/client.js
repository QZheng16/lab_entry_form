setInterval(()=>{ 
    const today = new Date();
    const curDate = `${today.getMonth()}/${today.getDay()}/${today.getFullYear()}`;
    let curTime = today.toLocaleTimeString();

    document.querySelector(".nav_bot h3").innerText = curDate;
    document.querySelector(".nav_bot p").innerText = curTime;

}, 1000); 