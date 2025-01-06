import { useSearchParams } from "react-router-dom";

const AuthPage = () => {
  const [search] = useSearchParams();
  return (
    <div className="mt-36 flex flex-1 flex-col items-center gap-10 ">
      {" "}
      <h1 className="text-5xl font-semibold  ">
        {search.get("createNew")
          ? "Hold Up lets login first..."
          : "Login / SignUp"}
      </h1>
    </div>
  );
};
export default AuthPage;
