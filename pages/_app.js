import "../styles/globals.css";
import Layout from "../components/layout";
import { useState } from "react";
function MyApp({ Component, pageProps }) {

  const [lang, setLang] = useState(true);
  const [langIcon, setLangIcon] = useState('EN');

  const changeLanguage = () => {
    if(langIcon == 'EN'){
      setLangIcon('GE')
      setLang(false)
    }else{
      setLangIcon('EN')
      setLang(true)
    }
  }

  return (
    <Layout>
      <div className="flex justify-end px-4"><button onClick={changeLanguage} className='text-main-dark hover:text-white hover:bg-green border-2 border-green rounded-3xl px-6 py-2.5 text-center mr-3 md:mr-0 '>Language: {langIcon}</button></div>
      <Component lang={lang} {...pageProps} />
    </Layout>
  );
}

export default MyApp;
