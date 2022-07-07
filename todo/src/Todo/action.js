import { SET_JOB, ADD_JOB, DELETE_JOB } from './constants'


  //tạo ra 3 action dưới dạng function
  
  // tạo 1 hàm setJob có đối số là payload, trả về obj có type và payload
 export const setJob = payload => {
    return {
      type: SET_JOB,
      payload
    }
  }
  
  // tạo 1 hàm setJob có đối số là payload, trả về obj có type và payload
  export const addJob = payload => {
    return {
      type: ADD_JOB,
      payload
    }
  }
  
  // tạo 1 hàm setJob có đối số là payload, trả về obj có type và payload
  export const deleteJob = payload => {
    return {
      type: DELETE_JOB,
      payload
    }
  }