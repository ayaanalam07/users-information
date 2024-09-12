import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';


const Home = () => {
  const [data, setData] = useState(null);

  // usenavigate
  const navigate = useNavigate()
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then((res) => {
        console.log(res)
        setData(res)
      }).catch((err) => {
        console.log(err);

      })
  }, [])

  const singleUser = (item) => {
    navigate(`singlestudent/${item.id}`)
  }
  return (
    <>
      <h1 className='text-center mt-5'>Hello students</h1>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '20px',
        padding: '20px',
      }}>
        {
          data ? data.map((item) => {
            return <div key={item.id} style={{
              border: '1px solid black',
              padding: '20px',
              height: '320px',
              position: 'relative',
              backgroundColor: '#f9f9f9',
            }}>
              <h3>Name: {item.name}</h3>
              <p>UserName: {item.username}</p>
              <p>Email: {item.email}</p>
              <p>Number: {item.phone}</p>
              <p>Company: {item.company.name}</p>
              <Button onClick={() => singleUser(item)} variant="contained">Contained</Button>
            </div>
          }) : <Box sx={{ display: 'flex' }}>
            <CircularProgress />
          </Box>
        }
      </div>
    </>
  )
}

export default Home