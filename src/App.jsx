import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
// import ProfilePage from "./pages/ProfilePage";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* <ProfilePage /> */}
        {/* <Portfolio /> */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
