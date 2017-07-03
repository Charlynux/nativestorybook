/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions, global-require */

import { Navigation } from "react-native-navigation";
import { getStorybookUI, configure } from "@storybook/react-native";

// import stories
configure(() => {
  require("./stories");
}, module);

const StorybookUI = getStorybookUI({ port: 7007, host: "localhost" });
Navigation.registerComponent("storybook.UI", () => StorybookUI);
Navigation.startSingleScreenApp({
  screen: {
    screen: "storybook.UI",
    title: "Storybook",
  },
});

export default StorybookUI;
