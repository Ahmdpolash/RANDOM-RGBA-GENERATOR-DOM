// window.onload = () => {
//     main()
// }


// ! Project Requirements:
//! Change the background color by generating random rbg color by clicking a button


function main(){
    const container = document.getElementById('root')
    const btn = document.getElementById('change-btn')

    btn.addEventListener('click',function(){
        const randomRgbColor = randomColor()
        container.style.backgroundColor = randomRgbColor ;
    })
}

// ? step 2 - random color generator function

function randomColor (){
    const red = Math.floor(Math.random()*255)
    const green = Math.floor(Math.random()*255)
    const blue = Math.floor(Math.random()*255)

    return `rgb(${red}, ${green}, ${blue})`;
}


