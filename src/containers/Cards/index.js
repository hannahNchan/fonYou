import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useSelector } from "react-redux";
import Backdrop from '@material-ui/core/Backdrop';
import Modal from '@material-ui/core/Modal';
import Fade from '@material-ui/core/Fade';

// import classes from './index.css';
const useStyles = makeStyles({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: 'white',
    border: '2px solid #000',
  },
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
    width: 140
  },
});


const Cards = props => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState({});
  const {characters} = useSelector(store => store);

  const handleOpen = character => {
    setSelected(character);
    setOpen(true);
  };

  const handleClose = () => {
    setSelected({});
    setOpen(false);
  };

  return(
    <>
      {Object.values(selected).length !== 0 && (
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
         >
         <Fade in={open}>
           <div className={classes.paper}>
             <h1 id="transition-modal-title">{selected.name}</h1>
             <img src={selected.image} />
             <h5>Status:<span>{selected.status}</span></h5>
             <h5>Species:<span>{selected.species}</span></h5>
             <h5>Type<span>{selected.type}</span></h5>
             <h5>Gender<span>{selected.gender}</span></h5>
             <h5>Origin<span>{selected.origin.name}</span></h5>
           </div>
         </Fade>
       </Modal>
      )}
    {
      characters.results.map(character => {
        return (
          <div key={character.id} onClick={() => handleOpen(character)}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia className={classes.media} image={character.image} title={character.name} />
                <CardContent>
                  <Typography>
                    {character.name}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
        )})
    }
  </>
  )
}

export default Cards;
