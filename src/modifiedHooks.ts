import { useSelector, TypedUseSelectorHook } from "react-redux";

import { RootReducerType } from "./rootReducer";
// useSelector
export const useModifiedSelector: TypedUseSelectorHook<RootReducerType> = useSelector;
