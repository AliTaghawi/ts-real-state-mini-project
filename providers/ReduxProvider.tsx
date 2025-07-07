"use client";
import { Provider } from "react-redux";
import { ChildrenType } from "@/types/types";
import store from "@/redux/stor";

const ReduxProvider = ({ children }: ChildrenType) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
