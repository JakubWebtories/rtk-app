import {
  useGetDataQuery,
  useDeleteItemMutation,
  useGetDataByIdQuery,
  useUpdateItemMutation,
} from "../redux/api";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const TaskDetail = () => {
  const params = useParams();
  // console.log(params.id);
  // const id = params.id;
  // console.log(id);

  const [edit, setEdit] = useState({
    name: "",
    category: "",
  });

  const { data, isLoading, error } = useGetDataQuery();
  const [updatePost, response] = useUpdateItemMutation();

  // const handleUpdatePost = async (editingId, edit) => {
  //   await updatePost({ editingId, ...edit });
  //   console.log(updatePost);
  //   console.log(data);
  //   console.log(params.id);
  // };

  const handleUpdatePost = (e) => {
    e.preventDefault();
    updatePost({
      id: params.id,
      name: edit.name,
      category: edit.category,
    });
    console.log(edit);
  };
  // console.log(data);

  if (isLoading) {
    return <div>Načítá se...</div>;
  }

  if (error) {
    return <div>Error</div>;
  }

  return (
    <div>
      <h1>Detail</h1>
      <form>
        <label>{params.id}</label>
        <input
          type="text"
          onChange={(e) => setEdit({ ...edit, name: e.target.value })}
        />
        <input
          type="text"
          onChange={(e) => setEdit({ ...edit, category: e.target.value })}
        />
        <button onClick={handleUpdatePost}>Uložit</button>
      </form>
    </div>
  );
};
