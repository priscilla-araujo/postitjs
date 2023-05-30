import { Board, Toolbar } from './components';
import { PostitProvider } from './contexts/postit.context';

function App() {
  return (
    <PostitProvider>
      <Toolbar />
      <Board />
    </PostitProvider>
  )
}

export default App
