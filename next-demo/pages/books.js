import { useState, useEffect } from "react";
import axios from "axios";
import BasicTable from "../components/BasicTable";
import styles from "../styles/Home.module.css";
import { Button } from "@mui/material";
import { useRouter } from 'next/router';

export default function Books() {
  const [books, setBooks] = useState([]);
  
  const getBooks = async () => {
    const response = await axios.get("http://localhost:5000/api/books");
    setBooks(response.data);
  };

  useEffect(() => {
    getBooks();
  }, []);

  const router = useRouter();

  const goToCreateBookPage = () => {
     router.push('/books/create')
  }
  return (
    <div className={styles.container}>
      <h1>My Books Records</h1>
      <main className={styles.main}>
        <Button
          variant="contained"
          color="primary"
          onClick={goToCreateBookPage}
          sx={{ justifyContent: "flex-end", marginLeft: "auto" }}
        >
          Create Book
        </Button>

        {
            books && Array.isArray(books) && books.length > 0 ? 
             <BasicTable books={books} />
            : <h1>Books is empty</h1> 
        }
        
      </main>
    </div>
  );
}
