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

Using node.js

- Install https://www.npmjs.com/package/crypto-js
- https://www.npmjs.com/package/http-server (static HTTP server)
- `npm i crypto-js`
- https://www.npmjs.com/package/http-server
- Generate SSL by `openssl req -newkey rsa:2048 -new -nodes -x509 -days 3650 -keyout key.pem -out cert.pem`, cretae a `cert.pem`
- Lanch by `http-server` OR for SSL `http-server -S -C cert.pem`
- Set `webpack` in dev mode by editing `webpack.config.js` section `mode: "development"`
- Use configs in `.env` directly in webpack
- https://www.npmjs.com/package/dotenv-webpack (dotenv-webpack)
- Install `npm i dotenv-webpack`
- Call API with bearer
- https://www.npmjs.com/package/axios
- Install `npm i axios`
- https://github.com/axios/axios (Github repo)

Launch prod with git auto deployment(Optional)

- `ngrok start dev.api.hfx`
- Then update *API_URI* in `.env` to `https://xxx-xxx-xxxx-xxx-xxx.ngrok.io/`
- RUN : `cd conf.d/ && ./deploy.sh && cd ..`