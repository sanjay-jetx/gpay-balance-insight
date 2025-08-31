import { CheckCircle, CreditCard, Eye } from "lucide-react";
import { Card } from "@/components/ui/card";

const SolutionSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <CheckCircle className="w-16 h-16 text-gpay-green mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              The Solution
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Display Before and After balances for every transaction directly in GPay's 
              transaction history, giving users complete financial transparency.
            </p>
          </div>
          
          <Card className="p-8 max-w-md mx-auto shadow-lg">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gpay-blue rounded-full flex items-center justify-center">
                    <CreditCard className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-left">
                    <p className="font-semibold">Sent to Arun</p>
                    <p className="text-sm text-muted-foreground">Today, 2:30 PM</p>
                  </div>
                </div>
                <p className="text-lg font-bold text-gpay-red">-₹500</p>
              </div>
              
              <div className="border-t pt-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Before:</span>
                  <span className="font-semibold">₹2,500</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">After:</span>
                  <span className="font-semibold text-gpay-green">₹2,000</span>
                </div>
              </div>
            </div>
          </Card>
          
          <div className="mt-12 flex items-center justify-center space-x-4">
            <Eye className="w-6 h-6 text-gpay-blue" />
            <p className="text-lg text-muted-foreground">
              Clear visibility of balance changes at a glance
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;