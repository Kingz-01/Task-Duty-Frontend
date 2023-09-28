import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Dropdown1 from "../components/Dropdown1";
import { useFetch } from "../hooks/useFetch";
import { toast } from "react-hot-toast";

const EditTask = ({ baseURL }) => {
  const { id } = useParams();
  console.log(id);

  const { data, loading, error } = useFetch(`${baseURL}/api/task/${id}`
  );

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tag, setTag] = useState("urgent");
  const [sending, setSending] = useState(false);

  useEffect(() => {
    if (data) {
      setTitle(data.title);
      setDescription(data.description);
    }
  }, [data]);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    setSending(true);
    e.preventDefault();

    const formData = {
      title,
      description,
      tag,
    };

    const options = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    };

    const res = await fetch(`${baseURL}/api/task/${id}`, options);

    const data = await res.json();

    if (res.status === 200) {
      toast.success(data.message);
      navigate("/tasks");
      return;
    }
    toast.error("Something went wrong");
  };

  return (
    <form onSubmit={handleSubmit} action="">
      <input
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        type="text"
        value={title}
      />
      <textarea
        onChange={(e) => {
          setDescription(e.target.value);
        }}
        name=""
        id=""
        cols="30"
        rows="10"
        value={description}
      ></textarea>

      <Dropdown1 setTag={setTag} />

      <button disabled={sending}>Done</button>
    </form>
  );
};

export default EditTask;
