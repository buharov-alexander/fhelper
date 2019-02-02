export const signInRequest = ({ username, password }) => fetch('/fhelper/ui/welcome', {
  method: 'post',
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  body: `username=${username}&password=${password}`,
});
