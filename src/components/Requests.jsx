import axios from "axios";
import { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addRequests, removeRequest } from "../utils/requestsSlice";

const Requests = () => {
  const requests = useSelector((store) => store.requests);

  const dispatch = useDispatch();

  const reviewRequest = async (status, id) => {
    try {
      const res = await axios.post(
        BASE_URL + `/request/review/${status}/${id}`,
        {},
        { withCredentials: true }
      );
      dispatch(removeRequest(id));
      console.log(res);
    } catch (err) {
      console.log(err.response.message);
    }
  };

  const fetchRequests = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/requests/received", {
        withCredentials: true,
      });
      console.log(res.data.data);
      dispatch(addRequests(res.data.data));
    } catch (err) {
      console.log(err.response.message);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  if (!requests) return;

  if (requests.length <= 0)
    return <div className="min-h-screen text-center">No Requests</div>;

  return (
    <div className="min-h-screen">
      <p className="text-center">Requests Received</p>

      {requests.map((each) => {
        const { photoUrl, firstName, lastName, age, gender, about } =
          each.fromUserId;
        return (
          <div
            key={each._id}
            className="flex flex-row justify-center items-center border border-amber-200 rounded p-3 m-3"
          >
            <img src={photoUrl} className="w-25 mr-3 rounded-box" />
            <div>
              <h1>
                {firstName} {lastName}
              </h1>
              <p>
                Age: {age ? age : "NA"}, Gender:{gender}
              </p>
              <p>About: {about}</p>
              <div className="card-actions justify-center mt-3">
                <button
                  className="btn btn-primary"
                  onClick={() => reviewRequest("rejected", each._id)}
                >
                  Reject
                </button>
                <button
                  className="btn btn-secondary"
                  onClick={() => reviewRequest("accepted", each._id)}
                >
                  Accept
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Requests;
