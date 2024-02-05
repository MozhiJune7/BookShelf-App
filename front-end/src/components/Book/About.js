import { Box, Typography, Container } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <Container maxWidth="md">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        mt={5}
        p={3}
        bgcolor="white"
        boxShadow={3}
        borderRadius={8}
      >
        <Typography variant="h2" color="primary" gutterBottom>
          Welcome to Our Book Store
        </Typography>
        <Typography variant="body1" align="center" paragraph>
          📚 Discover a world of knowledge and imagination at Our Book Store. We
          are delighted to introduce you to our CRUD application developed using
          the powerful MERN (MongoDB, Express, React, Node.js) stack.
        </Typography>
        <Typography variant="body1" align="center" paragraph>
          Our mission is to provide you with a seamless and user-friendly
          experience for browsing, adding, updating, and deleting books. Whether
          you're a seasoned bookworm or just embarking on your literary journey,
          we offer a diverse collection of books tailored to your interests.
        </Typography>
        <Typography variant="body1" align="center" paragraph>
          Books are not mere words on pages; they are portals to new worlds,
          fountains of knowledge, and companions in solitude. Through our
          platform, you can explore a vast array of genres and authors,
          discovering your next thrilling adventure or delving into realms of
          wisdom.
        </Typography>
        <Typography variant="body1" align="center" paragraph>
          Join us in celebrating the joy of reading and the magic of technology,
          bringing books even closer to you. Feel free to peruse our extensive
          catalog, update your reading list, and immerse yourself in the
          enchanting world of books.
        </Typography>
        <Typography variant="h5" color="secondary" gutterBottom>
          Thank you for choosing Our Book Store. Happy reading! 📖✨
        </Typography>
      </Box>
    </Container>
  );
};

export default About;
