import './bootstrap/dist/css/bootstrap.css';
import Navigation from "./navigation";
import About from './aboutme';
import Skills from './skills';
import Updates from './updates';
import App from './server/App';
function App() {
  return (
    <div>
      <Navigation />
      <About />
      <Skills />
      <App/>
      <Updates />
    </div>
  );

}

export default App;
