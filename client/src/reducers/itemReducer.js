const initState = {
  items: [],
  loading: false,
  error: false
};

const itemReducer = (state = initState, action) => {
  switch(action.type) {

    case 'FETCH_DATA_REQUEST': 
      return {
        ...state,
        loading: true
      }

    case 'FETCH_DATA_SUCCESS':
      return { 
        ...state,
        items: action.payload,
        loading: false
      }

    case 'FETCH_DATA_ERROR':
      return { 
        ...state,
        loading: false,
        error: action.payload
      }

    case 'ADD_ITEM':
      return { 
        ...state,
        items: [ action.payload, ...state.items ]
      }

    case 'DELETE_ITEM':
      return { 
        ...state,
        items: state.items.filter(item => item._id !== action.payload)
      }
      
    default: 
      return state
  }
};

export default itemReducer