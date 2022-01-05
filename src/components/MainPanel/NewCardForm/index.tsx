import React from "react";
import { Card} from "@mui/material";
// import InputBase from "@mui/material/InputBase";
// import Box from "@mui/system/Box";
// import AddIcon from '@mui/icons-material/Add';
import { onClickAddColumnHandler } from "./NewCardFormLogic";
import { useAppDispatch } from "../../../hooks/redux/hooks";
import { TextInput } from "../UI/TextInput";
export const NewColumnForm: React.FC = () => {
  // const titleInputRef=useRef<HTMLInputElement>();
  const dispatch=useAppDispatch();
  return (
    <Card
   
      elevation={3}
      sx={{
          position:'relative',
          top:0,
          minWidth: "280px",
           maxWidth: "0.2vw",
        minHeight: "0",
        flexGrow:0,
        alignSelf:'flex-start',
        float: "left",
      }}
    >
      <TextInput handler={onClickAddColumnHandler}></TextInput>
     {/* <Box sx={{display:'flex'}}>
     <InputBase
          required
          id="column-name"
          inputRef={titleInputRef}
          sx={{paddingLeft:'0.2rem',flexGrow:1}}
          placeholder="Column title"
        />
     <IconButton color="primary" aria-label="upload picture" component="span" onClick={onClickAddColumnHandler(dispatch,titleInputRef)}><AddIcon/></IconButton>
     </Box> */}
    </Card>
  );
};
