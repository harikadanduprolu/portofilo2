
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow flex items-center justify-center py-20">
        <div className="glass-effect p-12 rounded-2xl max-w-lg mx-auto text-center">
          <h1 className="text-6xl font-bold mb-6 text-gradient">404</h1>
          <p className="text-xl text-portfolio-gray mb-8">
            Oops! The page you're looking for doesn't exist.
          </p>
          <a 
            href="/" 
            className="btn-primary inline-flex items-center gap-2"
          >
            <ArrowLeft size={16} />
            Return to Home
          </a>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
