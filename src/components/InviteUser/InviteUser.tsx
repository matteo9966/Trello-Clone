import * as React from "react";
import Popper from "@mui/material/Popper";
import Button from "@mui/material/Button";
import Fade from "@mui/material/Fade";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import { PersonAddAlt, InsertLink } from '@mui/icons-material';
import './main.css';

export default function PositionedPopper() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [placement, setPlacement] = React.useState();
  const handleClose = () => setOpen(false);
  const handleClick = (newPlacement:any) => (event:any) => {
    setAnchorEl(event.currentTarget);
    setOpen((prev) => placement !== newPlacement || !prev);
    setPlacement(newPlacement);
  };

  return (
  <div>

    <Button className="open" startIcon={<PersonAddAlt/>} sx={{height:"100%",color:"white", textTransform:"capitalize", fontSize:"14px", padding: "0 9px", boxSizing: "border-box", borderRadius: "9px"}} onClick={handleClick("bottom-start")}>invita</Button>

      <Popper open={open} anchorEl={anchorEl} placement={placement} transition>

        {({ TransitionProps }) => (

          <Fade {...TransitionProps} timeout={350}>

            <Paper sx={{ marginTop:"12px", padding:"20px", width:"350px" }}>

              <div className="upperCard">

                <h2>Invita sulla bacheca</h2>

                <button className="close" onClick={handleClose}>X</button>

              </div>

              <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Indirizzo Email"
              type="email"
              fullWidth
              variant="filled"
              />

              <div className="bottomCard">

                <div className="topHead">

                  <h3 className="linkTitle"><InsertLink/>  Invita con un link</h3> 
                  
                  <a href="#">Crea Link</a>

                </div>

                <p>Chiunque sia dotato di link può unirsi come membro della bacheca</p>

              </div>

              <button disabled className="disabled">spedisci invito</button>
            </Paper>
          </Fade>
        )}
      </Popper>

  </div>);
}