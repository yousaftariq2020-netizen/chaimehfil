import React from 'react';
import { ShoppingBag, ArrowRight, Sparkles, ChevronUp, Trash2 } from 'lucide-react';
import { CartItem, Language } from '../types';

interface StickyCartBarProps {
  cartItems: CartItem[];
  currentLang: Language;
  onOpenCart: () => void;
  onClearCart?: () => void;
}

export const StickyCartBar: React.FC<StickyCartBarProps> = ({
  cartItems,
  currentLang,
  onOpenCart,
}) => {
  const totalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce((sum, item) => sum + item.item.price * item.quantity, 0);

  if (totalCount === 0) return null;

  return (
    <aside aria-label="Order Cart Summary" className="fixed bottom-0 left-0 right-0 z-50 px-3 sm:px-6 pb-3 pt-2 pointer-events-none animate-in fade-in slide-in-from-bottom-5 duration-300">
      <div className="max-w-4xl mx-auto pointer-events-auto">
        <div className="bg-gradient-to-r from-[#1b0c05]/95 via-[#291307]/95 to-[#190a04]/95 backdrop-blur-xl border-2 border-amber-500/70 rounded-2xl p-3 sm:p-4 shadow-[0_-8px_30px_rgba(0,0,0,0.8)] shadow-amber-950/60 flex items-center justify-between gap-3 sm:gap-4 transition-all">
          
          {/* Left: Cart Info & Items preview */}
          <div 
            onClick={onOpenCart}
            className="flex items-center gap-3 sm:gap-4 cursor-pointer group flex-1 min-w-0"
          >
            {/* Pulsing Bag Icon with Counter */}
            <div className="relative shrink-0">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center shadow-lg shadow-amber-950 text-black">
                <ShoppingBag className="w-6 h-6" />
              </div>
              <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-rose-600 border border-white text-white text-[11px] font-black flex items-center justify-center shadow animate-pulse">
                {totalCount}
              </span>
            </div>

            {/* Price & Items Details */}
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-amber-400 flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-amber-300" />
                  Your Order Basket
                </span>
                <span className="text-[10px] text-amber-200/60 hidden xs:inline">• {totalCount} {totalCount === 1 ? 'item' : 'items'} added</span>
              </div>

              <div className="flex items-baseline gap-2">
                <span className="text-lg sm:text-2xl font-black text-white font-display">
                  Rs. {totalPrice.toLocaleString()}
                </span>
                <span className="text-[11px] text-emerald-400 font-bold hidden sm:inline">
                  (Free Delivery Ph II)
                </span>
              </div>
            </div>
          </div>

          {/* Right: Action Button to Open Drawer / Checkout */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              id="sticky-cart-checkout-btn"
              onClick={onOpenCart}
              className="px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500 hover:from-amber-300 hover:to-orange-400 text-black font-black text-xs sm:text-sm shadow-xl shadow-amber-950 transition-all transform hover:scale-[1.03] flex items-center gap-1.5 sm:gap-2 border border-amber-200 cursor-pointer whitespace-nowrap"
            >
              <span>{currentLang === 'ur' ? 'آرڈر مکمل کریں' : 'Checkout & Order'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </aside>
  );
};
