import { ActionsTypes, ACTION_VARIANTS } from "./actions";

interface IUser {
  data: Array<any>;
  isLoading: boolean;
  error: boolean;
}
const initialCountState = {
  count: 0,
  name: "Karl",
  users: <IUser>{
    data: [],
    isLoading: false,
    error: false
  }
};

type StateType = typeof initialCountState;
export const counterReducer = (
  state: StateType = initialCountState,
  action: ActionsTypes
): StateType => {
  switch (action.type) {
    case ACTION_VARIANTS.FETCH_USER_SUCCESS:
      return {
        ...state,
        users: {
          data: <Array<Object>>action.users,
          isLoading: false,
          error: false
        }
      };
    case ACTION_VARIANTS.ADD_USER:
      return { ...state };
    default:
      return state;
  }
};
