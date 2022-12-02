import { createContext, ReactNode, useState } from "react";
import { SearchOrderBy } from "unsplash-js";

type UserContextType = {
  filter: string;
  setFilter: (newState: string) => void;
  orderBy: SearchOrderBy;
  setOrderBy: (newState: SearchOrderBy) => void;
};

const initialValue: UserContextType = {
  filter: "",
  setFilter: () => {},
  orderBy: "relevant",
  setOrderBy: () => {},
};

export const UserContext = createContext<UserContextType>(initialValue);

type UserContextProps = {
  children: ReactNode;
};

export const UserContextProvider = ({ children }: UserContextProps) => {
  const [filter, setFilter] = useState(initialValue.filter);
  const [orderBy, setOrderBy] = useState(initialValue.orderBy);

  return (
    <UserContext.Provider value={{ filter, setFilter, orderBy, setOrderBy }}>
      {children}
    </UserContext.Provider>
  );
};
