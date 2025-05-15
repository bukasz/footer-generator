export default function AuthorizeButton({ handleAuth }) {
  return (
    <>
      <div className="backdrop"></div>
      <div className="authorize-button">
        <button
          className="authorize-button__button | button button--primary"
          onClick={handleAuth}
        >
          Authorize access to Gmail settings
        </button>
      </div>
    </>
  );
}
