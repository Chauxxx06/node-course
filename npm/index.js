/* const isOdd = require('is-odd');
console.log(isOdd(4)); */

const bcrypt = require('bcrypt');
const password = '12345';
bcrypt.hash(password, 5, (err, hash) => {
    console.log(hash);
    bcrypt.compare(password, hash, (err, res) => {
        console.log(res);
    });
});


const moment = require('moment');
let ahora = moment();
console.log(ahora.format('YYYY/MM/DD HH:mm'));

const sharp = require('sharp');
sharp('./images/kotty.jpg').resize(80).toFile('resize.png');

