"use client";

import { useState } from "react";
import { Button } from "./Button";

type StoryProps = {
  title: string;
  subtitle?: string;
  histories: string;
};

const Story = ({ title, subtitle, histories }: StoryProps ) => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="flex-1 p-2">
      <h2 className="bold-40 lg:bold-64">{title}</h2>
      {subtitle && <h3 className="regular-24">{subtitle}</h3>}
      
      <div
        className={`relative overflow-hidden ${
          showMore ? "max-h-full transition-all duration-1000 scrollbar-custom" : "max-h-40"
        }`}
      >
        <p
          className={`regular-16 mt-6 text-gray-30 xl:max-w-[520px] ${
            showMore ? "overflow-auto max-h-[400px] scrollbar-custom" : "overflow-hidden"
          }`}
          style={{ whiteSpace: "pre-wrap" }} // Preserva los saltos de línea en el texto
        >
          {histories}
        </p>
      </div>

      {histories.length > 500 && (
        <div className="mt-6">
          <Button
            type="button"
            title={showMore ? "Læs mindre" : "Læs mere"}
            variant="btn_champagne_hard"
            onClick={toggleShowMore}
            className="w-full lg:w-auto" 
          />
        </div>
      )}
    </div>
  );
};

export default Story;
