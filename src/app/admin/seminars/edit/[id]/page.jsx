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
  const data = await getData(id);
  return (
    <div className="relative">
      <h1 className="md:text-6xl font-bold uppercase text-center">Edit a Seminar</h1>
      <EditSeminars dbData={data} id={id}/>
    </div>
  )
}

export default page