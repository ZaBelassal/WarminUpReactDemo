import React , {useState} from 'react'

function NewPost({posts,onChangePosts}) {
    const [entredBody,setBody] = useState('');
    const [entredAuthor,setAuthor] = useState('');

   const HandleChangeBody =(e)=>{
    setBody(e.target.value)
  }

  const handleChangeName = (e) => {
    setAuthor(e.target.value)
  }

  const submitHandler = (e) => {
    e.preventDefault() ;
    const DataPost = {
      body : entredBody,
      author:entredAuthor
    };
    onChangePosts(DataPost)
  }

  return (
    <div>
    <form onSubmit={submitHandler}>
      <p>
            <label htmlFor="body"></label>
            <textarea id="body" required rows={3} onChange={HandleChangeBody}/>
      </p>
      <p>
            <label htmlFor='author'></label>
            <textarea type="text" id="author"  onChange={handleChangeName} required/>
      </p>
      <div>
         <button>Cancel</button>
         <button>Submit</button>
      </div>
    </form>
    {posts.map(item => {
      return(
      <ul key={Math.random()}>
        <li>{item.body}</li>
        <li>{item.author}</li>
      </ul>
      );
    })}
    </div>
  );
}

export default NewPost
