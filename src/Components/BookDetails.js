import React, { useContext } from 'react'
import { BookContext } from '../Context/BookContext'

export default function BookDetails({book}) {
    const {DelBook}=useContext(BookContext);
  return (
    <li key={book.id} onClick={()=>DelBook(book.id)}>
        <h4 className='title'>Book Name: {book.title}</h4>
        <p className='author'>Author: {book.author}</p>
    </li>
  )
}