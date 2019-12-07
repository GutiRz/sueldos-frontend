import * as React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { useHistory, useLocation } from 'react-router';

import {Patrocinadores} from './patrocinadores';
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

  const onPatrocinadorChange = (patrocinador) => {
    setTeam({
      ...team,
      patrocinador
    })
  }
  return (
    <>
      <Avatar className={bigAvatar}>T</Avatar>
      <Typography variant="h2">{team.equipo}</Typography>
      <Patrocinadores patrocinador={team.patrocinador} onPatrocinadorChange={onPatrocinadorChange} />

    </>
  )
}