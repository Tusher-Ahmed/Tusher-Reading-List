import BookForm from "./Components/BookForm";
import BookList from "./Components/BookList";
import Navbar from "./Components/Navbar";
import BookContextProvider from "./Context/BookContext";

function App() {
  return (
    <div className="App">
     <BookContextProvider>
      <Navbar/>
      <BookList/>
      <BookForm/>
     </BookContextProvider>
    </div>
  );
}

export default App;
