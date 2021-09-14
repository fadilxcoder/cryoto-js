# Notes

- Decrypt string

```
 <script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.0.0/crypto-js.min.js"></script>
<script>
    var DataEncrypt = "icAESDk4FQYhhubVwCPExcnax7VMUxfHJlbrbGKg3cXBRg2ZqHRf8uXk9hOnSFVlcsuerf1+62RxmZVrXS4n1UqBiv8ruZnj00BMWnOa5u0=";

    var DataKey = CryptoJS.enc.Utf8.parse("37305569879051012722482875850017");
    var DataVector = CryptoJS.enc.Utf8.parse("8975106574091384");

    var decrypted = CryptoJS.AES.decrypt(DataEncrypt, DataKey, { iv: DataVector });        
    var decrypted = CryptoJS.enc.Utf8.stringify(decrypted);

    console.log(DataEncrypt);
    console.log(decrypted);
</script>
```