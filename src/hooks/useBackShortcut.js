import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function useBackShortcut() {
  const navigate = useNavigate();

  useEffect(() => {
    const handler = (e) => {
      // Only trigger on "b" or "B"
      if (e.key.toLowerCase() === "b") {
        navigate("/case-studies");
      }
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [navigate]);
}