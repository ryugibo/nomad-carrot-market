import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <form className="flex flex-col space-y-2 p-5">
      <input
        type="text"
        required
        placeholder="Username"
        className="border p-1 border-gray-400 rounded peer"
      />
      <span className="hidden peer-invalid:block text-red-500">
        This input is invalid
      </span>
      <span className="hidden peer-valid:block text-teal-500">
        Awesome username
      </span>
      <input type="submit" value="Login" className="bg-white" />
    </form>
  );
};

export default Home;
