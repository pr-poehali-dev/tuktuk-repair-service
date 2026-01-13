import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

interface HeroSectionProps {
  orderStatus: 'accepted' | 'on-way' | 'working' | 'completed';
  getStatusProgress: () => number;
  statusLabels: {
    accepted: string;
    'on-way': string;
    working: string;
    completed: string;
  };
}

const HeroSection = ({ orderStatus, getStatusProgress, statusLabels }: HeroSectionProps) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Badge className="mb-4" variant="secondary">
              <Icon name="Clock" size={14} className="mr-1" />
              Приезжаем за час
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Чиним всё,<br />что сломалось
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Не ждёте недели. Не оставляем пыль. Мастер приедет через 60 минут и всё починит.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg">
                <Icon name="Phone" size={20} className="mr-2" />
                Вызвать мастера
              </Button>
              <Button size="lg" variant="outline" className="text-lg">
                <Icon name="Calculator" size={20} className="mr-2" />
                Рассчитать стоимость
              </Button>
            </div>
            <div className="grid grid-cols-3 gap-6 mt-12">
              <div>
                <div className="text-3xl font-bold text-primary">1 200+</div>
                <div className="text-sm text-muted-foreground">Выездов в месяц</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">4.9</div>
                <div className="text-sm text-muted-foreground">Средний рейтинг</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">30 дней</div>
                <div className="text-sm text-muted-foreground">Гарантия</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 blur-3xl rounded-full"></div>
            <div className="relative bg-white rounded-2xl p-8 shadow-2xl">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Icon name="MapPin" size={20} className="text-primary" />
                Отслеживание мастера
              </h3>
              <div className="bg-muted rounded-lg h-64 mb-4 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                  <div className="text-center">
                    <Icon name="Map" size={48} className="mx-auto mb-2 opacity-50" />
                    <p>Карта с маршрутом</p>
                  </div>
                </div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse">
                  <div className="bg-primary text-white rounded-full p-3 shadow-lg">
                    <Icon name="Car" size={24} />
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-medium">Статус:</span>
                  <Badge variant="default">{statusLabels[orderStatus]}</Badge>
                </div>
                <Progress value={getStatusProgress()} className="h-2" />
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarFallback className="bg-primary text-white">АИ</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">Алексей Иванов</div>
                    <div className="text-sm text-muted-foreground flex items-center gap-1">
                      <Icon name="Star" size={14} className="text-yellow-500 fill-yellow-500" />
                      4.9 • Электрика, сантехника
                    </div>
                  </div>
                </div>
                <Button variant="outline" className="w-full">
                  <Icon name="Phone" size={16} className="mr-2" />
                  Позвонить мастеру
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
