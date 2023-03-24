import './styles/reset.css';
import './styles/App.css';
import UserForm from './components/UserForm';
import Card from './components/ui/card/Card';
import Panel from './components/panel/Panel';

function App() {
  return (
    <div className='container'>
      <h1>Forms Objects</h1>
      {/* <UserForm /> */}
      <Card>
        <Panel></Panel>
        <Panel></Panel>
        <Panel></Panel>
      </Card>
    </div>
  );
}
export default App;
