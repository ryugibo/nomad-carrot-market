import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <form className="flex flex-col space-y-2 bg-blue-500 p-5 focus-within:bg-blue-100">
      <input
        type="text"
        required
        placeholder="Username"
        className="required:bg-yellow-500 invalid:bg-red-500 valid:bg-teal-500"
      />
      <input type="password" required placeholder="Password" className="" />
      <input type="submit" value="login" className="bg-white" />
    </form>
  );
};

export default Home;
