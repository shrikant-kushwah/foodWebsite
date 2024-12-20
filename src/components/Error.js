import { useRouteError } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Error = () => {
  const err = useRouteError();
  console.log(err);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <div className="flex flex-col items-center">
        <div className="rounded-lg p-2 max-w-lg text-center">
          <h1 className="text-5xl font-bold text-orange-500 mb-4">Uh-oh!</h1>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Something went wrong
          </h2>
          <p className="text-lg text-gray-600 mb-6">
          We are fixing a temporary glitch. Sorry for the inconvenience.
          </p>
          <div className="text-red-600 p-4 rounded-lg mb-6">
            <h3 className="text-xl font-medium">
              {err.status}: {err.statusText}
            </h3>
          </div>
          <Link to="/" className="px-5 py-2 bg-orange-500 text-lg font-bold text-white hover:bg-orange-600">
          
              Go Back to Home
            
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;
