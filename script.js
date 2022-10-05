// let addOne = document.querySelector('.add1')
// let addTwo = document.querySelector('.add2')
// let addThree = document.querySelector('.add3')

let firstScore = document.querySelector('#homeScore')
let secondScore = document.querySelector('#guestScore')
let finalScore = document.querySelector('.winlose')
let foulScore = document.querySelector('.foul')
let foulScore1 = document.querySelector('#foul')
let periodScore = document.querySelector('#periodScore')


let count = 0

function add1(){
    count += 1
    firstScore.textContent = count
    
}

function add2(){
    count += 2
    firstScore.textContent = count
    
}

function add3(){
    count += 3
    firstScore.textContent = count
    
}

let count1 = 0
// guestScore
function addGuest1(){
    count1 += 1
    guestScore.textContent = count1

}

function addGuest2(){
    count1 += 2
    guestScore.textContent = count1
}

function addGuest3(){
    count1 += 3
    guestScore.textContent = count1
}

function reset(){
    count = 0
    count1 = 0
    foulCount = 0
    foulCount1 = 0
    periodCount = 1
    // console.log(count)
    guestScore.textContent = count1
    firstScore.textContent = count
    foulScore.textContent = foulCount
    foulScore1.textContent = foulCount
    periodScore.textContent = periodCount
}

let foulCount = 0

function foul(){
    foulCount += 1
    foulScore.textContent = foulCount
}
let foulCount1 = 0

function foul1(){
    foulCount1 += 1
    foulScore1.textContent = foulCount1
}

let periodCount = 1

function period(){
    periodCount += 1
    periodScore.textContent = periodCount
}

// function winLose(){
//     if (count > count1){
//         finalScore.textContent = "Home is winning!"
//     }else if (count < count1) 
//         finalScore.textContent = 'Guest is winning!'
//     else {
//         finalScore.textContent = "It's a draw!"
//     }
// }
// winLose()