import Title from "./Title";
import DropdownMenu from "./DropdownMenu";

export default function Header({ handleAuth, handleSignout }) {
  return (
    <header className="header">
      <Title />
      <DropdownMenu handleAuth={handleAuth} handleSignout={handleSignout} />
    </header>
  );
}
