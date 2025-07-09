import { Schema, model, models } from "mongoose";

const rsUserSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    fullName: String,
    showName: String,
    phone: String,
    bio: String,
    socialPublish: {
      email: {
        type: Boolean,
        default: false,
      },
      phone: {
        type: Boolean,
        default: false,
      },
    },
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
