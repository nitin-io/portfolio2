let topCloud = document.getElementById('top-cloud');
let bottomCloud = document.getElementById('bottom-cloud');
let titles = document.getElementById('titles');

document.addEventListener('scroll', function(){
    let value = window.scrollY;
    console.log(value);
    topCloud.style.right = 25 + value * -0.2 + '%';
    bottomCloud.style.left = 25 + value * -0.2 + '%';
    titles.style.top = 50 + value * -1 + '%';
})

// function typer(title){
//     const titleArray = title.split('');
//     for (let i = 0; i < titleArray.length; i++) {
//             console.log(titleArray[i]);

//     }
// }



let blink = document.querySelector('#blink');

setInterval(function (){
    if(blink.style.opacity == 1){
        blink.style.opacity = 0;
    }
    else{
        blink.style.opacity = 1;
    }
}, 800);
