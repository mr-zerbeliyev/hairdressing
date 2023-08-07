import "./App.css";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Photo from "./components/Photo/photo";

function App() {
  return (
    <>
      <nav>
        <Header />
        <Photo />
      </nav>
    </>
  );
}

export default App;
