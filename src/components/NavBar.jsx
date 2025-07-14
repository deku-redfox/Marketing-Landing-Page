import { useState, useRef, useEffect } from "react";

const Navbar = ({ currentSection, onSectionChange, isTransitioning }) => {
  const navRef = useRef(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showDesktop, setShowDesktop] = useState(false);
  const [showMobile, setShowMobile] = useState(false);

  useEffect(() => {
    // Animate desktop nav on mount
    setShowDesktop(true);
    setShowMobile(true);
  }, []);

  const navItems = [
    { name: 'Accueil', index: 0 },
    { name: 'Services', index: 1 },
    { name: 'Témoignages', index: 2 },
    { name: 'Formation', index: 3 }
  ];

  const handleNavClick = (index) => {
    if (!isTransitioning && index !== currentSection) {
      onSectionChange(index);
      setMobileOpen(false); // Close mobile menu on selection
    }
  };

  return (
    <>
      {/* Desktop Navbar */}
      <nav
        ref={navRef}
        className={`hidden md:block fixed top-5 left-1/2 transform -translate-x-1/2 z-[60] transition-all duration-700 ${
          showDesktop
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-8 pointer-events-none"
        }`}
      >
        <div className="bg-black/40 backdrop-blur-xl rounded-2xl px-12 py-4 border border-white/10 shadow-2xl">
          <div className="flex items-center space-x-8">
            {navItems.map((item, i) => (
              <button
                key={item.index}
                data-nav-index={item.index}
                onClick={() => handleNavClick(item.index)}
                className={`relative px-4 py-2 rounded-xl transition-all duration-300 ${
                  currentSection === item.index
                    ? 'bg-white/10 text-white font-medium transform scale-105 shadow-[0_4px_24px_0_rgba(168,85,247,0.4),0_1.5px_8px_0_rgba(236,72,153,0.25)] ring-2 ring-pink-400/30'
                    : 'text-white/60 hover:text-white hover:bg-white/5'
                } transition-opacity duration-500 delay-[${
                  100 + i * 80
                }ms] ${
                  showDesktop
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
                style={{
                  zIndex: currentSection === item.index ? 1 : 0
                }}
              >
                {item.name}
                {currentSection === item.index && (
                  <>
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 animate-pulse pointer-events-none"></div>
                    <div
                      className="absolute -inset-2 rounded-2xl blur-lg opacity-60 pointer-events-none"
                      style={{
                        background:
                          'linear-gradient(90deg, rgba(168,85,247,0.25) 0%, rgba(236,72,153,0.18) 100%)'
                      }}
                    ></div>
                  </>
                )}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav
        className={`md:hidden fixed top-4 left-1/2 transform -translate-x-1/2 z-[60] w-[95vw] max-w-md transition-all duration-700 ${
          showMobile
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-8 pointer-events-none"
        }`}
      >
        <div className="flex justify-between items-center bg-black/40 backdrop-blur-xl rounded-2xl px-4 py-3 border border-white/10 shadow-2xl">
          <span className="text-white font-bold text-lg">Menu</span>
          <button
            aria-label="Ouvrir le menu"
            className="text-white focus:outline-none"
            onClick={() => setMobileOpen((open) => !open)}
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 8h16M4 16h16"
                />
              )}
            </svg>
          </button>
        </div>
        {/* Mobile menu */}
        <div
          className={`overflow-hidden transition-all duration-500 ${
            mobileOpen
              ? "max-h-[400px] opacity-100 mt-2"
              : "max-h-0 opacity-0 mt-0 pointer-events-none"
          }`}
        >
          <div className="bg-black/80 backdrop-blur-xl rounded-2xl px-4 py-4 border border-white/10 shadow-2xl animate-fade-in">
            <div className="flex flex-col space-y-3">
              {navItems.map((item, i) => (
                <button
                  key={item.index}
                  data-nav-index={item.index}
                  onClick={() => handleNavClick(item.index)}
                  className={`relative w-full text-left px-4 py-3 rounded-xl transition-all duration-300 ${
                    currentSection === item.index
                      ? 'bg-white/10 text-white font-medium shadow-[0_4px_24px_0_rgba(168,85,247,0.4),0_1.5px_8px_0_rgba(236,72,153,0.25)] ring-2 ring-pink-400/30'
                      : 'text-white/60 hover:text-white hover:bg-white/5'
                  } transition-opacity duration-500 delay-[${
                    100 + i * 80
                  }ms] ${
                    mobileOpen
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
                  style={{
                    zIndex: currentSection === item.index ? 1 : 0
                  }}
                >
                  {item.name}
                  {currentSection === item.index && (
                    <>
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 animate-pulse pointer-events-none"></div>
                      <div
                        className="absolute -inset-2 rounded-2xl blur-lg opacity-60 pointer-events-none"
                        style={{
                          background:
                            'linear-gradient(90deg, rgba(168,85,247,0.25) 0%, rgba(236,72,153,0.18) 100%)'
                        }}
                      ></div>
                    </>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar
