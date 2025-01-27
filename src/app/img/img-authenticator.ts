export const imgAuthenticator = async () => {
  try {
    const response = await fetch('http://localhost:3000/authentication/img-auth/token');

    if (!response.ok) {
      // TODO: Handle error
    }

    const data = await response.json();
    const {signature, expire, token} = data;
    return {signature, expire, token};
  } catch (error: any) {
    throw new Error(`Authentication request failed: ${error.message}`);
  }
};
