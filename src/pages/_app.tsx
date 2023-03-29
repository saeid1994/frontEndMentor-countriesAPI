import Header from "../components/Header";
import "../styles/globals.css";
import { useEffect } from "react";
import { ThemeProvider } from "next-themes";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", function (): void {
        navigator.serviceWorker.register("/sw.js").then(
          function (registration): void {
            console.log(
              "Service Worker registration successful with scope: ",
              registration.scope
            );
          },
          function (err): void {
            console.log("Service Worker registration failed: ", err);
          }
        );
      });
    }
  }, []);

  return (
    <ThemeProvider attribute="class">
      <Header>
        <Component {...pageProps} />
      </Header>
    </ThemeProvider>
  );
}
