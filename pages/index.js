import Header from "../components/header";
import HeaderEn from "../components/headerEn";
import SectionService from "../components/sectionservice";
import SectionOneHomePage from "../components/sectiononehomepage";
import SectionTwoHomePage from "../components/sectiontwohomepage";
import SectionThereHomePage from "../components/sectiontherehomepage";
import SectionThereHomePageEn from "../components/sectiontherehomepageEn";
import SectionTwoHomePageEn from "../components/sectiontwohomepageEn";
import { useState } from "react";

export default function Home(props) {
  console.log(props.some);

  function English() {
    return (
      <div>
        <HeaderEn/>
        <SectionTwoHomePageEn />
        <SectionThereHomePageEn />
      </div>
    );
  }

  function Georgian() {
    return (
      <div>
        <Header />
        {/* <SectionService /> */}
        {/* <SectionOneHomePage /> */}
        <SectionTwoHomePage />
        <SectionThereHomePage />
      </div>
    );
  }

  return <div>{props.lang ? <Georgian /> : <English />}</div>;
}
