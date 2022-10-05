// let addOne = document.querySelector('.add1')
// let addTwo = document.querySelector('.add2')
// let addThree = document.querySelector('.add3')

let firstScore = document.querySelector('#homeScore')
let secondScore = document.querySelector('#guestScore')

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
    // console.log(count)
    guestScore.textContent = count1
    firstScore.textContent = count
}

// function winLose(){
    if (count > count1){
        console.log('Home is winning!')
    }else if (count < count1) {
        console.log('Guest is winning!')
    }else {
        console.log("It's a draw!")
    }
// }
// winLose()