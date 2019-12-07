import * as React from 'react';

import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import AccountCircle from '@material-ui/icons/AccountCircle';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme: Theme) => 
  createStyles({    
    root: {
      width: '100vw',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    margin: {
      margin: theme.spacing(5)
    }
  }));

  interface Props {
    teamCode: string;
    onTeamCodeUpdate: (newValue) => void;
    onLogin: () => void;
  }

export const LoginComponent: React.FunctionComponent<Props> = (props) => {
  const classes = useStyles({});
  const {teamCode, onTeamCodeUpdate, onLogin} = props;

  const onFieldUpdate = (e) => {
    onTeamCodeUpdate(e.target.value);
  } 
  return (
    <div className={classes.root} >
      <TextField
        className={classes.margin}
        label="Código de acceso"
        value={teamCode}
        onChange={onFieldUpdate}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
      />
    <Button 
      variant="contained" 
      color="primary"
      onClick={onLogin}
      >
        Acceder
        </Button>
    </div>
  )
}