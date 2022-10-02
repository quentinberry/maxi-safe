import './App.css';
import passwordJson from './content/passwordsave_backup.json';

const readWholeDB = () => {
 console.log(passwordJson);
};

const searchPasswordByTitle = term => {
  let passwordArray = [];
  for(let i = 0; i <= passwordJson.length; i++){
    passwordArray = passwordJson[i].Titel === term ?
      passwordArray.push(passwordJson[i]) : console.log('nada');
  }
  console.log(passwordArray);
};

function App() {
  return (
    <body>
    <div className="App">
      <p>hallo</p>
    </div>
    </body>

  );
}


readWholeDB();
searchPasswordByTitle("Test Account 1");

export default App;
