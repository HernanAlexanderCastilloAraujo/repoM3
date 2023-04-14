const levelOne = (a, b) => {
    return a + b;
};

const levelTwo = (letras) => {
    if (letras.length < 2) {
        return letras;
    } else if(letras.length == 2) {
        return letras[0];
    } else {
        const dataReturn = [];
        for (let i = 0; i < letras.length; i++) {
            if (i % 2 == 0) {
                dataReturn.push(letras[i]);
            }

    }
    return dataReturn.join('');
}
};

const levelThree = (a, b) => {
    return a.concat(b).sort();
};

const levelFour = (num) => {

const sum = num.toString().split('').reduce((a, b) => {
    return parseInt(a) + parseInt(b);
});

const sumReverse = sum.toString().split('').reverse().join('');
const multiplication = sum * sumReverse;

if(num == multiplication) {
    return true;
}
return false;
};

module.exports = { levelOne, levelTwo, levelThree, levelFour };
