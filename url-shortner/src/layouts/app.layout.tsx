import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <>
      <main>
        {/* Header */}
        <Outlet />
        {/* body */}
      </main>
      {/* // footer */}
    </>
  );
};
export default AppLayout;
