import { MdLocationPin } from "react-icons/md";
import { LuClipboardType } from "react-icons/lu";
import { IoMdPricetag } from "react-icons/io";
import { GrStatusUnknown } from "react-icons/gr";
import { IoHome, IoStorefront } from "react-icons/io5";
import { PiBuildingApartmentFill, PiOfficeChairFill } from "react-icons/pi";
import { BiSolidLandscape } from "react-icons/bi";
import { FrontFileType } from "@/models/RSFile";

const itemsStyle = "flex gap-1 items-center";

const fileTypesText = {
  rent: "اجاره",
  mortgage: "رهن کامل",
  buy: "فروش",
};

const categoryText = {
  villa: "ویلایی",
  apartment: "آپارتمان",
  store: "مغازه",
  office: "دفتر",
  land: "زمین",
};

const categoryIcons = {
  villa: <IoHome className="text-lg text-sky-400" />,
  apartment: <PiBuildingApartmentFill className="text-lg text-sky-400" />,
  store: <IoStorefront className="text-lg text-sky-400" />,
  office: <PiOfficeChairFill className="text-xl text-sky-400" />,
  land: <BiSolidLandscape className="text-xl text-sky-400" />,
};

const DashboardCard = ({
  file: { title, location, price, category, fileType, published },
}: {
  file: FrontFileType;
}) => {
  return (
    <div className="flex flex-col gap-2 items-start p-4 border border-sky-400 rounded-xl shadow-md max-w-[450px] w-full mx-auto sm:mx-0">
      <h4 className="text-sm font-bold ms-1">{title}</h4>
      <div className={itemsStyle}>
        <MdLocationPin className="text-xl text-sky-400" />
        <span>{location}</span>
      </div>
      <div className={itemsStyle}>
        {categoryIcons[category]}
        <span>{categoryText[category]}</span>
      </div>
      <div className={itemsStyle}>
        <LuClipboardType className="text-lg text-sky-400" />
        <span>{fileTypesText[fileType]}</span>
      </div>
      <div className={`${itemsStyle} items-start text-sm`}>
        <IoMdPricetag className="text-lg text-sky-400" />
        {typeof price === "number" ? (
          <span>{price} تومان</span>
        ) : (
          <div className="flex items-center flex-wrap gap-2">
            <div>
              <span className="font-bold me-1.5">رهن:</span>
              <span className="text-xs text-neutral-700">
                {price.mortgage} تومان
              </span>
            </div>
            <div>
              <span className="font-bold me-1.5">اجاره:</span>
              <span className="text-xs text-neutral-700">
                {price.rent} تومان
              </span>
            </div>
          </div>
        )}
      </div>
      <div className={`${itemsStyle} text-sm font-semibold`}>
        <GrStatusUnknown className="text-lg text-sky-400" />
        <div>
          <span className="me-1.5">وضعیت آگهی:</span>
          {published ? (
            <span className="text-emerald-500">تایید شده</span>
          ) : (
            <span className="text-neutral-500">در انتظار تایید</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;
