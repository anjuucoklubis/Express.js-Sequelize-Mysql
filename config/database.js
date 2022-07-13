import { Sequelize }  from "sequelize";

const db = new Sequelize('youedatabase', 'root', 'yourpassword', {
    host: 'localhost',
    dialect: 'mysql',
});

export default db;


