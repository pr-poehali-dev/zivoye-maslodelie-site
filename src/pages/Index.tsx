import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-amber-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-green-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Droplets" size={28} className="text-green-700" />
              <h1 className="text-xl font-bold text-green-800">Живое Маслоделие</h1>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-green-700 hover:text-green-900 transition-colors">Главная</a>
              <a href="#about" className="text-green-700 hover:text-green-900 transition-colors">О нас</a>
              <a href="#products" className="text-green-700 hover:text-green-900 transition-colors">Наше масло</a>
              <a href="#contacts" className="text-green-700 hover:text-green-900 transition-colors">Контакты</a>
            </div>
            <Button className="bg-green-700 hover:bg-green-800 text-white">
              Заказать
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold text-green-900 mb-6">
              Натуральное масло
              <span className="block text-amber-700">холодного отжима</span>
            </h2>
            <p className="text-xl text-green-700 max-w-2xl mx-auto mb-8">
              Создаем настоящее сыродавленное масло по традиционным технологиям в Пскове. 
              Без химии, без нагрева — только польза природы.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-700 hover:bg-green-800">
                <Icon name="ShoppingCart" size={20} className="mr-2" />
                Посмотреть продукцию
              </Button>
              <Button size="lg" variant="outline" className="border-green-700 text-green-700 hover:bg-green-50">
                <Icon name="Phone" size={20} className="mr-2" />
                Связаться с нами
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h3 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">О нашем производстве</h3>
              <p className="text-lg text-green-700 max-w-2xl mx-auto">
                Мы — семейное предприятие, которое с любовью создает натуральные масла по старинным рецептам
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center border-green-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <Icon name="Leaf" size={32} className="text-green-700" />
                  </div>
                  <CardTitle className="text-green-900">100% натурально</CardTitle>
                  <CardDescription className="text-green-600">
                    Без химических добавок и консервантов
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-green-700">
                    Используем только отборные семена и орехи от проверенных поставщиков. 
                    Никаких искусственных добавок.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center border-green-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                    <Icon name="Thermometer" size={32} className="text-amber-700" />
                  </div>
                  <CardTitle className="text-green-900">Холодный отжим</CardTitle>
                  <CardDescription className="text-green-600">
                    Технология без нагрева сохраняет все витамины
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-green-700">
                    Прессуем при температуре не выше 40°C, что позволяет сохранить 
                    все полезные свойства и натуральный вкус.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center border-green-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <Icon name="MapPin" size={32} className="text-green-700" />
                  </div>
                  <CardTitle className="text-green-900">Псковское качество</CardTitle>
                  <CardDescription className="text-green-600">
                    Местное производство с контролем качества
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-green-700">
                    Производим в Пскове с соблюдением всех стандартов качества. 
                    Каждая партия проходит контроль.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-gradient-to-b from-amber-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h3 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">Наше масло</h3>
              <p className="text-lg text-green-700 max-w-2xl mx-auto">
                Каждый вид масла создается с особой технологией для максимальной пользы
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="hover:shadow-xl transition-all duration-300 border-amber-200">
                <CardHeader>
                  <div className="w-full h-48 bg-gradient-to-br from-yellow-100 to-amber-100 rounded-lg mb-4 flex items-center justify-center">
                    <Icon name="Wheat" size={48} className="text-amber-700" />
                  </div>
                  <CardTitle className="text-green-900">Подсолнечное масло</CardTitle>
                  <CardDescription className="text-green-600">
                    Классическое масло холодного отжима
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-green-700 mb-4">
                    Нерафинированное подсолнечное масло с насыщенным вкусом и ароматом. 
                    Богато витамином E.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-green-900">350₽</span>
                    <span className="text-sm text-green-600">500 мл</span>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-xl transition-all duration-300 border-amber-200">
                <CardHeader>
                  <div className="w-full h-48 bg-gradient-to-br from-amber-100 to-orange-100 rounded-lg mb-4 flex items-center justify-center">
                    <Icon name="Nut" size={48} className="text-amber-700" />
                  </div>
                  <CardTitle className="text-green-900">Льняное масло</CardTitle>
                  <CardDescription className="text-green-600">
                    Источник Омега-3 кислот
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-green-700 mb-4">
                    Ценное льняное масло с высоким содержанием полиненасыщенных жирных кислот. 
                    Для здоровья сердца.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-green-900">580₽</span>
                    <span className="text-sm text-green-600">250 мл</span>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-xl transition-all duration-300 border-amber-200">
                <CardHeader>
                  <div className="w-full h-48 bg-gradient-to-br from-green-100 to-emerald-100 rounded-lg mb-4 flex items-center justify-center">
                    <Icon name="Leaf" size={48} className="text-green-700" />
                  </div>
                  <CardTitle className="text-green-900">Конопляное масло</CardTitle>
                  <CardDescription className="text-green-600">
                    Премиум масло с уникальным составом
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-green-700 mb-4">
                    Редкое конопляное масло с идеальным балансом Омега-3 и Омега-6. 
                    Для иммунитета и красоты.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-green-900">890₽</span>
                    <span className="text-sm text-green-600">250 мл</span>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="text-center mt-12">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700">
                <Icon name="Eye" size={20} className="mr-2" />
                Посмотреть все масла
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h3 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">Свяжитесь с нами</h3>
              <p className="text-lg text-green-700">
                Готовы ответить на все вопросы о нашем производстве и продукции
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h4 className="text-xl font-semibold text-green-900 mb-6">Контактная информация</h4>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Icon name="MapPin" size={20} className="text-green-700" />
                    <span className="text-green-700">г. Псков, ул. Производственная, 15</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Phone" size={20} className="text-green-700" />
                    <span className="text-green-700">+7 (8112) 123-456</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Mail" size={20} className="text-green-700" />
                    <span className="text-green-700">info@zhivoe-maslo.ru</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Clock" size={20} className="text-green-700" />
                    <span className="text-green-700">Пн-Пт: 9:00 - 18:00</span>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h5 className="font-semibold text-green-900 mb-4">Социальные сети</h5>
                  <div className="flex space-x-4">
                    <Button variant="outline" size="sm" className="border-green-700 text-green-700">
                      <Icon name="MessageCircle" size={16} className="mr-2" />
                      Telegram
                    </Button>
                    <Button variant="outline" size="sm" className="border-green-700 text-green-700">
                      <Icon name="Instagram" size={16} className="mr-2" />
                      Instagram
                    </Button>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-xl font-semibold text-green-900 mb-6">Напишите нам</h4>
                <form className="space-y-4">
                  <div>
                    <input 
                      type="text" 
                      placeholder="Ваше имя" 
                      className="w-full p-3 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                  <div>
                    <input 
                      type="email" 
                      placeholder="Email" 
                      className="w-full p-3 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                  <div>
                    <textarea 
                      placeholder="Ваше сообщение" 
                      rows={4}
                      className="w-full p-3 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    ></textarea>
                  </div>
                  <Button type="submit" className="w-full bg-green-700 hover:bg-green-800">
                    <Icon name="Send" size={20} className="mr-2" />
                    Отправить сообщение
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Icon name="Droplets" size={24} className="text-green-300" />
              <h5 className="text-xl font-bold">Живое Маслоделие</h5>
            </div>
            <p className="text-green-300 mb-6">
              Натуральные масла холодного отжима из Пскова
            </p>
            <div className="border-t border-green-700 pt-6">
              <p className="text-green-400 text-sm">
                © 2024 Живое Маслоделие. Все права защищены.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;