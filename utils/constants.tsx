import { IoHome, IoStorefront } from "react-icons/io5";
import { PiBuildingApartmentFill, PiOfficeChairFill } from "react-icons/pi";
import { BiSolidLandscape } from "react-icons/bi";

export const fileTypesText = {
  rent: "اجاره",
  mortgage: "رهن کامل",
  buy: "فروش",
};

export const categoryText = {
  villa: "ویلایی",
  apartment: "آپارتمان",
  store: "مغازه",
  office: "دفتر",
  land: "زمین",
};

export const categoryIcons = {
  villa: <IoHome className="text-lg text-sky-400 dark:text-sky-500" />,
  apartment: <PiBuildingApartmentFill className="text-lg text-sky-400 dark:text-sky-500" />,
  store: <IoStorefront className="text-lg text-sky-400 dark:text-sky-500" />,
  office: <PiOfficeChairFill className="text-xl text-sky-400 dark:text-sky-500" />,
  land: <BiSolidLandscape className="text-xl text-sky-400 dark:text-sky-500" />,
};
