import Icon from '@/components/ui/icon';

const Footer = () => {
  return (
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
  );
};

export default Footer;
