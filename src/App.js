import './App.css';
import Comments from './comments/Comments';

function App() {
  return (
    <div className="App">
      <h1>comments</h1>
      <Comments currentUserId="1" />
    </div>
  );
}

export default App;
