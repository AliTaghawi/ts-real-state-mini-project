import { InferSchemaType, Schema, model, models } from "mongoose";

interface RSFileTypes {
  title: string;
  description: string;
  location: string;
  address: string;
  realState: string;
  phone: string;
  fileType: "rent" | "mortgage" | "buy";
  areaMeter: number;
  price: number | { rent: number; mortgage: number };
  category: "villa" | "apartment" | "store" | "office" | "land";
  constructionDate: Date;
  amenities: string[];
  rules: string[];
  userId: Schema.Types.ObjectId;
  published: boolean;
}

const fileSchema = new Schema<RSFileTypes>(
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
      required: true,
    },
    price: {
      type: Schema.Types.Mixed,
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
      required: true,
    },
    published: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const RSFile = models.RSFile || model("RSFile", fileSchema);

export default RSFile;
export type FileType = InferSchemaType<typeof fileSchema>;
export type FrontFileType = Omit<
  FileType,
  "createdAt" | "updatedAt" | "userId" | "published"
>;
