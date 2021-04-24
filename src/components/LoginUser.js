import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import React, { useState,useEffect } from "react";
import Alert from '@material-ui/lab/Alert';
import {db} from "../firebase"

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function LoginUser() {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dataUsers, setDataUsers] = useState([]);
  const [alert,setAlert] =useState('')
  const fetchUsers = async () => {
    const response = db.collection("users");
    
    const data = await response.get();
    data.forEach((item) => {
      setDataUsers([...dataUsers, item.data()]);
    });
  };
  useEffect(() => {
    fetchUsers();
  });

  const exitEmail = (email) => {
    return !!dataUsers?.find((item) => item.email === email);
  };
  const rightPassword = (password) => {
    return !!dataUsers?.find((item) => item.password === password);
  };

  const SignIn =() =>{
    if (exitEmail(email) ){
       if (rightPassword(password))  {
         window.location.href="/home"
         setAlert(<Alert severity="success">Login Successfully</Alert>)
         
       }
       else {
       setAlert (<Alert severity="error">your password wrong!</Alert>)
       }
    } 
    else {
     setAlert(<Alert severity="error">you have not registerd yet</Alert>) 
    }
  }
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
           
            autoFocus
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
         
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={SignIn}
          >
            Sign In
          </Button>
          <Grid container>
          {alert}
            <Grid item>
              <Link href="/register" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
