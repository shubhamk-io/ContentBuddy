import { Toaster } from "react-hot-toast";
import Features from "../components/Features";
import FinalCTA from "../components/FinalCTA";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Problem from "../components/Problem";
import SocialProof from "../components/SocialProof";

export default function LandingPage() {
  return (
    <>
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: "#ffffff",
            border: "1px solid rgba(37,99,235,0.16)",
            color: "#0f172a",
            boxShadow: "0 18px 54px rgba(15,23,42,0.12)"
          },
          success: {
            iconTheme: {
              primary: "#60A5FA",
              secondary: "#ffffff"
            }
          }
        }}
      />
      <main>
        <Hero />
        <SocialProof />
        <Features />
        <Problem />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
