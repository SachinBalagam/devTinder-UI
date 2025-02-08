const UserCard = ({ user }) => {
  console.log(user);
  return (
    <div>
      <div className="card bg-black-500 w-96 shadow-xl">
        <figure>
          <img src={user.photoUrl} alt="Shoes" className="h-50" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{user.firstName}</h2>
          <div className="flex justify-start">
            <p>Age : {user.age}</p>
            <p>Gender: {user.gender}</p>
          </div>
          <p>{user.about}</p>
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
