import Planlegging from "../public/Planlegging";
import Utvikling from "../public/Utvikling";
import Implementering from "../public/Implementering";

import { Chrono } from "react-chrono";
import { PostProps } from "../lib/types/types";
import CardList from "./CardList";

const Timeline: React.FC<PostProps> = ({ posts }) => {
  const items = [
    {
      title: "Planlegges",
    },
    { title: "Utvikles" },
    { title: "Implementeres" },
  ];
  return (
    <div id="timeLine">
      <Chrono
        timelineCircleDimension={35}
        activeItemIndex={-1}
        disableClickOnCircle={true}
        hideControls={true}
        theme={{
          primary: "#005B82",
          secondary: "#e5e5e5",
          cardBgColor: "#CFCFCF",
        }}
        mode="VERTICAL"
        items={items}
        focusActiveItemOnLoad={false}
        allowDynamicUpdate={true}
      >
        <div className="chrono-icons">
          <Planlegging />
          <Utvikling />
          <Implementering />
        </div>
        <CardList roadmap={true} posts={posts} category="In Progress" />
        <CardList roadmap={true} posts={posts} category="Done" />
        <CardList roadmap={true} posts={posts} category="Open" />
      </Chrono>
    </div>
  );
};

export default Timeline;
