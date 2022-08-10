import Markdown from './components/markdown';
import './App.css';
import Header from './components/header';
import { MarkdownPa } from './context/markdownContext';

function App() {
  return (
    <div className="App">
      <MarkdownPa>
        <Header />
        <Markdown />
      </MarkdownPa>
    </div>
  );
}

export default App;
