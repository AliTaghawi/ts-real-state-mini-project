"use client";

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
  rules: []
};

const AddFilePage = () => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-7">فرم ثبت آگهی</h2>
      <AddFileForm />
    </div>
  );
};

export default AddFilePage;
