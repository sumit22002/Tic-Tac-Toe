let music = new Audio("music.mp3");
let audioTurn = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3");
let isgameover = false;
let turn = "X"




// Function to changem the turn 
const changeTurn = ()=>{
    return turn === "X"?"0":"X"
}






// Function to check for win

const checkWin = ()=>{
    let boxtext = document.getElementsByClassName('boxtext')
    let win = [
        [0,1,2,5,5,0],
        [3,4,5, 5,15,0],
        [6,7,8,5,25,0],
        [0,3,6,-5,15,90],
        [1,4,7,5,15,90],
        [2,5,8,15,15,90],
        [0,4,8,5,15,45],
        [2,4,6,5,15,135],
    ]
    win.forEach(e=>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) &&(boxtext[e[2]].innerText === boxtext[e[1]].innerText) &&(boxtext[e[0]].innerText !== "")){
            document.querySelector(".info").innerText = boxtext[e[0]].innerText + "  Won"
            isgameover = true;
            gameover.play()
            document.querySelector(".imgbox").getElementsByTagName('img')[0].style.width = '180px'
            // document.querySelector(".imgbox").getElementsByTagName('img')[0].style.width = '300px'
            document.querySelector(".line").style.transform = `translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`
            document.querySelector(".line").style.width = "20vw"
        }
        // console.log(e)
    })
}








//* Game Logic
let boxes = document.getElementsByClassName("box")
console.log(boxes)
Array.from(boxes).forEach(element =>{
    
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener("click",()=>{
        if (boxtext.innerText === '') {
            boxtext.innerText = turn
            turn = changeTurn()
            // music.play()

            audioTurn.play()
            checkWin();
            if(!isgameover){
                document.getElementsByClassName("info")[0].innerText = "Turn For "+ turn
            }
        }
    })
    
})






//*Reset button

let reset = document.getElementById("reset")
reset.addEventListener("click",()=>{
    let boxtext = document.querySelectorAll('.boxtext');
    Array.from(boxtext).forEach(element=>{
        element.innerText = ""
    })
    turn = 'X';
    isgameover = false;
        document.getElementsByClassName("info")[0].innerText = "Turn For "+ turn
        document.querySelector(".imgbox").getElementsByTagName('img')[0].style.width = '0px'
        document.querySelector(".line").style.width = "0vw"
    
})