let homeScore = document.getElementById("home_score")
let guestScore = document.getElementById("guest_score")
let count = 0
let count2 = 0

function home1() {
    count += 1
    homeScore.textContent = count
}

function home2() {
    count += 2
    homeScore.textContent = count
}

function home3() {
    count += 3
    homeScore.textContent = count
}

function guest1() {
    count2 += 1
    guestScore.textContent = count2
}

function guest2() {
    count2 += 2
    guestScore.textContent = count2
}

function guest3() {
    count2 += 3
    guestScore.textContent = count2
}

function reset() {
    count = 0
    count2 = 0
    homeScore.textContent = count
    guestScore.textContent = count2
}
