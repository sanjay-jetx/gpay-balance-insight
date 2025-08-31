import { Eye, Smartphone, Target, AlertTriangle } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Eye,
      title: "Transparency",
      description: "See how each transaction changes your balance instantly"
    },
    {
      icon: Smartphone,
      title: "Convenience", 
      description: "No need to switch apps or check your bank account"
    },
    {
      icon: Target,
      title: "Financial Awareness",
      description: "Better budgeting with real-time balance tracking"
    },
    {
      icon: AlertTriangle,
      title: "Error Detection",
      description: "Quickly spot mistakes or duplicate transactions"
    }
  ];

  return (
    <section className="py-20 bg-gradient-section">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Key Benefits
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Transform your payment experience with complete transaction transparency
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
                <benefit.icon className="w-12 h-12 text-gpay-blue mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;