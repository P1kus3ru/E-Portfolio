import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import NavBar from "~/components/NavBar";
import Footer from "~/components/Footer";

import { api } from "~/utils/api";

import "~/styles/globals.css";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <NavBar>
        <Component {...pageProps} />
        <Footer />
      </NavBar>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
