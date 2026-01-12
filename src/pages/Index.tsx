import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [orderStatus, setOrderStatus] = useState<'accepted' | 'on-way' | 'working' | 'completed'>('on-way');

  const services = [
    {
      icon: 'Zap',
      title: 'Электромонтаж',
      description: 'Розетки, выключатели, светильники, УЗО',
      price: 'от 500 ₽',
      color: 'bg-yellow-100 text-yellow-600'
    },
    {
      icon: 'Droplet',
      title: 'Сантехника',
      description: 'Краны, смесители, унитазы, прочистка засоров',
      price: 'от 600 ₽',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: 'Armchair',
      title: 'Сборка мебели',
      description: 'IKEA, корпусная, офисная мебель',
      price: 'от 800 ₽',
      color: 'bg-purple-100 text-purple-600'
    },
    {
      icon: 'Frame',
      title: 'Крепёж',
      description: 'Картины, полки, телевизоры до 50 кг',
      price: 'от 400 ₽',
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: 'Hammer',
      title: 'Мелкий ремонт',
      description: 'Заделка трещин, покраска, линолеум',
      price: 'от 700 ₽',
      color: 'bg-orange-100 text-orange-600'
    },
    {
      icon: 'Sparkles',
      title: 'Уборка',
      description: 'Влажная уборка, вынос мусора после работ',
      price: 'от 300 ₽',
      color: 'bg-pink-100 text-pink-600'
    }
  ];

  const steps = [
    { icon: 'Phone', title: 'Звоните', desc: 'Или оставьте заявку' },
    { icon: 'UserCheck', title: 'Назначаем мастера', desc: 'В течение 5 минут' },
    { icon: 'Car', title: 'Приезжаем', desc: 'Через 30-60 минут' },
    { icon: 'Wrench', title: 'Чиним', desc: 'В среднем за 40 минут' },
    { icon: 'CheckCircle', title: 'Готово!', desc: 'Оплата и гарантия 30 дней' }
  ];

  const masters = [
    { name: 'Алексей Иванов', specialty: 'Электрика, сантехника', rating: 4.9, experience: '8 лет', avatar: 'АИ' },
    { name: 'Дмитрий Петров', specialty: 'Мебель, крепёж', rating: 4.8, experience: '5 лет', avatar: 'ДП' },
    { name: 'Сергей Смирнов', specialty: 'Универсал', rating: 5.0, experience: '10 лет', avatar: 'СС' },
    { name: 'Михаил Козлов', specialty: 'Сантехника, мелкий ремонт', rating: 4.9, experience: '6 лет', avatar: 'МК' }
  ];

  const portfolio = [
    { title: 'Замена смесителя', before: '🚿', after: '✨', time: '25 мин' },
    { title: 'Сборка шкафа IKEA', before: '📦', after: '🗄️', time: '1 час 10 мин' },
    { title: 'Установка розеток', before: '🔌', after: '⚡', time: '35 мин' },
    { title: 'Монтаж телевизора', before: '📺', after: '🖼️', time: '40 мин' }
  ];

  const getStatusProgress = () => {
    const statuses = { accepted: 25, 'on-way': 50, working: 75, completed: 100 };
    return statuses[orderStatus];
  };

  const statusLabels = {
    accepted: 'Заявка принята',
    'on-way': 'Мастер в пути',
    working: 'Выполняем работу',
    completed: 'Выполнено'
  };

  return (
    <div className="min-h-screen">
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

      <footer className="bg-secondary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-primary text-white rounded-lg p-2">
                  <Icon name="Wrench" size={20} />
                </div>
                <span className="text-lg font-bold">Тук-Тук.Ремонт</span>
              </div>
              <p className="text-white/80 text-sm">
                Вернуть спокойствие, один вызов за раз
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Услуги</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li>Электромонтаж</li>
                <li>Сантехника</li>
                <li>Сборка мебели</li>
                <li>Крепёж</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Компания</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li>О нас</li>
                <li>Мастера</li>
                <li>Вакансии</li>
                <li>Для бизнеса</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Контакты</h4>
              <ul className="space-y-2 text-sm text-white/80">
                <li>+7 (843) 123-45-67</li>
                <li>info@tuk-tuk.ru</li>
                <li>Татарстан</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-sm text-white/60">
            © 2025 Тук-Тук.Ремонт. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
