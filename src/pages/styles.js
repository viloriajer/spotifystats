import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({

    artistDiv:{
        display: "flex",
        flexDirection: "column",
        width: 250,
        marginBottom: 20,
        border: "1px",
        borderRadius: 15,
        boxShadow: "5px 10px 10px #888888",
        position:"relative"
    },
    number:{position:"absolute", color:"#f2f3f4", left:10, top:-10},
    img:{
        width: "100%",
        height: 200,
        objectFit: "cover",
        borderRadius: 5,
    },
    artistName:{
        marginTop: 5,
        marginBottom: 10,
        textAlign: "center",
    },
  [theme.breakpoints.down('sm')]:{

    topButtons:{
      flexDirection:"column",
      justifyContent:"space-between",
      height:150
    },
    mainContainer:{
      flexDirection:"column",
      alignItems: "center"
      
    }
  }
}));