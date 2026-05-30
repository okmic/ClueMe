import axios, { type AxiosInstance } from 'axios'
import appconfig from '../../appconfig'
import { handlerError } from './api.util'

class ApiWorkFactService {
  private axiosInstance: AxiosInstance
  constructor() {
    this.axiosInstance = axios.create({
      baseURL: appconfig.backendUrl,
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }

  public async findAll(): Promise<any[]> {
    return await this.axiosInstance.get(
      `/api/??`,
    )
      .then(r => r.data)
      .catch(e => handlerError(e))
  }


}

export default new ApiWorkFactService()