import { useSelector } from "react-redux";
import "./warning.css";

export default function Warning() {
  const userInfo = useSelector((state) => state.user);
  return (
    <div className="warning">
      Deleting account cannot be undone <b>{userInfo.name}</b>! You should confirm your password to delete your account.
    </div>
  );
}
