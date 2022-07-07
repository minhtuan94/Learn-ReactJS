import { SET_JOB, ADD_JOB, DELETE_JOB } from './constants'

//1. InitialState
export const initialState = {
    job: '',
    jobs: []
  }

//3. Reducer
const reducer = (state, action) => {
    switch (action.type) {
      case SET_JOB:
        return {
          ...state,        //bảo lưu lại nhưng state trước đó
          job: action.payload
        }
  
      case ADD_JOB:
        return {
          ...state,   //bảo lưu state cũ
          jobs: [...state.jobs, action.payload],    //lưu job cũ và thêm job mới
        }
  
        case DELETE_JOB:
  
        const newJobs = [...state.jobs]
        newJobs.splice(action.payload, 1)
        return {
          ...state,   //bảo lưu state cũ
          jobs: newJobs,    //lưu job cũ và thêm job mới
        }
  
      default:
        throw new Error('Invalid action');
    }
  }

  export default reducer