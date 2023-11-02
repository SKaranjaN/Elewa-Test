// This is the App.js file that renders the components to the web
// It imports the components and renders them in the return
// In reference to MVVM architecture, this acts as the view
 
import './App.css';
import Nav from './features/Nav';

function App() {
  return (
    <div className="App">
      <Nav />
    </div>
  );
}

export default App;
