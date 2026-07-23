export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        <h1 className="text-2xl font-extrabold tracking-wide">
          <span className="text-yellow-400">KK</span>ZONE
        </h1>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#" className="hover:text-yellow-400 transition">Home</a>
          <a href="#" className="hover:text-yellow-400 transition">Products</a>
          <a href="#" className="hover:text-yellow-400 transition">Categories</a>
          <a href="#" className="hover:text-yellow-400 transition">About</a>
          <a href="#" className="hover:text-yellow-400 transition">Contact</a>
        </div>

        <button className="bg-yellow-400 text-black px-5 py-2 rounded-full font-bold hover:scale-105 transition">
          Shop Now
        </button>

      </div>
    </nav>
  );
}