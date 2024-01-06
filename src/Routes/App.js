import '../App.css';
import { useState } from 'react';
import PostsList from '../components/PostsList';
import TabButton from '../components/TabButton';

function App() {
  const [showPanel, setShowPanel] = useState(false);
  const [postCount,setPostCount] = useState(0)
  const [content , setContent] = useState('components');


  const handleClick = (param) => {
    setContent(param);
    console.log(content)
  }


  return (
    <>
      <main className="App">
      <PostsList postCount={postCount} showPanel={showPanel}/>
        <section id="examples">
        <h2>Examples</h2>
          <menu>
            <TabButton isSelected={content==='components'? true : false} content={content} handleClick={()=>handleClick('components')}>Components</TabButton>
            <TabButton isSelected={content==='JSX' ? true : false } content={content} handleClick={()=>handleClick('JSX')}>JSX</TabButton>
            <TabButton isSelected={content==='Props' ? true : false} content={content} handleClick={()=>handleClick('Props')}>Props</TabButton>
            <TabButton isSelected={content==='State' ? true : false} content={content} handleClick={()=>handleClick('State')}>State</TabButton>
          </menu>
           {content}
        </section>
    </main>
    </>
  );
}

export default App;
