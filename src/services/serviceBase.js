"use strict";

const credentials = {
  credentials: "same-origin"
};

async function checkStatus(response) {
  let dataResponce;
  if (response.status >= 200 && response.status < 300) {
    dataResponce = await response;
  } else {
    // let error = new Error(response.statusText);
    // error.response = await response.json();

    dataResponce = Promise.reject(response.statusText);
  }
  return dataResponce;
}

function StrapiJwtToken() {
  return localStorage.getItem("strapiToken");
}

function getHeaders(url) {
  var header = url.includes("register")
    ? {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    : {
        Accept: "application/json",
        "Content-Type": "application/json"
        //Authorization: "Bearer " + StrapiJwtToken()
        // "x-access-token": getJwtToken()
      };
  return header;
}

function getUrl(url) {
  const timestamp = new Date().getTime();
  const separator = url.includes("?") ? "&" : "?";
  //noinspection JSUnresolvedVariable
  // console.log(url);
  //return "http://18.212.235.172:1337" + url;
  return "https://183.83.216.197:5432" + url;
  //return "https://localhost:1337" + url;
  // return `${url}${separator}t=${timestamp}`;
}

/**
 * Base functionality for the server request communications (GET, POST, ...).
 * @type {{get: (function()), postPutDelete: (function()), post: (function()), put: (function()), delete: (function())}}
 */
const serviceBase = {
  get: async url => {
    credentials.headers = getHeaders(url);
    let response = await fetch(getUrl(url), credentials);
    response = await checkStatus(response);
    return response.json();
  },

  postPutDelete: async (url, method, request) => {
    const options = {
      headers: await getHeaders(url),
      method: method,
      body: JSON.stringify(request)
    };

    let response = await fetch(getUrl(url), Object.assign(options));
    response = await checkStatus(response);

    return response.json();
  },

  post: (url, request) => serviceBase.postPutDelete(url, "POST", request),

  put: async (url, request) => serviceBase.postPutDelete(url, "PUT", request),

  delete: (url, request) => serviceBase.postPutDelete(url, "DELETE", request)
};

export default serviceBase;
