import "./App.css";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Photo from "./components/Photo/photo";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <>
      <nav>
        <Header />
        <Photo />
      </nav>
      <div className="photo2">
        <img src="https://static.wixstatic.com/media/bc139a_e78fa24a76424812b36f7b6a3a1e39b9~mv2_d_2048_1365_s_2.jpg/v1/fill/w_1790,h_641,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/bc139a_e78fa24a76424812b36f7b6a3a1e39b9~mv2_d_2048_1365_s_2.jpg" />
      </div>
      <Footer />
    </>
  );
}

export default App;
