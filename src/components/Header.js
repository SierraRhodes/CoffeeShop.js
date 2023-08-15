function Header() {
  const myStyledComponentStyles = {
    backgroundColor: '#fcf0f1',
    fontFamily: 'sans-serif',
    paddingTop: '50px',
    paddingBottom: '30px',  // Add some padding to the bottom
    textAlign: 'center',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' // Add a subtle shadow
  };

  const headerTitleStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
  };

  const headerSubtitleStyle = {
    fontSize: '16px',
    color: '#777'
  };

  return (
    <header style={myStyledComponentStyles}>
      <div style={headerTitleStyle}>Belle's Coffee Shop</div>
      <div style={headerSubtitleStyle}>Your Favorite Coffee Blends</div>
    </header>
  );
}

export default Header;