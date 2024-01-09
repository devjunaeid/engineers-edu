import EditSeminars from "@/components/seminar/EditSeminars";

async function getData(id) {
  const res = await fetch(`http://localhost:3000/api/seminars/${id}`, { cache: 'no-store' });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}


async function page({params}) {
  const id = params.id;
  // console.log(id);
  const data = await getData(id);
  // console.log(data);
  return (
    <div>
      <h1>Edit a Seminar</h1>
      <EditSeminars dbData={data} id={id}/>
      <button className="btn">Delete</button>
    </div>
  )
}

export default page