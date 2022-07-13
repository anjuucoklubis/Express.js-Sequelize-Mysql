import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Daerah = db.define('daerahs', {
    namadaerah: {   
        type: DataTypes.STRING
    },
},{
    freezeTableName: true
});

export default Daerah;



