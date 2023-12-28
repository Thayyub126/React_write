import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useConnect, useAccount, useSignMessage } from "wagmi";

function Wallet() {
  const navigate = useNavigate();
  const [heading, setHeading] = useState("Connect your wallet");
  const [showSignButton, setShowSignButton] = useState(false);

  const { connect, connectors, error: connectError } = useConnect();
  const { isConnected } = useAccount();
  const { signMessage, isLoading: isSigning } = useSignMessage({
    onSuccess(data) {
      navigate("/storie");
    },
    onError(error) {
      console.error("Signing failed:", error);
    },
  });

  useEffect(() => {
    if (isConnected) {
      setHeading("Verify your wallet");
      setShowSignButton(true);
    } else {
      setHeading("Connect your wallet");
      setShowSignButton(false);
    }
  }, [isConnected]);

  const metaMaskConnector = connectors.find(
    (connector) => connector.name === "MetaMask"
  );

  const handleConnectWallet = async (connector) => {
    try {
      await connect({ connector });
    } catch (error) {
      console.error("Connection failed:", error);
    }
  };

  const handleSignMessage = async () => {
    try {
      await signMessage({ message: "Your unique authentication message." });
    } catch (error) {
      console.error("Signing failed:", error);
    }
  };

  return (
    <div>
      <div className="connectwallet-info pt-sm-5 pt-4">
        <h2>
          <Link className="navbar-brand wallet" to="/">
            <img
              src="/assets/images/logo.png"
              style={{ width: "44px", height: "44px" }}
              alt="logo"
              className="img-fluid"
            />
            Write.link
          </Link>
        </h2>
        <h3 className="titlelink">Stories that stay forever.</h3>
        <div className="darkw3link-bg mt-lg-5 mt-4">
          <h4>{heading}</h4>
          {!isConnected && metaMaskConnector && (
            <button
              className="btn btn-style"
              onClick={() => handleConnectWallet(metaMaskConnector)}
            >
              <i className="fas fa-wallet"></i> Connect with MetaMask
            </button>
          )}
          {showSignButton && (
            <button
              className="btn btn-style"
              onClick={handleSignMessage}
              disabled={isSigning}
            >
              <i className="fas fa-signature"></i>
              {isSigning ? " Signing..." : " Sign Transaction"}
            </button>
          )}
          {connectError && <p>Error connecting: {connectError.message}</p>}
        </div>
      </div>
    </div>
  );
}

export default Wallet;
