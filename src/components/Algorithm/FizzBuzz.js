import React from 'react';
import { Card, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root:{
        minWidth: 575,
        margin:'10px 100px 0 100px'
    },
    body:{
        width:'80%',
        padding:'5%',
        // marginTop: theme.spacing(8),
        minHeight: 200
    }
}))

const FizzBuzz = () => {
    let classes = useStyles();
    let fizzBuzzArray = [];
    for(let i=1; i<=100; i++){
        if(i%15 === 0){
            fizzBuzzArray.push("FizzBuzz");
        }else if(i%3 === 0){
            fizzBuzzArray.push("Fizz");
        }else if(i%5 === 0){
            fizzBuzzArray.push("Buzz");
        }else{
            fizzBuzzArray.push(i);
        }
        
    }

    let result1 = fizzBuzzArray.slice(0,25).join(",");
    let result2 = fizzBuzzArray.slice(25, 50).join(",");
    let result3 = fizzBuzzArray.slice(50, 75).join(",");
    let result4 = fizzBuzzArray.slice(75, 100).join(",");

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
                  {result1}
                </Grid>
                <Grid item>
                  {result2}
                </Grid>
                <Grid item>
                  {result3}
                </Grid>
                <Grid item>
                  {result4}
                </Grid>
                
            </Grid>
            
        </Card>
    );
}

export default FizzBuzz;