import {
  Alert,
  Button,
  CircularProgress,
  Divider,
  Grid,
  Paper,
  Snackbar,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import React, { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { ApiContext } from "../../App";
import MyModal from "../Modal/MyModal";

export default function Contents() {
  const api = useContext(ApiContext);
  const [appContents, setAppContents] = useState([]);
  const [open, setOpen] = useState(false);
  const [id, setId] = useState([]);
  const [openAlert, setOpenAlert] = useState(false);
  const [success, setSuccess] = useState(false);
  const [openProgress, setOpenProgress] = useState(false);

  const [number, setNumber] = useState("");
  const [img, setImg] = useState(null);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [addi_desc, setAddi_desc] = useState("");
  const [download_link, setDownloadLink] = useState("");
  const [referral_code, setReferral] = useState("");
  const [signup_bonus, setSignupBonus] = useState("");
  const [refer_bonus, setReferBonus] = useState("");
  const [with_bonus, setWithBonus] = useState("");
  const [features,setfeatures] = useState([]);

  const [input , setInput] = useState([{feature:''}]);
  
  console.log(features);
  const link = "/delAppDes";
  useEffect(() => {
    api
      .get("/getAppDes")
      .then((response) => {
        setAppContents(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const addInput = () => {
    setInput([...input,{feature:''}])

  };
  const removeInput = (itemIndex) => {
    setInput(input.filter((data,index) =>index !== itemIndex))
  };

  const handleFormChange = (index, event) => {
    let data = [...input];
    data[index][event.target.name] = event.target.value;
    setfeatures(JSON.stringify(data));
 }

  const submitForm = (e) => {
    e.preventDefault();
    setOpenProgress(true);

    const form = new FormData();
    form.append("number", number);
    form.append("img", img);
    form.append("title", title);
    form.append("desc", desc);
    form.append("addi_desc", addi_desc);
    form.append("download_link", download_link);
    form.append("referral_code", referral_code);
    form.append("signup_bonus", signup_bonus);
    form.append("refer_bonus", refer_bonus);
    form.append("withdrawable_bonus", with_bonus);
    form.append('features',features)


    api
      .post("/createDes", form)
      .then((res) => {
        if (res.data.success === 1) {
          setOpenAlert(true);
          setSuccess(true);
          setOpenProgress(false);
          console.log(res);
          // window.location.reload();
        }
      })
      .catch((err) => {
        setOpenAlert(true);
        setSuccess(false);
        console.log(err);
      });
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const modalHandler = (id) => {
    handleOpen();
    setId(id);
  };

  const handleAlertClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenAlert(false);
  };
  return (
    <div>
      <MyModal open={open} id={id} handleClose={handleClose} link={link} />
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
          {success ? "Content Successfully Add !" : "Adding Faild !"}
        </Alert>
      </Snackbar>
      <Container maxWidth="100%">
        <Box
          sx={{
            width: "100%",
            height: "100vh",
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} md={8}>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 800 }}>
                  <TableHead>
                    <TableRow>
                      <TableCell>Number</TableCell>
                      <TableCell>Title</TableCell>
                      <TableCell>Description</TableCell>
                      <TableCell>Additional Description</TableCell>
                      <TableCell>Download Link</TableCell>
                      <TableCell>Referral Code</TableCell>
                      <TableCell>SignUp Bonus</TableCell>
                      <TableCell>Refer Bonus</TableCell>
                      <TableCell>Withdrawable Amount</TableCell>
                      <TableCell>Delete</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {appContents.map((data, index) => {
                      return (
                        <TableRow key={index}>
                          <TableCell>{data.number || "--"}</TableCell>
                          <TableCell>{data.title || "--"}</TableCell>
                          <TableCell>{data.desc || "--"}</TableCell>
                          <TableCell>{data.addi_desc || "--"}</TableCell>
                          <TableCell>{data.download_link || "--"}</TableCell>
                          <TableCell>{data.referral_code || "--"}</TableCell>
                          <TableCell>{data.signup_bonus || "--"}</TableCell>
                          <TableCell>{data.refer_bonus || "--"}</TableCell>
                          <TableCell>
                            {data.withdrawable_bonus || "--"}
                          </TableCell>
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
            </Grid>
            <Grid item xs={12} md={4}>
              <Container>
                <form onSubmit={submitForm} enctype="multipart/form-data">
                  <Paper elevation={3} sx={{ padding: "10px" }}>
                    <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                      Content Upload Form
                    </Typography>
                    <Box sx={{ padding: "10px 20px" }}>
                      <Button
                        variant="contained"
                        fullWidth
                        sx={{ backgroundColor: "#fff" }}
                      >
                        Select Image
                        <input
                          type="file"
                          id="img-upload"
                          required="true"
                          onChange={(e) => setImg(e.target.files[0])}
                        />
                      </Button>
                      <TextField
                        id="standard-basic"
                        label="Number"
                        fullWidth
                        margin="dense"
                        size="small"
                        type="number"
                        required
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                      />
                      <TextField
                        id="standard-basic"
                        label="Title"
                        fullWidth
                        margin="dense"
                        size="small"
                        type="text"
                        required
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                      />
                      <TextField
                        id="outlined-multiline-flexible"
                        label="Description"
                        multiline
                        minRows={4}
                        fullWidth
                        size="small"
                        margin="dense"
                        required
                        value={desc}
                        onChange={(e) => setDesc(e.target.value)}
                      />
                      <TextField
                        id="standard-basic"
                        label="Additional Description"
                        multiline
                        minRows={4}
                        fullWidth
                        margin="dense"
                        size="small"
                        type="text"
                        value={addi_desc}
                        onChange={(e) => setAddi_desc(e.target.value)}
                      />
                      <TextField
                        id="standard-basic"
                        label="Download Link"
                        fullWidth
                        margin="dense"
                        size="small"
                        type="text"
                        required
                        value={download_link}
                        onChange={(e) => setDownloadLink(e.target.value)}
                      />
                      <TextField
                        id="standard-basic"
                        label="Referral Code"
                        fullWidth
                        margin="dense"
                        size="small"
                        type="text"
                        required
                        value={referral_code}
                        onChange={(e) => setReferral(e.target.value)}
                      />
                      <TextField
                        id="standard-basic"
                        label="SingUp Bosus"
                        fullWidth
                        margin="dense"
                        size="small"
                        type="number"
                        value={signup_bonus}
                        onChange={(e) => setSignupBonus(e.target.value)}
                      />

                      <TextField
                        id="standard-basic"
                        label="Refer Bonus"
                        fullWidth
                        margin="dense"
                        size="small"
                        type="number"
                        value={refer_bonus}
                        onChange={(e) => setReferBonus(e.target.value)}
                      />
                      <TextField
                        id="standard-basic"
                        label="Withdrawable Bonus"
                        fullWidth
                        margin="dense"
                        size="small"
                        type="number"
                        value={with_bonus}
                        onChange={(e) => setWithBonus(e.target.value)}
                      />

                      <Divider />
                      <div>
                        <Button variant="contained"  onClick={() =>addInput()}>
                          + Add Features Field
                        </Button>
                        {input.map((value, index) => {
                          return (
                            <div >
                            <TextField
                              id="standard-basic"
                              label="Feature"
                              name="feature"
                              multiline
                              minRows={2}
                              fullWidth
                              margin="dense"
                              size="small"
                              type="text"
                              value={value.feature}
                              onChange={(event) =>handleFormChange(index,event)}
                              key={index}
                            />

                            <Button variant="outlined" small onClick={() =>removeInput(index)}>X Remove</Button></div>
                          );
                        })}
                      </div>

                      <div style={{ margin: "20px 0" }}>
                        <Button variant="contained" fullWidth type="submit">
                          Upload
                        </Button>
                      </div>
                      <Box sx={{ display: "flex" }}>
                        {openProgress && <CircularProgress />}
                      </Box>
                    </Box>
                  </Paper>
                </form>
              </Container>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
}
