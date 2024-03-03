"use client";
import Link from "next/link";
import { FC } from "react";
import { usePathname } from "next/navigation";

const NavLink: FC<{ href: string; label: string }> = ({ href, label }) => {
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
