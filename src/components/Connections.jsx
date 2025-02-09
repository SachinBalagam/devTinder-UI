import axios from "axios";
import { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addConnections } from "../utils/connectionsSlice";

const Connections = () => {
  const connections = useSelector((store) => store.connections);

  const dispatch = useDispatch();

  const fetchConnections = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/connections", {
        withCredentials: true,
      });
      console.log(res.data.data);
      dispatch(addConnections(res.data.data));
    } catch (err) {
      console.log(err.response.message);
    }
  };

  useEffect(() => {
    fetchConnections();
  }, []);

  if (!connections) return;

  if (connections.length <= 0) return <div>No Connections</div>;

  return (
    <div className="min-h-screen">
      <p className="text-center">Connections</p>

      {connections.map((each) => {
        const { photoUrl, firstName, lastName, age, gender, about } = each;

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
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Connections;
