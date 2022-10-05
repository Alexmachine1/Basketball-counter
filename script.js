// let addOne = document.querySelector('.add1')
// let addTwo = document.querySelector('.add2')
// let addThree = document.querySelector('.add3')

let firstScore = document.querySelector('#homeScore')
let secondScore = document.querySelector('#guestScore')

let count = 0

function add1(){
    count += 1
firstScore.textContent = count
    console.log(count)
}

function add2(){
    count += 2
firstScore.textContent = count
    console.log(count)
}

function add3(){
    count += 3
firstScore.textContent = count
    console.log(count)
}

let count1 = 0
// guestScore
function addGuest1(){
    count1 += 1
guestScore.textContent = count1
    console.log(count)
}

function addGuest2(){
    count1 += 2
guestScore.textContent = count1
    console.log(count)
}

function addGuest3(){
    count1 += 3
guestScore.textContent = count1
    // console.log(count)
}