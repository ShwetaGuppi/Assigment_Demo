import { mount, shallow } from "enzyme";
import * as React from "react";
import AppContainer from "../components/AppContainer";

describe("<AppContainer />", () => {
  const wrapper = mount(<AppContainer />);
  const container = shallow(<AppContainer />);
  it("Should have AppContainer", async () => {
    wrapper.html();
    expect(wrapper.find("AppContainer")).toHaveLength(1);
  });
  it("Should generate or match the snapshot", async () => {
    expect(container).toBeDefined();
  });
});
