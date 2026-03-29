// src/app/components/Footer.tsx
"use client";

const Footer = () => (
  <footer className="bg-[#050505] border-t border-white/5 text-gray-200">
    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      {/* Divider & Copyright */}
      <div className="mt-1 pt-0 border-t border-white/5 flex flex-col md:flex-row justify-center items-center gap-2 text-white text-sm">
        <p>
          &copy; {new Date().getFullYear()} Thanush Arugonda. All rights
          reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
