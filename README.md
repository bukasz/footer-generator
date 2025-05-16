# Gmail Footer Generator

A React application that allows users to create and set custom email footers for their Gmail account.

## Features

- User-friendly form for inputting footer details
- Real-time footer preview
- Google OAuth 2.0 integration for Gmail access
- Responsive design
- Modern UI with SCSS styling (BEM methodology)

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- Google Cloud Platform account with Gmail API enabled
- OAuth 2.0 credentials (Client ID and API Key)

## Setup

1. Clone the repository:
```bash
git clone <repository-url>
cd footer-generator
```

2. Install dependencies:
```bash
npm install
```

3. Configure Google API credentials:
   - Go to the [Google Cloud Console](https://console.cloud.google.com)
   - Create a new project or select an existing one
   - Enable the Gmail API
   - Create OAuth 2.0 credentials (Client ID and API Key)
   - Add your application's domain to the authorized JavaScript origins
   - Update the `src/services/googleApis.js` file with your credentials:
     ```javascript
     const CLIENT_ID = 'YOUR_CLIENT_ID';
     const API_KEY = 'YOUR_API_KEY';
     ```

4. Start the development server:
```bash
npm run dev
```

5. Open your browser and navigate to `http://localhost:5173`

## Usage

1. Click the "Authorize access to Gmail settings" button to authenticate with your Google account
2. Fill in your footer details in the form
3. Preview your footer in real-time
4. Click "Save" to update your Gmail footer

## Development

- The project uses Vite for development and building
- SCSS is used for styling with BEM methodology
- Components are organized in a modular structure
- Google API integration is handled through the `services/googleApis.js` module

## Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## License

MIT
