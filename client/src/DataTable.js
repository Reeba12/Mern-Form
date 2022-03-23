import React,{useEffect,useState }from 'react'
import {useSelector} from 'react-redux'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { fontWeight } from '@mui/system';
import axios from 'axios';
import { Link } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom';
import SendSharpIcon from '@mui/icons-material/SendSharp';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import Box from "@mui/material/Box";
import FormControl from '@mui/material/FormControl';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import MenuItem from '@mui/material/MenuItem';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import VisibilityIcon from '@mui/icons-material/Visibility';


const DataTable = () => {
  const theme = useTheme();
  const leaddata = [
    {
      value: 'Prime',
      label: 'Prime',
    },
    {
      value: 'Sub',
      label: 'Sub',
    },

  ];
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };
  const names = [
    'Cyber',
    'IT Cloud',
    'Application Development',
    'Data Science & Analytics',
    'O and M',
    'New Vehicles'
  ];
  function getStyles(name, personName, theme) {
    return {
      fontWeight:
        personName?.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }
    
       
    
const [data, setdata] = useState([])
const [show, setShow] = useState(false)
const [newdate, setNewdate] = useState(null)
const [updatedData,setUpdatedData] = useState({
  "key":"",
  "clientAgency": "",
    "email": "",
    "name": "",
    "uniqueIdentifier": "",
    "govwinId": "",
    "opportunityDesc": "",
    "anticipatedSubDate": "",
    "leadAndSupport": "",
    "personName": [],
    "Inputdate":""
})

useEffect(()=>{
  axios.get("http://localhost:4001/read").then((response)=>{
    setdata(response.data)
  })
},[])
const deleteData=(key)=>{
axios.delete(`http://localhost:4001/delete/${key}`)
}
const editData=(key)=>{
  console.log(key)
  axios.get(`http://localhost:4001/new/${key}`).then((response)=>{
    console.log(response.data[0])
    setUpdatedData({
      key:response.data[0]._id,
      clientAgency: response.data[0].clientAgency,
      email: response.data[0].email,
      name: response.data[0].name,
      uniqueIdentifier: response.data[0].uniqueIdentifier,
      govwinId: response.data[0].govwinId,
      opportunityDesc: response.data[0].opportunityDesc,
      anticipatedSubDate: response.data[0].anticipatedSubDate,
      leadAndSupport: response.data[0].leadAndSupport,
      personName:response.data[0].personName,
      Inputdate:response.data[0].Inputdate
    })
  })
  setShow(true)
}
const handleChange = (event) => {
  // console.log({ [event.target.name]: event.target.value })
  setUpdatedData({ ...updatedData, [event.target.name]: event.target.value })
};
const Saved=(e)=>{
  e.preventDefault()
const Newkey=updatedData.key;
axios.put(`http://localhost:4001/update/${Newkey}`,{
  clientAgency: updatedData.clientAgency,
  email: updatedData.email,
  name: updatedData.name,
  uniqueIdentifier: updatedData.uniqueIdentifier,
  govwinId: updatedData.govwinId,
  opportunityDesc: updatedData.opportunityDesc,
  anticipatedSubDate: updatedData.anticipatedSubDate,
  leadAndSupport: updatedData.leadAndSupport,
  personName: updatedData.personName,
  Inputdate:newdate
})
setShow(false)
}

  return (
    
   <Container sx={{my:7}}>
   {show?
  <Paper
          sx={{
            boxShadow: 4,
            p: 5,
            margin: "auto",
            maxWidth: 500,
            flexGrow: 1,
            backgroundColor: (theme) =>
              theme.palette.mode === "dark" ? "red" : "#fff",
          }}
          elevation={3}
        >
<form onSubmit={Saved}>
            <FormControl fullWidth>
              <TextField
                // required
                id="standard-password-input"
                label="Company Email"
                type="email"
                autoComplete="current-email"
                variant="standard"
                margin="normal"
                value={updatedData.email}
                name="email"
                onChange={handleChange}
              />
              <TextField
                // required
                id="standard-password-input"
                label="Client Agency"
                type="text"
                autoComplete="current-text"
                variant="standard"
                margin="normal"
                value={updatedData.clientAgency}
                name="clientAgency"
                onChange={handleChange}
              />
              <TextField
                // required
                id="standard-password-input"
                label="Name"
                type="text"
                autoComplete="current-text"
                variant="standard"
                margin="normal"
                value={updatedData.name}
                name="name"
                onChange={handleChange}
              />
              <TextField
                // required
                id="standard-password-input"
                label="Unique Identifier (RFI,RFP,RFQ,SS Number)"
                type="text"
                autoComplete="current-text"
                variant="standard"
                margin="normal"
                value={updatedData.uniqueIdentifier}
                name="uniqueIdentifier"
                onChange={handleChange}
              /><br /><br />
              <FormControl sx={{ width: "100%" }}>
                <InputLabel id="demo-multiple-chip-label">Compatibility Domain</InputLabel>
                <Select
                  labelId="demo-multiple-chip-label"
                  id="demo-multiple-chip"
                  multiple
                  value={updatedData.personName}
                  onChange={handleChange}
                  name="personName"
                  input={<OutlinedInput id="select-multiple-chip" label="Compatibility Domain" />}
                  renderValue={(selected) => (
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                      {selected.map((value) => (
                        <Chip key={value} label={value} />
                      ))}
                    </Box>
                  )}
                  MenuProps={MenuProps}
                >
                  {names.map((name) => (
                    <MenuItem
                      key={name}
                      value={name}
                      style={getStyles(name, updatedData.personName, theme)}
                    >
                      {name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <TextField
                // required
                fullWidth
                id="standard-password-input"
                label="GovWin ID"
                type="text"
                autoComplete="current-text"
                variant="standard"
                margin="normal"
                value={updatedData.govwinId}
                name="govwinId"
                onChange={handleChange}
              />
              <TextField
                // required
                id="standard-password-input"
                label="Opportunity Overview/Description"
                type="text"
                autoComplete="current-text"
                variant="standard"
                margin="normal"
                value={updatedData.opportunityDesc}
                name="opportunityDesc"
                onChange={handleChange}
              />
              <TextField
                // required
                id="standard-password-input"
                label="Anticipated submission Date "
                type="text"
                autoComplete="current-text"
                variant="standard"
                margin="normal"
                value={updatedData.anticipatedSubDate}
                name="anticipatedSubDate"
                onChange={handleChange}
              />

            </FormControl>
            <br />
            <br />
            <Box sx={{
              //  display: 'flex',
              // alignItems: 'center',
              // '& > :not(style)': { m: 1 },
              '& .MuiTextField-root': { m: 1, },
            }} >
              <div>
                <TextField
                  sx={{
                    width: "45%"
                  }}
                  id="outlined-select-currency"
                  select
                  label="Leads and support"
                  value={updatedData.leadAndSupport}
                  name="leadAndSupport"
                  onChange={handleChange}
                  helperText="Please select anyone"
                >
                  {leaddata.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    //  sx={{
                    //    width: "45%"
                    //  }}
                    label="Anticipate RFP Date"
                    value={newdate}
                    onChange={(newValue) => {
                      setNewdate(newValue);
                    }}
                    renderInput={(params) => (
                      <TextField {...params} helperText={params?.inputProps?.placeholder} />
                    )}
                  />
                </LocalizationProvider>
              </div>
            </Box>
            <br />
            <br />
            <Stack direction="row" spacing={2} sx={{
              // width:"100%"
              display: "flex",
              alignItem: "center",
              justifyContent: "center",
            }}>
              <Button variant="contained" type="submit" endIcon={<SendSharpIcon />}>
                Submit
              </Button>
              <Link to='/table' style={{ textDecoration: 'none' }}>
              <Button variant="contained" endIcon={<VisibilityIcon/>}>
              View Data
              </Button>
              </Link>
    </Stack>
          </form>
        </Paper>

    
    :
    
    
    
    
    
  //Table  
    <div>
    <Link to='/' style={{ textDecoration: 'none' }}>
              
       <Button variant="contained" disableElevation>
      Add User
    </Button>
              </Link>
    <br /><br /><br />

        
        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650}} aria-label="simple table">
        <TableHead>
          <TableRow sx={{fontWeight:"300"}}>
            <TableCell>Name</TableCell>
            <TableCell align="right">Client Agency</TableCell>
            <TableCell align="right">Company Email</TableCell>
            <TableCell align="right">Unique Identifier</TableCell>
            <TableCell align="right">Compatibility Domain</TableCell>
            <TableCell align="right">Govwin ID</TableCell>
            <TableCell align="right">Opportunity Overview</TableCell>
            <TableCell align="right">Anticipate Submission</TableCell>
            <TableCell align="right">Leads and Support</TableCell>
            <TableCell align="right">Anticipate REF Date</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {
          data.map((i,key)=>{
            return(
              <TableRow sx={{fontWeight:"300"}}>
            <TableCell>{i.name}</TableCell>
            <TableCell align="right">{i.clientAgency}</TableCell>
            <TableCell align="right">{i.email}</TableCell>
            <TableCell align="right">{i.uniqueIdentifier}</TableCell>
            <TableCell align="right">{i.personName}</TableCell>
            <TableCell align="right">{i.govwinId}</TableCell>
            <TableCell align="right">{i.opportunityDesc}</TableCell>
            <TableCell align="right">{i.anticipatedSubDate}</TableCell>
            <TableCell align="right">{i.leadAndSupport}</TableCell>
            <TableCell align="right">{i.Inputdate}</TableCell>
            <TableCell align="right" sx={{display:"flex"}}>
              <Button onClick={()=>{deleteData(i._id)}}><DeleteIcon /></Button>
              <Button onClick={()=>{editData(i._id)}}><EditIcon /></Button>
            </TableCell>
          </TableRow>
            )
          })
        }
        </TableBody>
      </Table>
    </TableContainer>
    </div>
   }
          </Container> 
  );
}

export default DataTable