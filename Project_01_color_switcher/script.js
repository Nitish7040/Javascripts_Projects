// console.log("this is the color switcher project");

const buttons = document.querySelectorAll('.button');
// console.log(buttons)

const body = document.querySelector("body");
// console.log(body)


buttons.forEach(function (button){
console.log(button);

button.addEventListener('click',function(e){
    console.log(e);
    console.log(e.target);

// bg color is grey
    // if(e.target.id ==='grey'){
    //     // body.style.backgroundColor = 'grey';
    //     body.style.backgroundColor = e.target.id;
    // }


// bg color using switch case 
switch(e.target.id){
    case'grey' :
        body.style.backgroundColor = e.target.id;  
}


// bg color is white

    // if(e.target.id ==='white'){
    //     // body.style.backgroundColor = 'white';
    //     body.style.backgroundColor = e.target.id;
    // }


  // bg color usinf switch case
   switch(e.target.id){
    case 'white':
        body.style.backgroundColor = e.target.id;
   }


// bg color is blue
    if(e.target.id ==='blue'){
        // body.style.backgroundColor = 'blue';
        body.style.backgroundColor = e.target.id;
    }

// bg color is yellow
    if(e.target.id ==='yellow'){
        // body.style.backgroundColor = 'yellow';
        body.style.backgroundColor = e.target.id;
    }
});

});