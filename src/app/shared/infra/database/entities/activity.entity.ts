import { Model, DataTypes } from "sequelize";
import { sequelize } from "../index";

export const Activity = sequelize.define("activities", {
  type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  teacher: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  images: {
    type: DataTypes.STRING, // Armazenar como uma string separada por vírgula
    allowNull: false,
    get() {
      const imagesString = this.getDataValue("images");
      return imagesString ? imagesString.split(",") : [];
    },
    set(val) {
      if (Array.isArray(val)) {
        this.setDataValue("images", val.join(","));
      } else if (typeof val === "string") {
        this.setDataValue("images", val);
      }
    },
  },
  activity: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: new Date(),
  }
});