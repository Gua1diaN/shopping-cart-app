import React, { useState, useEffect } from 'react';
import { 
    Card, 
    Grid, 
    Button,
    Divider, 
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root:{
        minWidth: 575,
        margin:'10px 100px 0 100px'
    },
    body:{
        width:'80%',
        padding:'5%',
        marginTop: theme.spacing(8),
        minHeight: 200
    }
}))

const Shuffle = () => {
    let classes = useStyles();
    const [inputArray, setInputArray] = useState([1,2,4]);
    const [outputArray, setOutputArray] = useState([]);

    useEffect(()=>{
        let newOutputArray = [];
        for(let i=inputArray.length-1;i>=0;i--){
            newOutputArray.push(inputArray[i]);
        }
        setOutputArray(newOutputArray)
    }, [inputArray])

    const addHandler = () => {
        let num = parseInt(Math.random()*100,10);
        let newArray = inputArray;
        newArray=[
            ...inputArray,
            num
        ];
        //Question:这里改成newArray.push(num)就不好用，查了查资料没太搞懂为什么
        setInputArray(newArray);
    }
    return(
        <Card className={classes.root}>
            <Grid 
                className={classes.body}
                container
                alignItems="center"
                justify="space-between"
                spacing={3}
            >
                <Grid item>
                    Input Array: {inputArray.join(",")}
                </Grid>
                <Grid item>
                  <Button variant="contained" color="primary" onClick={addHandler}>Add</Button>
                </Grid>
                <Divider />
                <Grid item>
                    Shuffle Array: {outputArray.join(",")}
                </Grid>              
            </Grid>
            
        </Card>
    );
}

export default Shuffle;