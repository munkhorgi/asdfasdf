import { Link } from "react-router-dom";
const SearchUsers = ({ data }) => {
  return (
    <div className='userDataContainer'>
      <div className='userData'>
        <img src={data.image} alt='' className='userDataBox' />
        <div className='names'>
          <Link
            to={`${data.id}`}
            style={{ textDecoration: "none", color: "black" }}
          >
            <div>{data.username}</div>
          </Link>

          <div className='userName'>
            <div> {data.firstName}</div>
            <div> {data.lastName}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SearchUsers;
