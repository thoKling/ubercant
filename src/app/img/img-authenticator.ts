import {environment} from '../../environments/environment';

export const imgAuthenticator = async () => {
  try {
    const response = await fetch(`${environment.apiUrl}/authentication/img-auth/token`);

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
