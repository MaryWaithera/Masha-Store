import React from "react";
import { Link } from "react-router-dom";
import { Container, Typography, Paper, Divider } from "@mui/material";
import Login from "./Login";
import { PageContainer } from "../styles/page/containers";
import { Colors } from "../styles/theme/theme";

export const LoginPage = () => {
  return (
    <PageContainer>
      <Paper
        elevation={3}
        sx={{ width: "20rem", margin: "0 auto", padding: "1.5rem 1rem" }}
      >
        <Typography variant="h4" mb="1rem">
          Login
        </Typography>
        <Login />
        <Divider textAlign="center" />
        <Typography variant="subtitle1" mt="2rem">
          Do you need an account?{" "}
          <Link to="/register" sx={{ color: Colors.secondary }}>
            Sign up Now
          </Link>
        </Typography>
      </Paper>
    </PageContainer>
  );
};
