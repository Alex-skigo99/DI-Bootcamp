export const ADD_TASK = "add_task";
export const REMOVE_TASK = "remove_task";
export const TOGGLE_TASK = "toggle_task";

export const addTask = (text) => {
    return {
      type: ADD_TASK,
      text
    }
  };
  
export const removeTask = (id) => {
    return {
        type: REMOVE_TASK,
        id
    }
};

export const toggleTask = (id) => {
    return {
        type: TOGGLE_TASK,
        id
    }
};
