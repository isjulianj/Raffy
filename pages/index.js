import { useState, useRef, useEffect } from "react";
import Layout from "../components/MainLayout";

const Index = () => {
  const [userName, setUserName] = useState("Whats your name?");
  const nameInput = useRef(null);
  const handleClick = e => {
    e.preventDefault();
    setUserName(nameInput.current.value);
  };
  useEffect(() => {
    if (userName === "Whats your name?") return;
    alert(userName);
  }, [userName]);

  return (
    <Layout>
      <h2>Home</h2>
      <main>
        <form action="">
          <label htmlFor="userName">Whats your name? </label>
          <input
            id="userName"
            ref={nameInput}
            type="text"
            placeholder={userName}
          />
          <button onClick={handleClick}>set</button>
        </form>
      </main>
    </Layout>
  );
};

export default Index;
