import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('hero');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <Icon name="TrendingUp" size={20} className="text-white" />
              </div>
              <span className="font-bold text-xl">E-COMMERCE RESEARCH</span>
            </div>
            <div className="hidden md:flex gap-6 text-sm">
              {['Главная', 'О проекте', 'История', 'Статистика', 'Игроки', 'Тренды', 'Будущее', 'Выводы'].map((item, idx) => (
                <button 
                  key={idx}
                  onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                  className="hover:text-primary transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section id="главная" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="flex justify-center gap-4 mb-8 flex-wrap">
            {['Amazon', 'Ozon', 'Alibaba', 'Wildberries'].map((brand, idx) => (
              <Badge key={idx} variant="outline" className="px-4 py-2 text-base bg-white/80 backdrop-blur">
                {brand}
              </Badge>
            ))}
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
            Развитие<br />
            <span className="text-primary">интернет-торговли</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
            Интернет-торговля — одна из самых быстрорастущих сфер мировой экономики. 
            На сайте вы найдёте аналитику, статистику и сравнение развития e-commerce в России и мире.
          </p>
          
          <Button size="lg" onClick={() => scrollToSection('о-проекте')} className="px-8 py-6 text-lg">
            Начать исследование
            <Icon name="ArrowRight" size={20} className="ml-2" />
          </Button>
        </div>
      </section>

      <section id="о-проекте" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold mb-16 text-center">Цель и актуальность</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Icon name="Target" size={24} className="text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Цель исследования</h3>
              <p className="text-muted-foreground leading-relaxed">
                Изучить развитие интернет-торговли, проанализировать ключевые тренды и определить перспективы роста в различных регионах мира.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                <Icon name="ListChecks" size={24} className="text-secondary" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Задачи</h3>
              <p className="text-muted-foreground leading-relaxed">
                Сравнить тенденции развития e-commerce в разных странах, выявить лидеров рынка и определить факторы успеха крупнейших игроков.
              </p>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <Icon name="Zap" size={24} className="text-accent" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Актуальность</h3>
              <p className="text-muted-foreground leading-relaxed">
                Более 30% мировой розничной торговли приходится на онлайн-продажи. Рынок продолжает стремительно расти во всех регионах.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section id="история" className="py-24 bg-muted">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold mb-16 text-center">История развития</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="p-8">
              <h3 className="text-3xl font-semibold mb-8 flex items-center gap-3">
                <Icon name="Globe" size={28} className="text-primary" />
                Мир
              </h3>
              <div className="space-y-6">
                {[
                  { year: '1994', event: 'Запуск Amazon — первый крупный онлайн-магазин книг' },
                  { year: '1995', event: 'Основание eBay — революция в аукционной торговле' },
                  { year: '1999', event: 'Alibaba начинает работу в Китае' },
                  { year: '2005', event: 'YouTube меняет контент-маркетинг навсегда' }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                      {item.year}
                    </div>
                    <div className="flex-1">
                      <p className="text-lg leading-relaxed pt-3">{item.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-8">
              <h3 className="text-3xl font-semibold mb-8 flex items-center gap-3">
                <Icon name="MapPin" size={28} className="text-secondary" />
                Россия
              </h3>
              <div className="space-y-6">
                {[
                  { year: '1998', event: 'Ozon.ru — первый российский интернет-магазин' },
                  { year: '2004', event: 'Wildberries открывает онлайн-каталог одежды' },
                  { year: '2011', event: 'Яндекс.Маркет становится крупнейшим агрегатором' },
                  { year: '2020', event: 'Пандемия ускоряет переход в онлайн' }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="flex-shrink-0 w-16 h-16 rounded-full bg-secondary text-white flex items-center justify-center font-bold">
                      {item.year}
                    </div>
                    <div className="flex-1">
                      <p className="text-lg leading-relaxed pt-3">{item.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section id="статистика" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold mb-16 text-center">Статистика рынка</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-8">
              <h3 className="text-2xl font-semibold mb-8">Доля онлайн-продаж по странам</h3>
              <div className="space-y-6">
                {[
                  { country: 'Китай', percent: 30, color: 'bg-primary' },
                  { country: 'США', percent: 20, color: 'bg-accent' },
                  { country: 'Европа', percent: 18, color: 'bg-secondary' },
                  { country: 'Россия', percent: 14, color: 'bg-blue-400' }
                ].map((item, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold">{item.country}</span>
                      <span className="text-2xl font-bold text-primary">{item.percent}%</span>
                    </div>
                    <div className="w-full h-3 bg-muted rounded-full overflow-hidden">
                      <div 
                        className={`h-full ${item.color} transition-all duration-1000`}
                        style={{ width: `${item.percent * 3}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-8">
              <h3 className="text-2xl font-semibold mb-8">Популярные категории товаров</h3>
              <div className="space-y-4">
                {[
                  { category: 'Одежда и обувь', icon: 'ShoppingBag', share: '35%' },
                  { category: 'Электроника', icon: 'Smartphone', share: '28%' },
                  { category: 'Продукты питания', icon: 'Coffee', share: '22%' },
                  { category: 'Дом и сад', icon: 'Home', share: '15%' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 bg-muted rounded-lg hover:bg-muted/70 transition-colors">
                    <div className="flex items-center gap-3">
                      <Icon name={item.icon as any} size={24} className="text-primary" />
                      <span className="font-medium">{item.category}</span>
                    </div>
                    <span className="text-xl font-bold text-secondary">{item.share}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          <Card className="p-12 bg-gradient-to-br from-primary/5 to-secondary/5">
            <div className="text-center">
              <div className="text-7xl font-bold text-primary mb-4">$5.7T</div>
              <p className="text-2xl text-muted-foreground">Объём мирового рынка e-commerce в 2024 году</p>
            </div>
          </Card>
        </div>
      </section>

      <section id="игроки" className="py-24 bg-muted">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold mb-16 text-center">Ключевые игроки</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Amazon', region: 'США', revenue: '$574 млрд', description: 'Мировой лидер с доставкой в 100+ стран', icon: 'Package' },
              { name: 'Alibaba', region: 'Китай', revenue: '$126 млрд', description: 'Крупнейшая B2B и B2C платформа Азии', icon: 'Store' },
              { name: 'Wildberries', region: 'Россия', revenue: '$21 млрд', description: 'Лидер российского рынка одежды', icon: 'ShoppingCart' },
              { name: 'Ozon', region: 'Россия', revenue: '$4.8 млрд', description: 'Универсальный маркетплейс России', icon: 'Truck' },
              { name: 'Яндекс.Маркет', region: 'Россия', revenue: '$2.1 млрд', description: 'Крупнейший агрегатор товаров', icon: 'Search' },
              { name: 'MercadoLibre', region: 'Латам', revenue: '$14 млрд', description: 'Доминирует в Латинской Америке', icon: 'Globe2' }
            ].map((company, idx) => (
              <Card key={idx} className="p-8 hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Icon name={company.icon as any} size={28} className="text-primary" />
                  </div>
                  <Badge variant="secondary">{company.region}</Badge>
                </div>
                <h3 className="text-2xl font-bold mb-2">{company.name}</h3>
                <div className="text-3xl font-bold text-secondary mb-4">{company.revenue}</div>
                <p className="text-muted-foreground leading-relaxed">{company.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="тренды" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold mb-16 text-center">Современные тренды</h2>
          
          <Tabs defaultValue="world" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
              <TabsTrigger value="world" className="text-lg">Мир</TabsTrigger>
              <TabsTrigger value="russia" className="text-lg">Россия</TabsTrigger>
            </TabsList>
            
            <TabsContent value="world">
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { title: 'Мобильная торговля', description: 'Более 70% покупок совершается со смартфонов', icon: 'Smartphone' },
                  { title: 'TikTok Shop', description: 'Социальная коммерция растёт на 150% в год', icon: 'Video' },
                  { title: 'Доставка дронами', description: 'Amazon Prime Air тестирует автономную доставку', icon: 'Plane' }
                ].map((trend, idx) => (
                  <Card key={idx} className="p-8 hover:shadow-lg transition-shadow">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6">
                      <Icon name={trend.icon as any} size={32} className="text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{trend.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{trend.description}</p>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="russia">
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { title: 'Быстрая доставка', description: 'Яндекс.Лавка доставляет за 15 минут в крупных городах', icon: 'Zap' },
                  { title: 'Рост маркетплейсов', description: 'Доля маркетплейсов достигла 80% онлайн-продаж', icon: 'TrendingUp' },
                  { title: 'Пункты выдачи', description: 'Более 50 000 ПВЗ по всей России', icon: 'MapPin' }
                ].map((trend, idx) => (
                  <Card key={idx} className="p-8 hover:shadow-lg transition-shadow">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-secondary to-accent flex items-center justify-center mb-6">
                      <Icon name={trend.icon as any} size={32} className="text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{trend.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{trend.description}</p>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section id="будущее" className="py-24 bg-gradient-to-br from-primary/5 via-white to-secondary/5">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold mb-16 text-center">Будущее e-commerce</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-10 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Icon name="Glasses" size={32} className="text-primary" />
                </div>
                <h3 className="text-3xl font-bold">VR/AR примерочные</h3>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Виртуальная и дополненная реальность позволят покупателям примерить одежду, мебель и аксессуары 
                не выходя из дома. Технология снизит возвраты товаров на 40%.
              </p>
              <div className="flex gap-2">
                <Badge>2025-2027</Badge>
                <Badge variant="secondary">Retail Tech</Badge>
              </div>
            </Card>

            <Card className="p-10 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-xl bg-secondary/10 flex items-center justify-center">
                  <Icon name="Brain" size={32} className="text-secondary" />
                </div>
                <h3 className="text-3xl font-bold">ИИ-персонализация</h3>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Искусственный интеллект будет предсказывать желания покупателей до того, как они начнут поиск. 
                Персональные рекомендации увеличат конверсию в 3 раза.
              </p>
              <div className="flex gap-2">
                <Badge>2024-2026</Badge>
                <Badge variant="secondary">AI/ML</Badge>
              </div>
            </Card>

            <Card className="p-10 hover:shadow-xl transition-shadow md:col-span-2">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Icon name="Leaf" size={32} className="text-accent" />
                </div>
                <h3 className="text-3xl font-bold">Зелёная доставка</h3>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Электрические фургоны, велокурьеры и дроны на солнечных батареях станут стандартом. 
                Углеродно-нейтральная доставка — требование нового поколения покупателей.
              </p>
              <div className="flex gap-2">
                <Badge>2025-2030</Badge>
                <Badge variant="secondary">Sustainability</Badge>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section id="выводы" className="py-24 bg-foreground text-background">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-12">Выводы исследования</h2>
          
          <div className="max-w-4xl mx-auto space-y-8 mb-12">
            <Card className="p-8 bg-background/5 border-background/20 text-left">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xl">
                  1
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Драйвер мировой экономики</h3>
                  <p className="text-xl text-background/80 leading-relaxed">
                    Интернет-торговля стала ключевым драйвером мировой экономики с годовым ростом 15-20%. 
                    Пандемия ускорила цифровизацию на 5-7 лет.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-background/5 border-background/20 text-left">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-white font-bold text-xl">
                  2
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Россия на подъёме</h3>
                  <p className="text-xl text-background/80 leading-relaxed">
                    Российский рынок показывает впечатляющий рост, но пока уступает Китаю и США по доле онлайн-продаж. 
                    Потенциал огромен.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-background/5 border-background/20 text-left">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent flex items-center justify-center text-white font-bold text-xl">
                  3
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Будущее за технологиями</h3>
                  <p className="text-xl text-background/80 leading-relaxed">
                    VR/AR, искусственный интеллект и экологичная логистика определят лидеров следующего десятилетия. 
                    Инновации — ключ к успеху.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <Button 
            size="lg" 
            onClick={() => scrollToSection('статистика')}
            className="bg-background text-foreground hover:bg-background/90 px-8 py-6 text-lg"
          >
            Посмотреть статистику ещё раз
            <Icon name="BarChart3" size={20} className="ml-2" />
          </Button>
        </div>
      </section>

      <footer className="py-12 bg-background border-t">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <Icon name="TrendingUp" size={16} className="text-white" />
            </div>
            <span className="font-bold">E-COMMERCE RESEARCH</span>
          </div>
          <p className="text-muted-foreground">Исследование развития интернет-торговли © 2024</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
