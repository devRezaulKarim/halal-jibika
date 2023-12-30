import { useEffect, useState } from "react";
import MainLayout from "./MainLayout/MainLayout";

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9000/jobs")
      .then((res) => res.json())
      .then((data) => console.log(data));
  });

  return <MainLayout />;
}
