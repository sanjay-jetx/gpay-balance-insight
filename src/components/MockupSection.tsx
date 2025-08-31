import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Search, MoreVertical, ArrowLeft, ChevronDown, Check, Signal, Wifi, Battery } from "lucide-react";

const MockupSection = () => {
  const transactions = [
    {
      id: 1,
      name: "GANESANPM",
      date: "30 August",
      amount: "₹28",
      avatar: "G",
      avatarColor: "bg-purple-500",
      before: "₹1,500",
      after: "₹1,472"
    },
    {
      id: 2,
      name: "LEGEND SARAVANA",
      date: "29 August", 
      amount: "₹190",
      avatar: "L",
      avatarColor: "bg-pink-500",
      before: "₹1,662",
      after: "₹1,472"
    },
    {
      id: 3,
      name: "ABIRAMI A",
      date: "29 August",
      amount: "+ ₹200",
      avatar: "A",
      avatarColor: "bg-gray-500",
      isReceived: true,
      before: "₹1,462",
      after: "₹1,662"
    },
    {
      id: 4,
      name: "Fouziya Chikken Center",
      date: "28 August",
      amount: "₹30",
      avatar: "F",
      avatarColor: "bg-purple-500",
      before: "₹1,492",
      after: "₹1,462"
    },
    {
      id: 5,
      name: "NST FUELS",
      date: "28 August",
      amount: "₹100",
      avatar: "N",
      avatarColor: "bg-blue-500",
      before: "₹1,592",
      after: "₹1,492"
    }
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              GPay Transaction History
            </h2>
            <p className="text-xl text-gray-600">
              Exact GPay interface with Before & After balance feature
            </p>
          </div>
          
          <div className="max-w-sm mx-auto">
            {/* Phone Frame */}
            <div className="bg-black rounded-[32px] p-1 shadow-2xl">
              <div className="bg-gpay-dark-bg rounded-[28px] overflow-hidden text-gpay-text-primary">
                
                {/* Status Bar */}
                <div className="flex items-center justify-between px-6 py-2 text-white text-sm">
                  <span className="font-medium">11:26</span>
                  <div className="flex items-center space-x-1">
                    <div className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full flex items-center space-x-1">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                      <span>1 device</span>
                    </div>
                    <Signal className="w-4 h-4" />
                    <Wifi className="w-4 h-4" />
                    <div className="text-green-400">$</div>
                    <Battery className="w-5 h-5" />
                    <span className="text-xs">47%</span>
                  </div>
                </div>

                {/* Search Header */}
                <div className="px-4 py-3">
                  <div className="flex items-center bg-gpay-dark-surface rounded-full px-4 py-3">
                    <ArrowLeft className="w-5 h-5 text-gray-300 mr-3" />
                    <span className="text-gray-300 flex-1">Search transactions</span>
                    <MoreVertical className="w-5 h-5 text-gray-300" />
                  </div>
                </div>

                {/* Filter Buttons */}
                <div className="px-4 pb-4 flex space-x-3">
                  <div className="bg-gpay-dark-surface rounded-full px-4 py-2 flex items-center space-x-2">
                    <span className="text-sm text-white">Status</span>
                    <ChevronDown className="w-4 h-4 text-gray-300" />
                  </div>
                  <div className="bg-gpay-dark-surface rounded-full px-4 py-2 flex items-center space-x-2">
                    <span className="text-sm text-white">Payment method</span>
                    <ChevronDown className="w-4 h-4 text-gray-300" />
                  </div>
                  <div className="bg-gpay-dark-surface rounded-full px-4 py-2">
                    <span className="text-sm text-white">Date</span>
                  </div>
                </div>

                {/* Month Header */}
                <div className="px-4 py-4 border-b border-gpay-border/20">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-gray-400">2025</div>
                      <div className="text-2xl font-light text-white">August</div>
                    </div>
                    <div className="text-xl font-medium text-white">₹419.54</div>
                  </div>
                </div>

                {/* Transactions List */}
                <div className="px-4">
                  {transactions.map((transaction, index) => (
                    <div key={transaction.id}>
                      {/* Transaction Row */}
                      <div className="flex items-center justify-between py-4">
                        <div className="flex items-center space-x-3">
                          <Avatar className="w-10 h-10">
                            <AvatarFallback className={`${transaction.avatarColor} text-white text-sm font-medium`}>
                              {transaction.avatar}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="text-white font-medium text-base">{transaction.name}</div>
                            <div className="text-gray-400 text-sm">{transaction.date}</div>
                          </div>
                        </div>
                        <div className={`text-base font-medium ${
                          transaction.isReceived ? 'text-gpay-received' : 'text-white'
                        }`}>
                          {transaction.amount}
                        </div>
                      </div>

                      {/* NEW FEATURE: Before & After Balance */}
                      <div className="ml-13 mb-4 bg-blue-900/20 border border-blue-500/30 rounded-lg p-3">
                        <div className="flex items-center mb-2">
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></div>
                          <span className="text-xs text-blue-300 font-medium">Balance Impact</span>
                        </div>
                        <div className="space-y-1">
                          <div className="flex justify-between text-xs">
                            <span className="text-gray-400">Before:</span>
                            <span className="text-white font-medium">{transaction.before}</span>
                          </div>
                          <div className="flex justify-between text-xs">
                            <span className="text-gray-400">After:</span>
                            <span className="text-blue-300 font-medium">{transaction.after}</span>
                          </div>
                        </div>
                      </div>

                      {/* Separator line except for last item */}
                      {index < transactions.length - 1 && (
                        <div className="border-b border-gpay-border/10"></div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Bottom spacing */}
                <div className="h-6"></div>
              </div>
            </div>

            {/* Feature Highlight */}
            <div className="mt-6 text-center">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-center justify-center mb-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                  <span className="text-sm font-medium text-blue-900">✨ Enhanced Feature</span>
                </div>
                <p className="text-sm text-blue-700">
                  "Balance Impact" cards show how each transaction affected your account balance - seamlessly integrated into GPay's existing design.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MockupSection;