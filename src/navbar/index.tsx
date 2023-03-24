import React, { useState } from "react";
import { GraphScreen } from "../Graph";
import { Navigation } from "./style";

function NavigationBar() {
  const [activeTab, setActiveTab] = useState("Chart");

  const handleClick = (tabName: React.SetStateAction<string>) => {
    setActiveTab(tabName);
  };

  const navItems = ["Summary", "Chart", "Statistics", "Analysis", "Settings"];

  const renderContent = () => {
    switch (activeTab) {
      case "Summary":
        return <div>Summary content </div>;
      case "Chart":
        return <GraphScreen />;
      case "Statistics":
        return <div>Statistics content </div>;
      case "Analysis":
        return <div>Analysis content </div>;
      case "Settings":
        return <div>Settings content </div>;
      default:
        return null;
    }
  };

  return (
    <Navigation>
      <nav>
        <ul className="li">
          {navItems.map((item) => (
            <li
              key={item}
              onClick={() => handleClick(item)}
              className={activeTab === item ? "active" : ""}
            >
              {item}
            </li>
          ))}
        </ul>
      </nav>
      {renderContent()}
    </Navigation>
  );
}

export default NavigationBar;
