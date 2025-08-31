import { AlertCircle, Calculator, Smartphone } from "lucide-react";

const ProblemSection = () => {
  return (
    <section className="py-20 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <AlertCircle className="w-16 h-16 text-gpay-red mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              The Problem
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Currently, GPay only shows transaction amounts. Users cannot see how each 
              transaction affects their balance, leaving them in the dark about their financial status.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center p-6">
              <Smartphone className="w-12 h-12 text-gpay-blue mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Limited Visibility</h3>
              <p className="text-muted-foreground">
                Transaction amounts without context of remaining balance
              </p>
            </div>
            
            <div className="text-center p-6">
              <Calculator className="w-12 h-12 text-gpay-blue mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Manual Calculation</h3>
              <p className="text-muted-foreground">
                Users must calculate balance changes themselves
              </p>
            </div>
            
            <div className="text-center p-6">
              <AlertCircle className="w-12 h-12 text-gpay-blue mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">App Switching</h3>
              <p className="text-muted-foreground">
                Need to check bank apps to see actual balance
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;