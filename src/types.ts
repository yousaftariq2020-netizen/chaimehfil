export type Language = 'roman' | 'ur' | 'en';

export type MenuCategory = 
  | 'all'
  | 'deals'
  | 'chai'
  | 'pizza'
  | 'burgers'
  | 'sandwiches'
  | 'parathas'
  | 'shawarma'
  | 'snacks'
  | 'italian_chinese'
  | 'beverages_desserts';

export interface MenuItem {
  id: string;
  name: string;
  nameUrdu: string;
  category: MenuCategory;
  price: number;
  description: string;
  descriptionUrdu: string;
  image: string;
  badge?: string;
  isSignature?: boolean;
  isDeal?: boolean;
  dealInclusions?: string[];
  preparationTime?: string;
  servedWith?: string;
  sizes?: { size: string; price: number }[];
}

export interface OfficialPoster {
  id: string;
  title: string;
  titleUrdu: string;
  subtitle: string;
  priceTag?: string;
  category: 'deal' | 'menu_board' | 'flyer';
  tagline: string;
  highlights: string[];
  image: string;
  aspect: 'portrait' | 'landscape';
}

export interface QawwaliNightEvent {
  id: string;
  title: string;
  titleUrdu: string;
  artist: string;
  genre: 'Qawwali Night' | 'Sufi & Ghazal' | 'Folk Classical' | 'Special Mehfil';
  dayName: string;
  dateStr: string;
  time: string;
  description: string;
  status: 'Open for Booking' | 'Filling Fast' | 'Sold Out';
  image: string;
  coverCharge?: number;
  featuredTrack?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  titleUrdu: string;
  category: 'ambience' | 'qawwali' | 'food' | 'crowd' | 'posters';
  image: string;
  caption: string;
  isOfficialPoster?: boolean;
}

export interface TableBooking {
  name: string;
  phone: string;
  email?: string;
  guests: number;
  date: string;
  timeSlot: string;
  seatingArea: 'rooftop-stage' | 'family-pavilion' | 'terrace-corner' | 'majlis-carpet';
  occasion?: string;
  specialRequests?: string;
}

export interface CartItem {
  item: MenuItem;
  quantity: number;
  notes?: string;
}

