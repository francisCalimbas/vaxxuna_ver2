const firebase = require('../db');
const Person = require('../models/Person');
const firestore = firebase.firestore();

const controller = {
    addPerson: async (req, res, next) => {
        try {
            const data = req.body;
            await firestore.collection('Persons').doc().set(data);
            res.send('Record saved successfully');
        } catch (err) {
            res.status(400).send(err.message);
        }
    },
    getAllPerson: async (req, res, next) => {
        let dataArr = [];
        firestore.collection('Persons').get().then((snapshot) => {
			snapshot.docs.forEach(doc => {
				const person = 
				{
					username : doc.data().username,
					name : doc.data().last_name +", " + doc.data().first_name,
					schedcode2 : doc.data().schedcode,
					status : doc.data().status,
				};
				console.log(person);
				dataArr.push(person);
			});
			res.send(dataArr);
		});
    },
    getPerson: async(req, res, next) => {
        
    }
}

module.exports = controller;