"use client";

import { useFormik } from "formik";
import * as Yup from "yup";
import AddFileForm from "@/modules/addFilePage/AddFileForm";

export interface InitialValuesType {
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
  constructionDate: Date | null;
  amenities: string[];
  rules: string[];
}

const initialValues: InitialValuesType = {
  title: "",
  description: "",
  location: "",
  address: "",
  realState: "",
  phone: "",
  fileType: "rent",
  areaMeter: 10,
  price: 0,
  rent: 0,
  mortgage: 0,
  category: "apartment",
  constructionDate: null,
  amenities: [],
  rules: [],
};

const validationSchema = Yup.object({
  title: Yup.string().required("الزامی!"),
  description: Yup.string().required("الزامی!"),
  location: Yup.string().required("الزامی!"),
  address: Yup.string().required("الزامی!"),
  realState: Yup.string().required("الزامی!"),
  phone: Yup.string()
    .matches(
      /(((^(\+|00)(98)([- ]?))|^(0))(9\d{2})([- ]?)(\d{3})([- ]?)(\d{4})$)|((^(\+|00)(98)([- ]?))|^(0))([1-9]{2}[0-9]{8})$/,
      "شماره تلفن معتبر نیست!"
    )
    .required("الزامی!"),
  fileType: Yup.string().oneOf(["rent", "mortgage", "buy"]).required("الزامی!"),
  areaMeter: Yup.number()
    .min(10, "حداقل متراژ باید 10 متر باشد")
    .required("الزامی!"),
  price: Yup.number()
    .min(1000, "باید بیشتر از هزار تومان باشد!")
    .when("fileType", {
      is: (val: string) => val !== "rent",
      then: (schema) =>
        schema.typeError("یک عدد وارد کنید").required("قیمت الزامی است"),
      otherwise: (schema) => schema.notRequired(),
    }),
  rent: Yup.number()
    .min(1000, "باید بیشتر از هزار تومان باشد!")
    .when("fileType", {
      is: "rent",
      then: (schema) =>
        schema
          .typeError("یک عدد وارد کنید")
          .required("مبلغ اجاره ماهانه الزامی است"),
      otherwise: (schema) => schema.notRequired(),
    }),
  mortgage: Yup.number()
    .min(1000, "باید بیشتر از هزار تومان باشد!")
    .when("fileType", {
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

const onSubmit = (values: any) => {
  console.log(values);
};

const AddFilePage = () => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <div>
      <h2 className="text-xl font-bold mb-7">فرم ثبت آگهی</h2>
      <AddFileForm formik={formik} />
    </div>
  );
};

export default AddFilePage;
