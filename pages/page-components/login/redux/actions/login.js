import { UPDATE_USERNAME } from '../types/login';


export const updateUsername = username => ({
  type: UPDATE_USERNAME,
  payload: username,
});


// export const updatePassword
