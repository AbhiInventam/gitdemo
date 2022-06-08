import Album from "./components/main/app/album/Album";
import Counter from "./components/main/app/counter/Counter";
import Footer from "./components/main/app/Footer";
import FormData from "./components/main/app/formData/FormData";
import Home from "./components/main/app/Home";
import Navbar from "./components/main/app/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      {/* <Home /> */}
      <Counter />
      <FormData />
      <Album />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
