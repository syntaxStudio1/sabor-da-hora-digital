import { useState, useMemo } from "react";
import MenuHeader from "@/components/MenuHeader";
import CategoryFilter from "@/components/CategoryFilter";
import MenuCard from "@/components/MenuCard";
import { menuItems } from "@/data/menuData";
import { MessageCircle } from "lucide-react";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("todos");

  const filtered = useMemo(() => {
    return menuItems.filter((item) => {
      const matchesCategory = activeCategory === "todos" || item.category === activeCategory;
      const matchesSearch =
        !searchQuery ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, activeCategory]);

  return (
    <div className="min-h-screen bg-background pb-24">
      <MenuHeader searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      <CategoryFilter activeCategory={activeCategory} onCategoryChange={setActiveCategory} />

      <main className="container py-4">
        {filtered.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-4xl mb-3">😕</p>
            <p className="text-muted-foreground font-medium">Nenhum item encontrado.</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {filtered.map((item, i) => (
              <MenuCard key={item.id} item={item} index={i} />
            ))}
          </div>
        )}
      </main>

      {/* WhatsApp FAB */}
      <a
        href="https://wa.me/5500000000000?text=Olá! Gostaria de fazer um pedido."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-[hsl(142,70%,45%)] text-primary-foreground p-4 rounded-full shadow-lg hover:scale-110 active:scale-95 transition-transform duration-200"
        aria-label="Fazer pedido pelo WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </div>
  );
};

export default Index;
