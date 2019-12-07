import * as React from 'react';
import {useHistory} from 'react-router-dom';
import { LoginComponent } from './login.component';


export const LoginContainer: React.FunctionComponent = () => {
  const history = useHistory();
  const [teamCode, setTeamCode] = React.useState('Tu código');
  const [teamExist, setTeamExist] = React.useState(false);

  React.useEffect(() => {
    fetch(`http://localhost:3000/equipo/${teamCode}`)
      .then(response => response.json())
      .then(data => {
        data[0] ? setTeamExist(true) : setTeamExist(false);
        console.log(teamExist);
      })
  }, [teamCode])

  const onTeamCodeUpdate = (newValue) => {
    setTeamCode(newValue);
  }

  const doLogin = () => {
    teamExist 
    ? history.push('/myteam') 
    : alert('El código de acceso no es correcto, ponte en contacto con Sesi')
  }

  return <LoginComponent 
            teamCode={teamCode}
            onTeamCodeUpdate={onTeamCodeUpdate}
            onLogin={doLogin}
            />
}