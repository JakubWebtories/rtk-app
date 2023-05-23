import {
  useGetDataQuery,
  useDeleteItemMutation,
  useGetDataByIdQuery,
  useUpdateItemMutation,
} from "../redux/api";
import { useNavigate, useParams, Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

export const List = () => {
  const { data, isLoading, error } = useGetDataQuery();
  const [countItem, setCountItem] = useState([]);

  const [deletePost, responseInfo] = useDeleteItemMutation();

  if (isLoading) {
    return <div>Načítá se...</div>;
  }

  if (error) {
    return <div>Error</div>;
  }

  return (
    <div>
      <h1>My Data</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <div>{item.id}</div>
            <span>{item.name}</span>
            <span>{item.time}</span>
            <Link to={`/detail/${item.id}`}>
              <button>Detail</button>
            </Link>
            <div>
              <button onClick={() => deletePost(item.id)}>Vymazat</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
