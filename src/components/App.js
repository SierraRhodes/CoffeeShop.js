import React from "react";
import Header from "./Header";
import StoreManagement from "./StoreManagement";


function App() {
  const appStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/pink_coffe.avif)`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh", // Ensure the background covers the full viewport height
    padding: "20px" // Add padding to avoid content being too close to the edges
  };

  return (
    <div style={appStyle}>
      <Header />
      <StoreManagement />
    </div>
  );
}

export default App;
