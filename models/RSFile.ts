import { InferSchemaType, Schema, model, models } from "mongoose";

const fileSchema = new Schema(
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
    fileType: {
      type: String,
      enum: ["rent", "mortgage", "buy"],
      required: true,
    },
    areaMeter: {
      type: Number,
      required: true
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

const RSFile = models.RSFile || model("RSFile", fileSchema)

export default RSFile
export type FileType = InferSchemaType<typeof fileSchema>