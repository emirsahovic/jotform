import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const Results = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://192.168.50.87:5000/getRiskFactor?submissionID=${id}`
        );

        if (isMounted) {
          setData(response.data);
          setLoading(false);
          setError(null);
        }
      } catch (error) {
        if (isMounted) {
          setLoading(false);
          setError(error.message);
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [id]);

  return (
    <div className="h-screen flex justify-center items-center">
      {loading ? (
        <div className="bg-gray-200 rounded-lg py-10 px-6 shadow-xl">
          <h1 className="text-2xl font-semibold">Loading...</h1>
        </div>
      ) : (
        data && (
          <div className="bg-gray-200 rounded-lg py-10 px-6 shadow-xl">
            <h1 className="text-2xl font-semibold">
              Based on the provided demographic data, habits, and medical
              conditions, your chance of developing Alzheimer disease is:
              {Number(data.riskFactor).toFixed(2)}%
            </h1>
          </div>
        )
      )}
      {error && (
        <div className="bg-gray-200 rounded-lg py-10 px-6 shadow-xl">
          <h1 className="text-2xl font-semibold">{error}</h1>
        </div>
      )}
    </div>
  );
};
export default Results;
