import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import Icon from '@/components/ui/icon';

interface Service {
  icon: string;
  title: string;
  description: string;
  price: string;
  color: string;
}

interface Step {
  icon: string;
  title: string;
  desc: string;
}

interface Master {
  name: string;
  specialty: string;
  rating: number;
  experience: string;
  avatar: string;
}

interface PortfolioItem {
  title: string;
  before: string;
  after: string;
  time: string;
}

interface MainContentProps {
  services: Service[];
  steps: Step[];
  masters: Master[];
  portfolio: PortfolioItem[];
}

const MainContent = ({ services, steps, masters, portfolio }: MainContentProps) => {
  return (
    <>
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Наши услуги</Badge>
            <h2 className="text-4xl font-bold mb-4">Что мы чиним?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Мелкий, но важный ремонт — быстро, качественно и с гарантией
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <Card key={idx} className="hover-lift cursor-pointer border-2 hover:border-primary transition-colors">
                <CardHeader>
                  <div className={`${service.color} w-14 h-14 rounded-lg flex items-center justify-center mb-4`}>
                    <Icon name={service.icon as any} size={28} />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">{service.price}</span>
                    <Button variant="ghost" size="sm">
                      Заказать
                      <Icon name="ArrowRight" size={16} className="ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="how" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Простой процесс</Badge>
            <h2 className="text-4xl font-bold mb-4">Как это работает?</h2>
            <p className="text-xl text-muted-foreground">
              От заявки до результата — всего 5 шагов
            </p>
          </div>
          <div className="grid md:grid-cols-5 gap-6">
            {steps.map((step, idx) => (
              <div key={idx} className="text-center relative">
                {idx < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-border"></div>
                )}
                <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 shadow-lg relative z-10 border-4 border-background">
                  <Icon name={step.icon as any} size={32} className="text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <div className="inline-block bg-primary/10 border-2 border-primary rounded-lg p-6">
              <div className="flex items-center gap-4">
                <Icon name="Clock" size={32} className="text-primary" />
                <div className="text-left">
                  <div className="font-semibold text-lg">Среднее время выполнения</div>
                  <div className="text-3xl font-bold text-primary">1 час 20 минут</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="masters" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Наша команда</Badge>
            <h2 className="text-4xl font-bold mb-4">Проверенные мастера</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Опыт от 3 лет, рейтинг от 4.8, обучение по стандартам «Тук-Тук»
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {masters.map((master, idx) => (
              <Card key={idx} className="hover-lift text-center">
                <CardHeader>
                  <Avatar className="w-24 h-24 mx-auto mb-4">
                    <AvatarFallback className="bg-primary text-white text-2xl">{master.avatar}</AvatarFallback>
                  </Avatar>
                  <CardTitle className="text-lg">{master.name}</CardTitle>
                  <CardDescription>{master.specialty}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-center gap-4 mb-3">
                    <div className="flex items-center gap-1">
                      <Icon name="Star" size={16} className="text-yellow-500 fill-yellow-500" />
                      <span className="font-semibold">{master.rating}</span>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Опыт: {master.experience}
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="w-full">
                    Заказать мастера
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-12 bg-secondary/5 border-2 border-secondary/20 rounded-xl p-8">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <Icon name="Users" size={32} className="text-secondary mx-auto mb-2" />
                <div className="text-2xl font-bold">18 мастеров</div>
                <div className="text-sm text-muted-foreground">В команде</div>
              </div>
              <div>
                <Icon name="Award" size={32} className="text-secondary mx-auto mb-2" />
                <div className="text-2xl font-bold">85%</div>
                <div className="text-sm text-muted-foreground">Удержание через 6 месяцев</div>
              </div>
              <div>
                <Icon name="GraduationCap" size={32} className="text-secondary mx-auto mb-2" />
                <div className="text-2xl font-bold">5 дней</div>
                <div className="text-sm text-muted-foreground">Обучение новичков</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Портфолио</Badge>
            <h2 className="text-4xl font-bold mb-4">Наши работы</h2>
            <p className="text-xl text-muted-foreground">
              Фото до и после — результат говорит сам за себя
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolio.map((item, idx) => (
              <Card key={idx} className="hover-lift overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid grid-cols-2 divide-x">
                    <div className="bg-muted/50 aspect-square flex items-center justify-center text-6xl">
                      {item.before}
                    </div>
                    <div className="bg-white aspect-square flex items-center justify-center text-6xl">
                      {item.after}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold mb-2">{item.title}</h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Icon name="Clock" size={14} />
                      <span>{item.time}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-br from-primary to-secondary text-white rounded-3xl p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-4">Почему нас выбирают?</h2>
                <div className="space-y-4">
                  {[
                    { icon: 'Zap', title: 'Быстро', desc: 'Приезжаем в течение часа' },
                    { icon: 'BadgeCheck', title: 'Честно', desc: 'Цена озвучивается до работ' },
                    { icon: 'Sparkles', title: 'Чисто', desc: 'Бахилы, коврик, уборка' },
                    { icon: 'Shield', title: 'Надёжно', desc: 'Гарантия 30 дней' }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-4 bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                      <div className="bg-white/20 rounded-lg p-3">
                        <Icon name={item.icon as any} size={24} />
                      </div>
                      <div>
                        <div className="font-semibold text-lg">{item.title}</div>
                        <div className="text-white/80 text-sm">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white rounded-2xl p-8 text-foreground">
                <h3 className="text-2xl font-bold mb-6">Вызвать мастера</h3>
                <form className="space-y-4">
                  <Input placeholder="Ваше имя" />
                  <Input placeholder="Телефон" type="tel" />
                  <Textarea placeholder="Опишите задачу" rows={3} />
                  <Button size="lg" className="w-full">
                    <Icon name="Send" size={18} className="mr-2" />
                    Отправить заявку
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    Перезвоним в течение 5 минут
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Контакты</Badge>
            <h2 className="text-4xl font-bold mb-4">Свяжитесь с нами</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="text-center hover-lift">
              <CardHeader>
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Phone" size={28} className="text-primary" />
                </div>
                <CardTitle className="text-lg">Телефон</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xl font-bold">+7 (843) 123-45-67</p>
                <p className="text-sm text-muted-foreground mt-2">Ежедневно 8:00 - 22:00</p>
              </CardContent>
            </Card>
            <Card className="text-center hover-lift">
              <CardHeader>
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="MapPin" size={28} className="text-primary" />
                </div>
                <CardTitle className="text-lg">Зона выезда</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xl font-bold">Татарстан</p>
                <p className="text-sm text-muted-foreground mt-2">До 30 км от города</p>
              </CardContent>
            </Card>
            <Card className="text-center hover-lift">
              <CardHeader>
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Mail" size={28} className="text-primary" />
                </div>
                <CardTitle className="text-lg">Email</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xl font-bold">info@tuk-tuk.ru</p>
                <p className="text-sm text-muted-foreground mt-2">Ответим в течение часа</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default MainContent;
