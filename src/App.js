import './App.css';
import { useState } from 'react';
import PostsList from './components/PostsList';
import MainHeader from './components/MainHeader';

function App() {
  const [showPanel, setShowPanel] = useState(false);
  const [postCount,setPostCount] = useState(0)


    const PanelIsDisplayed = () => {
        setPostCount((prevCount) => prevCount + 1)
        setShowPanel(true)
    }
  return (
    <>
    <MainHeader AddPost={PanelIsDisplayed}/>
      <main className="App">
      <PostsList postCount={postCount} showPanel={showPanel}/>
    </main>
    </>
  );
}

export default App;
