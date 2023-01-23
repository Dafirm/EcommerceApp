import React from 'react'
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { setLogout } from 'redux/slices/authSlice';
import { RootState } from 'redux/store';

const Profile = () => {

      const { auth } = useAppSelector((state: RootState) => state);

      const user = auth.user;
        const dispatch = useAppDispatch();


  const handleLogout = (e: any) => {
    e.preventDefault();
    dispatch(setLogout(user));
  };
     
  return (
    <div className="p-16">
      <div className="p-8 bg-white shadow mt-24">
        {" "}
        <div className="grid grid-cols-1 md:grid-cols-3">
          {" "}
          <div className="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0">
            {" "}
          </div>{" "}
          <div className="relative">
            {" "}
            <div className="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-24 w-24"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                {" "}
                <path
                  fillRule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd"
                />
              </svg>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
        <div className="mt-20 text-center border-b pb-12">
          {" "}
          <h1 className="text-4xl font-medium text-gray-700">
            {user?.result?.firstName} {user?.result?.lastName}
          </h1>{" "}
          <p className="font-light text-gray-600 mt-3">{user?.result?.email}</p>{" "}
          <p className="mt-8 text-gray-500">{user?.result?.country}</p>{" "}
          <p className="mt-2 text-gray-500">{user?.result?.city}</p>{" "}
        </div>{" "}
        <div className="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center">
          <a
            href="/"
            className="text-white py-2 px-4 uppercase rounded bg-blue-400 hover:bg-blue-500 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
          >
            {" "}
            Home
          </a>{" "}
          <button
            onClick={handleLogout}
            
            className="text-white py-2 px-4 uppercase rounded bg-gray-700 hover:bg-gray-800 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
          >
            {" "}
            Logout
          </button>{" "}
        </div>{" "}
        <div className="mt-12 flex flex-col justify-center">
          {" "}
          <p className="text-gray-600 text-center font-light lg:px-16">
            An artist of considerable range, Ryan — the name taken by
            Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and
            records all of his own music, giving it a warm, intimate feel with a
            solid groove structure. An artist of considerable range.
          </p>{" "}
        </div>
      </div>
    </div>
  );
}

export default Profile