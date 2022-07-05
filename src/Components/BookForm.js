import React,{useContext,useState} from 'react'
import { BookContext } from '../Context/BookContext'


export default function BookForm() {
    const {AddBook}=useContext(BookContext);
    const [title,setTitle]=useState('');
    const [author,setAuthor]=useState('');
    const handleSubmit=(e)=>{
        e.preventDefault();
        AddBook(title,author);
        setTitle('');
        setAuthor('');
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} required placeholder='Book Title' />
            <input type="text" value={author} onChange={(e)=>setAuthor(e.target.value)} required placeholder='Author' />
            <input type="submit" value="Add Book" />
        </form>
    </div>
  )
}

