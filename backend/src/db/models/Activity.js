const { Sequelize, Model, DataTypes } = require('sequelize');

class Activity extends Model {
 }

const initModel = (sequelize) => {
    Activity.init({
        text: DataTypes.STRING,
        analysis: DataTypes.STRING
        }, 
        { sequelize, modelName: 'activity' 
    });
    
    (async () => {
        await sequelize.sync();
    })();
}

 module.exports = {initModel, Activity}




