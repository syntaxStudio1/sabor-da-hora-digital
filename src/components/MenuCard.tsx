import { Plus, Star } from "lucide-react";
import type { MenuItem } from "@/data/menuData";
import { toast } from "sonner";

interface MenuCardProps {
  item: MenuItem;
  index: number;
}

const MenuCard = ({ item, index }: MenuCardProps) => {
  const handleAdd = () => {
    toast.success(`${item.name} adicionado ao pedido!`, {
      description: `R$ ${item.price.toFixed(2).replace(".", ",")}`,
    });
  };

  return (
    <div
      className="group bg-card rounded-xl overflow-hidden shadow-menu-card hover:shadow-menu-card-hover transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
      style={{ animationDelay: `${index * 60}ms` }}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {item.bestSeller && (
          <span className="absolute top-2 left-2 bg-badge-best text-primary-foreground text-xs font-bold px-2.5 py-1 rounded-full flex items-center gap-1 shadow-md">
            <Star className="h-3 w-3 fill-current" />
            Mais vendido
          </span>
        )}
      </div>

      <div className="p-3 sm:p-4 flex flex-col gap-2">
        <h3 className="font-bold text-foreground text-sm sm:text-base leading-tight">
          {item.name}
        </h3>
        <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
          {item.description}
        </p>
        <div className="mt-1">
          <span className="text-lg font-extrabold text-primary">
            R$ {item.price.toFixed(2).replace(".", ",")}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
