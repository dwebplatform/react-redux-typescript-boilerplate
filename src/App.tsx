import * as React from "react";
import { useEffect } from "react";
import { render } from "react-dom";
import { Provider, useSelector } from "react-redux";
import { store } from "./rootReducer";
import { useModifiedSelector } from "./modifiedHooks";
import { useActions } from "./actions";
import { useThunkDispatch } from "./thunkActions";

export const App = () => {
  // const { count, name } = useModifiedSelector((state) => state.counter);
  const { fetchUsers } = useThunkDispatch();
  const { users } = useModifiedSelector((state) => state.counter);

  useEffect(() => {
    fetchUsers();
  }, []);
  return <div>{JSON.stringify(users)}</div>;
};
