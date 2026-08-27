import React, { useState } from 'react';
import { MessageCircle, Coffee, Sparkles, Phone, Flame, Truck } from 'lucide-react';
import { Language, MenuItem, CartItem, QawwaliNightEvent } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { VisualDealsGallery } from './components/VisualDealsGallery';
import { ExperienceSection } from './components/ExperienceSection';
import { ChaiSommelier } from './components/ChaiSommelier';
import { MenuSection } from './components/MenuSection';
import { SeatingPlanSection } from './components/SeatingPlanSection';
import { QawwaliSchedule } from './components/QawwaliSchedule';
import { EventPackagesSection } from './components/EventPackagesSection';
import { ChaiGiftCardSection } from './components/ChaiGiftCardSection';
import { ChaiGiftAdBanner } from './components/ChaiGiftAdBanner';
import { GallerySection } from './components/GallerySection';
import { OrderEstimator } from './components/OrderEstimator';
import { ReservationSection } from './components/ReservationSection';
import { TestimonialsFaq } from './components/TestimonialsFaq';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { AmbientPlayerWidget } from './components/AmbientPlayerWidget';
import { cafeDetails, menuItemsData } from './data/chaiMehfilData';

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>('roman');
  const [cartItems, setCartItems] = useState<CartItem[]>([
    // Pre-populate with signature Karak Chai & Washi Deal
    {
      item: menuItemsData[0], // Khas Karak Doodh Patti
      quantity: 2
    }
  ]);
  const [isCartDrawerOpen, setIsCartDrawerOpen] = useState(false);
  const [selectedEventForBooking, setSelectedEventForBooking] = useState<string>('');

  const handleAddToCart = (item: MenuItem) => {
    setCartItems(prev => {
      const existing = prev.find(ci => ci.item.id === item.id);
      if (existing) {
        return prev.map(ci =>
          ci.item.id === item.id ? { ...ci, quantity: ci.quantity + 1 } : ci
        );
      }
      return [...prev, { item, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (itemId: string, delta: number) => {
    setCartItems(prev =>
      prev
        .map(ci => {
          if (ci.item.id === itemId) {
            const newQty = ci.quantity + delta;
            return newQty > 0 ? { ...ci, quantity: newQty } : null;
          }
          return ci;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveItem = (itemId: string) => {
    setCartItems(prev => prev.filter(ci => ci.item.id !== itemId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleScrollTo = (elementId: string) => {
    const el = document.getElementById(elementId);
    if (el) {
      const yOffset = -70;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handleOpenReserve = (eventTitle?: string) => {
    if (eventTitle) {
      setSelectedEventForBooking(eventTitle);
    }
    handleScrollTo('reserve');
  };

  const handleSelectEvent = (event: QawwaliNightEvent) => {
    setSelectedEventForBooking(`${event.title} (${event.artist}) - ${event.dayName}`);
    handleScrollTo('reserve');
  };

  const handleOpenWhatsApp = () => {
    window.open(`https://wa.me/${cafeDetails.whatsappNumber}?text=Assalam%20o%20Alaikum%20Chai%20Mehfil!%20I%20would%20like%20to%20place%20an%20order%20/%20reserve%20a%20table.`, '_blank');
  };

  const cartItemCounts = cartItems.reduce((acc, ci) => {
    acc[ci.item.id] = ci.quantity;
    return acc;
  }, {} as Record<string, number>);

  return (
    <div className={`min-h-screen bg-[#090503] text-[#f7ede2] selection:bg-amber-600 selection:text-white ${
      currentLang === 'ur' ? 'font-urdu' : 'font-sans'
    }`}>
      {/* 1. Sticky Navigation Header with Integrated Delivery Hotline */}
      <Navbar
        currentLang={currentLang}
        onLanguageChange={setCurrentLang}
        cartItems={cartItems}
        onOpenCart={() => setIsCartDrawerOpen(true)}
        onOpenReserve={() => handleOpenReserve()}
      />

      <main>
        {/* 2. Hero Section */}
        <Hero
          currentLang={currentLang}
          onOpenReserve={() => handleOpenReserve()}
          onOpenWhatsApp={handleOpenWhatsApp}
        />

        {/* 2.1 Featured Advertisement Banner: Send Chai to a Friend */}
        <ChaiGiftAdBanner
          currentLang={currentLang}
          onOpenGiftSection={() => {
            const el = document.getElementById('gift-card');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* 3. Official Visual Deals & Posters Gallery (Extracted from User's uploaded Menu Boards) */}
        <VisualDealsGallery
          currentLang={currentLang}
          onAddToCart={handleAddToCart}
        />

        {/* 4. Royal Chai Mehfil Experience & Craftsmanship */}
        <ExperienceSection
          currentLang={currentLang}
        />

        {/* 5. Mood & Craving Sommelier */}
        <ChaiSommelier
          currentLang={currentLang}
          onAddToCart={handleAddToCart}
        />

        {/* 6. Complete Handcrafted Food & Chai Menu */}
        <MenuSection
          currentLang={currentLang}
          onAddToCart={handleAddToCart}
          cartItemCounts={cartItemCounts}
          onUpdateQuantity={handleUpdateQuantity}
        />

        {/* 7. Interactive Rooftop Seating Zones & Sitting Guide */}
        <SeatingPlanSection
          currentLang={currentLang}
          onBookZone={(zoneName) => {
            setSelectedEventForBooking(`Seating Zone: ${zoneName}`);
            handleScrollTo('reserve');
          }}
        />

        {/* 8. Live Qawwali & Sufi Nights Schedule */}
        <QawwaliSchedule
          currentLang={currentLang}
          onSelectEventForBooking={handleSelectEvent}
        />

        {/* 9. Celebration & Birthday Packages (Mehfil-e-Jashn) */}
        <EventPackagesSection
          currentLang={currentLang}
        />

        {/* 10. Digital Chai Gift Cards (Send Chai to a Friend) */}
        <ChaiGiftCardSection
          currentLang={currentLang}
        />

        {/* 11. Rooftop Vibes & Ambience Gallery */}
        <GallerySection
          currentLang={currentLang}
        />

        {/* 11. Interactive Bill Calculator & WhatsApp Order */}
        <OrderEstimator
          currentLang={currentLang}
          cartItems={cartItems}
          onUpdateQuantity={handleUpdateQuantity}
          onRemoveItem={handleRemoveItem}
          onClearCart={handleClearCart}
        />

        {/* 12. Table Reservation Form */}
        <ReservationSection
          currentLang={currentLang}
          prefilledEventTitle={selectedEventForBooking}
        />

        {/* 13. Customer Reviews & FAQs */}
        <TestimonialsFaq
          currentLang={currentLang}
        />

        {/* 14. Contact & Directions */}
        <ContactSection
          currentLang={currentLang}
        />
      </main>

      {/* 15. Footer */}
      <Footer
        currentLang={currentLang}
        onOpenReserve={() => handleOpenReserve()}
      />

      {/* Floating Ambient Sufi Sound & Weather Atmosphere Widget */}
      <AmbientPlayerWidget />

      {/* Slide-out / Modal Basket Drawer */}
      {isCartDrawerOpen && (
        <OrderEstimator
          currentLang={currentLang}
          cartItems={cartItems}
          onUpdateQuantity={handleUpdateQuantity}
          onRemoveItem={handleRemoveItem}
          onClearCart={handleClearCart}
          isOpenDrawer={true}
          onCloseDrawer={() => setIsCartDrawerOpen(false)}
        />
      )}

      {/* Floating WhatsApp Action Button */}
      <a
        id="floating-whatsapp-btn"
        href={`https://wa.me/${cafeDetails.whatsappNumber}?text=Assalam%20o%20Alaikum%20Chai%20Mehfil!%20I%20want%20to%20order%20food%20or%20reserve%20a%20table.`}
        target="_blank"
        rel="noopener noreferrer"
        title="Instant WhatsApp Helpline"
        className="fixed bottom-6 right-6 z-40 bg-emerald-600 hover:bg-emerald-500 text-white p-3.5 rounded-full shadow-2xl shadow-emerald-950/80 hover:scale-110 transition-all flex items-center justify-center group border border-emerald-400/40 cursor-pointer"
      >
        <MessageCircle className="w-6 h-6 fill-current text-white" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out text-xs font-bold text-white pl-0 group-hover:pl-2">
          Order: {cafeDetails.phone1}
        </span>
      </a>
    </div>
  );
}
