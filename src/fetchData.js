// fetchData.js
import instance from "./axios";

const fetchData = async (url, params, additionalData) => {
  const requestData = {
    RequestInfo: {
      apiId: "Rainmaker",
      ver: ".01",
      ts: "",
      action: "_search",
      did: "1",
      key: "",
      msgId: "20170310130900|en_IN",
      authToken: "b44e01fd-5748-44aa-9b48-e3e702477926",
    },
    ...additionalData,
  };

  try {
    const response = await instance
      .post(url, requestData, {
        params: params,
      })
      .then((response) => {
        console.log(response, " rrrrrrrrrrrrrrrrrrrr");
        return response;
      });
    return response;
  } catch (error) {
    throw error;
  }
};

export default fetchData;
