import Header from "../components/header";
import SectionService from "../components/sectionService";
import SectionOneHomePage from "../components/sectionOneHomePage";
import SectionTwoHomePage from "../components/sectionTwoHomePage";
import SectionThereHomePage from "../components/sectionThereHomePage";

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
