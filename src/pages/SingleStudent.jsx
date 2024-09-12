import React, { useState, useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

function UserDetails() {
  const [data, setData] = useState(null);

  // Fetch user data (replace with your actual API endpoint)
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/1')
      .then((response) => response.json())
      .then((userData) => setData(userData))
      .catch((error) => console.error('Error fetching user data:', error));
  }, []);

  return (
    <div style={styles.container}>
      <div id="div" style={styles.userCard}>
      {data ? (
  <>
    <h2>{data.name}</h2>
    <h3>{data.username}</h3>
    <p>{data.email}</p>
    <p>{data.phone}</p>
    <p>{data.company?.name}</p>
  </>
) : (
    <Box sx={{ display: 'flex' }}>
    <CircularProgress />
  </Box>
)}
      </div>
    </div>
  );
}

// Inline styles for responsive design
const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center', // Center the content horizontally
    alignItems: 'center', // Center the content vertically
    padding: '20px',
  },
  userCard: {
    border: '1px solid black',
    borderRadius: '10px', // Rounded corners
    padding: '20px',
    maxWidth: '400px',
    width: '100%', // Ensures it takes full width on small screens
    backgroundColor: '#f9f9f9',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Adds a soft shadow
    textAlign: 'center', // Center-align the text
  },
  '@media (max-width: 600px)': {
    userCard: {
      padding: '15px',
      fontSize: '14px', // Make the text smaller on small screens
    },
  },
};

export default UserDetails;
