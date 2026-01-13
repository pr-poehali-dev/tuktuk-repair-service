import { useState } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import MainContent from '@/components/MainContent';
import Footer from '@/components/Footer';

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
      <Header />
      <HeroSection 
        orderStatus={orderStatus} 
        getStatusProgress={getStatusProgress} 
        statusLabels={statusLabels} 
      />
      <MainContent 
        services={services} 
        steps={steps} 
        masters={masters} 
        portfolio={portfolio} 
      />
      <Footer />
    </div>
  );
};

export default Index;
