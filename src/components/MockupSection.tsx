import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { ArrowUpRight, ArrowDownLeft, User, Store, Car, ShoppingBag } from "lucide-react";

const MockupSection = () => {
  const transactions = [
    {
      id: 1,
      type: "received",
      description: "Priya Sharma",
      subtext: "Money received",
      amount: "+₹750",
      date: "4:15 PM",
      before: "₹2,000",
      after: "₹2,750",
      avatar: "PS",
      avatarBg: "bg-green-500"
    },
    {
      id: 2,
      type: "sent",
      description: "Café Coffee Day",
      subtext: "Food & drinks",
      amount: "-₹120",
      date: "2:45 PM",
      before: "₹2,120",
      after: "₹2,000",
      avatar: "CD",
      avatarBg: "bg-orange-500"
    },
    {
      id: 3,
      type: "sent",
      description: "Indian Oil",
      subtext: "Fuel",
      amount: "-₹800",
      date: "Yesterday",
      before: "₹2,920",
      after: "₹2,120",
      avatar: "IO",
      avatarBg: "bg-red-500"
    },
    {
      id: 4,
      type: "sent",
      description: "Amazon Pay",
      subtext: "Shopping",
      amount: "-₹1,250",
      date: "Yesterday",
      before: "₹4,170",
      after: "₹2,920",
      avatar: "A",
      avatarBg: "bg-yellow-600"
    }
  ];

  return (
    <section className="py-20 bg-gpay-surface">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gpay-text-primary">
              GPay Transaction History
            </h2>
            <p className="text-xl text-gpay-text-secondary">
              Enhanced with Before & After balance visibility
            </p>
          </div>
          
          <div className="max-w-sm mx-auto">
            {/* Phone Frame */}
            <div className="bg-black rounded-[32px] p-2 shadow-2xl">
              <div className="bg-gpay-background rounded-[24px] overflow-hidden">
                {/* Status Bar */}
                <div className="h-6 bg-gpay-background flex items-center justify-between px-6 pt-2">
                  <span className="text-xs font-medium text-gpay-text-primary">9:41</span>
                  <div className="flex items-center space-x-1">
                    <div className="w-4 h-2 bg-gpay-text-primary rounded-sm"></div>
                  </div>
                </div>
                
                {/* Header */}
                <div className="px-4 py-4 border-b border-gpay-gray/50">
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 flex items-center justify-center">
                      <ArrowDownLeft className="w-5 h-5 text-gpay-text-secondary" />
                    </div>
                    <h3 className="text-lg font-medium text-gpay-text-primary">Transaction history</h3>
                  </div>
                </div>
                
                {/* Transactions */}
                <div className="px-4 py-2">
                  <p className="text-sm font-medium text-gpay-text-secondary mb-3 px-2">Today</p>
                  
                  {transactions.slice(0, 2).map((transaction) => (
                    <div key={transaction.id} className="mb-1">
                      <div className="flex items-center justify-between p-3 rounded-lg hover:bg-gpay-gray/30 transition-colors">
                        <div className="flex items-center space-x-3">
                          <Avatar className="w-10 h-10">
                            <AvatarFallback className={`${transaction.avatarBg} text-white text-xs font-medium`}>
                              {transaction.avatar}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="text-sm font-medium text-gpay-text-primary">{transaction.description}</p>
                            <p className="text-xs text-gpay-text-secondary">{transaction.subtext}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className={`text-sm font-medium ${
                            transaction.type === 'received' ? 'text-gpay-green' : 'text-gpay-text-primary'
                          }`}>
                            {transaction.amount}
                          </p>
                          <p className="text-xs text-gpay-text-secondary">{transaction.date}</p>
                        </div>
                      </div>
                      
                      {/* New Feature: Balance Display */}
                      <div className="ml-13 mr-3 mb-3 bg-blue-50 rounded-lg p-2 border-l-2 border-gpay-blue">
                        <div className="flex justify-between text-xs">
                          <span className="text-gpay-text-secondary">Before:</span>
                          <span className="font-medium text-gpay-text-primary">{transaction.before}</span>
                        </div>
                        <div className="flex justify-between text-xs mt-1">
                          <span className="text-gpay-text-secondary">After:</span>
                          <span className="font-medium text-gpay-blue">{transaction.after}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  <p className="text-sm font-medium text-gpay-text-secondary mb-3 px-2 mt-4">Yesterday</p>
                  
                  {transactions.slice(2).map((transaction) => (
                    <div key={transaction.id} className="mb-1">
                      <div className="flex items-center justify-between p-3 rounded-lg hover:bg-gpay-gray/30 transition-colors">
                        <div className="flex items-center space-x-3">
                          <Avatar className="w-10 h-10">
                            <AvatarFallback className={`${transaction.avatarBg} text-white text-xs font-medium`}>
                              {transaction.avatar}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="text-sm font-medium text-gpay-text-primary">{transaction.description}</p>
                            <p className="text-xs text-gpay-text-secondary">{transaction.subtext}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium text-gpay-text-primary">
                            {transaction.amount}
                          </p>
                          <p className="text-xs text-gpay-text-secondary">{transaction.date}</p>
                        </div>
                      </div>
                      
                      {/* New Feature: Balance Display */}
                      <div className="ml-13 mr-3 mb-3 bg-blue-50 rounded-lg p-2 border-l-2 border-gpay-blue">
                        <div className="flex justify-between text-xs">
                          <span className="text-gpay-text-secondary">Before:</span>
                          <span className="font-medium text-gpay-text-primary">{transaction.before}</span>
                        </div>
                        <div className="flex justify-between text-xs mt-1">
                          <span className="text-gpay-text-secondary">After:</span>
                          <span className="font-medium text-gpay-blue">{transaction.after}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Bottom padding */}
                <div className="h-6"></div>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <p className="text-sm text-gpay-text-secondary bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                <span className="font-medium text-yellow-800">✨ New Feature:</span> Balance information now shows before and after each transaction
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MockupSection;