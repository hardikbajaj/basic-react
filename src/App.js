import './App.css';
import { withRoot } from "./withRoot";

function App() {
  return (
    <div className="App" style={{fontSize:'2rem'}}>
      Website
    </div>
  );
}

export default withRoot(App);
