import mockAxios from "axios";
import getGitHubUser from "../services/DataService";

describe("Data Service fake Tests", () => {
  it("should call axios and return correct data", async () => {
    const user = 'plntry';

    mockAxios.get.mockImplementationOnce(() => Promise.resolve({
      id: '76002690'
    }));

    const data = await getGitHubUser(user);

    expect(data.id).toEqual('76002690');
  });

  it("should call axios just once", async () => {
    const user = 'plntry';

    mockAxios.get.mockImplementationOnce(() => Promise.resolve({
      id: '76002690'
    }));

    await getGitHubUser(user);

    expect(mockAxios.get).toHaveBeenCalledTimes(1);
  });

  it("should call axios with correct props", async () => {
    const user = 'plntry';

    mockAxios.get.mockImplementationOnce(() => Promise.resolve({
      id: '76002690'
    }));

    await getGitHubUser(user);

    expect(mockAxios.get).toHaveBeenCalledWith(`https://api.github.com/users/${user}`);
  });
});
