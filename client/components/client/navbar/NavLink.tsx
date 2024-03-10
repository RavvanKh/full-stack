"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, label }: { href: string; label: string }) => {
  const asPath = usePathname();
  const isActive = href === asPath?.slice(0, asPath.length);
  return (
    <>
      <Link href={href}>{label}</Link>
      {isActive && <hr />}
    </>
  );
};

export default NavLink;
