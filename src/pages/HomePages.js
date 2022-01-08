import { Link } from "react-router-dom";
export default function HomePages() {
  const userId = "Sergio";
  return (
    <div>
      <h1>Aplication</h1>
      <Link to={`/users/${userId}`}>Usuarios</Link>
    </div>
  );
}
