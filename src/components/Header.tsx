import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Header = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-primary text-white rounded-lg p-2">
            <Icon name="Wrench" size={24} />
          </div>
          <span className="text-xl font-bold text-secondary">Тук-Тук.Ремонт</span>
        </div>
        <div className="hidden md:flex gap-6">
          <a href="#services" className="text-muted-foreground hover:text-primary transition">Услуги</a>
          <a href="#how" className="text-muted-foreground hover:text-primary transition">Как работаем</a>
          <a href="#masters" className="text-muted-foreground hover:text-primary transition">Мастера</a>
          <a href="#portfolio" className="text-muted-foreground hover:text-primary transition">Портфолио</a>
          <a href="#contacts" className="text-muted-foreground hover:text-primary transition">Контакты</a>
        </div>
        <Button className="animate-pulse-slow">
          <Icon name="Phone" size={18} className="mr-2" />
          +7 (843) 123-45-67
        </Button>
      </div>
    </nav>
  );
};

export default Header;
