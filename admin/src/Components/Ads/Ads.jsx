import {
  Alert,
  Button,
  CircularProgress,
  Grid,
  Paper,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import React, { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { ApiContext } from "../../App";
import MediaCard from "../Card/MediaCard";
import MyModal from "../Modal/MyModal";

export default function Ads() {
  const api = useContext(ApiContext);
  const [appContents, setAppContents] = useState([]);
  const [open, setOpen] = useState(false);
  const [id, setId] = useState([]);
  const [openAlert, setOpenAlert] = useState(false);
  const [success, setSuccess] = useState(false);
  const [openProgress, setOpenProgress] = useState(false);


  const [img, setImg] = useState(null);
  const [ads_link, setAdsLink] = useState("");

  const link = "/deleteAds";
  useEffect(() => {
    api
      .get("/getAds")
      .then((response) => {
        setAppContents(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const submitForm = (e) => {
    e.preventDefault();

    setOpenProgress(true)
    const form = new FormData();
    form.append("img", img);
    form.append("ads_link", ads_link);
    api
      .post("/createAd", form)
      .then((res) => {
        if (res.data.success === 1) {
          setOpenAlert(true);
          setSuccess(true);
          setOpenProgress(false)
          window.location.reload();
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
              <Grid container spacing={2}>
                {appContents.map((data, index) => {
                  return (
                    <Grid item xs={12} md={4} sm={6} key={index}>
                      <MediaCard data={data} modalHandler={modalHandler}/>
                    </Grid>
                  );
                })}
              </Grid>
            </Grid>
            <Grid item xs={12} md={4}>
              <Container>
                <form onSubmit={submitForm} enctype="multipart/form-data">
                  <Paper elevation={3} sx={{ padding: "10px" }}>
                    <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                      Ads Upload Form
                    </Typography>
                    <Box sx={{ padding: "10px 20px" }}>
                      <Button
                        variant="contained"
                        fullWidth
                        sx={{ backgroundColor: "#fff" ,color:'#000'}}
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
                        label="Link"
                        variant="standard"
                        fullWidth
                        margin="dense"
                        size="small"
                        type="text"
                        required
                        value={ads_link}
                        onChange={(e) => setAdsLink(e.target.value)}
                      />

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
