import dynamic from "next/dynamic";
import React, { ReactNode } from "react";

const Navbar = dynamic(() => import("@/components/client/navbar/Navbar"));
const Footer = dynamic(() => import("@/components/client/footer/Footer"));
const ClientLayout = ({ children }: { children: ReactNode }) => {
  return (
    <section>
      <Navbar />
      {children}
      <Footer />
    </section>
  );
};

export default ClientLayout;
