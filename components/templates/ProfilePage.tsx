"use client";

import { useSelector } from "react-redux";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { RootState } from "@/redux/stor";
import DetailsItem from "@/elements/profilePage/DetailsItem";

const ProfilePage = () => {
  const user = useSelector((store: RootState) => store.user.user);
  return (
    <>
      <p className="mb-4 ">سلام {user?.fullName || user?.showName} جان 👋</p>
      <div className="">
        <div className="flex items-center gap-2">
          <DetailsItem title="نام کاربری" property={user?.email} />
          <span className="mb-4" title="نمایش برای کاربرهای دیگر">
            {user?.showSocials?.email ? <FaRegEye /> : <FaRegEyeSlash />}
          </span>
        </div>
        <DetailsItem title="نام و نام خانوادگی" property={user?.fullName} />
        <DetailsItem
          title="نامی که نشان داده میشود"
          property={user?.showName}
        />
        <div className="flex items-center gap-2">
          <DetailsItem title="شماره تماس" property={user?.phone} />
          <span className="mb-4" title="نمایش برای کاربرهای دیگر">
            {user?.showSocials?.email ? <FaRegEye /> : <FaRegEyeSlash />}
          </span>
        </div>
      </div>
      <DetailsItem title="درباره من" property={user?.bio} bioType={true} />
    </>
  );
};

export default ProfilePage;
