import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { removeUserFromFeed } from "../utils/feedSlice";

const UserCard = ({ user }) => {
  const dispatch = useDispatch();

  const handleRequests = async (status, toUserId) => {
    try {
      const res = await axios.post(
        BASE_URL + `/request/send/${status}/${toUserId}`,
        {},
        { withCredentials: true }
      );
      dispatch(removeUserFromFeed(toUserId));
      console.log(res);
    } catch (err) {
      console.log(err.response.message);
    }
  };

  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-xl flex-1 ">
        <figure>
          <img src={user?.photoUrl} alt="Profile" className="h-50" />
        </figure>
        <div className="card-body">
          <div className="flex flex-row">
            <h2 className="card-title mr-2">{user?.firstName}</h2>
            <h2 className="card-title">{user?.lastName}</h2>
          </div>

          <div className="flex justify-start">
            <p>Age : {user?.age}</p>
            <p>Gender: {user?.gender}</p>
          </div>
          <p>{user?.about}</p>
          <div className="card-actions justify-center">
            <button
              className="btn btn-primary"
              onClick={() => handleRequests("ignored", user._id)}
            >
              Ignore
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => handleRequests("interested", user._id)}
            >
              Interested
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
