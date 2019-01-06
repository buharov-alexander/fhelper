export const signInRequest = ({ username, password }) => {
  return fetch('/fhelper/ui/welcome', {
    method: 'post',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `username=${username}&password=${password}`,
  })
}