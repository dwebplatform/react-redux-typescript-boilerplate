import { useDispatch } from "react-redux";

import { bindActionCreators, Dispatch } from "redux";
import { ACTION_VARIANTS, ActionsTypes } from "./actions";

const thunkActions = {
  fetchUsers: () => async (dispatch: Dispatch<ActionsTypes>) => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos/"
      );
      const data = await response.json();
      dispatch({ type: ACTION_VARIANTS.FETCH_USER_SUCCESS, users: data });
    } catch (e) {
      dispatch({ type: ACTION_VARIANTS.ADD_USER, value: 1 });
    }
  }
};
export type ThunkActionsType = typeof thunkActions;

export function useThunkDispatch() {
  const dispatch = useDispatch();
  return bindActionCreators(thunkActions, dispatch);
}
