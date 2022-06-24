import { Grid, makeStyles, Typography } from '@material-ui/core'
import React from 'react';

const useStyles=makeStyles( (theme) =>({
    root:{
backgroundColor:'#e38ea5',
height:'80vh',
opacity:'0.3',
backgroundImage:''
    },
bgImage:{
    // backgroundColor:'blue',
backgroundImage:`url('https://cdn.shopify.com/s/files/1/0301/7274/1770/files/cosmetic1.png?v=1612239757')`,
    // backgroundImage:'https://cdn.shopify.com/s/files/1/0301/7274/1770/files/cosmetic1.png?v=1612239757'
},
content:{
    // backgroundColor:'red',
    // backgroundColor:'white',
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    width:'50%',
    height:"100%",
    
}
}))

const Slider = () => {
    const classes=useStyles();
    return (
        <>
<Grid container className={classes.root} style={{backgroundImage:`url('https://cdn.shopify.com/s/files/1/0301/7274/1770/files/cosmetic1.png?v=1612239757')`}}>
    <Grid item xs={6} className={classes.content}>
<Typography variant="h4">
    Beauty
</Typography>

<Typography variant="h2" style={{color:'black',opacity:'1'}}>
    Super Natural
</Typography>

<Typography variant="h6">
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, to make a type specimen book.
</Typography>
    </Grid>
   <Grid item xs={6} className={classes.bgImage}>
       fdd
       </Grid>    
</Grid>



        </>
    )
}

export default Slider
