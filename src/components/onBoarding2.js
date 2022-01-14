import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleHobby } from "./../redux/actions/hobbyActions";

import { useState } from "react";
const Onboarding2 = () => {
  const hobbies = useSelector((state) => state.allHobbies.hobby);
  const dispatch = useDispatch();
  //   const hobbies = [
  //     { name: "Singing", checked: false },
  //     { name: "Dancing", checked: false },
  //     { name: "Painting", checked: false },
  //     { name: "Cooking", checked: false },
  //     { name: "Coding", checked: false },
  //   ];

  const onClick = (index) => {
    dispatch(toggleHobby(index));
  };

  return (
    <div className="flex justify-center h-screen align-middle">
      <div className="lg:w-1/3 md:w-1/2 sm:w-screen w-screen px-16 my-auto">
        <h2 className="text-xl mb-4 font-semibold text-gray-700 ">Hello!</h2>
        <h1 className="text-3xl mb-8 font-bold text-violet-900 ">
          Select your Hobbies
        </h1>
        <div className="flex flex-col">
          {hobbies.map((hobby) => (
            // console.log(hobby);
            <button onClick={() => onClick(hobby.index)} key={hobby.index}>
              <div
                className={`flex p-4 border-2 border-blue-600 mb-2  rounded-xl ${
                  hobby.checked && `bg-blue-600 text-white  `
                }`}
              >
                <div>{hobby.name}</div>
              </div>
            </button>
          ))}
        </div>
        <div className="flex justify-between">
          <Link
            to="/"
            className="px-8 rounded-xl text-lg flex justify-center align-middle py-2 hover:shadow-xl transition bg-gray-100 shadow-md "
          >
            <HiArrowNarrowLeft className="my-auto mr-2" />
            <p className="my-auto">Back</p>
          </Link>
          <Link
            to="/onBoarding3"
            className="px-8 flex justify-center align-middle rounded-xl text-lg py-2 bg-blue-600 transition    text-white  shadow-md"
          >
            <p className="my-auto mr-2">Next</p>{" "}
            <HiArrowNarrowRight className="my-auto" />
          </Link>
        </div>
        <h2 className="text-lg mb-4 font-semibold text-gray-500">2 of 3</h2>
      </div>
    </div>
  );
};

export default Onboarding2;
