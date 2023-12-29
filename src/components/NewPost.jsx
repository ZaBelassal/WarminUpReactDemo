import React , {useState} from 'react'

function NewPost() {
    const [body,setBody] = useState('');
    const [author,setAuthor] = useState('');

   const HandleChange =(e)=>{
    setBody(e.target.value)
  }

  /*
   setAuthor = (e) => {
    console.log(e.target.value)
  }
  */
  return (
    <form>
      <p>
            <label htmlFor="body"></label>
            <textarea id="body" required rows={3} onChange={HandleChange}/>
      </p>
      <p>{body}</p>
      <p>
            <label htmlFor='name'></label>
            <textarea type="text" id="name"  onChange={setAuthor} required/>
      </p>
      <div>
         <button>Cancel</button>
         <button>Submit</button>
      </div>
    </form>
  );
}

export default NewPost
