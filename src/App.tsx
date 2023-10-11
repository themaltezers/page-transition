// All photos by Matt Perry https://citizenofnowhe.re
import "./styles.css";
import * as React from "react";
import { AnimatePresence } from "framer-motion";
import { useLocation, useRoutes } from "react-router-dom";
import { Home } from "./pages/home";
import { Gallery } from "./template/Gallery";
import { amsterdamPhotosMetadata, londonPhotosMetadata } from "./data";

export default function App() {
  const element = useRoutes([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/amsterdam",
      element: (
        <Gallery
          photos={amsterdamPhotosMetadata}
          title="Amsterdam Zuid nightwalk"
          titleWidth={8.2}
          category="zuid"
          alt="A building in Amsterdam Zuid at night"
        />
      )
    },
    {
      path: "/london",
      element: (
        <Gallery
          photos={londonPhotosMetadata}
          title="White lines of Canary Wharf"
          titleWidth={8}
          category="canary"
          alt="A building in Canary Wharf"
        />
      )
    }
  ]);

  const location = useLocation();

  if (!element) return null;

  return (
    <AnimatePresence mode="wait" initial={false}>
      {React.cloneElement(element, { key: location.pathname })}
    </AnimatePresence>
  );
}
