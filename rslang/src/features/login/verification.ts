export const checkVerification = async () => {
  if (localStorage.userId) {
    const baseUrl = 'https://learnwords-team17.herokuapp.com';
    const userId = localStorage.userId;

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
  }
};
