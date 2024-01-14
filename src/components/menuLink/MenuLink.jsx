/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import "./menulink.css";

export default function MenuLink({ icon, text }) {
  const userInfo = useSelector((state) => state.user);
  return (
    <div className="menulink">
      {icon}
      <span className="menuLinkText">{text}</span>
      <span className="menuLinkTextName">{text === "Logout" && `( ${userInfo.name} )`}</span>
    </div>
  );
}
