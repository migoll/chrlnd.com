export function TheHeader() {
  return (
    <header className="w-full py-4">
      <nav
        className="flex justify-between items-center max-w-[664px] mx-auto p-8 border"
        style={{ borderColor: "rgba(0, 0, 0, 0.08)" }}
      >
        <div className="link">
          <p className="text-xl">chrlnd.com</p>
        </div>
        <div className="navbar flex space-x-8 items-center">
          <a href="">
            <p className="text-xl">work</p>
          </a>
          <a href="">
            <p className="text-xl">about me</p>
          </a>
          <span className="material-symbols-outlined">light_mode</span>
        </div>
      </nav>
    </header>
  );
}
