const admin = require('firebase-admin');
const serviceAccount = require('./vaxx-una-permission.json');

const db = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    // databaseURL: "https://vaxx-una-default-rtdb.asia-southeast1.firebasedatabase.app"
});

module.exports = db;