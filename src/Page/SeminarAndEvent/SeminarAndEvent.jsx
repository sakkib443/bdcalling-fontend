import { useEffect } from "react";
import SeminarAndEventCard from "./SeminarAndEventComponents/seminarAndEventCard";
import SeminarAndEventHeader from "./SeminarAndEventComponents/SeminarAndEventHeader";

const SeminarAndEvent = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#ECFCFB] min-h-[85vh]">
      <div className="pt-6 ">
        <p className="text-center work text-xl">To know Us Better</p>
        <SeminarAndEventHeader></SeminarAndEventHeader>
        <SeminarAndEventCard></SeminarAndEventCard>
      </div>
    </div>
  );
};

export default SeminarAndEvent;
