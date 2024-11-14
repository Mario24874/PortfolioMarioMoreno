// src/redux/reducers.js
const initialState = {
    activeTab: 'home',
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'CHANGE_TAB_ACTIVE':
        return {
          ...state,
          activeTab: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default rootReducer;