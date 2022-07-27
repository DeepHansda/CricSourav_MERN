import { Alert, Box, Button, Modal, Snackbar, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";
import { useContext } from "react";
import { ApiContext } from "../../App";

export default function MyModal({ open, id, handleClose, link }) {
  const [openAlert, setOpenAlert] = useState(false);
  const api = useContext(ApiContext);
  const [success, setSuccess] = useState(false);

  const deleleMaster = () => {
    api
      .post(`${link}/${id}`)
      .then((res) => {
        if (res.status === 200) {
          setOpenAlert(true);
          setSuccess(true);
          window.location.reload();
        }
      })
      .catch((err) => {
        setOpenAlert(true);
        setSuccess(false);
        console.log(err);
      });
  };

  const handleAlertClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenAlert(false);
  };
  return (
    <div>
      <Snackbar
        open={openAlert}
        autoHideDuration={6000}
        onClose={handleAlertClose}
      >
        <Alert
          onClose={handleAlertClose}
          severity={success ? "success" : "error"}
          sx={{ width: "100%" }}
        >
          {success ? "Content Successfully Deleted !" : "Deletation Faild !"}
        </Alert>
      </Snackbar>
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            padding: "15px",
            backgroundColor: "#fff",
            width: "300px",
            margin: "0 auto",
          }}
        >
          <Container>
            <Typography variant="p">
              Are You Sure To Delete This Content ?
            </Typography>
          </Container>
          <Container
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              margin:'15px 0'
            }}
          >
            <Button
              variant="contained"
              color="error"
              onClick={() => deleleMaster()}
            >
              Delete
            </Button>
            <Button
              variant="contained"
              color="success"
              onClick={() => handleClose()}
            >
              Cancel
            </Button>
          </Container>
        </Box>
      </Modal>
    </div>
  );
}
