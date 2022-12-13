import renderer from "react-test-renderer";
import axios from "axios";
import getGitHubUser from "../services/DataService/index";
import Info from "../components/Info/index";

jest.mock("axios");

describe("List Component", () => {
  it("renders correctly", () => {
    const wrapper = renderer.create(<Info user="yurkovskiy" />);
    const testInstance = wrapper.root;
    // eslint-disable-next-line testing-library/await-async-query
    expect(testInstance.findByProps({ user: "yurkovskiy" })).toBeTruthy();
  });
  it("should return user login", async () => {
    const user = { data: "yurkovskiy" };
    axios.get.mockResolvedValueOnce(user);
    const res = await getGitHubUser(user);
    expect(res.data).toContain("yurkovskiy");
  });
  it("should return error", async () => {
    jest.spyOn(axios, "get").mockRejectedValue(new Error("request error"));
    const user = { data: "Undefined User" };
    const res = getGitHubUser(user);
    await expect(res).rejects.toThrow("request error");
  });
});

// TODO: Your test need to be here instead of fake tests
