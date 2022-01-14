import { useEffect } from "react";
import toast from "react-hot-toast";

const Home = () => {
  useEffect(() => {
    toast.success("Succesfully Registered!");
  }, []);
  return (
    <div className="m-8">
      <div className="flex justify-center">
        <img src="/static/welcome.svg" alt="" className="w-1/2" />
      </div>
      <h1 className="text-3xl flex justify-center text-gray-800 font-bold uppercase">Welcome</h1>
    </div>
  );
};

export default Home;
