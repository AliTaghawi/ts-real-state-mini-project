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
        className="px-2 py-0.5 outline-0 outline-neutral-200 hover:bg-neutral-100 hover:outline-1 rounded-md"
      >
        {title}
      </Link>
    </li>
  );
};

export default MenuItem;
