import Link from "next/link";

type Props = {
  href: string;
  title: string;
};

const MenuItem = ({ href, title }: Props) => {
  return (
    <li>
      <Link
        href={href}
        className="px-2 py-0.5 hover:bg-sky-200 dark:hover:bg-sky-800/50 rounded-sm inline-block transition-all ease-linear"
      >
        {title}
      </Link>
    </li>
  );
};

export default MenuItem;
