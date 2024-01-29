import EditSeminars from "@/components/seminar/EditSeminars";
import {getSeminarsById } from "@/server/actions/actions";


async function page({params}) {
  const {id} = params;
  const data = await getSeminarsById(id);
  return (
    <div className="relative">
      <h1 className="md:text-6xl font-bold uppercase text-center">Edit a Seminar</h1>
      <EditSeminars dbData={data} id={id}/>
    </div>
  )
}

export default page