import * as React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { useHistory, useLocation } from 'react-router';

import {Patrocinadores} from './patrocinadores';
import {Jugadores} from './jugadores';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    bigAvatar: {
      width: 120,
      height: 120,
    },
  }),
);

export const TeamComponent = () => {
  const location = useLocation();
  const {bigAvatar} = useStyles({});
  const [team, setTeam] = React.useState(location.state.team);

  React.useEffect(()=> console.log(team), [team])

  const handlePatrocinador = (patrocinador) => {
    setTeam({
      ...team,
      patrocinador
    })
  }

  const handleSueldo = (sueldo, nombreJugador) => {
    const plantilla = team.plantilla.map(jug => {
      if(jug.nombre === nombreJugador)  jug.sueldo = parseFloat(sueldo);
      return jug;
    })
    console.log(plantilla); 
  }
  return (
    <>
      <Avatar className={bigAvatar}>T</Avatar>
      <Typography variant="h2">{team.equipo}</Typography>
      <Patrocinadores patrocinador={team.patrocinador} handlePatrocinador={handlePatrocinador} />
      <Typography variant="h5">Patrocinador: {team.patrocinador}</Typography>
      <Jugadores jugadores={team.plantilla} handleSueldo={handleSueldo}/>
    </>
  )
}