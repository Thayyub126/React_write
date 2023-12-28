import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Header/Header";
import HomeBanner from "./Components/Banner/Banner";
import ListContent from "./Components/ListContent/ListContent";
import VerticalTabs from "./Components/Blog/Blog";
import Faq from "./Components/Faq/Faq";
import Footer from "./Components/Footer/Footer";
// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Storie from "./Components/Storie/Storie";
import Blog from "./Components/Blog/Blog";
import Pricing from "./Components/Pricing/Pricing";
import Wallet from "./Components/Wallet/Wallet";
import Contact from "./Components/Contact/Contact";
import Layout from "./Components/Layout/Layout";
import ProtectedRoute from "./ProtectedRoute";
import Newstorie from "./Components/Newstorie/Newstorie";
import {
  EthereumClient,
  w3mConnectors,
  w3mProvider,
} from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/react";
import { configureChains, createConfig } from "wagmi";
import { arbitrum, mainnet, polygon } from "wagmi/chains";
import { WagmiConfig } from "wagmi";

// 1. Get projectId
const projectId = "95ab10dd351e5aceb02701082249bb9c";
const chains = [arbitrum, mainnet, polygon];
const { publicClient } = configureChains(chains, [w3mProvider({ projectId })]);
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, chains }),
  publicClient,
});

const ethereumClient = new EthereumClient(wagmiConfig, chains);

export default function App() {
  return (
    <>
      <WagmiConfig config={wagmiConfig}>
        <div>
          <Routes>
            <Route
              path="/"
              element={
                <Layout showHeader={true} showFooter={true}>
                  <Home />
                </Layout>
              }
            />
            <Route
              path="/storie"
              element={
                <ProtectedRoute>
                  <Layout showHeader={true}>
                    <Storie />
                  </Layout>
                </ProtectedRoute>
              }
            />
            <Route
              path="/blog"
              element={
                <Layout>
                  <Blog />
                </Layout>
              }
            />
            <Route
              path="/pricing"
              element={
                <Layout>
                  <Pricing />
                </Layout>
              }
            />
            <Route
              path="/contact"
              element={
                <Layout showHeader={true} showFooter={true}>
                  <Contact />
                </Layout>
              }
            />
            <Route
              path="/wallet"
              element={
                <Layout showHeader={false} showFooter={false}>
                  <Wallet />
                </Layout>
              }
            />
            <Route
              path="/newstorie"
              element={
                <ProtectedRoute>
                  <Layout showHeader={true}>
                    <Newstorie />
                  </Layout>
                </ProtectedRoute>
              }
            />
          </Routes>
        </div>
      </WagmiConfig>
      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
    </>
  );
}
