import * as React from 'react';
import Textfield from '@material-ui/core/TextField';

export const Jugadores = (props) => {
  const {jugadores, handleSueldo} = props;

  const onSueldoChange = (nombreJugador) => (e) => {
    handleSueldo(e.target.value, nombreJugador)
  }
  return (
    <table>
      <thead>
        <th>Nombre</th>
        <th>Posición</th>
        <th>Sueldo</th>
        <th>Cláusula</th>
      </thead>
      <tbody>
        {
          jugadores.map((jugador) => {
            return (
              <tr key={jugador.nombre}>
                <td>{jugador.nombre}</td>
                <td>{jugador.posicion}</td>
                <td>
                  <Textfield 
                    type="number"
                    value={jugador.sueldo}
                    onChange={onSueldoChange(jugador.nombre)}
                  />
                </td>
                <td>{jugador.sueldo * 10}</td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
   );
}