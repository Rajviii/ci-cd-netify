import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="space-y-8 p-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard Overview</h1>

      <div className="space-x-4">
        <button
          onClick={() => navigate('/work-order')}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Work Orders
        </button>

        <button
          onClick={() => navigate('/project')}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
        >
          Projects
        </button>
      </div>
    </div>
  );
}
