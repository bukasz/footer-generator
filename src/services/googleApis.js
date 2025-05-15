// Replace these with your actual Google API credentials
const CLIENT_ID = 'YOUR_CLIENT_ID';
const API_KEY = 'YOUR_API_KEY';
const DISCOVERY_DOCS = ['https://www.googleapis.com/discovery/v1/apis/gmail/v1/rest'];
const SCOPES = ['https://www.googleapis.com/auth/gmail.settings.basic'];

let tokenClient;
let gapiInited = false;
let gisInited = false;

export const initializeGoogleApis = async () => {
  const loadGapiScript = () => {
    const script = document.createElement('script');
    script.src = 'https://apis.google.com/js/api.js';
    script.async = true;
    script.defer = true;
    script.onload = initializeGapiClient;
    document.head.appendChild(script);
  };

  const loadGisScript = () => {
    const script = document.createElement('script');
    script.src = 'https://accounts.google.com/gsi/client';
    script.async = true;
    script.defer = true;
    script.onload = initializeGisClient;
    document.head.appendChild(script);
  };

  const initializeGapiClient = async () => {
    await window.gapi.client.init({
      apiKey: API_KEY,
      discoveryDocs: DISCOVERY_DOCS,
    });
    gapiInited = true;
  };

  const initializeGisClient = () => {
    tokenClient = window.google.accounts.oauth2.initTokenClient({
      client_id: CLIENT_ID,
      scope: SCOPES.join(' '),
      callback: '', // defined at request time
    });
    gisInited = true;
  };

  loadGapiScript();
  loadGisScript();
};

export const authenticateUser = () => {
  return new Promise((resolve, reject) => {
    if (!gapiInited || !gisInited) {
      reject(new Error('Google APIs not initialized'));
      return;
    }

    tokenClient.callback = async (response) => {
      if (response.error) {
        reject(response);
        return;
      }

      try {
        const userProfile = await getUserProfile();
        resolve(userProfile);
      } catch (error) {
        reject(error);
      }
    };

    tokenClient.requestAccessToken({ prompt: 'consent' });
  });
};

export const getUserProfile = async () => {
  try {
    const response = await window.gapi.client.gmail.users.getProfile({
      userId: 'me',
    });
    return response.result;
  } catch (error) {
    console.error('Error fetching user profile:', error);
    throw error;
  }
};

export const updateFooter = async (userEmail, footer) => {
  try {
    const response = await window.gapi.client.gmail.users.settings.sendAs.update({
      userId: 'me',
      sendAsEmail: userEmail,
      resource: {
        footer,
      },
    });
    return response.result;
  } catch (error) {
    console.error('Error updating footer:', error);
    throw error;
  }
}; 