"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";
import { FrontFileType } from "@/models/RSFile";
import AddFileForm from "@/modules/addFilePage/AddFileForm";

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

const EditFilePage = ({ id }: { id: string }) => {
  const [file, setFile] = useState<FrontFileType>();
  useEffect(() => {
    getFile();
  }, [id]);
  const router = useRouter();

  async function getFile() {
    const result = await fetch(`/api/files/${id}`);
    const res = await result.json();
    if (res.file) {
      setFile({ ...res.file });
    }
  }

  console.log;

  const initialValues = {
    title: "",
    description: "",
    location: "",
    address: "",
    realState: "",
    phone: "",
    fileType: "rent",
    areaMeter: 10,
    category: "apartment",
    constructionDate: new Date(),
    amenities: [],
    rules: [],
    ...file,
    price: typeof file?.price === "number" ? file?.price : 1000,
    rent: typeof file?.price === "object" ? file?.price.rent : 1000,
    mortgage: typeof file?.price === "object" ? file?.price.mortgage : 1000,
  };

  const formik = useFormik({
    initialValues,
    enableReinitialize: true,
    onSubmit,
    validationSchema,
  });

  async function onSubmit(
    values: any,
    { resetForm }: { resetForm: () => void }
  ) {
    const price =
      values.fileType === "rent"
        ? { rent: +values.rent, mortgage: +values.mortgage }
        : +values.price;
    const payload = {
      ...values,
      areaMeter: +values.areaMeter,
      price,
    };
    delete payload.rent;
    delete payload.mortgage;
    const result = await fetch(`/api/files/${id}`, {
      method: "PATCH",
      body: JSON.stringify(payload),
      headers: { "Content-Type": "application/json" },
    });
    const res = await result.json();
    if (res.error) {
      toast.error(res.error);
    } else {
      toast.success(res.message);
      setTimeout(() => {
        router.replace("/dashboard");
      }, 1000);
      resetForm();
    }
  }

  return (
    <div>
      <h2 className="text-xl font-bold mb-7">فرم ویرایش آگهی</h2>
      <AddFileForm formik={formik} type="edit" />
    </div>
  );
};

export default EditFilePage;
