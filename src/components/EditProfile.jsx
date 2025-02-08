import { useState } from "react";
import UserCard from "./UserCard";
import axios from "axios";

import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BASE_URL } from "../utils/constants";

const EditProfile = ({ user }) => {
  const [lastName, setLastName] = useState(user.lastName);
  const [about, setAbout] = useState(user.about);
  const [age, setAge] = useState(user.age);
  const [gender, setGender] = useState(user.gender);
  const [photoUrl, setPhotoUrl] = useState(user.photoUrl);

  const dispatch = useDispatch();

  const handleUpdate = async () => {
    try {
      const res = await axios.patch(
        BASE_URL + "/profile/edit",
        { lastName, about, age, gender, photoUrl },
        { withCredentials: true }
      );
      dispatch(addUser(res?.data?.data));
    } catch (err) {
      console.log(err?.response?.message);
    }
  };

  return (
    user && (
      <div className="min-h-screen flex justify-center items-center flex-row mx-4">
        <div className="card bg-base-100 w-96 shadow-xl flex-1">
          <p className="text-center">Edit Profile</p>
          <div className="card-body">
            <label className="input input-bordered flex items-center gap-2 mb-4">
              <input
                type="text"
                className="grow"
                placeholder="First Name"
                defaultValue={user?.firstName}
              />
            </label>
            <label className="input input-bordered flex items-center gap-2 mb-4">
              <input
                type="text"
                className="grow"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </label>
            <label className="input input-bordered flex items-center gap-2 mb-4">
              <input
                type="text"
                className="grow"
                placeholder="Email"
                defaultValue={user?.emailId}
              />
            </label>
            <label className="input input-bordered flex items-center gap-2 mb-4">
              <input
                type="text"
                className="grow"
                placeholder="Age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </label>
            <label className="input input-bordered flex items-center gap-2 mb-4">
              <input
                type="text"
                className="grow"
                placeholder="Gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              />
            </label>
            <label className="input input-bordered flex items-center gap-2 mb-4">
              <input
                type="text"
                className="grow"
                placeholder="About"
                value={about}
                onChange={(e) => setAbout(e.target.value)}
              />
            </label>
            <label className="input input-bordered flex items-center gap-2 mb-4">
              <input
                type="text"
                className="grow"
                placeholder="PhotoUrl"
                value={photoUrl}
                onChange={(e) => setPhotoUrl(e.target.value)}
              />
            </label>
            <div className="card-actions justify-end">
              <button className="btn btn-primary" onClick={handleUpdate}>
                Update
              </button>
            </div>
          </div>
        </div>
        <UserCard
          user={{
            firstName: user?.firstName,
            lastName,
            age,
            emailId: user?.emailId,
            about,
            gender,
            photoUrl,
          }}
        />
      </div>
    )
  );
};

export default EditProfile;
