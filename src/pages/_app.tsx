import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { NextUIProvider } from "@nextui-org/react"

import { api } from "~/utils/api";

import "~/styles/globals.css";
import { Auth } from "../auth/Auth";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <Auth>
        <NextUIProvider>
          <Component {...pageProps} />
        </NextUIProvider>
      </Auth>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
