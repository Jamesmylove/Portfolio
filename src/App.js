import './bootstrap/dist/css/bootstrap.css';
import Navigation from "./navigation";
import About from './aboutme';
import Skills from './skills';
import Updates from './updates';
import Main from './server/Main';
function App() {
  return (
    <div>
      <Navigation />
      <About />
      <Skills />
      <Main/>
      <Updates />
    </div>
  );

}

export default App;
