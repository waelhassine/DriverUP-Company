import "../styles/globals.css";
import Layout from "../components/layout";
import { useState } from "react";
import { FaGlobe } from "react-icons/fa";

function MyApp({ Component, pageProps }) {
  const [lang, setLang] = useState(true);
  const [langIcon, setLangIcon] = useState("EN");

  const changeLanguage = () => {
    if (langIcon == "EN") {
      setLangIcon("GE");
      setLang(false);
    } else {
      setLangIcon("EN");
      setLang(true);
    }
  };

  return (
    <Layout>
      <div className="flex justify-start px-4">
        <button
          onClick={changeLanguage}
          className="text-main-dark hover:text-white text-xs hover:bg-main-dark border-2 border-main-dark rounded px-2 py-1 mb-4 text-center mr-3 md:mr-0 "
        >
          <FaGlobe className="" />
          {langIcon}
        </button>
      </div>
      <Component lang={lang} {...pageProps} />
    </Layout>
  );
}

export default MyApp;
