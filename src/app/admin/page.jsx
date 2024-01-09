import UnAuthMSG from "../../components/utl/UnAuthMSG";


export default function Page() {
  const authStatus = "authenticated";
  if (authStatus == "unauthenticated") {
    return <UnAuthMSG url={"/adminlogin"} />
  }

  return <div>page
  </div>;
}

