import dynamic from "next/dynamic";

const NotFound = dynamic(() => import("@/components/notFound/NotFound"));

const NotFoundPage = () => {
  return <NotFound />;
};

export default NotFoundPage;
