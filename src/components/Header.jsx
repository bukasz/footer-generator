import Title from "./Title";
import DropdownMenu from "./DropdownMenu";

export default function Header({ handleAuth, revokeAccess }) {
  return (
    <header className="header">
      <Title />
      <DropdownMenu handleAuth={handleAuth} revokeAccess={revokeAccess} />
    </header>
  );
}
