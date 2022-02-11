import * as React from "react";
import { styled } from "@mui/material/styles";
import { Box, Paper, Grid, Typography, InputBase, IconButton, Button, } from "@mui/material";
import {RiSearchLine} from 'react-icons/ri';
import { makeStyles } from "@material-ui/core";
import bannerimg from '../../../assets/images/MaskGroup.png';
import './banner.scss';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(0),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const useStyles = makeStyles((theme) => ({
      saveBtn: {
      marginLeft: 'auto',
    },
  }));
export default function Banner() {
    const classes = useStyles();
  return (
    <Box sx={{ flexGrow: 1, backgroundColor: '#000014'}}>
      <Grid container spacing={2} sx={{ paddingTop: '35px',}}>
        <Grid item xs={12} lg={6} className="banner_section">
          <Typography varient="h4" component="h4" className="banner_h4">
            Source Commodities and Raw Materials from vetted suppliers around
            the world
          </Typography>
          <Paper
          className="banner_search_feild"
            component="form"
            sx={{
              p: "0px 0px",
              display: "flex",
              alignItems: "center",
              width: 500,
              borderRadius: "0px",
            }}
          >
            <IconButton type="submit" sx={{ p: "0 10px", }} aria-label="search" className="search_icon_btn">
              <RiSearchLine />
            </IconButton>
            <InputBase
              sx={{ ml: 1, flex: 1, p: 0, }}
              placeholder="Find Products"
              inputProps={{ "aria-label": "Find Products" }}
              className="find_product_input"
            />
            <Button variant="contained" className="banner_search_btn">Save</Button>
            
          </Paper>
        </Grid>
        <Grid item xs={12} lg={6}>
          <img src={bannerimg} className="img-fluid"/>
        </Grid>
      </Grid>
    </Box>
  );
}
