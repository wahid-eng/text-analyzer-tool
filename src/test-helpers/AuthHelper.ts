import client, { AxiosInstance } from "axios";
import { ILoginUser, IRegisterUser } from "../interfaces/IUser";

class AuthHelper {
  axios: AxiosInstance;
  constructor() {
    this.axios = client.create({
      baseURL: 'http://localhost:3000/api',
      timeout: 30000,
    });
  }

  async login({ email, password }: ILoginUser) {
    return this.axios.post('/auth/login', { email, password });
  }

  async register({ name, email, password }: IRegisterUser) {
    return this.axios.post('/auth/register', { name, email, password });
  }
}

export default AuthHelper;