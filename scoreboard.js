let homePts=document.getElementById("home-pts")
let homeCount=0
let guestPts=document.getElementById('guest-pts')
let guestCount=0
let quarterIncre = document.getElementById("quarterInc")
let quarter = 0

function homeAdd1pt() {
    homeCount += 1 
    homePts.textContent = homeCount
}

function homeAdd2pt() {
    homeCount += 2 
    homePts.textContent = homeCount
}

function homeAdd3pt() {
    homeCount += 3 
    homePts.textContent = homeCount
}

function guestAdd1pt() {
    guestCount += 1 
    guestPts.textContent = guestCount
}

function guestAdd2pt() {
    guestCount += 2 
    guestPts.textContent = guestCount
}

function guestAdd3pt() {
    guestCount += 3 
    guestPts.textContent = guestCount
}

function resetGame() {
    homePts.textContent = 0
    guestPts.textContent = 0
    quarterIncre.textContent = 0
}

function quarterIncrement() {
    quarter += 1
    quarterIncre.textContent = quarter
        if (quarter > 4 )
            quarterIncre.textContent = "OT"
}
