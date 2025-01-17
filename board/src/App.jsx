import * as React from 'react';
import { styled } from '@mui/material/styles';
import {Box, Typography,TextField, Paper} from '@mui/material';
import { borders, color, margin } from '@mui/system';
import logo from './assets/logo.png';
import Chart from "./assets/Chart.png";
import Card from "./Components/Card/Card"


const Division = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  height: '100vh',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

export default function App() {
  return (
    <Box sx={{ width: 1}}>
      <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 0 }}>
        <Box sx={{ gridColumn: 'span 2','& .MuiPaper-root': {
        padding:"0px"
      } }}>
          <Division sx={{background:'#F1F2F7' }}>        
            {/* <Typography variant="h6" component="h6" sx={{ borderRadius: 0.3, borderColor: 'red',borderBottom: 1, paddingBottom:"20px" }}>
            Workspace
            </Typography> */}
            <Box component="div" sx={{
          borderBottom: 1,
          borderColor: "#C8CBD9",
          width: "100%",
          height: "50px"
          
        }}>
            <Box
  component="img"
  sx={{
  height: 23,
  width: 154,
  marginTop: "10px"
  }}
  alt="Workspace."
  src={logo}
  />
  </Box>
    <Typography variant="p" component="p" sx={{ marginTop: '40px' }} >
            PRODUKTION
    </Typography>
    <Box component="div" sx={{
          background: "rgba(112, 127, 221, 0.10)",
          width: "200px",
          height: "50px",
          textAlign:"center",
          color:"#707FDD",
          Opacity:"10%",
          display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems:"center",
    margin: "auto",
    marginTop: "12px"
    
        }}>
  <Box component="p" sx={{letterSpacing:"1.3px"}}> <Box component="img" sx={{
    height: 18,
    width: 18,
    verticalAlign: 'middle',
    marginRight: "20px"
    }}
    alt="Workspace."
    src={Chart}/>  Taskboard</Box>
    </Box>
    
        </Division>
        </Box>
{/* Right Division Starts */}
        <Box sx={{ gridColumn: 'span 10',
     '& .MuiPaper-root': {
        padding:"0px",
      } }}>
          <Division sx={{   textAlign: 'left' }}>

          <Box
      sx={{
        width: '100%',
        height: '140px',
        color: '#fff',
        '& > .MuiBox-root > .MuiBox-root': {
          p: 1,
          padding:"0px",
          fontSize: '0.875rem',
          fontWeight: '700',
        }
      }}
    >
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gridTemplateRows: 'auto',
          gridTemplateAreas: `"header header header header"
        "main main main sidebar"`,
        color:"#000"
        }}
      >
        <Box sx={{ gridArea: 'header',height:"50px",borderBottom: 1,
          borderColor: "#C8CBD9" }}>Header</Box>
        <Box sx={{ gridArea: 'main' }}>
        <Box component="div" sx={{ display: 'grid',gap: 1, gridTemplateColumns: 'repeat(4, 1fr)',padding: ".5em" }}>
            <Box component="div" sx={{background: "#DDDCEA",boxShadow: "4px 2px 7px .2px rgba(0, 0, 0, 0.1)", marginTop: "148px", height: "400px",border:"1px solid #DDDCEA", borderRadius:"5px"}}>
              <Box component="div" sx={{background: "#ffffff", width:"100%", height: "44px",lineHeight: "44px", borderRadius:"5px 5px 0 0", textAlign:"center",fontWeight: "200"}}>
                <Box component="span">
                BACKLOG
                </Box>
              </Box>
              <Box>
                <Card/>
              </Box>
            </Box>
            <Box component="div" sx={{background: "#DDDCEA",boxShadow: "4px 2px 7px .2px rgba(0, 0, 0, 0.1)", marginTop: "148px", height: "200px",border:"1px solid #DDDCEA", borderRadius:"5px"}}>
            <Box component="div" sx={{background: "#ffffff", width:"100%", height: "44px",lineHeight: "44px", borderRadius:"5px 5px 0 0", textAlign:"center",fontWeight: "200"}}>
                <Box component="span">
                IN PROGRESS
                </Box>
            </Box>
            <Box>
                <Card/>
            </Box>
            </Box>
            <Box component="div" sx={{background: "#DDDCEA",boxShadow: "4px 2px 7px .2px rgba(0, 0, 0, 0.1)", marginTop: "148px", height: "300px",border:"1px solid #DDDCEA", borderRadius:"5px"}}>
            <Box component="div" sx={{background: "#ffffff", width:"100%", height: "44px",lineHeight: "44px", borderRadius:"5px 5px 0 0", textAlign:"center",fontWeight: "200"}}>
                <Box component="span">
                PENDING
                </Box>
              </Box>
              <Box>
                <Card/>
              </Box>
            </Box>
            <Box component="div" sx={{background: "#DDDCEA",boxShadow: "4px 2px 7px .2px rgba(0, 0, 0, 0.1)", marginTop: "148px", height: "400px",border:"1px solid #DDDCEA", borderRadius:"5px"}}>
            <Box component="div" sx={{background: "#ffffff", width:"100%", height: "44px",lineHeight: "44px", borderRadius:"5px 5px 0 0", textAlign:"center",fontWeight: "200"}}>
                <Box component="span">
                COMPLETED
                </Box>
            </Box>
            <Box>
                <Card/>
            </Box>
            </Box>
        </Box>
        </Box>
        <Box sx={{ gridArea: 'sidebar',width:"250px",borderLeft: 1, borderColor: "#C8CBD9", height: 'calc(100vh)'
        }}>Sidebar</Box>
      </Box>
    </Box>
       
            </Division>
          
        </Box>
      </Box>
    </Box>
  );
}

/*      <Box component="div" sx={{borderBottom: 1,
          borderColor: "#C8CBD9",
          width: "100%",
          height: "50px"}} >

            
          {/* <TextField fullWidth label="Search" id="fullWidth"
           sx={{background:"#F6F6FB", height:"32px", width:"500px" , textAlign:"left" , paddingTop: "4px",
           PaddingBottom:"34px", border: "0px"}} /> 
           </Box>
            
            <Box component="div"  sx={{borderLeft: 1,
            borderRight: 1,
          borderColor: "#C8CBD9",
          width: "200px",
          height: "100%"}}>
            ghjk
            </Box> */