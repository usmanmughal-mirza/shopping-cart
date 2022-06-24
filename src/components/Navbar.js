import React from 'react'
import { AppBar, Grid, IconButton, makeStyles, Toolbar, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined'

const useStyles =makeStyles( (theme) =>({
    root:{
backgroundColor:'red'
    },
  appBar:{
backgroundColor:'white',
height:'15vh'
  }  ,
    navLinks:{
        // backgroundColor:'red',
        height:'100%',
        display:'flex',
        alignItems:'center'
            },
     links:{
        textDecoration:'none',
        color:'black',
        padding:"20px 20px"
     },
     navHeading:{
         color:'black',
         fontWeight:'700',
         padding:"40px 10px"
     },
     iconBtn:{
         padding:'30px ',
        //  backgroundColor:'red',
         width:'100%',
         height:'100%',

     }
     
}))

const Navbar = () => {
const classes=useStyles();

    return (
        <div className={classes.root}> 
            <AppBar elevation={3} className={classes.appBar} position="static">
                <Toolbar>
                    <Grid container> 
                    <Grid  item xs={5}>
                        <div className={classes.navLinks}>
                    <Link className={classes.links}> Checkout</Link>
                    <Link className={classes.links}> Wishlist</Link>
                    <Link className={classes.links}> Contact</Link>
                    </div>
                    </Grid>

                    <Grid  item xs={5}>
                  <Typography  variant="h4" className={classes.navHeading}>
                      Amazon
                  </Typography>
                    </Grid>

                    <Grid  item xs={2}>
                  <IconButton className={classes.iconBtn}>
                      <SearchIcon style={{fontSize:'30px',margin:'15px'}} />
                      <PeopleAltIcon style={{fontSize:'30px',margin:'15px'}} />
                      <ShoppingCartOutlinedIcon style={{fontSize:'30px',margin:'15px'}} />

                  </IconButton>
               
                  
                    </Grid>

                    </Grid>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar
