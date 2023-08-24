import { NavLink } from "react-router-dom";

export const Nav = () => {
  const active = ({ isActive }: { isActive: boolean }) =>
    isActive ? "menu__item-active" : "";

  return (
    <nav className="menu">
      <NavLink className={`menu__item ${active}`} to="/">
        Главная
      </NavLink>
      <NavLink className={`menu__item ${active}`} to="/drift">
        Дрифт-такси
      </NavLink>
      <NavLink className={`menu__item ${active}`} to="/timeattack">
        Time Attack
      </NavLink>
      <NavLink className={`menu__item ${active}`} to="/forza">
        Forza Karting
      </NavLink>
    </nav>
  );
};
