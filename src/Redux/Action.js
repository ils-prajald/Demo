import { Get_Api } from "./actionType";

export const getApi = data => {
    return {
      type: 'GET_API',
      payload: data
    }
  };