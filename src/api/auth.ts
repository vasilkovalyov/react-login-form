import { api, EndpointsEnum } from 'src/axios';

export async function apiLogin(email: string, password: string) {
  const response = await api.post(EndpointsEnum.LOGIN, {
    email,
    password,
  });
  return response;
}

export async function apiResetPassword(email: string) {
  const response = await api.post(EndpointsEnum.PASSWORD_RESET, {
    email,
    redirect_url: `${import.meta.env.VITE_API_URL}/password-set`,
  });
  return response;
}

export async function apiSetPassword(
  token: string,
  secret: string,
  password: string,
  password_confirm: string
) {
  const response = await api.post(EndpointsEnum.PASSWORD_RESET, {
    token,
    secret,
    password,
    password_confirm,
  });
  return response;
}

export async function accessToken(id: string) {
  const response = await api.post(EndpointsEnum.ACCESS_TOKEN, {
    access_id: id,
  });
  return response;
}

export async function refreshToken(token: string) {
  const response = await api.post(EndpointsEnum.REFRESH_TOKEN, {
    refresh_token: token,
  });
  return response;
}
