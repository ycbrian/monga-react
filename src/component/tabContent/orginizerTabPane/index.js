import React from "react";
import { TabContent } from "reactstrap";
import TabPane from "./tabPane";

const index = ({ activeTab, data }) => {
  return (
    <TabContent activeTab={activeTab}>
      <TabPane id="1" title="藝文質感" data={data} />
      <TabPane id="2" title="體驗手作" data={data} />
      <TabPane id="3" title="街頭美食" data={data} />
      <TabPane id="4" title="知識講座" data={data} />
      <TabPane id="5" title="親子同樂" data={data} />
    </TabContent>
  );
};

export default index;
