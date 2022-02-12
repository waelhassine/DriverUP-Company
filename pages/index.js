import Header from "../components/header";
import SectionService from "../components/sectionservice";
import SectionOneHomePage from "../components/sectiononehomepage";
import SectionTwoHomePage from "../components/sectiontwohomepage";
import SectionThereHomePage from "../components/sectiontherehomepage";

export default function Home() {
  return (
    <div>
      <Header />
      <SectionService />
      <SectionOneHomePage />
      <SectionTwoHomePage />
      <SectionThereHomePage />
    </div>
  );
}
