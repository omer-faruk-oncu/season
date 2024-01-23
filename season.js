let month = Number(prompt("Enter a month (1-12): "))
let day = Number(prompt("Enter a day (1-31): "))

let season
if ((month === 12 && day >= 21) || (month === 1) || (month === 2 && day <= 20)) {
    season = "Winter"
} else if  ((month === 2 && day > 20) || (month === 3) || (month === 4) || (month === 5 && day <= 31)) {
    season = "Spring"
} else if ((month === 6) || (month === 7) || (month === 8) || (month === 9 && day <= 21)) {
    season = "Summer"
} else if ((month === 9 && day > 21) || (month === 10) || (month === 11) || (month === 12 && day <= 21)) {
    season = "Fall"
} else {
    season = "invalid" 
}
alert(season)