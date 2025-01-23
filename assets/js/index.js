const tombolone = document.getElementById('tombolone');
const cartelle = document.getElementById('cartelle')
const numnumSchede = document.getElementById('numSchede')
const allNumbers = [];
const schedaNums = [];
const drawNum = [];
for (i = 1; i <= 76; i++) {
    allNumbers.push(i)
}

for (let i = 1; i <= 24; i++) {
    let num = Math.floor(Math.random() * 76) + 1;
    if (!schedaNums.includes(num)) {
        schedaNums.push(num)
        cartelle.innerHTML +=
            `<div id= cartella${num} class='casella'>
        ${num}
        </div>`
    }
}

const createTombolone = function () {
    for (i = 1; i <= 76; i++) {
        tombolone.innerHTML +=
            `<div id='casella${i}' class='casella'>${i}</div>`
    }
}


const estraiNum = function () {
    if (allNumbers.length === 0) {
        alert('Sono stati estratti tutti i numeri')
        return;
    }
    const indexRandom = Math.floor(Math.random() * allNumbers.length);
    let estratto = allNumbers.splice(indexRandom, 1)[0]

    drawNum.push(estratto)
    console.log('Numeri estratti: ', drawNum)
    console.log('Numeri rimanenti: ', allNumbers)
    document.getElementById('estrazione').innerText = `Il numero estratto è: ${estratto}`
    const casellaEstratta = document.getElementById(`casella${estratto}`)
    if (casellaEstratta) {
        casellaEstratta.classList.add('colora')
    }
    if (schedaNums.includes(estratto)){
        document.getElementById(`cartella${estratto}`).classList.add('colora')
    }
}




createTombolone()