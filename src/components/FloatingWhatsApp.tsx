import { MessageCircle } from "lucide-react";

const whatsappNumber = "917905292308";

export const FloatingWhatsApp = () => {
  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=Hi%2C%20I'm%20interested%20in%20FRAGO%20products`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:bg-[#128C7E] hover:scale-110 transition-all duration-300 animate-pulse hover:animate-none"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
};
