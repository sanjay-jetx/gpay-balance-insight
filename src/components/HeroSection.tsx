import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-transactions.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-hero text-white relative overflow-hidden">
      <div className="container mx-auto px-6 py-20 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            GPay Feature Pitch: <br />
            <span className="text-yellow-300">Before & After Balance</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Easily track your account balance after every transaction
          </p>
          <div className="mb-12">
            <img 
              src={heroImage} 
              alt="Digital money flow and transactions illustration" 
              className="max-w-2xl mx-auto rounded-2xl shadow-2xl"
            />
          </div>
          <Button 
            size="lg" 
            variant="secondary"
            className="text-lg px-8 py-6 hover:scale-105 transition-transform duration-200"
          >
            Explore the Solution
          </Button>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent"></div>
    </section>
  );
};

export default HeroSection;