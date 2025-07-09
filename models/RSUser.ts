import { Schema, model, models } from "mongoose";

const rsUserSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      published: {
        type: Boolean,
        default: false
      }
    },
    password: {
      type: String,
      required: true,
    },
    name: String,
    lastName: String,
    showName: String,
    phone: {
      number: String,
      published: {
        type: Boolean,
        default: false
      }
    },
    bio: String,
    role: {
      type: String,
      enum: ["user", "subadmin", "admin"],
      default: "user",
    },
  },
  { timestamps: true }
);

const RSUser = models.RSUser || model("RSUser", rsUserSchema);

export default RSUser;
