import Dictionary from "./Dictionary";
import "./App.css";

function App() {
  return (
    <div className='App'>
      <div className='container'>
        <header>
          <h1>React Dictionary App</h1>
        </header>
        <main>
          <Dictionary defaultKeyword="sunset"/>
        </main>
        <footer>
          <small>
            <a
              href='https://github.com/greyliath/react-dictionary'
              target='_blank'
              rel='noreferrer'
            >
              open sourced app
            </a>{" "}
            from greyliath
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
