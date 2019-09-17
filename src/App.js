import React from 'react';
import Navbar from './components/Navbar';
import BookList from './components/BookList';
import ThemeContextProvider from './contexts/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import AuthProvider from './contexts/AuthContext';
import BookContextProvider from './contexts/BookContext';


function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthProvider>
          <Navbar />
          <BookContextProvider>
            <BookList />
          </BookContextProvider>
          <ThemeToggle />
        </AuthProvider>
      </ThemeContextProvider>

    </div>
  );
}

export default App;
