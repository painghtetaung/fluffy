const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 h-32 overflow-hidden z-50">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(/header-bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <div className="relative h-full flex items-center px-8">
        <h1 className="text-7xl! font-black text-[#203D99] tracking-wide">
          Fluffy HüGs
        </h1>
      </div>
    </header>
  )
}

export default Header
