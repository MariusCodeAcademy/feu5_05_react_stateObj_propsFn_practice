import './styles/reset.css';
import './styles/App.css';
import UserForm from './components/UserForm';
import PanelList from './components/panel/PanelList';

function App() {
  return (
    <div className='container'>
      <h1>Forms Objects</h1>
      {/* <UserForm /> */}
      <PanelList />
    </div>
  );
}
export default App;
