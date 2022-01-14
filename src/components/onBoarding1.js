import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  setName,
  setEmail,
  setNumber,
} from "./../redux/actions/credentialActions";

const Onboarding1 = () => {
  const credentials = useSelector((state) => state.allCredentials);
  const dispatch = useDispatch();
  return (
    <div className="flex justify-center h-screen align-middle">
      <div className="lg:w-1/3 md:w-1/2 sm:w-screen px-8 my-auto">
        <h2 className="text-xl mb-4 font-semibold text-gray-700 uppercase">
          Start for Free
        </h2>
        <h1 className="text-3xl mb-8 font-bold text-violet-900 ">
          Create new Account
        </h1>
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => dispatch(setName(e.target.value))}
          value={credentials.name}
          className="focus:border-blue-900 placeholder:text-gray-600 border-2 mb-4 border-indigo-500 rounded-xl w-full p-2 text-lg"
          />
        <input
          type="text"
          value={credentials.email}
          onChange={(e) => dispatch(setEmail(e.target.value))}
          placeholder="Email"
          className="placeholder:text-gray-600 border-2 mb-4 border-indigo-500 rounded-xl w-full p-2 text-lg"
          />
        <input  
          type="text"
          placeholder="Number"
          onChange={(e) => dispatch(setNumber(e.target.value))}
          value={credentials.number}
          className="placeholder:text-gray-600 border-2 mb-4 border-indigo-500 rounded-xl w-full p-2 text-lg"
        />
        <div className="flex justify-end">
          {/* <Link className="px-8 rounded-xl text-lg flex justify-center align-middle py-2 hover:shadow-xl transition bg-gray-100 shadow-md ">
            <HiArrowNarrowLeft className="my-auto mr-2" />
            <p className="my-auto">Back</p>
        </Link> */}
          <Link
            to="/onBoarding2"
            className="px-8 flex justify-center align-middle rounded-xl text-lg py-2 bg-blue-600 transition    text-white  shadow-md"
          >
            <p className="my-auto mr-2">Next</p>{" "}
            <HiArrowNarrowRight className="my-auto" />
          </Link>
        </div>
        <h2 className="text-lg mb-4 font-semibold text-gray-500">1 of 3</h2>
      </div>
    </div>
  );
};

export default Onboarding1;
