export default function Loader() {
  return (
    <>
      <div className="backdrop"></div>
      <div className="loader">
        <div className="loader__spinner"></div>
        <p className="loader__text">Loading...</p>
      </div>
    </>
  );
}
