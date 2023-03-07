import { type AppType } from "next/app";
import NavBar from "~/components/NavBar";

import "~/styles/globals.css";

const MyApp: AppType = ({
  Component
}) => {
  return (
      <NavBar>
        <Component />
      </NavBar>
  );
};

export default MyApp;

