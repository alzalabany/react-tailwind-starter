import React from 'react';
import { Redirect } from 'react-router';
import { SplashScreen } from '../SplashScreen';

const TOKEN = 'telecom.SSO.TOKEN';
const SSOPATH = 'https://sso.com';
const validateToken = console.log;
const ok = console.log;
const failed = console.debug;

export function SSOGateway({ storage, App }) {
  const token = storage.getItem(TOKEN);
  const [loading, setLoading] = React.useState(true);
  // validate token
  React.useEffect(() => {
    if (!token) return;
    validateToken(token).then(ok).catch(failed);
  }, []);
  // check for token
  if (!token && !loading) {
    return <Redirect to={SSOPATH} />;
  }

  return loading ? <SplashScreen /> : <App />;
}
