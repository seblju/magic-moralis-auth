import Image from "next/image";
import { useMoralis } from "react-moralis";
import styles from "../styles/Home.module.css";
import { useState } from "react";

export default function SignIn() {
  const { authenticate, isAuthenticated, authError, isAuthenticating } =
    useMoralis();

  const [email, setEmail] = useState("sebastian@anotherblock.io");

  const handleCustomLogin = async () => {
    await authenticate({
      provider: "magicLink",
      email: email,
      apiKey: "pk_live_9089F5ED1F215120",
      network: "rinkeby",
    });
  };

  return (
    <div className={styles.card}>
      {isAuthenticating && <p className={styles.green}>Authenticating</p>}
      {authError && (
        <p className={styles.error}>{JSON.stringify(authError.message)}</p>
      )}
      <div className={styles.buttonCard}>
        <input
          type={"email"}
          className={styles.input}
          placeholder="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

        <button className={styles.loginButton} onClick={handleCustomLogin}>
          Login with Magic Link
        </button>
      </div>
    </div>
  );
}
