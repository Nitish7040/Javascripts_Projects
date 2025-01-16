// generate a random color

const randomcolor = function(){
    const hex = '0123456789ABCDEF';
    let color ='#';
    for(let i=0;i<6;i++){
        color += hex[Math.floor(Math.random()*16)];
    }
    return color;
}



function changebgcolor(){
    document.body.style.backgroundColor = randomcolor();}
const startchangingcolor = function(){


    intervalid = setInterval(changebgcolor ,0 );
  

};

const stopchangingcolor = function(){

    clearInterval(intervalid)
};

document.querySelector('#start').addEventListener('click' , startchangingcolor);

document.querySelector('#stop').addEventListener('click' , stopchangingcolor)