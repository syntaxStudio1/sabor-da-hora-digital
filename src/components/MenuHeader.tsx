import { Search } from "lucide-react";

interface MenuHeaderProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
}

const MenuHeader = ({ searchQuery, onSearchChange }: MenuHeaderProps) => {
  return (
    <header className="sticky top-0 z-30 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container py-4">
        <div className="flex items-center justify-between mb-3">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              <span className="text-gradient">Sabor da Hora</span>
            </h1>
            <p className="text-xs sm:text-sm text-muted-foreground font-medium">
              Lanches artesanais feitos com amor 🔥
            </p>
          </div>
          <div className="flex items-center gap-2 text-2xl">🍔</div>
        </div>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Buscar no cardápio..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-muted text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
          />
        </div>
      </div>
    </header>
  );
};

export default MenuHeader;
