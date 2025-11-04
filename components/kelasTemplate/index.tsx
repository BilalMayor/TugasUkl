import { ReactNode } from "react";
import Sidebar from "./sidebar";

type MenuType = {
  icon: ReactNode;
  path: string;
  label: string;
};

type TemplateProps = {
  children: ReactNode;
  title: string;
  menuList: MenuType[];
};

const KelasTemplate = ({ children, title, menuList }: TemplateProps) => {
  return (
    <Sidebar title={title} menuList={menuList}>
      {children}
    </Sidebar>
  );
};

export default KelasTemplate;
