// import { useSelector } from "react-redux";
import axios from "axios";
import UserCard from "./UserCard";
import { BASE_URL } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../utils/feedSlice";

const Feed = () => {
  const dispatch = useDispatch();
  const feedData = useSelector((Store) => Store.feed);
  console.log(feedData);

  const fetchFeed = async () => {
    if (feedData && feedData.length > 0) {
      return;
    }
    try {
      const res = await axios.get(BASE_URL + "/user/feed", {
        withCredentials: true,
      });
      dispatch(addFeed(res.data.data));
    } catch (err) {
      console.log(err.response.data);
    }
  };

  useEffect(() => {
    fetchFeed();
  }, []);

  if (!feedData) return;

  if (feedData.length <= 0)
    return (
      <div className="min-h-screen text-center mt-5">No new Users Found!!!</div>
    );

  return (
    feedData && (
      <div className="min-h-screen flex justify-center items-center">
        <UserCard user={feedData[0]} />
      </div>
    )
  );
};

export default Feed;
