import Lottie from "lottie-react";
import animation from './web-animation.json';
import './App.css';

function App() {
  return (
    <div className="App">
      <Lottie style={{ height: '100vh' }} animationData={animation} loop={true} />
    </div>
  );
}

export default App;
