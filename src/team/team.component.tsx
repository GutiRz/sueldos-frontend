import * as React from "react";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { useHistory, useLocation } from "react-router";
import Container from "@material-ui/core/Container";

import { Patrocinadores } from "./patrocinadores";
import { Jugadores } from "./jugadores";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex"
    },
    bigAvatar: {
      width: 120,
      height: 120
    },
    contenedor: {
      display: "flex", justifyContent: "center", alignItems: "center"
    },
    boton: {
      justifyContent: 'center'
    }
  })
);

export const TeamComponent = () => {
  const location = useLocation();
  const [team, setTeam] = React.useState(location.state.team);
  const classes = useStyles({});

  React.useEffect(() => console.log(team), [team]);

  const handlePatrocinador = patrocinador => {
    setTeam({
      ...team,
      patrocinador
    });
  };

  const handleSueldo = (sueldo, nombreJugador) => {
    const plantilla = team.plantilla.map(jug => {
      if (jug.nombre === nombreJugador) {
        jug.sueldo = parseFloat(sueldo);
        jug.clausula = jug.sueldo * 10;
      }
      return jug;
    });
    const totalSueldos = plantilla.reduce(
      (total, jugador) => total + jugador.sueldo,
      0
    );

    setTeam({
      ...team,
      plantilla,
      totalSueldos
    });
  };

  const sendSalaries = () => {
    const options = {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(team)
    };
    fetch(`http://localhost:3000/equipo/${team.loginCode}`, options)
      .then(res => alert("Actualizado!"))
      .catch(err => console.log(err));
  };

  return (
    <Container>
      <Typography variant="h3">{team.equipo}</Typography>
      <img src={team.escudo} alt="Logo" />
      <Patrocinadores
        patrocinador={team.patrocinador}
        handlePatrocinador={handlePatrocinador}
      />
      <Typography variant="h5">Patrocinador: {team.patrocinador}</Typography>
      <Typography variant="h5">Total sueldos:{team.totalSueldos}</Typography>
      <Jugadores jugadores={team.plantilla} handleSueldo={handleSueldo} />

      <Button variant="contained" color="primary" onClick={sendSalaries} className={classes.boton}>
        Enviar sueldos
      </Button>
    </Container>
  );
};
