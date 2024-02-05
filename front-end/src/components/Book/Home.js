import { Button, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const backgroundImageUrl =
    "https://upload.wikimedia.org/wikipedia/commons/2/2b/Bookshelf.jpg";

  const containerStyle = {
    background: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${backgroundImageUrl})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <div style={containerStyle}>
      <Button
        LinkComponent={Link}
        to="/books"
        sx={{ marginTop: -3, background: "black" }}
        variant="contained"
      >
        <Typography variant="h3" style={{ textAlign: "center" }}>
          View All Books
        </Typography>
      </Button>
    </div>
  );
};

export default Home;
