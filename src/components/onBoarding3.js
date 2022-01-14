import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";

const Onboarding3 = () => {
  return (
    <div className="flex justify-center h-screen align-middle">
      <div className="lg:w-1/3 md:w-1/2 sm:w-screen w-screen px-16 my-auto">
        <h1 className="text-3xl mb-8 font-bold text-violet-900 ">
          Enter the OTP
        </h1>
        <input
          type="text"
          placeholder="OTP"
          className="focus:border-blue-900 placeholder:text-gray-600 border-2 mb-4 border-indigo-500 rounded-xl w-full p-2 text-lg"
        />

        <div className="flex justify-between">
          <Link
            to="/onBoarding2"
            className="px-8 rounded-xl text-lg flex justify-center align-middle py-2 hover:shadow-xl transition bg-gray-100 shadow-md "
          >
            <HiArrowNarrowLeft className="my-auto mr-2" />
            <p className="my-auto">Back</p>
          </Link>
          <Link
            to="/home"
            className="px-8 flex justify-center align-middle rounded-xl text-lg py-2 bg-blue-600 transition    text-white  shadow-md"
          >
            <p className="my-auto mr-2">Finish</p>{" "}
            <HiArrowNarrowRight className="my-auto" />
          </Link>
        </div>
        <h2 className="text-lg mb-4 font-semibold text-gray-500">3 of 3</h2>
      </div>
    </div>
  );
};

export default Onboarding3;
