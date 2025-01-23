const tombolone = document.getElementById('tombolone');
const allNumbers = [];
const drawNum = [];
for (i = 1; i <= 76; i++) {
    allNumbers.push(i)
}
console.log(allNumbers)

const createTobolone = function () {
    for (i = 1; i <= 76; i++) {
        tombolone.innerHTML +=
            `<div id=${i} class='casella'>${i}</div>`
    }
}

const estraiNum = function () {
    if (drawNum.length === 76) {
        alert('Sono stati estratti tutti i numeri')
        return;
    }
    let estratto
    do {
        estratto = Math.floor(Math.random() * 76) + 1;
    } while (drawNum.includes(estratto))
    drawNum.push(estratto)
    console.log(drawNum)
    document.getElementById('estrazione').innerText = `Il numero estratto è: ${estratto}`
    document.getElementById(estratto).classList.add('colora')
}

createTobolone()