import { type AppType } from "next/app";
import { useRouter } from "next/router";
import NavBar from "~/components/NavBar";
import { useEffect } from 'react';

import "~/styles/globals.css";

const MyApp: AppType = ({
  Component,
  pageProps
}) => {
  const router = useRouter();

  useEffect(() => {
    const elements = document.querySelectorAll('.animate-on-scroll')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible')
        }
      });
    });
    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect();
  }, [router.asPath]);

  return (
      <NavBar>
        <Component {...pageProps}/>
      </NavBar>
  );
};

export default MyApp;

