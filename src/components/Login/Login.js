import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    TextField,
    Button,
    Card,
    Snackbar,
    IconButton,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
    root:{
        minWidth: 575,
        margin:'100px 100px 0 100px'
    },
    body:{
        width:'50%',
        marginLeft:'25%',
        marginTop: theme.spacing(8),
        height: '50vh'
    }
}))

const Login = () =>{
    const classes = useStyles();
    const [error, setError] = useState({
        userName:false,
        password:false
    });
    const [auth, setAuth] = useState({
        userName:'',
        password:''
    })
    const [open, setOpen] = useState(false);

    const authInputHandler = (event) => {
        let newAuth = {
            ...auth,
            [event.target.id]: event.target.value
        };

        setAuth(newAuth);

    }

    const submitHandler = () => {
        let newError = {};
        if(auth.userName === '' && auth.password === ''){
            newError = {
                userName:true,
                password:true
            }
        }else if(auth.password === ''){
            newError = {
                userName:false,
                password:true
            }
        }else if(auth.userName === ''){
            newError = {
                userName:true,
                password:false
            }
        }else{
            setOpen(true);
        }

        setError(newError);
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };
    return(
        <Card className={classes.root}>
            <form className={classes.body}>
                <div>
                    <p>User Name:{auth.userName}</p>
                    <p>Password:{auth.password}</p>
                </div>
                <div>
                    <TextField
                        fullWidth
                        error={error.userName}
                        helperText="User Name"
                        id="userName"
                        label="User Name"
                        variant="outlined"
                        value={auth.username}
                        onChange={authInputHandler}
                    />
                    <TextField
                        fullWidth
                        error={error.password}
                        helperText="Password"
                        id="password"
                        label="Password"
                        variant="outlined"
                        value={auth.password}
                        onChange={authInputHandler}
                    />
                    <Button onClick={submitHandler} variant="contained" color="primary">Submit</Button>
                </div>
            </form>
            <Snackbar
                anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
                }}
                open={open}
                autoHideDuration={1000}
                onClose={handleClose}
                message="Submitted"
                action={
                <React.Fragment>
                    <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
                    <CloseIcon fontSize="small" />
                    </IconButton>
                </React.Fragment>
            }
      />
        </Card>
    );
}

export default Login;