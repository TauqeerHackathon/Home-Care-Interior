import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { BUSINESS_DATA } from '../data/businessData';

export const MobileQuickBar: React.FC = () => {
  return (
    <div
      aria-label="Quick contact actions"
      className="lg:hidden fixed bottom-0 left-0 right-0 z-30 bg-charcoal/95 backdrop-blur-md border-t border-white/10 px-4 py-2.5 shadow-lg"
    >
      <div className="max-w-md mx-auto grid grid-cols-2 gap-3">
        <a
          href={BUSINESS_DATA.telephoneUri}
          className="flex items-center justify-center gap-2 py-2 px-3 bg-white/10 hover:bg-white/20 text-white rounded-sm text-xs font-semibold uppercase tracking-wider transition-colors"
        >
          <Phone className="w-3.5 h-3.5 text-champagne" />
          <span>Call Now</span>
        </a>

        <a
          href={BUSINESS_DATA.whatsappUri}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-2 px-3 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-sm text-xs font-semibold uppercase tracking-wider transition-colors"
        >
          <MessageCircle className="w-3.5 h-3.5" />
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  );
};
