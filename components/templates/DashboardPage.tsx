"use client";

import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/stor";
import DashboardCard from "@/modules/DashboardPage/DashboardCard";
import { useEffect } from "react";
import { fetchUser } from "@/redux/features/user/userSlice";

const DashboardPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const user = useSelector((store: RootState) => store.user.user);
  useEffect(() => {
    dispatch(fetchUser());
  }, []);
  
  return (
    <div>
      <h2 className="text-xl font-bold mb-7">آگهی‌های من</h2>
      <div className="grid grid-cols-1 min-[820px]:grid-cols-2 min-[1150px]:grid-cols-3 gap-4 mb-8">
        {user?.files.map((item: any) => (
          <DashboardCard key={item._id} file={item} />
        ))}
      </div>
    </div>
  );
};

export default DashboardPage;
