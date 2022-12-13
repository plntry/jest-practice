/* eslint-disable testing-library/await-async-query */
import renderer from "react-test-renderer";
import App from "../components/App";

describe("tests for App Component", () => {
  it("should render itself correctly", () => {
    const wrapper = renderer.create(<App />);
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it("should render header with text", () => {
    const wrapper = renderer.create(<App />);
    const testInstance = wrapper.root;
    expect(testInstance.findByProps({ children: 'Hello World!' })).toBeTruthy();
  });

  it("should render Info Component twice", () => {
    const wrapper = renderer.create(<App />);
    const testInstance = wrapper.root;
    expect(testInstance.findAllByProps({ children: 'GitHub User Info' }).length).toEqual(2);
  });
});
