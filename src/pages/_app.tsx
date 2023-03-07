import { type AppType } from "next/app";
import NavBar from "~/components/NavBar";

import "~/styles/globals.css";

const MyApp: AppType = ({
  Component, 
  pageProps 
}) => {
  return (
      <NavBar>
        <Component {...pageProps}/>
      </NavBar>
  );
};

export default MyApp;

