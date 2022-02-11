import React from 'react'
import { Box, Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import "./newcredential.scss";
import loginimg from "../../../assets/images/CroodsChart.png";
import { NewCredentialForm } from './NewCredentialForm';

export const NewCredential = () => {
    return (
        <Box sx={{ flexGrow: 1, padding: "80px 0" }}>
          <Grid container spacing={0}>
            <Grid item xs={12} md={5} className="login_img">
              <img src={loginimg} alt="" className="img-fluid" />
            </Grid>
            <Grid item xs={12} md={7} className="login_content">
             <NewCredentialForm />
            </Grid>
          </Grid>
        </Box>
    )
}
