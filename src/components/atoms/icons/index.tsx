import React from "react";

type IconType = {
  Icons: React.ReactNode;
};

const Icon = (props: IconType) => {
  return (
    <div>
      <>{props.Icons}</>
    </div>
  );
};
export default Icon;
