import React from "react";
import Topbar from "src/stories/Topbar";

const Header = ({ animateHeader }: { animateHeader: boolean }) => {
  return <Topbar animateHeader={animateHeader} />;
};

export default Header;
