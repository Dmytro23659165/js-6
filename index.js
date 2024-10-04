let dz6;
let cyfra = 1;
while (cyfra <= 10) {
    console.log(cyfra)
    cyfra++
}


for (let bear = 1; bear < 20; bear++) {
    if (bear % 2 === 0) {
        console.log(bear);
        continue;
    }
}


let cifr = 7;
console.log(`Таблиця множення числа ${cifr}:`);
for (let cif = 1; cif <= 10; cif++) {
    let resultat = cifr * cif;
    console.log(`${cifr} x ${cif} = ${resultat}`);
}


let nu = 1;
while (nu <= 5) {
    console.log(nu)
    nu++
}



for (let job = 1; job <= 10; job++) {
    if (job === 7) {
        break;
    }
    console.log(job)
}


for (let n = 1; n <= 20; n++) {
    if (n === 11) {
        break;
    }
    console.log(n)
}


let eng = 1;
while (eng <= 20) {
    if (eng % 3 === 0) {
        eng++;
        continue;
    }
    console.log(eng);
    eng++;
}
