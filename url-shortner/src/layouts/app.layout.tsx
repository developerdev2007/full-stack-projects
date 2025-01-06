import Header from "@/components/header";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <>
      <main className="min-h-screen container">
        <Header />
        <Outlet />
        {/* body */}
      </main>
      {/* // footer */}
      <footer className="p-10 bg-gray-800 text-white  mt-10 "></footer>
    </>
  );
};
export default AppLayout;
