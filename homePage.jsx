import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();


  return (
    <div>
      <h1>Hello from Home Page</h1>
    </div>
  );
}

export default HomePage;
