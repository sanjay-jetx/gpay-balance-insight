import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { ArrowUpRight, ArrowDownLeft, CreditCard, Coffee, Fuel, ShoppingCart } from "lucide-react";

const MockupSection = () => {
  const transactions = [
    {
      id: 1,
      type: "received",
      description: "Received from Priya",
      amount: "+₹750",
      date: "Today, 4:15 PM",
      before: "₹2,000",
      after: "₹2,750",
      avatar: "P",
      icon: ArrowDownLeft,
      color: "text-gpay-green"
    },
    {
      id: 2,
      type: "sent",
      description: "Coffee Shop Payment",
      amount: "-₹120",
      date: "Today, 2:45 PM",
      before: "₹2,120",
      after: "₹2,000",
      avatar: "C",
      icon: Coffee,
      color: "text-gpay-red"
    },
    {
      id: 3,
      type: "sent",
      description: "Fuel Payment",
      amount: "-₹800",
      date: "Yesterday, 6:20 PM",
      before: "₹2,920",
      after: "₹2,120",
      avatar: "F",
      icon: Fuel,
      color: "text-gpay-red"
    },
    {
      id: 4,
      type: "sent",
      description: "Online Shopping",
      amount: "-₹1,250",
      date: "Yesterday, 2:10 PM",
      before: "₹4,170",
      after: "₹2,920",
      avatar: "S",
      icon: ShoppingCart,
      color: "text-gpay-red"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              UI Mockup
            </h2>
            <p className="text-xl text-muted-foreground">
              How the enhanced transaction history would look in GPay
            </p>
          </div>
          
          <div className="max-w-sm mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl p-6 border">
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-center mb-4">Transaction History</h3>
              </div>
              
              <div className="space-y-4">
                {transactions.map((transaction) => (
                  <Card key={transaction.id} className="p-4 border-l-4 border-l-gpay-blue">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <Avatar className="w-10 h-10">
                          <AvatarFallback className="bg-gpay-blue text-white text-sm">
                            {transaction.avatar}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold text-sm">{transaction.description}</p>
                          <p className="text-xs text-muted-foreground">{transaction.date}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className={`font-bold ${transaction.color}`}>
                          {transaction.amount}
                        </p>
                        <transaction.icon className="w-4 h-4 text-muted-foreground ml-auto mt-1" />
                      </div>
                    </div>
                    
                    <div className="bg-gpay-gray/30 rounded-lg p-3 space-y-1">
                      <div className="flex justify-between text-xs">
                        <span className="text-muted-foreground">Before:</span>
                        <span className="font-semibold">{transaction.before}</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-muted-foreground">After:</span>
                        <span className="font-semibold text-gpay-blue">{transaction.after}</span>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MockupSection;