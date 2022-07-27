import React from "react";
import {
  Container,
  SwipeableDrawer,
  Box,
  Drawer,
  Typography,
  Divider,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  ListItem,
} from "@mui/material";
import { BiArrowBack, BiBookContent, BiMenu } from "react-icons/bi";
import { useState } from "react";
import { createUseStyles } from "react-jss";
import {Link} from "react-router-dom"

const useStyles = createUseStyles({
    drawerStyle: {
      transition:'all 0.8s ease-in',

      '& .MuiPaper-elevation':{
        overflowX:'hidden',

      }
    }
  });
export default function MyDrawer({open,handleDrawerClose}) {

  const container =
    window !== undefined ? () => window.document.body : undefined;

    const classes = useStyles();

  return (
    <div>
      <Container>
        <Box
          sx={{
            width: "fit-content",
            height: "100vh",
            backgroundColor: "inherit",
          }}
        >
          <Drawer className={classes.drawerStyle} open={open} container={container} sx={{'& .MuiPaper-elevation':{width: open ? 'auto':'50px'}}}>
            <Box>
                <IconButton onClick={()=>handleDrawerClose()} sx={{'opacity':open ? 1 : 0}}>
                <BiArrowBack/>
              </IconButton>
            </Box>
            <Divider />

            <List
              disablePadding
              sx={{ marginTop: "20px" }}
            >
              <ListItem disablePadding sx={{textDecoration: "none"}}>
            <Link to="/">
                <ListItemButton>
                  <ListItemIcon>
                    <BiBookContent />
                  </ListItemIcon>
                  <ListItemText primary="Contents" open sx={{'& span':{color:'#000'}}}/>
                </ListItemButton>
                </Link>
              </ListItem>
             
              <ListItem disablePadding>
            <Link to="/visiters">
                <ListItemButton>
                  <ListItemIcon>
                    <BiBookContent />
                  </ListItemIcon>
                  <ListItemText primary="Messages" open sx={{'& span':{color:'#000'}}}/>
                </ListItemButton>
                </Link>
              </ListItem>
              <ListItem disablePadding>
            <Link to="/ads">
                <ListItemButton>
                  <ListItemIcon>
                    <BiBookContent />
                  </ListItemIcon>
                  <ListItemText primary="Ads" open sx={{'& span':{color:'#000'}}}/>
                </ListItemButton>
                </Link>
              </ListItem>
  
            </List>
          </Drawer>
        </Box>
      </Container>
    </div>
  );
}
