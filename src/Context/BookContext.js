import React,{createContext,useState,useEffect} from 'react';
import {v1 as uuid} from 'uuid';
export const BookContext=createContext();

export default function BookContextProvider(props) {
    const [books,setBooks]=useState(()=>{
        const localData=localStorage.getItem('books');
        console.log(localData)
        return localData?JSON.parse(localData):[];
    });
    const AddBook=(title,author)=>{
        setBooks([...books,{title,author,id:uuid()}])
    }
    useEffect(()=>{
        localStorage.setItem('books',JSON.stringify(books));
    },[books])
    const DelBook=(id)=>{
        setBooks(books.filter(book=>book.id !== id));
    }
  return (
    <BookContext.Provider value={{books,AddBook,DelBook}}>
        {props.children}
    </BookContext.Provider>
  )
}
