import { useEffect } from "react";
import JotformEmbed from "react-jotform-embed";
import { useLocation, useNavigate } from "react-router-dom";

function Jotform() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!location?.state?.agreeToTerms || !location?.state?.agreeToProcessing) {
      navigate("/");
    }
  }, [location?.state?.agreeToTerms, location?.state?.agreeToProcessing]);

  return <JotformEmbed src="https://form.jotform.com/232284251930351" />;
}

export default Jotform;
