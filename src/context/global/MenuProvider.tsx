import React, { FC, ReactNode, useState } from "react";
import MenuContext from "./MenuContext";
interface Props {
  children?: ReactNode;
}
const MenuProvider: FC<Props> = ({ children }) => {
  const [aba, setAba] = useState(0);
  return (
    <MenuContext.Provider value={{ aba, setAba }}>
      {children}
    </MenuContext.Provider>
  );
};

export default MenuProvider;
