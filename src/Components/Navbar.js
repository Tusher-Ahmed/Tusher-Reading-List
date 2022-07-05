import React,{useContext} from 'react';
import { BookContext } from '../Context/BookContext';


export default function Navbar() {
    const {books}=useContext(BookContext);
  return (
    <div className='navbar'>
        <h2>Tusher Reading Lists</h2>
        <p>Currently you have {books.length} books to get through...</p>
    </div>
  )
}
