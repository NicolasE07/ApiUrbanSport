const mongoose = require('mongoose'); //vamos a utilizar la libreria de mongoose   

const conectToDB = () => {
    mongoose.connect(' mongodb://127.0.0.1:27017/TalentU', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, (error) => {
        if (error) {
            console.log('tenemos un error' + error);
        } else {
            console.log('nos conectamos correctamente')
        }

    }



    );


}
module.exports = { conectToDB }
