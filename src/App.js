import Header from "./components/Header"
import Footer from "./components/Footer"
import Body from "./components/Body";
import VideoComponent from "./components/Video";
import Video from "./components/Video";
import NodeMap from "./components/NodeMap";


function App() {
  return (
    <div className="App">
      <Header/>
      <Body/>
      {/* <NodeMap/> */}
      <Footer/>
    </div>
  );
}

export default App;
