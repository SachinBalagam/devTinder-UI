const UserCard = ({ user }) => {
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
            <button className="btn btn-primary">Ignore</button>
            <button className="btn btn-secondary">Interested</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
