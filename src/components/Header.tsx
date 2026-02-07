import React, { useState } from 'react';
import { 
  Menu, 
  X, 
  Search, 
  ShoppingCart, 
  Heart, 
  User, 
  ChevronRight, 
  ChevronLeft,
} from 'lucide-react';

// --- Setup Link for TanStack Router ---
import { Link as TanStackLink } from '@tanstack/react-router';

// Wrapper to handle external links vs internal router links if needed
// For now, it defaults to TanStack Link logic
const Link = ({ to, children, className, ...props }: any) => {
    // If it's an external link (http), use standard <a>, else use TanStack <Link>
    if (to.startsWith('http')) {
        return <a href={to} className={className} {...props}>{children}</a>;
    }
    return <TanStackLink to={to} className={className} {...props}>{children}</TanStackLink>;
};

export const Header: React.FC = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);

    // --- Actions ---
    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
        if (isMobileMenuOpen) {
            // Delay clearing submenu so it doesn't flash while closing
            setTimeout(() => setActiveSubMenu(null), 300); 
        }
    };

    const openSubMenu = (id: string) => setActiveSubMenu(id);
    const closeSubMenu = () => setActiveSubMenu(null);

    return (
        <header className="w-full bg-white relative z-50">
            
            {/* --- 1. MARQUEE / SCROLLING HEADER --- */}
            {/* Tailwind doesn't have a built-in infinite marquee, so we use a small custom style or config */}
            <div className="bg-gray-900 text-white text-xs py-2 overflow-hidden relative">
                <div className="flex whitespace-nowrap animate-marquee">
                    <MarqueeContent />
                    <MarqueeContent />
                    <MarqueeContent />
                    <MarqueeContent />
                </div>
            </div>

            {/* --- 2. MAIN NAVBAR --- */}
            <nav>
                <div className="container mx-auto px-4 h-16 md:h-20 flex items-center justify-between">

                    {/* Left: Mobile Toggle & Mobile Search Icon */}
                    <div className="flex items-center gap-4 xl:hidden w-1/4">
                        <button 
                            onClick={toggleMobileMenu} 
                            className="text-gray-700 hover:text-black focus:outline-none"
                            aria-label="Toggle Menu"
                        >
                            <Menu size={24} />
                        </button>
                        <button className="text-gray-700 md:hidden">
                            <Search size={22} />
                        </button>
                    </div>

                    {/* Middle: Logo */}
                    {/* Centered on mobile, Left aligned on Desktop */}
                    <div className="w-2/4 xl:w-auto flex justify-center xl:justify-start">
                        <Link to="/" className="block">
                            <img 
                                src="https://www.woodensure.com/assets/images/17379697301711794684logo--ma.png" 
                                alt="Woodensure" 
                                className="h-8 md:h-10 w-auto object-contain"
                            />
                        </Link>
                    </div>

                    {/* Right: Desktop Search & Icons */}
                    <div className="flex items-center justify-end gap-6 w-1/4 xl:w-full xl:justify-between xl:pl-8">
                        
                        {/* Desktop Search Bar */}
                        <div className="hidden xl:block flex-1 max-w-xl mx-auto px-6">
                            <div className="relative group">
                                <input 
                                    type="text" 
                                    placeholder="Search for product..." 
                                    className="w-full bg-gray-50 border border-gray-200 rounded-full py-2.5 pl-5 pr-12 text-sm focus:outline-none focus:border-gray-400 transition-all"
                                />
                                <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                                    <Search size={18} />
                                </button>
                            </div>
                        </div>

                        {/* Icons Area */}
                        <div className="flex items-center gap-4 md:gap-6">
                            {/* Mobile Steps (Hidden for now based on logic) */}
                            
                            {/* User (Desktop Only) */}
                            <Link to="/" className="hidden xl:block text-gray-700 hover:text-orange-600 transition-colors">
                                <User size={22} />
                            </Link>

                            {/* Wishlist */}
                            <button className="text-gray-700 hover:text-orange-600 transition-colors relative">
                                <Heart size={22} />
                                <span className="absolute -top-2 -right-2 bg-orange-600 text-white text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">0</span>
                            </button>

                            {/* Cart */}
                            <Link to="/" className="text-gray-700 hover:text-orange-600 transition-colors relative">
                                <ShoppingCart size={22} />
                                <span className="absolute -top-2 -right-2 bg-orange-600 text-white text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">0</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>

            {/* --- 3. MOBILE SIDEBAR MENU --- */}
            {/* Overlay */}
            {isMobileMenuOpen && (
                <div 
                    className="fixed inset-0 bg-black/50 z-40 transition-opacity" 
                    onClick={toggleMobileMenu}
                />
            )}

            {/* Sidebar Container */}
            <div 
                className={`fixed top-0 left-0 h-full w-[85%] max-w-sm bg-white z-50 shadow-2xl transform transition-transform duration-300 ease-in-out ${
                    isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
                }`}
            >
                {/* Mobile Menu Header */}
                <div className="flex items-center justify-between p-4 border-b border-gray-100 bg-gray-50">
                    <span className="font-bold text-lg text-gray-800">Menu</span>
                    <button onClick={toggleMobileMenu} className="text-gray-500 hover:text-red-500">
                        <X size={24} />
                    </button>
                </div>

                {/* Scrollable Content Area */}
                <div className="relative h-[calc(100%-60px)] overflow-hidden">
                    
                    {/* PRIMARY LAYER (Main Categories) */}
                    {/* We slide this to the left (-100%) when a submenu is active */}
                    <div 
                        className={`absolute inset-0 overflow-y-auto bg-white transition-transform duration-300 ${
                            activeSubMenu ? '-translate-x-full' : 'translate-x-0'
                        }`}
                    >
                        <ul className="divide-y divide-gray-100">
                            {/* Mobile Login */}
                            <li className="xl:hidden">
                                <Link to="/user/login" className="flex items-center gap-3 px-5 py-4 text-sm font-semibold text-gray-700 hover:bg-gray-50">
                                    <User size={18} /> Login
                                </Link>
                            </li>

                            <MobileMenuItem label="Coffee & Center Tables" to="/coffee-and-center-tables" />
                            
                            {/* Parent Categories with Submenus */}
                            <MobileMenuItem 
                                label="Side Table" 
                                hasSubMenu 
                                onOpenSub={() => openSubMenu('side-table')} 
                            />
                            
                            <MobileMenuItem 
                                label="Dining Table" 
                                hasSubMenu 
                                onOpenSub={() => openSubMenu('dining-table')} 
                            />

                            <MobileMenuItem 
                                label="Office Table" 
                                hasSubMenu 
                                onOpenSub={() => openSubMenu('office-table')} 
                            />

                            <MobileMenuItem 
                                label="Nesting Table" 
                                hasSubMenu 
                                onOpenSub={() => openSubMenu('nesting-table')} 
                            />

                            <MobileMenuItem 
                                label="Home Decor" 
                                hasSubMenu 
                                onOpenSub={() => openSubMenu('home-decor')} 
                            />

                            <MobileMenuItem 
                                label="Door" 
                                hasSubMenu 
                                onOpenSub={() => openSubMenu('door')} 
                            />

                            <MobileMenuItem label="Console Table" to="/console-table" />
                            
                            <MobileMenuItem 
                                label="Seating" 
                                hasSubMenu 
                                onOpenSub={() => openSubMenu('seating')} 
                            />

                            <MobileMenuItem 
                                label="Kitchen and Dining" 
                                hasSubMenu 
                                onOpenSub={() => openSubMenu('kitchen-and-dining')} 
                            />
                             <MobileMenuItem 
                                label="Accessories" 
                                hasSubMenu 
                                onOpenSub={() => openSubMenu('accessories')} 
                            />
                            
                            <MobileMenuItem label="Metal Legs" to="/metal-legs" />
                            <MobileMenuItem label="Customization" to="/customization" />
                        </ul>
                    </div>

                    {/* SECONDARY LAYER (Submenus) */}
                    {/* We translate this in from the right when active */}
                    
                    {/* Side Table Submenu */}
                    <MobileSubMenu 
                        id="side-table" 
                        title="Side Table" 
                        activeId={activeSubMenu} 
                        onBack={closeSubMenu}
                    >
                        <SubLink to="/">All Side Tables</SubLink>
                        <SubLink to="/">Epoxy Resin Side Table</SubLink>
                        <SubLink to="/">Solid Wood Side Table</SubLink>
                        <SubLink to="/">Live Edge Side Table</SubLink>
                        <SubLink to="/">Marble Side Table</SubLink>
                    </MobileSubMenu>

                    {/* Dining Table Submenu */}
                    <MobileSubMenu 
                        id="dining-table" 
                        title="Dining Table" 
                        activeId={activeSubMenu} 
                        onBack={closeSubMenu}
                    >
                        <SubLink to="/">All Dining Tables</SubLink>
                        <SubLink to="/">Solid Wood Dining Table</SubLink>
                        <SubLink to="/">Epoxy Resin Dining Table</SubLink>
                        <SubLink to="/">Live Edge Dining Table</SubLink>
                        <SubLink to="/">Marble Dining Table</SubLink>
                    </MobileSubMenu>

                    {/* Office Table Submenu */}
                    <MobileSubMenu 
                        id="office-table" 
                        title="Office Table" 
                        activeId={activeSubMenu} 
                        onBack={closeSubMenu}
                    >
                        <SubLink to="/">All Office Tables</SubLink>
                        <SubLink to="/">Solid Wood Office Table</SubLink>
                        <SubLink to="/">Epoxy Resin Office Table</SubLink>
                        <SubLink to="/">Live Edge Office Table</SubLink>
                        <SubLink to="/">
                            Ergonomics Table 
                            <span className="ml-2 bg-green-700 text-white text-[10px] px-2 py-0.5 rounded-full">New</span>
                        </SubLink>
                        <SubLink to="/">Wall Mounted Office Table</SubLink>
                    </MobileSubMenu>

                    {/* Nesting Table Submenu */}
                    <MobileSubMenu 
                        id="nesting-table" 
                        title="Nesting Table" 
                        activeId={activeSubMenu} 
                        onBack={closeSubMenu}
                    >
                         <SubLink to="/">All Nesting Tables</SubLink>
                         <SubLink to="/">Solid Wood</SubLink>
                         <SubLink to="/">Epoxy Resin</SubLink>
                         <SubLink to="/">Live Edge</SubLink>
                         <SubLink to="/">Marble</SubLink>
                    </MobileSubMenu>

                    {/* Home Decor Submenu */}
                    <MobileSubMenu 
                        id="home-decor" 
                        title="Home Decor" 
                        activeId={activeSubMenu} 
                        onBack={closeSubMenu}
                    >
                         <SubLink to="/">All Home Decor</SubLink>
                         {/* Using the bold headers from original */}
                         <SubLink to="/" className="font-semibold">Racks</SubLink>
                         <SubLink to="/" className="font-semibold">Shelf</SubLink>
                         <div className="pl-4">
                            <SubLink to="/" className="text-gray-500 text-xs">Wall Shelves</SubLink>
                         </div>
                         <SubLink to="/" className="font-semibold">Wall Art</SubLink>
                         <div className="pl-4">
                            <SubLink to="/" className="text-gray-500 text-xs">Epoxy Resin Wall Art</SubLink>
                         </div>
                         <SubLink to="/" className="font-semibold">Charpai</SubLink>
                         <SubLink to="/" className="font-semibold">Rugs And Carpet</SubLink>
                    </MobileSubMenu>

                    {/* Door Submenu */}
                    <MobileSubMenu 
                        id="door" 
                        title="Door" 
                        activeId={activeSubMenu} 
                        onBack={closeSubMenu}
                    >
                        <SubLink to="/">All Doors</SubLink>
                        <SubLink to="/">Epoxy Resin Wooden Door</SubLink>
                        <SubLink to="/">Live Edge Wooden Door</SubLink>
                        <SubLink to="/">Window door frame/chaukhat</SubLink>
                    </MobileSubMenu>

                     {/* Seating Submenu (Has Nested children in original, flattened slightly here for UI) */}
                     <MobileSubMenu 
                        id="seating" 
                        title="Seating" 
                        activeId={activeSubMenu} 
                        onBack={closeSubMenu}
                    >
                        <SubLink to="/seating">All Seating</SubLink>
                        
                        {/* Group: Stool */}
                        <div className="px-5 py-2 text-xs font-bold text-gray-400 uppercase tracking-wider bg-gray-50">Stool</div>
                        <SubLink to="/">All Stools</SubLink>
                        <SubLink to="/" className="pl-8 text-gray-500">Poufs Stool</SubLink>
                        <SubLink to="/" className="pl-8 text-gray-500">Jute Stool</SubLink>

                         {/* Group: Chair */}
                         <div className="px-5 py-2 text-xs font-bold text-gray-400 uppercase tracking-wider bg-gray-50">Chair</div>
                        <SubLink to="/">All Chairs</SubLink>
                        <SubLink to="/" className="pl-8 text-gray-500">Wooden Chair</SubLink>
                        <SubLink to="/" className="pl-8 text-gray-500">Jute Chair</SubLink>
                        <SubLink to="/" className="pl-8 text-gray-500">Rocking Chair</SubLink>
                    </MobileSubMenu>

                    {/* Kitchen Submenu */}
                    <MobileSubMenu 
                        id="kitchen-and-dining" 
                        title="Kitchen & Dining" 
                        activeId={activeSubMenu} 
                        onBack={closeSubMenu}
                    >
                        <SubLink to="/">All Kitchen</SubLink>
                        
                        <div className="px-5 py-2 text-xs font-bold text-gray-400 uppercase tracking-wider bg-gray-50">Tray</div>
                        <SubLink to="/">All Trays</SubLink>
                        <SubLink to="/" className="pl-8 text-gray-500">Solid Wood</SubLink>
                        <SubLink to="/" className="pl-8 text-gray-500">Epoxy Resin</SubLink>

                        <div className="my-2 border-t border-gray-50"></div>
                        <SubLink to="/">Chopping Board</SubLink>
                    </MobileSubMenu>

                     {/* Accessories Submenu */}
                     <MobileSubMenu 
                        id="accessories" 
                        title="Accessories" 
                        activeId={activeSubMenu} 
                        onBack={closeSubMenu}
                    >
                        <SubLink to="/">All Accessories</SubLink>
                        
                        <div className="px-5 py-2 text-xs font-bold text-gray-400 uppercase tracking-wider bg-gray-50">Living Room</div>
                        <SubLink to="/">All Living Room</SubLink>
                        <SubLink to="/" className="pl-8 text-gray-500">Cabinets</SubLink>
                        <SubLink to="/" className="pl-8 text-gray-500">TV Unit</SubLink>
                    </MobileSubMenu>

                </div>
            </div>

            {/* --- CSS for Marquee (Inline for simplicity) --- */}
            <style>{`
                @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-100%); }
                }
                .animate-marquee {
                    animation: marquee 30s linear infinite;
                }
            `}</style>
        </header>
    );
};

// --- HELPER COMPONENTS ---

// 1. Marquee Text Block
const MarqueeContent = () => (
    <div className="flex items-center gap-4 mx-4">
        <span>Use code WELCOME on your first order and get 5% off!</span>
        <span className="text-orange-500">•</span>
        <span>Free Shipping Pan India</span>
        <span className="text-orange-500">•</span>
        <span>Solid Natural Wood</span>
        <span className="text-orange-500">•</span>
    </div>
);

// 2. Mobile Main Menu Item
interface MobileMenuItemProps {
    label: string;
    to?: string;
    hasSubMenu?: boolean;
    onOpenSub?: () => void;
}
const MobileMenuItem: React.FC<MobileMenuItemProps> = ({ label, to, hasSubMenu, onOpenSub }) => {
    const baseClasses = "flex items-center justify-between w-full px-5 py-3.5 text-sm font-medium text-gray-700 border-b border-gray-50 hover:bg-gray-50 transition-colors";
    
    if (hasSubMenu) {
        return (
            <li>
                <button onClick={onOpenSub} className={baseClasses}>
                    {label}
                    <ChevronRight size={16} className="text-gray-400" />
                </button>
            </li>
        );
    }

    return (
        <li>
            <Link to={to} className={baseClasses}>
                {label}
            </Link>
        </li>
    );
};

// 3. Mobile Sub Menu Wrapper
interface MobileSubMenuProps {
    id: string;
    title: string;
    activeId: string | null;
    onBack: () => void;
    children: React.ReactNode;
}
const MobileSubMenu: React.FC<MobileSubMenuProps> = ({ id, title, activeId, onBack, children }) => {
    return (
        <div 
            className={`absolute inset-0 bg-white z-10 transition-transform duration-300 ease-in-out overflow-y-auto ${
                activeId === id ? 'translate-x-0' : 'translate-x-full'
            }`}
        >
            <div className="sticky top-0 bg-white border-b border-gray-100 z-10">
                <button 
                    onClick={onBack} 
                    className="flex items-center gap-2 px-5 py-4 w-full text-sm font-bold text-gray-800 hover:bg-gray-50"
                >
                    <ChevronLeft size={18} />
                    {title}
                </button>
            </div>
            <ul className="pb-8">
                {children}
            </ul>
        </div>
    );
};

// 4. Sub Link Item
const SubLink = ({ to, children, className }: any) => (
    <li>
        <Link to={to} className={`block px-5 py-3 text-sm text-gray-600 border-b border-gray-50 hover:text-orange-600 hover:bg-gray-50 ${className}`}>
            {children}
        </Link>
    </li>
);