"use client";

import { useFormik } from "formik";
import * as Yup from "yup";
import AddFileForm from "@/modules/addFilePage/AddFileForm";

interface initialValuesType {
  title: string;
  description: string;
  location: string;
  address: string;
  realState: string;
  phone: string;
  fileType: "rent" | "mortgage" | "buy";
  areaMeter: number;
  price: number;
  rent: number;
  mortgage: number;
  category: "villa" | "apartment" | "store" | "office" | "land";
  constructionDate: Date;
  amenities: string[];
  rules: string[];
}

const initialValues: initialValuesType = {
  title: "",
  description: "",
  location: "",
  address: "",
  realState: "",
  phone: "",
  fileType: "rent",
  areaMeter: 30,
  price: 0,
  rent: 0,
  mortgage: 0,
  category: "apartment",
  constructionDate: new Date(),
  amenities: [],
  rules: [],
};

const validationSchema = Yup.object({
  title: Yup.string().required("الزامی!"),
  description: Yup.string().required("الزامی!"),
  location: Yup.string().required("الزامی!"),
  address: Yup.string().required("الزامی!"),
  realState: Yup.string().required("الزامی!"),
  phone: Yup.string().required("الزامی!"),
  fileType: Yup.string().oneOf(["rent", "mortgage", "buy"]).required("الزامی!"),
  areaMeter: Yup.number()
    .min(15, "حداقل متراژ باید 15 متر باشد")
    .required("الزامی!"),
  price: Yup.number().when("fileType", {
    is: (val: string) => val !== "rent",
    then: (schema) =>
      schema.typeError("یک عدد وارد کنید").required("قیمت الزامی است"),
    otherwise: (schema) => schema.notRequired(),
  }),
  rent: Yup.number().when("fileType", {
    is: "rent",
    then: (schema) =>
      schema
        .typeError("یک عدد وارد کنید")
        .required("مبلغ اجاره ماهانه الزامی است"),
    otherwise: (schema) => schema.notRequired(),
  }),
  mortgage: Yup.number().when("fileType", {
    is: "rent",
    then: (schema) =>
      schema.typeError("یک عدد وارد کنید").required("مبلغ رهن الزامی است"),
    otherwise: (schema) => schema.notRequired(),
  }),
  category: Yup.string()
    .oneOf(["villa", "apartment", "store", "office", "land"])
    .required("الزامی!"),
  constructionDate: Yup.date()
    .max(new Date(), "تاریخ ساخت نمی‌تواند در آینده باشد")
    .required("الزامی!"),
  amenities: Yup.array().of(Yup.string()),
  rules: Yup.array().of(Yup.string()),
});

const AddFilePage = () => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-7">فرم ثبت آگهی</h2>
      <AddFileForm />
    </div>
  );
};

export default AddFilePage;
