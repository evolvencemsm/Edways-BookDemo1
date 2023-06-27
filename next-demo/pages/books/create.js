import { useState } from "react";
import { FormInput } from "../../components/BasicForm";
import Button from "@mui/material/Button";
import axios from "axios";
import { useRouter } from "next/router";
import { Container } from "@mui/material";

const CreatBook = (props) => {
  const router = useRouter();

  const [book, setBook] = useState({
    title: "",
  });
  const onChange = (e) => {
    setBook({
      ...book,
      [e.target.name]: e.target.value,
    });
  };
  const createBook = async () => {
    const { title } = book;
    if (title) {
      const payload = {
        title,
      };
      const res = await axios.post("http://localhost:5000/api/books", payload);
      if (res && res.data) {
        router.push("/books");
      }
    }
  };
  return (
    <Container maxWidth="sm">
      <h1>Create a book</h1>
      <div className="book-container" style={{ marginTop:'5rem'}}>
        <FormInput onChange={onChange} book={book}/> 
        <Button type="submit" variant="contained" color="primary" onClick={createBook} sx={{ textAlign:'center',marginLeft:'20px'}}>Create</Button>
      </div>
    </Container>
  );
};

export default CreatBook;
