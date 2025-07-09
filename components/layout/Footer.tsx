import React from "react";

const Footer = () => {
  return (
    <footer className="bg-sky-300 py-5 px-3 my-2 rounded-lg text-center">
      <p className=" inline-block">مینی پروژه فول استک املاک</p> | ساخته شده با
      تایپ اسکریپت،{" "}
      <a
        href="https://tailwindcss.com/"
        referrerPolicy="no-referrer"
        target="_blank"
        className=" text-emerald-700 hover:underline underline-offset-2"
      >
        tailwindCss
      </a>{" "}
      ،
      <a
        href="https://nextjs.org/"
        referrerPolicy="no-referrer"
        target="_blank"
        className=" text-emerald-700 hover:underline underline-offset-2"
      >
        Next.js
      </a>{" "}
      و ... &copy;
    </footer>
  );
};

export default Footer;
