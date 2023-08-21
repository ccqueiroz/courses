import coursesJson from './data/courses.json';
import './App.css';
import { Grid } from './components/listing/Grid';

function App() {
  return (
    <div className="App">
      <div className="navbar-fixed">
          <nav className="blue">
            <div className="nav-wrapper">
              <a href="/" className="brand-logo center">Courses</a>
            </div>
          </nav>
        </div>
      <div>
        <Grid items={coursesJson}/>
      </div>
    </div>
  );
}

export default App;
