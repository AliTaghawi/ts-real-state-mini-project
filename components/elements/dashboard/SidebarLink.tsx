import Link from "next/link";

type propsType = {
  href: string;
  title: string;
  Icon: React.ComponentType<{ className?: string }>;
};

const linkStyle =
  "flex gap-1 items-center justify-center py-0.5 px-1.5 border border-sky-400 dark:border-sky-800 sm:w-11/12 sm:mb-4 rounded-md hover:bg-sky-50 dark:hover:bg-sky-950 text-xs sm:text-base transition ease-linear";

const SidebarLink = ({ href, Icon, title }: propsType) => {
  return (
    <Link href={href} className={linkStyle}>
      <Icon className="text-sky-400 dark:text-sky-600 text-base sm:text-xl" />
      <span className="hidden xs:inline-block">{title}</span>
    </Link>
  );
};

export default SidebarLink;
