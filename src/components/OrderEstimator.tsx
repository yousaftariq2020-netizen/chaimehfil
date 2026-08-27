import React, { useState } from 'react';
import { ShoppingBag, Trash2, Plus, Minus, Send, MessageCircle, X, Coffee, Check, ReceiptText, Sparkles, Phone, MapPin, Truck, Copy } from 'lucide-react';
import { CartItem, MenuItem, Language } from '../types';
import { translations } from '../data/translations';
import { cafeDetails } from '../data/chaiMehfilData';

interface OrderEstimatorProps {
  currentLang: Language;
  cartItems: CartItem[];
  onUpdateQuantity: (itemId: string, delta: number) => void;
  onRemoveItem: (itemId: string) => void;
  onClearCart: () => void;
  isOpenDrawer?: boolean;
  onCloseDrawer?: () => void;
}

export const OrderEstimator: React.FC<OrderEstimatorProps> = ({
  currentLang,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  isOpenDrawer = false,
  onCloseDrawer
}) => {
  const [serviceType, setServiceType] = useState<'delivery' | 'dine-in' | 'takeaway'>('delivery');
  const [tableOrCarNumber, setTableOrCarNumber] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('Alrehman Garden Phase II, Lahore');
  const [specialInstructions, setSpecialInstructions] = useState('');
  const [orderPlacedSuccess, setOrderPlacedSuccess] = useState(false);
  const [copiedReceipt, setCopiedReceipt] = useState(false);

  const t = translations[currentLang];

  const subtotal = cartItems.reduce((sum, item) => sum + item.item.price * item.quantity, 0);
  const deliveryFee = 0; // Free delivery for local area
  const grandTotal = subtotal + deliveryFee;

  const quickAddresses = [
    'Alrehman Garden Phase II, Gate 2',
    'Alrehman Garden Phase II, Gate 1',
    'Alrehman Garden Phase I',
    'Alrehman Garden Phase III',
    'Main Sharaqpur Road, Lahore',
    'Rooftop Table Dine-in',
    'Car Dine-in (Outside Parking)'
  ];

  const generateWhatsAppMessage = () => {
    let message = `*☕ CHAI MEHFIL CAFE - NEW ORDER* ☕\n`;
    message += `*Customer:* ${customerName || 'Valued Guest'}\n`;
    message += `*Contact Phone:* ${customerPhone || 'N/A'}\n`;
    message += `*Service Mode:* ${serviceType.toUpperCase()}\n`;
    if (serviceType === 'delivery') {
      message += `*Delivery Address:* ${deliveryAddress || 'Alrehman Garden Phase 2 Area'}\n`;
    } else if (tableOrCarNumber) {
      message += `*Table / Car #:* ${tableOrCarNumber}\n`;
    }
    message += `\n*--- ORDER ITEMS & DEALS ---*\n`;

    cartItems.forEach((cItem, idx) => {
      message += `${idx + 1}. *${cItem.item.name}* (${cItem.item.nameUrdu})\n`;
      message += `   Qty: ${cItem.quantity} x Rs.${cItem.item.price} = Rs.${cItem.quantity * cItem.item.price}\n`;
    });

    message += `\n*Subtotal:* Rs. ${subtotal}\n`;
    message += `*Delivery Charges:* FREE\n`;
    message += `*Total Amount:* *Rs. ${grandTotal}*\n`;
    if (specialInstructions) {
      message += `*Special Note:* ${specialInstructions}\n`;
    }
    message += `\n_Address: Opposite Alrehman Garden Phase II, Lahore_`;
    message += `\n_Hotlines: ${cafeDetails.phone1} / ${cafeDetails.phone2}_`;
    message += `\n_Shukriya! Please prepare our order._`;
    return message;
  };

  const handleSendToWhatsApp = () => {
    if (cartItems.length === 0) return;
    const msg = generateWhatsAppMessage();
    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/${cafeDetails.whatsappNumber}?text=${encoded}`, '_blank');
    setOrderPlacedSuccess(true);
  };

  const handleCopyReceipt = () => {
    const msg = generateWhatsAppMessage();
    navigator.clipboard.writeText(msg);
    setCopiedReceipt(true);
    setTimeout(() => setCopiedReceipt(false), 2000);
  };

  const content = (
    <div className="bg-[#140c07] rounded-3xl border border-amber-900/50 p-6 sm:p-8 shadow-2xl shadow-black/80">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-amber-900/40 pb-4 mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-amber-600/20 border border-amber-500/30 flex items-center justify-center text-amber-400">
            <ShoppingBag className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-amber-100 font-display">
              {t.cartTitle}
            </h3>
            <p className="text-xs text-amber-300/70">Hotline: {cafeDetails.phone1} / {cafeDetails.phone2}</p>
          </div>
        </div>
        {cartItems.length > 0 && (
          <button
            onClick={onClearCart}
            className="text-xs text-amber-400/60 hover:text-red-400 flex items-center gap-1 transition-colors cursor-pointer"
          >
            <Trash2 className="w-3.5 h-3.5" />
            <span>Clear</span>
          </button>
        )}
      </div>

      {/* Cart Items List */}
      {cartItems.length === 0 ? (
        <div className="text-center py-10 px-4 bg-[#0a0503] rounded-2xl border border-amber-950/60 mb-6">
          <Coffee className="w-10 h-10 text-amber-600/40 mx-auto mb-2" />
          <p className="text-amber-200 text-sm font-semibold">{t.cartEmpty}</p>
          <p className="text-amber-400/50 text-xs mt-1">Select Mega Deals, Pizzas, Burgers or Chai above to begin</p>
        </div>
      ) : (
        <div className="space-y-3 max-h-72 overflow-y-auto pr-1 mb-6 scrollbar-thin">
          {cartItems.map(({ item, quantity }) => (
            <div
              key={item.id}
              className="flex items-center justify-between p-3 rounded-2xl bg-[#0b0503] border border-amber-900/40"
            >
              <div className="flex items-center gap-3 min-w-0">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 rounded-xl object-cover border border-amber-900/40 shrink-0"
                />
                <div className="min-w-0">
                  <h4 className="text-xs sm:text-sm font-bold text-amber-100 truncate">{item.name}</h4>
                  <p className="text-[11px] text-amber-400/80">
                    Rs. {item.price} × {quantity} = <strong className="text-amber-300">Rs. {item.price * quantity}</strong>
                  </p>
                </div>
              </div>

              {/* Quantity Controls */}
              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={() => onUpdateQuantity(item.id, -1)}
                  className="w-7 h-7 rounded-lg bg-[#201007] text-amber-300 hover:bg-amber-700 hover:text-white flex items-center justify-center transition-colors text-xs cursor-pointer"
                  title="Decrease"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="text-xs font-bold text-amber-100 min-w-4 text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => onUpdateQuantity(item.id, 1)}
                  className="w-7 h-7 rounded-lg bg-amber-600 text-white hover:bg-amber-500 flex items-center justify-center transition-colors text-xs cursor-pointer"
                  title="Increase"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => onRemoveItem(item.id)}
                  className="text-amber-500/40 hover:text-red-400 ml-1 p-1"
                  title="Remove"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Service Type Picker */}
      <div className="mb-5">
        <label className="block text-xs font-semibold text-amber-200 mb-2">Order Service Mode:</label>
        <div className="grid grid-cols-3 gap-2">
          {(['delivery', 'dine-in', 'takeaway'] as const).map((type) => (
            <button
              key={type}
              type="button"
              onClick={() => setServiceType(type)}
              className={`py-2 px-3 rounded-xl text-xs font-semibold capitalize border transition-all cursor-pointer ${
                serviceType === type
                  ? 'bg-amber-600 text-white border-amber-400 shadow-md'
                  : 'bg-[#0b0503] text-amber-300/70 border-amber-900/40 hover:border-amber-700'
              }`}
            >
              {type === 'delivery' ? '🛵 Free Delivery' : type === 'dine-in' ? '🪑 Rooftop Dine-in' : '🛍️ Takeaway'}
            </button>
          ))}
        </div>
      </div>

      {/* Details Inputs */}
      <div className="space-y-3 mb-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className="block text-[11px] font-semibold text-amber-200/80 mb-1">Your Name</label>
            <input
              type="text"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              placeholder="e.g. Daniyal Khan"
              className="w-full px-3 py-2 rounded-xl bg-[#090503] border border-amber-900/50 text-amber-100 text-xs focus:outline-none focus:border-amber-500"
            />
          </div>
          <div>
            <label className="block text-[11px] font-semibold text-amber-200/80 mb-1">WhatsApp Phone #</label>
            <input
              type="tel"
              value={customerPhone}
              onChange={(e) => setCustomerPhone(e.target.value)}
              placeholder="0321-xxxxxxx"
              className="w-full px-3 py-2 rounded-xl bg-[#090503] border border-amber-900/50 text-amber-100 text-xs focus:outline-none focus:border-amber-500"
            />
          </div>
        </div>

        {serviceType === 'delivery' ? (
          <div>
            <label className="block text-[11px] font-semibold text-amber-200/80 mb-1">Delivery Address</label>
            <input
              type="text"
              value={deliveryAddress}
              onChange={(e) => setDeliveryAddress(e.target.value)}
              placeholder="House #, Street, Phase / Area..."
              className="w-full px-3 py-2 rounded-xl bg-[#090503] border border-amber-900/50 text-amber-100 text-xs focus:outline-none focus:border-amber-500"
            />
            {/* Quick shortcuts */}
            <div className="flex flex-wrap gap-1.5 mt-2">
              {quickAddresses.slice(0, 4).map((qa, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setDeliveryAddress(qa)}
                  className="text-[10px] px-2 py-0.5 rounded-md bg-[#1d0e07] text-amber-300 hover:bg-amber-800/40 border border-amber-800/40 transition-colors"
                >
                  {qa}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div>
            <label className="block text-[11px] font-semibold text-amber-200/80 mb-1">
              {serviceType === 'dine-in' ? 'Table Number / Floor' : 'Car Plate # / Pickup Time'}
            </label>
            <input
              type="text"
              value={tableOrCarNumber}
              onChange={(e) => setTableOrCarNumber(e.target.value)}
              placeholder={serviceType === 'dine-in' ? 'e.g. Table 12, Rooftop Stage' : 'e.g. White Corolla LEA-1234'}
              className="w-full px-3 py-2 rounded-xl bg-[#090503] border border-amber-900/50 text-amber-100 text-xs focus:outline-none focus:border-amber-500"
            />
          </div>
        )}

        <div>
          <label className="block text-[11px] font-semibold text-amber-200/80 mb-1">Special Request (Optional)</label>
          <input
            type="text"
            value={specialInstructions}
            onChange={(e) => setSpecialInstructions(e.target.value)}
            placeholder="e.g. Extra sugar in Karak Chai, extra dip sauce, spicy tikka..."
            className="w-full px-3 py-2 rounded-xl bg-[#090503] border border-amber-900/50 text-amber-100 text-xs focus:outline-none focus:border-amber-500"
          />
        </div>
      </div>

      {/* Bill Breakdown Summary */}
      <div className="p-4 rounded-2xl bg-[#090503] border border-amber-900/40 mb-6 space-y-2 text-xs">
        <div className="flex justify-between text-amber-200/80">
          <span>Items Subtotal:</span>
          <span>Rs. {subtotal}</span>
        </div>
        <div className="flex justify-between text-emerald-400">
          <span>Delivery Charges:</span>
          <span className="font-bold">FREE (Local Coverage)</span>
        </div>
        <div className="pt-2 border-t border-amber-900/40 flex justify-between text-amber-100 font-extrabold text-sm sm:text-base">
          <span>Total Payable Amount:</span>
          <span className="text-amber-400 font-black">Rs. {grandTotal}</span>
        </div>
      </div>

      {/* Order Actions */}
      <div className="space-y-2.5">
        <button
          id="btn-whatsapp-dispatch"
          onClick={handleSendToWhatsApp}
          disabled={cartItems.length === 0}
          className="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 disabled:opacity-50 disabled:cursor-not-allowed text-white font-black text-xs sm:text-sm flex items-center justify-center gap-2 shadow-xl shadow-emerald-950/70 transition-all cursor-pointer border border-emerald-400/30"
        >
          <MessageCircle className="w-4 h-4" />
          <span>Send Order via WhatsApp to {cafeDetails.phone1}</span>
        </button>

        <button
          onClick={handleCopyReceipt}
          disabled={cartItems.length === 0}
          className="w-full py-2.5 rounded-xl bg-[#1d0e07] hover:bg-[#2c150b] text-amber-200 text-xs font-semibold flex items-center justify-center gap-2 border border-amber-800/40 transition-colors cursor-pointer"
        >
          <Copy className="w-3.5 h-3.5 text-amber-400" />
          <span>{copiedReceipt ? 'Receipt Copied to Clipboard!' : 'Copy Formatted Bill Receipt'}</span>
        </button>
      </div>

      {orderPlacedSuccess && (
        <div className="mt-4 p-3 rounded-xl bg-emerald-950/90 border border-emerald-500/40 text-emerald-300 text-xs text-center flex items-center justify-center gap-2">
          <Check className="w-4 h-4 text-emerald-400" />
          <span>WhatsApp launched! Your order is being sent to Chai Mehfil kitchen.</span>
        </div>
      )}
    </div>
  );

  if (isOpenDrawer) {
    return (
      <div
        className="fixed inset-0 z-50 flex items-center justify-end bg-black/80 backdrop-blur-sm animate-fadeIn p-2 sm:p-4"
        onClick={onCloseDrawer}
      >
        <div
          className="relative max-w-lg w-full max-h-[92vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onCloseDrawer}
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/80 text-amber-200 hover:text-white border border-amber-600/40 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
          {content}
        </div>
      </div>
    );
  }

  return (
    <section id="order-estimator" className="py-20 bg-[#090503] relative border-t border-amber-950/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-950/80 border border-amber-500/40 text-amber-300 text-xs font-semibold mb-3">
            <ReceiptText className="w-3.5 h-3.5 text-amber-400" />
            <span>Hisab Kitab & Quick Delivery</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-amber-50 mb-2 font-display">
            {t.cartTitle}
          </h2>
          <p className="text-amber-200/70 text-xs sm:text-sm">
            Calculate your bill and dispatch your order instantly to our kitchen via WhatsApp hotline.
          </p>
        </div>

        {content}
      </div>
    </section>
  );
};
