import React, { useState } from "react";
// import Grid from "@mui/material/Grid";
// import * as startOfDay from 'date-fns/startofday';
import { Link } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import FormControl from '@mui/material/FormControl';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import MenuItem from '@mui/material/MenuItem';
import { useDispatch } from "react-redux";
// import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
// import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import Container from '@mui/material/Container';
// import SkipNextIcon from '@mui/icons-material/SkipNext';
import VisibilityIcon from '@mui/icons-material/Visibility';
import './App.css';
import Button from '@mui/material/Button';
import SendSharpIcon from '@mui/icons-material/SendSharp';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import axios from 'axios'
import { User } from "./redux/action/action";

const Form = () => {
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
  // const [value, setValue] = useState(null);
  const [data, setData] = useState([])
  const [value, setValue] = useState(null);
  const [Input, setInput] = useState({
    "clientAgency": "",
    "email": "",
    "name": "",
    "uniqueIdentifier": "",
    "govwinId": "",
    "opportunityDesc": "",
    "anticipatedSubDate": "",
    "leadAndSupport": "",
    "personName": [],

  })
  function getStyles(name, personName, theme) {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }

  const handleChange = (event) => {
    console.log({ [event.target.name]: event.target.value })
    setInput({ ...Input, [event.target.name]: event.target.value })
  };
  const dispatch=useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    // const allData = { ...Input, value, id: new Date().getTime().toString() }
    // console.log(allData)
    
    // data.push(allData)
    
    // setData([...data])
  // dispatch(User(Input,value))
  
    alert("submit Successfully")
    axios.post("http://localhost:4001/",{
      clientAgency: Input.clientAgency,
      email: Input.email,
      name: Input.name,
      uniqueIdentifier: Input.uniqueIdentifier,
      govwinId: Input.govwinId,
      opportunityDesc: Input.opportunityDesc,
      anticipatedSubDate: Input.anticipatedSubDate,
      leadAndSupport: Input.leadAndSupport,
      personName: Input.personName,
      Inputdate:value
    })
    setInput({
      "clientAgency": "",
      "email": "",
      "name": "",
      "uniqueIdentifier": "",
      "govwinId": "",
      "opportunityDesc": "",
      "anticipatedSubDate": "",
      "leadAndSupport": "",
      "personName": [],
    })
    setValue(null)
    console.log(data)
  }
  return (
    <>
      <Container sx={{ my: "3rem" }}>
        <div className="image">
          <img src="./images/aretec.png" alt="logo" />
        </div>
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
          <Typography variant="h5" component="h2" textAlign="center" sx={{ fontWeight: 'bolder' }}>
            AretacSBD 8(a) Stars III Registration Form
          </Typography>
          <br />
          <br />

          <span>
            <Typography>
              Contact:
              <a href="mailto:stars3@aretecinc.com"> stars3@aretecinc.com </a>
            </Typography>
            <Typography>Contact Number: 47QTCB22D0173</Typography>
          </span>
          <br />
          <br />
          <Typography variant="body2" sx={{ fontWeight: 'bolder' }}>
            Aretac approval of Pricing, Staffing and participation in white
            glove review will always be required

          </Typography>
          <br />
          <br />
          <br />
          <form onSubmit={handleSubmit}>
            <FormControl fullWidth>
              <TextField
                required
                id="standard-password-input"
                label="Company Email"
                type="email"
                autoComplete="current-email"
                variant="standard"
                margin="normal"
                value={Input.email}
                name="email"
                onChange={handleChange}
              />
              <TextField
                required
                id="standard-password-input"
                label="Client Agency"
                type="text"
                autoComplete="current-text"
                variant="standard"
                margin="normal"
                value={Input.clientAgency}
                name="clientAgency"
                onChange={handleChange}
              />
              <TextField
                required
                id="standard-password-input"
                label="Name"
                type="text"
                autoComplete="current-text"
                variant="standard"
                margin="normal"
                value={Input.name}
                name="name"
                onChange={handleChange}
              />
              <TextField
                required
                id="standard-password-input"
                label="Unique Identifier (RFI,RFP,RFQ,SS Number)"
                type="text"
                autoComplete="current-text"
                variant="standard"
                margin="normal"
                value={Input.uniqueIdentifier}
                name="uniqueIdentifier"
                onChange={handleChange}
              /><br /><br />
              <FormControl sx={{ width: "100%" }}>
                <InputLabel id="demo-multiple-chip-label">Compatibility Domain</InputLabel>
                <Select
                  labelId="demo-multiple-chip-label"
                  id="demo-multiple-chip"
                  multiple
                  value={Input.personName}
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
                      style={getStyles(name, Input.personName, theme)}
                    >
                      {name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <TextField
                required
                fullWidth
                id="standard-password-input"
                label="GovWin ID"
                type="text"
                autoComplete="current-text"
                variant="standard"
                margin="normal"
                value={Input.govwinId}
                name="govwinId"
                onChange={handleChange}
              />
              <TextField
                required
                id="standard-password-input"
                label="Opportunity Overview/Description"
                type="text"
                autoComplete="current-text"
                variant="standard"
                margin="normal"
                value={Input.opportunityDesc}
                name="opportunityDesc"
                onChange={handleChange}
              />
              <TextField
                required
                id="standard-password-input"
                label="Anticipated submission Date "
                type="text"
                autoComplete="current-text"
                variant="standard"
                margin="normal"
                value={Input.anticipatedSubDate}
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
                  value={Input.leadAndSupport}
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
                    value={value}
                    onChange={(newValue) => {
                      setValue(newValue);
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
      </Container>
    </>
  );
};

export default Form;
