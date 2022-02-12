import Header from "../components/Header";
import SectionService from "../components/SectionService";
import SectionOneHomePage from "../components/SectionOneHomePage";
import SectionTwoHomePage from "../components/SectionTwoHomePage";
import SectionThereHomePage from "../components/SectionThereHomePage";

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
