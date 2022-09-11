import { useState } from "react";
import type { PropsWithChildren } from "react";

import type { AppProps } from "next/app";
import Head from "next/head";

import { createTheme, NextUIProvider } from "@nextui-org/react";

import ThemeContext from "~/contexts/theme";
import type { ThemeMode } from "~/contexts/theme";

const THEME = {
  LIGHT: createTheme({ type: "light" }),
  DARK: createTheme({ type: "dark" }),
};

function ThemeContextProvider(props: PropsWithChildren<{}>) {
  const [mode, setMode] = useState<ThemeMode>("light");

  function toggleMode() {
    setMode((state) => (state === "dark" ? "light" : "dark"));
  }

  return (
    <ThemeContext.Provider value={{ mode, toggleMode }}>
      <NextUIProvider theme={mode === "dark" ? THEME.DARK : THEME.LIGHT}>{props.children}</NextUIProvider>
    </ThemeContext.Provider>
  );
}

function _App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>pre-site</title>
        <meta name="title" content="pre-site" />
        <meta name="description" content="pre-site" />
      </Head>

      <ThemeContextProvider>
        <Component {...pageProps} />
      </ThemeContextProvider>
    </>
  );
}

export default _App;
