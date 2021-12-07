import { LocationResponse } from '../../types/locationType';

const GET_LOCATION = 'GET_LOCATION';
const LOADING_LOCATION = 'LOADING_LOCATION';

export { GET_LOCATION, LOADING_LOCATION };

interface GetLocation {
  type: 'GET_LOCATION';
  payload: LocationResponse;
}

interface LoadingLocation {
  type: 'LOADING_LOCATION';
  payload: boolean;
}

export interface SearchStateType {
  location: LocationResponse | null;
  loading: boolean;
}

const initialState: SearchStateType = {
  location: null,
  loading: false,
};

type Action = GetLocation | LoadingLocation;

export default (state = initialState, action: Action): SearchStateType => {
  switch (action.type) {
    case GET_LOCATION:
      return { ...state, location: action.payload };
    case LOADING_LOCATION:
      return { ...state, loading: action.payload };
    default:
      return state;
  }
};
