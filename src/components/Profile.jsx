import EditProfile from "./EditProfile";

import { useSelector } from "react-redux";

const Profile = () => {
  const res = useSelector((store) => store.user);
  return (
    res && (
      <div>
        <EditProfile user={res} />
      </div>
    )
  );
};

export default Profile;
