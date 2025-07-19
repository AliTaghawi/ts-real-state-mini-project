"use client";

import { RootState } from "@/redux/stor";
import { useSelector } from "react-redux";

const DashboardPage = () => {
  const user = useSelector((store: RootState) => store.user.user);
  return (
    <div>
      <h2 className="text-xl font-bold mb-7">آگهی‌های من</h2>
      <div>
        {user?.files.map((item: any) => (
          <p key={item._id}>{item.title}</p>
        ))}
      </div>
    </div>
  );
};

export default DashboardPage;
