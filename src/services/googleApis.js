async function loadScript(src) {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.setAttribute("src", src);
    document.body.appendChild(script);

    script.onload = resolve;
    script.onerror = reject;
  });
}

class GoogleApis {
  constructor() {
    this.urls = {
      gapi: "https://apis.google.com/js/api.js",
      gis: "https://accounts.google.com/gsi/client",
    };
    this.CLIENT_ID =
      "65683795126-dca7sb0aesnhosb2g76k2jtsr6m0ed2j.apps.googleusercontent.com";
    this.API_KEY = "AIzaSyCABkfhbootKsvp0v-9IGM30ycXkwbfBDY";
    this.DISCOVERY_DOCS = [
      "https://www.googleapis.com/discovery/v1/apis/gmail/v1/rest",
      "https://www.googleapis.com/discovery/v1/apis/people/v1/rest",
    ];
    this.SCOPES = [
      "https://www.googleapis.com/auth/userinfo.email",
      "https://www.googleapis.com/auth/userinfo.profile",
      "https://www.googleapis.com/auth/gmail.settings.basic",
    ];
    this.scriptLoadingPromise = null;
  }

  loadGapi() {
    return new Promise(async (resolve, reject) => {
      if (window.gapi) return resolve();

      try {
        await loadScript(this.urls.gapi);

        if (!window.gapi) {
          throw new Error("Google API not found");
        }

        window.gapi.load("client", async () => {
          await gapi.client.init({
            apiKey: this.API_KEY,
            discoveryDocs: this.DISCOVERY_DOCS,
          });
          window.gapiInited = true;
          resolve();
        });
      } catch (error) {
        reject(error);
      }
    });
  }

  loadGis() {
    return new Promise(async (resolve, reject) => {
      if (window.tokenClient) return resolve();

      try {
        await loadScript(this.urls.gis);

        if (!window.google?.accounts?.oauth2) {
          throw new Error("Google Identity Services not found");
        }

        window.tokenClient = await window.google.accounts.oauth2.initTokenClient({
          client_id: this.CLIENT_ID,
          scope: this.SCOPES.join(" "),
          callback: "", // defined later
        });

        window.gisInited = true;
        resolve();
      } catch (error) {
        reject(error);
      }
    });
  }

  loadGoogleApis() {
    if (!this.scriptLoadingPromise) {
      this.scriptLoadingPromise = new Promise(async (resolve, reject) => {
        if (window.gisInited && window.gapiInited && window.tokenClient) {
          return resolve();
        }

        try {
          await Promise.all([this.loadGapi(), this.loadGis()]);
          resolve();
        } catch (error) {
          reject(error);
        }
      });
    }

    return this.scriptLoadingPromise;
  }
}

let service;

function googleApisService() {
  if (!service) {
    service = new GoogleApis();
  }

  return service;
}

export default googleApisService;
