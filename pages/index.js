import Head from "next/head";
import Image from "next/image";
import { useMoralis, useWeb3Transfer } from "react-moralis";
import styles from "../styles/Home.module.css";
import Logo from "../Assets/MoralisLogo.png";
import { useEffect, useState } from "react";
import SignIn from "../Components/SignIn";
import { SignOut } from "../Components/SignOut";

export default function Home() {
  const { authenticate, isAuthenticated, logout, authError, isAuthenticating } =
    useMoralis();

  const [email, setEmail] = useState("sebastian@anotherblock.io");

  const handleCustomLogin = async () => {
    console.log("This is SIckkkkkk");
    await authenticate({
      provider: "magicLink",
      email: email,
      apiKey: "pk_live_9089F5ED1F215120",
      network: "kovan",
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.backgroundParent}>
        {isAuthenticated ? <SignOut /> : <SignIn />}
      </div>
    </div>
  );
}
