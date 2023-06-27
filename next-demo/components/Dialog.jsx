import { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { FormInput } from "./BasicForm";
import axios from "axios";

export const FormDialog = (props) => {
  const { open, handleClose } = props;
  const [product, setProduct] = useState({
    name: "",
    wqty: null,
    srate: null,
    category: "",
  });
  const onChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };
  const createProduct = async () => {
    const { name, wqty, srate, category } = product;
    if (name && wqty && srate && category) {
      const payload = {
        name,
        wQty: wqty,
        sRate: srate,
        category,
      };
      await axios.post("http://localhost:5000/api/products", payload);
    }
    handleClose();
  };
  return (
    <div>
      <Dialog open={open} onClose={() => handleClose()}>
        <DialogTitle>Create a new product</DialogTitle>
        <DialogContent sx={{ minWidth: 500 }}>
          <FormInput onChange={onChange} />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleClose(false)}>Cancel</Button>
          <Button onClick={createProduct}>Create</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
