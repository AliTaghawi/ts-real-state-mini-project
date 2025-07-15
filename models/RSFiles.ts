import { InferSchemaType, Schema, model, models } from "mongoose";

const filesSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    realState: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    paymentType: {
      type: String,
      enum: ["rent", "mortgage", "buy"],
      required: true,
    },
    price: {
      type: Number || { rent: Number, mortgage: Number },
      required: true,
    },
    category: {
      type: String,
      enum: ["villa", "apartment", "store", "office", "land"],
      required: true,
    },
    constructionDate: {
      type: Date,
      required: true,
    },
    amenities: {
      type: [String],
      default: [],
    },
    rules: {
      type: [String],
      default: [],
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "RSUser",
    },
    published: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const RSFiles = models.RSFiles || model("RSFiles", filesSchema)

export default RSFiles
export type FilesType = InferSchemaType<typeof filesSchema>