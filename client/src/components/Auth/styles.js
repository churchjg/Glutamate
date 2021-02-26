import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(2),
  },
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    
  },
  googleButton: {
    marginBottom: theme.spacing(2),
  },
  fabProgress: {
    color: "white",
    position: "absolute",
    top: 2,
    left: 50,
    zIndex: 1
  },
  wrapper: {
    margin: theme.spacing(3, 0, 2),
    position: "relative"
  },
  switch: {
    border: ".2px solid grey",  '&:hover': {
      border: "3px solid white",
      borderRadius: 5,
      color: "green",
      fontSize: "15px",
      fontWeight: 'bold'
    },
    
  }
}));