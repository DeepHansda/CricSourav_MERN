import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { ApiContext } from "../../App";
import MyModal from "../Modal/MyModal";

export default function Visiters() {
  const api = useContext(ApiContext);
  const [messages, setMessages] = useState([]);
  const [open, setOpen] = useState(false);
  const [id, setId] = useState([]);
  useEffect(() => {
    api
      .get("/getVisitors")
      .then((res) => {
        setMessages(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const link = "/deleteVisitor";
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const modalHandler = (id) => {
    handleOpen();
    setId(id);
  };
  return (
    <div>
      <MyModal open={open} id={id} handleClose={handleClose} link={link} />
      <TableContainer component={Paper} sx={{ maxWidth: "600px" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Message</TableCell>
              <TableCell>Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {messages.map((data, index) => {
              return (
                <TableRow key={index}>
                  <TableCell>{data.name || "--"}</TableCell>
                  <TableCell>{data.email || "--"}</TableCell>
                  <TableCell>{data.name || "--"}</TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="error"
                      onClick={() => modalHandler(data._id)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
