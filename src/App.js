import './App.css';
import passwordJson from './content/passwordsave_backup.json';

const readWholeDB = () => {
 console.log(passwordJson);
};

function App() {
  return (
    <div className="App">
      <p>hallo</p>
    </div>
  );
}

readWholeDB();

export default App;
