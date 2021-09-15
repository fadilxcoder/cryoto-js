import CryptoJS from "crypto-js";
// var CryptoJS = require("crypto-js");

// Same object in PHP
const DataDecrypt = {
    name: 'Fadil Xcoder',
    email: 'fadil@xcoder.dvlpr', 
    idx: "6LX8224JXXYQ740T"
};

// PHP encrypted string
const DataEncrypt = "icAESDk4FQYhhubVwCPExcnax7VMUxfHJlbrbGKg3cXBRg2ZqHRf8uXk9hOnSFVlcsuerf1+62RxmZVrXS4n1UqBiv8ruZnj00BMWnOa5u0=";

// KEYS & IV
const DataKey = CryptoJS.enc.Utf8.parse("37305569879051012722482875850017");
const DataVector = CryptoJS.enc.Utf8.parse("8975106574091384");

// Encrypting Object using JS result the same response as in PHP
var jsEncr = CryptoJS.AES.encrypt(JSON.stringify(DataDecrypt), DataKey, { iv: DataVector }).toString();

// Decrypt the PHP string
var bytes  = CryptoJS.AES.decrypt(DataEncrypt, DataKey, { iv: DataVector });
var phpDecr = bytes.toString(CryptoJS.enc.Utf8);

console.log(phpDecr);
console.log(jsEncr);
