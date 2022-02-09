import React from "react";

type IconType = {
  Icons: React.ReactNode;
};

const Icon = (props: IconType) => {
  return (
    <div data-testid="box">
      <>{props.Icons}</>
    </div>
  );
};
export default Icon;
