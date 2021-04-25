import React from "react";
import "./App.css";

// import Navbar from "./components/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Report from "./Pages/Report";
import Products from "./Pages/Products";
// import Header from "./components/Layout/Header";
// import Box from "@material-ui/core/Box";
// import { Button } from "@material-ui/core";
// import { makeStyles } from "@material-ui/core/styles";
// import Paper from "@material-ui/core/Paper";

// import IconButton from "@material-ui/core/IconButton";
// import PhotoCamera from "@material-ui/icons/PhotoCamera";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   paper: {
//     padding: theme.spacing(2),
//     textAlign: "center",
//     color: theme.palette.text.secondary,
//     background: "blue",
//   },
//   container: {
//     padding: theme.spacing(4),
//   },
//   input: {
//     display: "none",
//   },
// }));
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Header from "./components/Layout/Header";
import SideBar from "./components/Layout/SideBar";
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  root1: {
    flexGrow: 1,
    // "& > *": {
    //   margin: theme.spacing(1),
    //   width: theme.spacing(100),
    //   height: theme.spacing(16),
    // },
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    background: "blue",
    width: "100%",
    height: "130px",
  },
  container: {
    padding: theme.spacing(2),
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

function App() {
  const classes = useStyles();

  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(!open);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header
        drawerWidth={drawerWidth}
        openDrawer={handleDrawerOpen}
        open={open}
      />
      <SideBar drawerWidth={drawerWidth} open={open} />
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />

        <div className={classes.root1}>
          <Router>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/report" component={Report} />
              <Route path="/products" component={Products} />
            </Switch>
          </Router>
        </div>
      </main>
    </div>
  );
  // return (
  //   <>
  //     {/* <Header />
  //     <Grid container className={classes.container} spacing={3}>
  //       <Grid item xs={6}>
  //         <Paper className={classes.paper}>
  //           <input
  //             accept="image/*"
  //             className={classes.input}
  //             id="contained-button-file"
  //             multiple
  //             type="file"
  //           />
  //           <label htmlFor="contained-button-file">
  //             <Button variant="contained" color="primary" component="span">
  //               Upload
  //             </Button>
  //           </label>
  //         </Paper>
  //       </Grid>
  //       <Grid item xs={6}>
  //         <Paper className={classes.paper}>xs=3</Paper>
  //       </Grid>
  //     </Grid> */}

  //     {/* <Box component="span" m={1}>
  //       <Button variant="contained" color="secondary">
  //         Secondary
  //       </Button>
  //     </Box>

  //     <Box color="text.primary" clone>
  //       <Button variant="contained" color="primary">
  //         Primary
  //       </Button>
  //     </Box> */}
  //     {/* <Router>
  //       <Navbar />
  //       <Switch>
  //         <Route path="/" exact component={Home} />
  //         <Route path="/report" component={Report} />
  //         <Route path="/products" component={Products} />
  //       </Switch>
  //     </Router> */}
  //   </>
  // );
}

export default App;
