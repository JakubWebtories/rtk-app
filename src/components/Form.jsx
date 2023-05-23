import { useState } from "react";
import { InputForm } from "../utils/inputForms";
import { useAddItemMutation, useGetDataQuery } from "../redux/api";

export const Form = () => {
  const { data, isLoading, error } = useGetDataQuery();
  const [taskValues, setTaskValues] = useState({
    // id: data.length + 1,
    issue: "",
    name: "",
    time: "",
  });

  const [addNewPost, response] = useAddItemMutation();
  console.log(response);
  console.log(data);
  // console.log(data.length + 1);

  const addPost = (e) => {
    e.preventDefault();
    //const { title, body } = e.target.elements;
    let formData = {
      issue: taskValues.category,
      name: taskValues.name,
    };
    console.log(formData);
    addNewPost(formData);
  };

  return (
    <div>
      <form className="row-main" onSubmit={addPost}>
        <InputForm
          label="Číslo Issue"
          type="text"
          value={taskValues.issue}
          onChange={(e) =>
            setTaskValues({ ...taskValues, issue: e.target.value })
          }
        />
        <InputForm
          label="Název projektu"
          type="text"
          value={taskValues.name}
          onChange={(e) =>
            setTaskValues({ ...taskValues, name: e.target.value })
          }
        />
        <InputForm
          label="Počet hodin"
          type="number"
          value={taskValues.time}
          onChange={(e) =>
            setTaskValues({ ...taskValues, time: e.target.value })
          }
        />
        <button type="submit">Uložit</button>
      </form>
    </div>
  );
};
