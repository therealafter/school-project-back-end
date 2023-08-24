import { Sequelize } from "sequelize";

export const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./database.sqlite",
});

async function createDBConnection() {
  try {
    await sequelize.authenticate();

    await sequelize.sync().then(() => {
      console.log(`Database & tables created!`);
    });

    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

createDBConnection();