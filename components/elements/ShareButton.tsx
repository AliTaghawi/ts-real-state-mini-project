"use client";

import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FaShareAlt } from "react-icons/fa";

const ShareButton = () => {
  const [url, setUrl] = useState("");

  useEffect(() => {
    setUrl(window.location.href);
  }, []);

  const copyHandler = async () => {
    try {
      await navigator.clipboard.writeText(url);
      toast.success("link copied to clipboard");
    } catch (err) {
      toast.error("failed to copy the link to clipboard!");
    }
  };

  return (
    <div
      className="flex items-center gap-1.5 text-neutral-700 dark:text-neutral-400 cursor-pointer"
      onClick={copyHandler}
    >
      <FaShareAlt className="text-sky-500" />
      <button className="cursor-pointer">اشتراک گذاری</button>
      <Toaster />
    </div>
  );
};

export default ShareButton;
