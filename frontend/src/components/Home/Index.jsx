import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-yellow-100 py-10 space-y-6 px-8 font-serif flex flex-col justify-center items-center min-h-screen">
      <h1 className="font-extrabold text-4xl md:text-5xl text-center text-gray-800">
        Welcome to Solker School
      </h1>
      <img
        src="logo.jpg"
        alt="Solker School Logo"
        className="w-48 md:w-64 rounded-lg shadow-lg"
      />
      <p className="text-center text-lg md:text-xl text-gray-700 max-w-3xl leading-relaxed">
        Inspiring young minds, shaping bright futures. At Solker School, we
        foster a compassionate learning environment where every student’s
        potential is unlocked, and knowledge becomes the gateway to success.
      </p>
      <div className="space-y-4 text-center">
        <h2 className="font-semibold text-2xl md:text-3xl text-gray-800">
          Who are you?
        </h2>
        <div className="flex space-x-4">
          <button
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
            onClick={() => navigate("/login/student")}
          >
            Student
          </button>
          <button
            className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition"
            onClick={() => navigate("/login/teacher")}
          >
            Teacher
          </button>
          <button
            className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition"
            onClick={() => navigate("/login/principle")}
          >
            Principal
          </button>
        </div>
      </div>
    </div>
  );
};

export default Index;
