import { useGetDataQuery } from "../redux/api";

export const ApiTest = () => {
  const { data, isLoading, error } = useGetDataQuery();
  // console.log(data);

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
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};
