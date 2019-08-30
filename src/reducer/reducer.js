const initialState = {
  listArr: [],
  deleteTaskArr: [],
  currentTask: {}
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_LIST':
      return { ...state, listArr: [...state.listArr, action.payload] };
    case 'ADD_TO_DELETE_LIST':
      return {
        ...state,
        deleteTaskArr: [...state.deleteTaskArr, action.payload]
      };
    case 'DELETE_TASK':
      let newListArr = [...state.listArr];

      state.deleteTaskArr.filter(
        task => (newListArr = newListArr.filter(list => list !== task))
      );
      return { ...state, listArr: newListArr, deleteTaskArr: [] };
    case 'CURRENT_TASK':
      return { ...state, currentTask: action.payload };
    case 'COMPLETE_TASK':
      return {
        ...state,
        currentTask: {
          ...state.currentTask,
          isComplete: action.payload
        }
      };
    default:
      return state;
  }
};
