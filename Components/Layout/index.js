import Head from "next/head";
import NextThemeProvider from "../../utils/NextThemeProvider";
import ThemeSwitcher from "../ThemeSwitcher";

export default function Layout({ children }) {
  return (
    <>
      <html lang = "en">
        <Head>
          <title>react-styled-components_lotr-app-styling</title>
        </Head>
        <body>
          <NextThemeProvider enabledSystem = {false}>
            <ThemeSwitcher />
            <main>{ children }</main>
          </NextThemeProvider>
        </body>
      </html>
    </>
  );
}