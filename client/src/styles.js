import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    [theme.breakpoints.down('sm')]: {
        mainContainer: {
            flexDirection: "column-reverse",
           
          },
          heading: {
            fontSize: 25
          }
      },
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    color: '#b12a5b',
  },
  image: {
    marginLeft: '15px',
    borderRadius: 15,
  },

}));