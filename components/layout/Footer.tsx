import React from "react";

const Footer = () => {
  return (
    <div className="bg-neutral-200 py-5 px-3 my-2 border-2 border-neutral-700 rounded-md text-center">
      <p className=" inline-block">مینی پروژه فول استک املاک</p> | ساخته شده با
      تایپ اسکریپت،{" "}
      <a
        href="https://tailwindcss.com/"
        referrerPolicy="no-referrer"
        target="_blank"
        className=" text-cyan-900"
      >
        tailwindCss
      </a>{" "}
      ،
      <a
        href="https://nextjs.org/"
        referrerPolicy="no-referrer"
        target="_blank"
        className=" text-cyan-900"
      >
        Next.js
      </a>{" "}
      و ... &copy;
    </div>
  );
};

export default Footer;
