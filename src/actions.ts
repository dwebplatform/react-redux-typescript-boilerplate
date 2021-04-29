import { useDispatch } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

export enum ACTION_VARIANTS {
  FETCH_USER = "FETCH_USER",
  ADD_USER = "ADD_USER",
  FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS"
}

const actions = {
  fetchUserSuccess: (users: Array<any>) => {
    return {
      type: ACTION_VARIANTS.FETCH_USER_SUCCESS,
      users: users
    } as const;
  },
  addUser: (x: number) => {
    return {
      value: x,
      type: ACTION_VARIANTS.ADD_USER
    } as const;
  },
  fetchData: () => {
    return {
      type: ACTION_VARIANTS.FETCH_USER,
      value: 1
    } as const;
  }
};

type inferType<T> = T extends { [key: string]: infer U } ? U : never;

export type ActionsTypes = ReturnType<inferType<typeof actions>>;

export function useActions() {
  const dispatch = useDispatch();
  return bindActionCreators(actions, dispatch);
}
