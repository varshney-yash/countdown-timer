const ipCont=document.getElementById('input-container');
const cntForm=document.getElementById('countdown-form');
const dateEl=document.getElementById('date-picker');
const cntEl=document.getElementById('countdown');
const cntElTitle=document.getElementById('countdown-title');
const cntBtn=document.getElementById('countdown-button');
const timeEl=document.querySelectorAll('span');

let cntTitle='';
let cntDate='';
let cntVal=Date;
let cntActive;
const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

const today=new Date().toISOString().split('T')[0];
dateEl.setAttribute('min',today);

function updateDOM() {
    cntActive=setInterval(()=>{
        const now=new Date().getTime();
        const dist=cntVal-now;
        const days = Math.floor(dist / day);
        const hours = Math.floor((dist % day) / hour);
        const minutes = Math.floor((dist % hour) / minute);
        const seconds = Math.floor((dist % minute) / second);
        // console.log('distance',dist);
        cntElTitle.textContent=`${cntTitle}`;
        timeEl[0].textContent=`${days}`;
        timeEl[1].textContent=`${hours}`;
        timeEl[2].textContent=`${minutes}`;
        timeEl[3].textContent=`${seconds}`;
        ipCont.hidden=true;
        cntEl.hidden=false;
    },second);
}

function updateCountdown(e) {
    e.preventDefault();
    cntTitle=e.target[0].value;
    cntDate=e.target[1].value;
    cntVal=new Date(cntDate).getTime();
    updateDOM();
}

function reset() {
    cntEl.hidden=true;
    ipCont.hidden=false;
    clearInterval(cntActive);
    cntTitle='';
    cntDate='';
}

cntForm.addEventListener('submit',updateCountdown);
cntBtn.addEventListener('click',reset);
