import React, { useState } from "react";
import Dropdown1 from "../components/Dropdown1";
import toast from 'react-hot-toast';
import { useNavigate } from "react-router-dom";


const NewTask = ({ baseURL }) => {
   const [title,setTitle]= useState("");
   const [description, setDescription] = useState("");
   const [tag,setTag] = useState("urgent");
   const [sending,setSending] = useState(false);

   const navigate = useNavigate()

    const handleSubmit = async (e) => {
      setSending(true);
      e.preventDefault();

      const formData = {
        title,
        description,
        tag,
      };

      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      };

      const res = await fetch(`${baseURL}/api/task/create`,options);

      const data = await res.json();

      if (res.status === 400) {
        toast.error(data.message);
        setSending(false);
        return;
      }

        toast.success(data.message);
        setSending(false)
        navigate("/tasks");
      } ;
  
  
  
   return (
    <div>
      
      <form onSubmit={handleSubmit} action="">
        <input 
        onChange={(e) => {
          setTitle(e.target.value);
        }}
         type="text"
        />
        <textarea 
        onChange={(e)=>{
          setDescription(e.target.value);
        }} 
        name="" 
        id="" 
        cols="30" 
        rows="10"
        ></textarea>

        <Dropdown1 setTag={setTag} />

        <button disabled={sending}>Done</button>

      </form>

    </div>
  )
}
  

export default NewTask;
