"use client";
import { redirect, useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";

function EditSeminars({ dbData, id }) {
  const [data, setData] = useState({
    title: dbData.title || "",
    date: dbData.date || "",
    time: dbData.time || "",
    platfrom: dbData.platfrom || "",
    link: dbData.link || "",
  });
  const [pending, setPending] = useState(false);
  const router = useRouter();

  const handleChange = (e) => {
    const updateData = { ...data, [e.target.name]: e.target.value };
    setData(updateData);
  };

  async function handleSubmit(e) {
    e.preventDefault();
    handleChange;
    try {
      setPending(true);
      const res = await fetch(`http://localhost:3000/api/seminars/${id}`, {
        method: "PUT",
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setPending(false);
        setInterval(router.push("/admin/seminars"), 1000);
      } else {
        const error = await res.json();
        setError(error.message);
        setPending(false);
      }
    } catch (error) {
      setPending(false);
      console.log(error);
    }
  }

//   useEffect(() => {
//     handleChange();
//   }, []);

  return (
    <div>
      <div className="flex items-center justify-center p-12">
        <div className="mx-auto w-full max-w-[550px]">
          <form onSubmit={handleSubmit}>
            <div className="mb-5">
              <label
                htmlFor="title"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Seminar Title
              </label>
              <input
                onChange={handleChange}
                defaultValue={dbData.title || ""}
                type="text"
                name="title"
                id="title"
                placeholder="Write Seminar Title"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="date"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Date
              </label>
              <input
                onChange={handleChange}
                defaultValue={dbData.date || ""}
                type="date"
                name="date"
                id="date"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="time"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Time
              </label>
              <input
                onChange={handleChange}
                defaultValue={dbData.time || ""}
                type="text"
                name="time"
                id="time"
                placeholder="Write Seminars start and end time. ex.(11:00 AM - 01:30 PM)"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="platfrom"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Platform
              </label>
              <input
                onChange={handleChange}
                defaultValue={dbData.platfrom || ""}
                type="text"
                name="platfrom"
                id="platfrom"
                placeholder="Specify the platform.. Ex.(Online)"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="link"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Form Link
              </label>
              <input
                onChange={handleChange}
                defaultValue={dbData.link || ""}
                type="text"
                name="link"
                id="link"
                placeholder="Insert the link of your form."
                className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div>
              <button
                disabled={pending == true || data.title == ""}
                type="submit"
                className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditSeminars;
