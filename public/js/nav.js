

// Renders and updates time on nav bar
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
// Renders and updates time on nav bar END



// Toggle menu button visibility

const btnHamburger = document.getElementById("btn_menu");

let clicked = false;
btnHamburger.addEventListener('click', ()=>{
    const btn_menu = document.querySelector('[data-tog-menu]');


    if(clicked){
        btn_menu.style.display = 'none';

        //remove displaY inline display property so menu will show on larger screens
        if (btn_menu.style.removeProperty) {
            btn_menu.style.removeProperty('display');
        } else {
            btn_menu.style.removeAttribute('display');
        }

        clicked = false;
    }else{
        btn_menu.style.display = 'flex';

        clicked = true;

    }

});


// Toggle menu button visibility END