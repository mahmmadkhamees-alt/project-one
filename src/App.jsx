
import Sidebar from './components/Sidebar';
import PersonalInfo from './components/PersonalInfo';

function App() {
  return (
    <div className="app">
      <div className="form-container">
        <Sidebar />
        <PersonalInfo />
      </div>
    </div>
  );
}

export default App;