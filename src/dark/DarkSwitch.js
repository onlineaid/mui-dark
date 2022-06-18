import React from 'react'
import Box from '@mui/material/Box';
import { pink } from '@mui/material/colors';
import { useTheme, alpha, styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';

import {ColorModeContext} from './index' 

const GreenSwitch = styled(Switch)(({ theme }) => ({
  '& .MuiSwitch-switchBase.Mui-checked': {
    color: pink[600],
    '&:hover': {
      backgroundColor: alpha(pink[600], theme.palette.action.hoverOpacity),
    },
  },
  '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
    backgroundColor: pink[600],
  },
}));

const label = { inputProps: { 'aria-label': 'Switch demo' } };

function DarkSwitch() {

  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);


  return (
    <div>
        <Box sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
        {theme.palette.mode === 'dark' ? <GreenSwitch {...label} defaultChecked size="small" /> : <GreenSwitch {...label} defaultChecked size="small" />}
        </Box>
    </div>
  )
}

export default DarkSwitch