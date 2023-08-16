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
      authToken: "b7cab3d0-b166-42cb-a96a-66f6b5fcaa67",
    },
    ...additionalData,
  };

  try {
    const response = await instance
      .post(url, requestData, {
        params: params,
      })
      .then((response) => {
       console.log(response," rrrrrrrrrrrrrrrrrrrr");
       return response;
      });
    return response;
  } catch (error) {
    throw error;
  }
};

export default fetchData;
