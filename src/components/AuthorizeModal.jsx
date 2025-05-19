import consentImage from "@/images/consent.webp";

export default function AuthorizeModal({ handleAuth, authErrorMsg }) {
  return (
    <>
      <div className="backdrop"></div>
      <div className="authorize-modal">
        <p className="authorize-modal__text">
          Please allow the app to edit your Gmail settings:
        </p>
        <img
          className="authorize-modal__screenshot"
          src={consentImage}
          alt="Screenshot of the Google Consent Screen"
          width="380"
          height="79"
        />
        {authErrorMsg && (
          <p className="authorize-modal__text authorize-modal__text--error">
            {authErrorMsg}
          </p>
        )}
        <button
          className="authorize-modal__button | button button--primary"
          onClick={handleAuth}
        >
          Authorize access to Gmail settings
        </button>
      </div>
    </>
  );
}
