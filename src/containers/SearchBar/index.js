import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import TextField from '@material-ui/core/TextField';

import * as actionTypes from '../../store/actions';
import { searchSuccessAction } from '../../store/actions';


const SearchBar = () => {
  const [timer, setTimer] = useState(0);

  const dispatch = useDispatch();

  const searchAPI = query => {
    if(timer) {
      clearTimeout(timer);
    }
    setTimer(setTimeout(() => dispatch(searchSuccessAction(query)), 500))
  }

  return(
    <div>
      <TextField
        id="standard-full-width"
        label="Buscador"
        style={{ margin: 8 }}
        placeholder="Busca a un personaje"
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
        onChange={(event) => searchAPI(event.target.value)}
      />
    </div>
  );
};

export default SearchBar;
