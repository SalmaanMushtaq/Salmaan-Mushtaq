import DownloadCV from "./components/DownloadCV";
import Education from "./components/Education";
import Footer from "./components/Footer";
import Interests from "./components/Interests";
import Introduction from "./components/Introduction";
import Languages from "./components/Languages";
import Navbar from "./components/Navbar";
import Options from "./components/Options";
import Profile from "./components/Profile";
import TechSkills from "./components/TechSkills";

function App() {
  return (
    <>
      <Navbar />
      <Introduction />
      <Profile heading="Profile" />
      <Options options={["Education", "Technical Skills", "Experience"]} />
      <Options options={["Languages", "Soft Skills", "Interests"]} />
      <Education />
      <TechSkills />
      <Languages />
      <Interests />
      <DownloadCV />
      <Footer />
    </>
  );
}

export default App;
