export const checkVerification = async () => {
  const baseUrl = 'https://learnwords-team17.herokuapp.com';
  const userId = localStorage.rslangUserId;

  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.rslangUserToken}`
    }
  };

  const response = await fetch(`${baseUrl}/users/${userId}`, {
    method: 'GET',
    headers: config.headers
  });

  console.log(response);
  if (response.status !== 200) {
    localStorage.removeItem('rslangUserName');
    localStorage.removeItem('rslangUserId');
    localStorage.removeItem('rslangUserToken');
    localStorage.removeItem('rslangUserRefreshToken');
  }
};
