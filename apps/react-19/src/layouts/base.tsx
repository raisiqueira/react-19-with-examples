import { Outlet } from "react-router-dom";
import { Header } from "./header";
import { VerticalNav } from "./nav";

const BaseLayout = () => {
  return (
    <>
      <Header />
      <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-[320px_1fr] lg:gap-8 max-w-[1280px] m-auto">
        <div className="h-auto bg-gray-200">
          <VerticalNav />
        </div>
        <div className="h-auto bg-gray-200 p-4">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export { BaseLayout };
