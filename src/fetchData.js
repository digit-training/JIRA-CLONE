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
      authToken: "f5a278be-f623-4f7f-9ca2-ac94cf0327d2",
    },
    ...additionalData,
  };

  try {
    const response = await instance
      .post(url, requestData, {
        params: params,
      })
      .then((response) => {
        console.log(response);
      });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default fetchData;
