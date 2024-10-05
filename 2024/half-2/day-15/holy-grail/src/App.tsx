export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="h-[60px] bg-[tomato] text-center">Header</header>
      <div className="flex flex-1">
        <nav className="w-[100px] bg-[coral] text-center">Navigation</nav>
        <main className="flex-1 bg-[moccasin] text-center">Main</main>
        <aside className="w-[100px] bg-[sandybrown] text-center">Aside</aside>
      </div>
      <footer className="h-[100px] bg-[slategray] text-center">Footer</footer>
    </div>
  );
}
