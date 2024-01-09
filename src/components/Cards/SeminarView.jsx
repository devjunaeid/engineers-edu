import Link from "next/link";

function SeminarView({ semi }) {
  return (
    <div className="min-w-full">
      <div>
        {semi.map((item) => (
          <div key={item.id} className="flex gap-4 justify-between items-center border py-4 px-4 rounded-md shadow-sm w-full">
            <div>
                <h3 className="text-4xl font-bold">{item.title}</h3>
                <p className="my-2"><span className="text-lg font-bold uppercase">Date:</span> {item.date}</p>
                <p><span className="text-lg font-bold uppercase">Time:</span> {item.time}</p>
            </div>
            <div>
                <Link href={`/admin/seminars/edit/${item.id}`} className="btn text-red-500 text-2xl">Edit</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SeminarView;
