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
      select: false,
    },
    fullName: String,
    showName: String,
    phone: String,
    bio: String,
    showSocials: {
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
      enum: ["USER", "SUBADMIN", "ADMIN"],
      default: "USER",
    },
  },
  { timestamps: true }
);

const RSUser = models.RSUser || model("RSUser", rsUserSchema);

export default RSUser;
