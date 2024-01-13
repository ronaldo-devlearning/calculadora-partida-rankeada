let victory = 111;
let defeat = 10;
 
function rank(victory, defeat) {

    let level = '';
    let result = victory - defeat;

    if (result < 10) {
        level = 'Ferro';
        console.log(`O Herói tem de saldo ${result} está no nível de ${level}`);
    }

    if (result > 10 && result <= 20) {
        level = 'Bronze';
        console.log(`O Herói tem de saldo ${result} está no nível de ${level}`);
    }

    if (result > 20 && result <= 50) {
        level = 'Prata';
        console.log(`O Herói tem de saldo ${result} está no nível de ${level}`);
    }

    if (result > 50 && result <= 80) {
        level = 'Ouro';
        console.log(`O Herói tem de saldo ${result} está no nível de ${level}`);
    }

    if (result > 80 && result <= 90) {
        level = 'Diamante';
        console.log(`O Herói tem de saldo ${result} está no nível de ${level}`);
    }

    if (result > 90 && result <= 100) {
        level = 'Lendário';
        console.log(`O Herói tem de saldo ${result} está no nível de ${level}`);
    }

    if (result >= 101) {
        level = 'Imortal';
        console.log(`O Herói tem de saldo ${result} está no nível de ${level}`);
    }

}

rank(victory, defeat);