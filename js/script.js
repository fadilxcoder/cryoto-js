import CryptoJS from "crypto-js";
const axios = require('axios');
// var CryptoJS = require("crypto-js");

// Same object in PHP
const DataDecrypt = {
    name: process.env.API_USER_NAME,
    email: process.env.API_USER_EMAIL, 
    idx: process.env.API_USER_IDX
};

// PHP encrypted string
const DataEncrypt = "icAESDk4FQYhhubVwCPExcnax7VMUxfHJlbrbGKg3cXBRg2ZqHRf8uXk9hOnSFVlcsuerf1+62RxmZVrXS4n1UqBiv8ruZnj00BMWnOa5u0=";

// KEYS & IV
const DataKey = CryptoJS.enc.Utf8.parse(process.env.EKEY);
const DataVector = CryptoJS.enc.Utf8.parse(process.env.IVKEY);

// Encrypting Object using JS result the same response as in PHP
var jsEncr = CryptoJS.AES.encrypt(JSON.stringify(DataDecrypt), DataKey, { iv: DataVector }).toString();

// Decrypt the PHP string
var bytes  = CryptoJS.AES.decrypt(DataEncrypt, DataKey, { iv: DataVector });
var phpDecr = bytes.toString(CryptoJS.enc.Utf8);

// console.log(phpDecr);
// console.log(jsEncr);

const instance = axios.create({
    baseURL: 'http://dev.api.hfx.local/v1',
    timeout: 10000,
    headers: {
        'Authorization': 'Bearer ' + jsEncr
    }
});

instance.get('/users', {})
.then(function (response) {
    // console.log(response.data);
    const elemt = document.getElementById('ulist');

    response.data.forEach(response => {
        // console.log(element);
        const newElement = document.createElement('li');
        const newContent = document.createTextNode(response.name);
        newElement.appendChild(newContent);
        elemt.appendChild(newElement);
    });
});