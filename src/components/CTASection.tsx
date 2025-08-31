import { Button } from "@/components/ui/button";
import { MessageCircle, Share2, ThumbsUp } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-hero text-white">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Imagine This in Your GPay
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
            Help us bring this feature to life by sharing your feedback and spreading the word
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="secondary" 
              size="lg"
              className="flex items-center space-x-2 text-lg px-8 py-6 hover:scale-105 transition-transform duration-200"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Share Feedback</span>
            </Button>
            
            <Button 
              variant="outline"
              size="lg"
              className="flex items-center space-x-2 text-lg px-8 py-6 bg-white/10 border-white/30 text-white hover:bg-white/20 hover:scale-105 transition-all duration-200"
            >
              <Share2 className="w-5 h-5" />
              <span>Share This Idea</span>
            </Button>
          </div>
          
          <div className="mt-12 flex items-center justify-center space-x-8 text-blue-100">
            <div className="flex items-center space-x-2">
              <ThumbsUp className="w-5 h-5" />
              <span>Better UX</span>
            </div>
            <div className="flex items-center space-x-2">
              <MessageCircle className="w-5 h-5" />
              <span>User Requested</span>
            </div>
            <div className="flex items-center space-x-2">
              <Share2 className="w-5 h-5" />
              <span>Easy to Implement</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;