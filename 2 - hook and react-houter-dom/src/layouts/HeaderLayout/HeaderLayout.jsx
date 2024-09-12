import { Outlet } from "react-router";
import { Header } from "./Header/Header";

export const HeaderLayout = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
}