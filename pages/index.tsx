import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <form className="flex flex-col space-y-2 bg-blue-500 p-5 focus-within:bg-blue-100">
      <input
        type="text"
        required
        placeholder="Username"
        className="required:border-2 border-yellow-500 placeholder-shown:bg-teal-500 placeholder:text-red-500"
      />
      <input
        type="password"
        required
        placeholder="Password"
        className="invalid:bg-red-500"
      />
      <input type="submit" value="login" className="bg-white" />
    </form>
  );
};

export default Home;
