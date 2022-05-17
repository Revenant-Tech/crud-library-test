const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("library", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

try {
  sequelize.authenticate();
  console.log("Connected in MySQL!");
} catch (error) {
  console.log(`Connection Refused: ${error}`);
}

module.exports = sequelize;


