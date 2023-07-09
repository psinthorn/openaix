import Image from './components/images/Image';
import './styles/Global.css';

function App() {
  return (
    <div className="App">
      <header className="text-center p-10 m-10 text-3xl">
        <p>
          hello OpenAi and React :)
          <Image />
        </p>
      </header>
    </div>
  );
}

export default App;
