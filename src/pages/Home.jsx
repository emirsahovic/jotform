import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [agreeToProcessing, setAgreeToProcessing] = useState(false);
  const navigate = useNavigate();

  const handleTermsCheckboxChange = () => {
    setAgreeToTerms(!agreeToTerms);
  };

  const handleProcessingCheckboxChange = () => {
    setAgreeToProcessing(!agreeToProcessing);
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="bg-gray-100 py-4 px-6 rounded-lg">
        <h1 className="text-2xl font-bold mb-6">Start questionary:</h1>
        <div className="max-w-xl">
          <label>
            <input
              className="pl-2"
              type="checkbox"
              checked={agreeToTerms}
              onChange={handleTermsCheckboxChange}
            />{" "}
            I agree to AlzDis Terms of Use, Privacy Policy and transfer of my
            information for processing to provide me with relevant information
            as described in our Privacy policy.
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              className="mt-6"
              checked={agreeToProcessing}
              onChange={handleProcessingCheckboxChange}
            />{" "}
            I agree to my information being processed by AlzDis and its Partners
            to contact me via phone, email or other means regarding information
            relevant to my professional interests.
          </label>
          <button
            onClick={() =>
              navigate("/questionary", {
                state: {
                  agreeToTerms,
                  agreeToProcessing,
                },
              })
            }
            disabled={!agreeToTerms || !agreeToProcessing}
            className={`block ${
              !agreeToTerms || !agreeToProcessing
                ? "bg-gray-200 text-gray-500"
                : "bg-blue-400 text-white"
            } mt-6 rounded-md py-2 px-6`}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
