import React, { useState, useEffect } from "react";
import {
  Wifi,
  ShieldCheck,
  Tv,
  Server,
  MonitorSmartphone,
  ChevronDown,
  Search,
  PhoneCall,
  MessageCircle,
  MapPin,
  CheckCircle2,
  ArrowRight,
  Zap,
  Building2,
  Home as HomeIcon,
  Menu,
  X,
  PlayCircle,
  FileText,
  UserCircle,
  Network,
} from "lucide-react";

// --- ГЛОБАЛЬНЫЕ ДАННЫЕ И НАСТРОЙКИ ---
const BRAND_COLORS = {
  primary: "#84CC16",
  hover: "#65A30D",
  soft: "#ECFCCB",
  dark: "#0F172A",
  orange: "#F97316",
};

// --- КОМПОНЕНТЫ UI ---
const Button = ({ children, variant = "primary", className = "", onClick }) => {
  const baseStyle =
    "font-bold rounded-xl px-6 py-3 transition-all duration-300 flex items-center justify-center gap-2";
  const variants = {
    primary:
      "bg-[#84CC16] hover:bg-[#65A30D] text-white shadow-lg shadow-lime-500/30 hover:shadow-lime-500/50 hover:-translate-y-0.5",
    outline:
      "border-2 border-slate-200 hover:border-[#84CC16] text-slate-700 hover:text-[#84CC16] bg-white",
    ghost: "text-slate-600 hover:text-[#84CC16] hover:bg-lime-50",
  };
  return (
    <button
      onClick={onClick}
      className={`${baseStyle} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

const SectionHeading = ({ title, subtitle }) => (
  <div className="text-center mb-12">
    <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F172A] mb-4">
      {title}
    </h2>
    {subtitle && (
      <p className="text-lg text-slate-500 max-w-2xl mx-auto">{subtitle}</p>
    )}
  </div>
);

// Современная абстрактная композиция (замена старой анимации)
const HeroComposition = () => (
  <div className="relative w-full max-w-lg mx-auto aspect-[4/3] flex items-center justify-center group">
    <style>
      {`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-float { animation: float 4s ease-in-out infinite; }
        .animate-float-delayed { animation: float 4s ease-in-out 2s infinite; }
      `}
    </style>
    {/* Базовый фон с мягким градиентом */}
    <div className="absolute inset-0 bg-gradient-to-tr from-slate-200 to-lime-100 rounded-[3rem] transform rotate-3 shadow-inner transition-transform duration-700 group-hover:rotate-6"></div>
    <div className="absolute inset-0 bg-white rounded-[3rem] transform -rotate-2 shadow-2xl border border-slate-100 flex flex-col overflow-hidden transition-transform duration-700 group-hover:-rotate-4">
      {/* Декоративный хедер */}
      <div className="h-12 border-b border-slate-100 flex items-center px-6 gap-2 bg-slate-50/80">
        <div className="w-3 h-3 rounded-full bg-slate-300"></div>
        <div className="w-3 h-3 rounded-full bg-slate-300"></div>
        <div className="w-3 h-3 rounded-full bg-[#84CC16]"></div>
      </div>
      {/* Тело "дашборда" */}
      <div className="flex-1 p-6 sm:p-8 flex flex-col gap-6 relative">
        <div className="flex justify-between items-center z-10">
          <div>
            <div className="text-slate-400 text-sm font-medium mb-1">
              Статус сети
            </div>
            <div className="flex items-center gap-2 text-[#0F172A] font-bold text-lg sm:text-xl">
              <div className="w-3 h-3 rounded-full bg-[#84CC16] animate-pulse"></div>
              Стабильное соединение
            </div>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-lime-50 flex items-center justify-center text-[#84CC16] shadow-sm">
            <Wifi size={24} />
          </div>
        </div>

        {/* Карточка скорости */}
        <div className="bg-[#0F172A] rounded-2xl p-6 text-white shadow-lg relative overflow-hidden mt-auto z-10">
          <div className="absolute top-0 right-0 w-40 h-40 bg-[#84CC16] opacity-20 rounded-full blur-[40px] transform translate-x-1/2 -translate-y-1/3"></div>
          <div className="text-slate-400 text-sm mb-2 font-medium">
            Текущая скорость
          </div>
          <div className="flex items-end gap-2">
            <span className="text-5xl font-extrabold text-white tracking-tight">
              1000
            </span>
            <span className="text-[#84CC16] font-bold mb-1">Мбит/с</span>
          </div>
          {/* График скорости (имитация) */}
          <div className="mt-8 flex items-end gap-1.5 h-12 opacity-90">
            {[40, 70, 45, 90, 65, 85, 100, 80, 95, 100, 90, 85].map((h, i) => (
              <div
                key={i}
                className="flex-1 bg-gradient-to-t from-[#84CC16]/20 to-[#84CC16] rounded-t-sm"
                style={{ height: `${h}%` }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>

    {/* Плавающие элементы поверх */}
    <div className="absolute -right-4 md:-right-8 top-1/4 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-4 animate-float z-20">
      <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-[#F97316]">
        <ShieldCheck size={20} />
      </div>
      <div>
        <div className="text-xs text-slate-500 font-medium">Безопасность</div>
        <div className="text-sm font-bold text-[#0F172A]">Защищено</div>
      </div>
    </div>

    <div className="absolute -left-4 md:-left-8 bottom-8 md:bottom-12 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-4 animate-float-delayed z-20">
      <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-500">
        <Server size={20} />
      </div>
      <div>
        <div className="text-xs text-slate-500 font-medium">Оборудование</div>
        <div className="text-sm font-bold text-[#0F172A]">Настроено</div>
      </div>
    </div>
  </div>
);

// --- СТРАНИЦЫ ---

// 1. ГЛАВНАЯ СТРАНИЦА
const HomePage = ({ navigate }) => (
  <div className="space-y-24 pb-24">
    {/* Hero Section */}
    <section className="pt-32 pb-16 px-4 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
      <div className="space-y-8 relative z-10">
        <div className="inline-block bg-lime-100 text-[#65A30D] font-bold px-4 py-1.5 rounded-full text-sm mb-2">
          Надежный провайдер вашего города
        </div>
        <h1 className="text-5xl md:text-6xl font-extrabold text-[#0F172A] leading-tight">
          Интернет, который <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#84CC16] to-[#65A30D]">
            работает для вас
          </span>
        </h1>
        <p className="text-xl text-slate-500 max-w-lg">
          Подключаем, настраиваем и объясняем. От квартиры до офиса — под ключ и
          без лишних забот. Вы просто начинаете пользоваться.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button onClick={() => navigate("home")}>
            Выбрать тариф <ArrowRight size={20} />
          </Button>
          <Button
            variant="outline"
            onClick={() =>
              document
                .getElementById("address-check")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Проверить адрес
          </Button>
        </div>
        <div className="flex items-center gap-6 pt-4 text-slate-500 text-sm font-medium">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="text-[#84CC16]" size={20} /> 5000+
            абонентов
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="text-[#84CC16]" size={20} /> Поддержка 24/7
          </div>
        </div>
      </div>
      <div className="relative md:pl-8 lg:pl-16">
        <HeroComposition />
      </div>
    </section>

    {/* Преимущества (Подключение без стресса) */}
    <section className="bg-slate-50 py-24">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeading
          title="Подключение без стресса"
          subtitle="Мы не просто кидаем кабель. Мы создаем готовую цифровую среду у вас дома или в офисе."
        />
        <div className="grid md:grid-cols-4 gap-6">
          {[
            {
              icon: Network,
              title: "Строим сеть",
              desc: "Проектируем и прокладываем локальную сеть аккуратно и без пыли.",
            },
            {
              icon: Server,
              title: "Настраиваем роутеры",
              desc: "Подбираем оптимальное оборудование для максимальной площади покрытия.",
            },
            {
              icon: MonitorSmartphone,
              title: "Подключаем устройства",
              desc: "Связываем все ваши смартфоны, ПК и умный дом в единую сеть.",
            },
            {
              icon: Tv,
              title: "Настраиваем ТВ",
              desc: "Устанавливаем приложения на Smart TV и показываем, как пользоваться.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group"
            >
              <div className="w-16 h-16 bg-lime-50 text-[#84CC16] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <item.icon size={32} />
              </div>
              <h3 className="text-xl font-bold text-[#0F172A] mb-3">
                {item.title}
              </h3>
              <p className="text-slate-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Форматы (Для кого) */}
    <section className="max-w-7xl mx-auto px-4">
      <SectionHeading title="Выберите свой формат" />
      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            icon: HomeIcon,
            title: "Для дома",
            desc: "Гибкие тарифы, интерактивное ТВ и интернет под ключ для квартир и частных домов.",
            link: "home",
          },
          {
            icon: Building2,
            title: "Для ИП",
            desc: "Надежное решение для офиса, торговли и открытого Wi-Fi с авторизацией.",
            link: "business",
          },
          {
            icon: ShieldCheck,
            title: "Для ЮЛ",
            desc: "Интернет с выделенными IP, SLA, резервными каналами и поддержкой 24/7.",
            link: "business",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200 flex flex-col items-start hover:border-[#84CC16] transition-colors cursor-pointer"
            onClick={() => navigate(item.link)}
          >
            <div className="p-4 bg-slate-50 rounded-2xl mb-6 text-[#0F172A]">
              <item.icon size={40} />
            </div>
            <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
            <p className="text-slate-500 mb-8 flex-grow">{item.desc}</p>
            <span className="text-[#84CC16] font-bold flex items-center gap-2 group">
              Подробнее{" "}
              <ArrowRight
                size={20}
                className="group-hover:translate-x-2 transition-transform"
              />
            </span>
          </div>
        ))}
      </div>
    </section>

    {/* Проверка адреса */}
    <section id="address-check" className="max-w-5xl mx-auto px-4">
      <div className="bg-gradient-to-r from-[#0F172A] to-slate-800 rounded-[3rem] p-10 md:p-16 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#84CC16] opacity-20 rounded-full blur-[80px]"></div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 relative z-10">
          Проверка доступности адреса
        </h2>
        <p className="text-slate-300 mb-10 text-lg relative z-10">
          Введите ваш адрес, чтобы узнать о возможности подключения и доступных
          тарифах.
        </p>
        <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto relative z-10">
          <div className="relative flex-grow">
            <MapPin
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400"
              size={24}
            />
            <input
              type="text"
              placeholder="Улица, дом..."
              className="w-full pl-12 pr-4 py-4 rounded-xl text-lg outline-none focus:ring-4 focus:ring-[#84CC16]/50"
            />
          </div>
          <Button className="py-4 px-8 text-lg shrink-0">Проверить</Button>
        </div>
      </div>
    </section>
  </div>
);

// 2. СТРАНИЦА "ИНТЕРНЕТ ДЛЯ ДОМА"
const HomeNetPage = () => {
  const [billingPeriod, setBillingPeriod] = useState("1 месяц");
  const periods = ["1 месяц", "6 месяцев", "1 год"];

  const plans = [
    {
      name: "Обычный",
      speed: "100",
      desc: "Идеально для соцсетей, серфинга и просмотра видео в хорошем качестве.",
      prices: {
        "1 месяц": { monthly: 500, total: 500, note: "Оплата ежемесячно" },
        "6 месяцев": { monthly: 450, total: 2700, note: "Экономия 300 ₽" },
        "1 год": { monthly: 400, total: 4800, note: "Экономия 1200 ₽" },
      },
      features: [
        "Безлимитный трафик",
        "Бесплатное подключение",
        "Поддержка 24/7",
      ],
      icon: HomeIcon,
      isPopular: false,
    },
    {
      name: "Плюс",
      speed: "200",
      desc: "Отличный выбор для семьи. Хватит на все устройства: смартфоны, ТВ и ПК.",
      prices: {
        "1 месяц": { monthly: 750, total: 750, note: "Оплата ежемесячно" },
        "6 месяцев": { monthly: 650, total: 3900, note: "Экономия 600 ₽" },
        "1 год": { monthly: 550, total: 6600, note: "Экономия 2400 ₽" },
      },
      features: [
        "Безлимитный трафик",
        'ТВ-пакет "Базовый"',
        "Приоритетная поддержка",
      ],
      icon: Zap,
      isPopular: true,
    },
    {
      name: "Для геймеров",
      speed: "1000",
      desc: "Максимальная скорость и минимальный пинг. Для стриминга и тяжелых онлайн-игр.",
      prices: {
        "1 месяц": { monthly: 1200, total: 1200, note: "Оплата ежемесячно" },
        "6 месяцев": { monthly: 1000, total: 6000, note: "Экономия 1200 ₽" },
        "1 год": { monthly: 850, total: 10200, note: "Экономия 4200 ₽" },
      },
      features: [
        "Симметричный канал",
        "Статический IP бесплатно",
        "Прямой пинг до серверов",
      ],
      icon: ShieldCheck,
      isPopular: false,
    },
  ];

  return (
    <div className="pt-32 pb-24 px-4 max-w-7xl mx-auto min-h-screen">
      <SectionHeading
        title="Интернет для дома"
        subtitle="Выберите тариф, который подходит вашему стилю жизни. Подключаем быстро и без лишних проводов."
      />

      {/* Переключатель периодов оплаты (Самый интуитивный паттерн) */}
      <div className="flex justify-center mb-16">
        <div className="bg-slate-200/50 p-1.5 rounded-2xl inline-flex relative border border-slate-200">
          {periods.map((period) => (
            <button
              key={period}
              onClick={() => setBillingPeriod(period)}
              className={`relative z-10 px-6 sm:px-10 py-3.5 rounded-xl font-bold text-sm sm:text-base transition-all duration-300 ${
                billingPeriod === period
                  ? "text-[#0F172A] shadow-md bg-white border border-slate-100"
                  : "text-slate-500 hover:text-slate-700"
              }`}
            >
              {period}
            </button>
          ))}
        </div>
      </div>

      {/* Карточки тарифов */}
      <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-24">
        {plans.map((plan, i) => {
          const currentPrice = plan.prices[billingPeriod];
          return (
            <div
              key={i}
              className={`bg-white rounded-[2.5rem] p-8 md:p-10 border ${
                plan.isPopular
                  ? "border-[#84CC16] shadow-2xl shadow-lime-500/20 scale-100 lg:scale-105 relative z-10"
                  : "border-slate-200 shadow-lg hover:border-slate-300"
              } flex flex-col transition-all duration-300`}
            >
              {plan.isPopular && (
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-[#84CC16] text-white text-sm font-bold px-6 py-2.5 rounded-full shadow-lg border-4 border-white">
                  Выбор пользователей
                </div>
              )}

              <div className="flex items-center gap-4 mb-6 mt-2">
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 ${
                    plan.isPopular
                      ? "bg-[#84CC16] text-white shadow-lg shadow-lime-500/30"
                      : "bg-slate-100 text-slate-500"
                  }`}
                >
                  <plan.icon size={28} />
                </div>
                <h3 className="text-2xl font-extrabold text-[#0F172A]">
                  {plan.name}
                </h3>
              </div>

              <p className="text-slate-500 mb-8 min-h-[3rem] leading-relaxed">
                {plan.desc}
              </p>

              <div className="mb-8 bg-slate-50 rounded-3xl p-6 border border-slate-100">
                <div className="flex items-baseline gap-2">
                  <span className="text-6xl font-black text-[#65A30D] tracking-tighter">
                    {plan.speed}
                  </span>
                  <div className="text-left">
                    <div className="text-lg font-bold text-[#0F172A]">
                      Мбит/с
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feat, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 text-slate-700 font-medium"
                  >
                    <CheckCircle2
                      size={20}
                      className="text-[#84CC16] shrink-0 mt-0.5"
                    />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <div className="pt-8 border-t border-slate-100 mb-8 mt-auto">
                <div className="flex items-end gap-2 mb-2">
                  <span className="text-4xl font-extrabold text-[#0F172A]">
                    {currentPrice.monthly} ₽
                  </span>
                  <span className="text-slate-500 font-medium pb-1">/ мес</span>
                </div>
                <div className="flex items-center justify-between text-sm min-h-[1.5rem]">
                  <span className="text-slate-400">
                    Списание: {currentPrice.total} ₽
                  </span>
                  {currentPrice.note !== "Оплата ежемесячно" && (
                    <span className="text-[#F97316] font-bold bg-orange-50 px-2.5 py-1 rounded-md">
                      {currentPrice.note}
                    </span>
                  )}
                </div>
              </div>

              <Button
                className="w-full text-lg py-4"
                variant={plan.isPopular ? "primary" : "outline"}
              >
                Подключить
              </Button>
            </div>
          );
        })}
      </div>

      {/* Дополнительные услуги */}
      <SectionHeading title="Дополнительные услуги" />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
        {[
          {
            icon: Server,
            title: "Статический IP",
            desc: "Постоянный адрес в сети",
          },
          { icon: Tv, title: "Интерактивное ТВ", desc: "HD каналы и кино" },
          { icon: Search, title: "Видеонаблюдение", desc: "Камеры онлайн" },
          { icon: Wifi, title: "Оборудование", desc: "Покупка или аренда" },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-2xl border border-slate-200 text-center hover:shadow-lg transition-shadow cursor-pointer group"
          >
            <div className="w-12 h-12 mx-auto bg-slate-50 rounded-xl flex items-center justify-center text-[#84CC16] mb-4 group-hover:scale-110 transition-transform">
              <item.icon size={24} />
            </div>
            <h4 className="font-bold text-[#0F172A] text-sm md:text-base mb-1">
              {item.title}
            </h4>
            <p className="text-xs text-slate-500">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// 3. ОБОРУДОВАНИЕ
const EquipmentPage = () => {
  const [mode, setMode] = useState("buy");
  const [category, setCategory] = useState("routers");

  const categories = [
    { id: "routers", name: "Wi-Fi роутеры" },
    { id: "tv", name: "ТВ-приставки" },
    { id: "parts", name: "Комплектующие" },
  ];

  return (
    <div className="pt-32 pb-24 px-4 max-w-7xl mx-auto min-h-screen">
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-10 md:p-16 mb-12 flex flex-col md:flex-row items-center justify-between text-white overflow-hidden relative">
        <div className="relative z-10 max-w-xl">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Оборудование,
            <br />
            которое просто работает
          </h1>
          <p className="text-lg text-slate-300 mb-8">
            Мы подбираем, настраиваем и обслуживаем. Вы пользуетесь — без
            сложностей.
          </p>
          <Button>Подобрать оборудование</Button>
        </div>
        <div className="hidden md:block relative z-10 mt-8 md:mt-0">
          <Wifi
            size={120}
            className="text-[#84CC16] opacity-80 animate-pulse"
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6 justify-between items-center mb-10">
        <div className="flex bg-slate-100 p-1 rounded-xl">
          <button
            onClick={() => setMode("buy")}
            className={`px-6 py-2 rounded-lg font-bold transition-colors ${
              mode === "buy"
                ? "bg-white text-[#0F172A] shadow-sm"
                : "text-slate-500"
            }`}
          >
            Купить
          </button>
          <button
            onClick={() => setMode("rent")}
            className={`px-6 py-2 rounded-lg font-bold transition-colors ${
              mode === "rent"
                ? "bg-white text-[#0F172A] shadow-sm"
                : "text-slate-500"
            }`}
          >
            В аренду
          </button>
        </div>
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-sm font-bold border transition-colors ${
                category === cat.id
                  ? "border-[#84CC16] text-[#65A30D] bg-lime-50"
                  : "border-slate-200 text-slate-600 hover:bg-slate-50"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Пример карточек оборудования */}
        {[
          {
            name: "Wi-Fi роутер AX1800",
            speed: "До 1 Гбит/с",
            cover: "До 100 м²",
            price: 4900,
            rent: 150,
          },
          {
            name: "Wi-Fi роутер AX3000",
            speed: "До 2.5 Гбит/с",
            cover: "До 150 м²",
            price: 6900,
            rent: 200,
            badge: "Хит продаж",
          },
          {
            name: "Mesh система (2 шт)",
            speed: "До 1 Гбит/с",
            cover: "До 250 м²",
            price: 9900,
            rent: 300,
          },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white p-8 rounded-3xl border border-slate-200 hover:shadow-xl transition-shadow relative"
          >
            {item.badge && (
              <span className="absolute top-4 right-4 bg-[#F97316] text-white text-xs font-bold px-3 py-1 rounded-full">
                {item.badge}
              </span>
            )}
            <div className="h-40 bg-slate-50 rounded-2xl mb-6 flex items-center justify-center">
              <Server size={64} className="text-slate-300" />
            </div>
            <h3 className="text-xl font-bold text-[#0F172A] mb-4">
              {item.name}
            </h3>
            <div className="space-y-2 mb-6 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#84CC16]" /> Скорость{" "}
                {item.speed}
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[#84CC16]" /> Покрытие{" "}
                {item.cover}
              </div>
            </div>
            <div className="text-3xl font-extrabold text-[#0F172A] mb-6">
              {mode === "buy" ? `${item.price} ₽` : `${item.rent} ₽/мес`}
            </div>
            <Button variant="outline" className="w-full">
              Добавить к подключению
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

// 4. ПОДДЕРЖКА
const SupportPage = () => {
  const faqs = [
    {
      q: "Как оплатить услуги без комиссии?",
      a: "Оплатить услуги без комиссии можно в Личном кабинете банковской картой или через СБП, а также с помощью нашего Telegram-бота.",
    },
    {
      q: "Как подключить статический IP?",
      a: "Услугу можно активировать в Личном кабинете в разделе 'Дополнительные услуги' или позвонив в техническую поддержку.",
    },
    {
      q: "Что делать, если пропал интернет?",
      a: "Перезагрузите роутер (выключите из розетки на 30 секунд). Если проблема сохраняется, проверьте баланс в Личном кабинете или напишите нам в чат.",
    },
  ];

  return (
    <div className="pt-32 pb-24 px-4 max-w-4xl mx-auto min-h-screen">
      <SectionHeading
        title="Служба поддержки"
        subtitle="Мы всегда на связи. Найдите ответы на частые вопросы или свяжитесь с нами удобным способом."
      />

      <div className="grid md:grid-cols-2 gap-6 mb-16">
        <div className="bg-[#84CC16] p-8 rounded-3xl text-white shadow-lg shadow-lime-500/30 flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-bold mb-2">Личный кабинет</h3>
            <p className="opacity-90 mb-6">
              Управление услугами, оплата и статистика в одном месте.
            </p>
          </div>
          <Button
            variant="outline"
            className="bg-transparent border-white text-white hover:bg-white hover:text-[#84CC16]"
          >
            Войти в кабинет
          </Button>
        </div>
        <div className="bg-blue-500 p-8 rounded-3xl text-white shadow-lg shadow-blue-500/30 flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-bold mb-2">Telegram-бот</h3>
            <p className="opacity-90 mb-6">
              Быстрая проверка баланса, пополнение и связь с поддержкой.
            </p>
          </div>
          <Button
            variant="outline"
            className="bg-transparent border-white text-white hover:bg-white hover:text-blue-500"
          >
            Запустить бота
          </Button>
        </div>
      </div>

      <h3 className="text-2xl font-bold text-[#0F172A] mb-6">Частые вопросы</h3>
      <div className="space-y-4 mb-16">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-[#84CC16] transition-colors cursor-pointer"
          >
            <h4 className="font-bold text-lg text-[#0F172A] flex justify-between items-center mb-2">
              {faq.q} <ChevronDown className="text-slate-400" />
            </h4>
            <p className="text-slate-600">{faq.a}</p>
          </div>
        ))}
      </div>

      <h3 className="text-2xl font-bold text-[#0F172A] mb-6">Документы</h3>
      <div className="bg-white rounded-3xl border border-slate-200 p-2">
        {[
          "Публичная оферта",
          "Правила пользования",
          "Политика обработки персональных данных",
        ].map((doc, i) => (
          <div
            key={i}
            className="flex items-center justify-between p-4 hover:bg-slate-50 rounded-2xl cursor-pointer transition-colors border-b last:border-0 border-slate-100"
          >
            <div className="flex items-center gap-3 text-slate-700 font-medium">
              <FileText className="text-[#84CC16]" size={20} /> {doc}
            </div>
            <ArrowRight size={16} className="text-slate-400" />
          </div>
        ))}
      </div>
    </div>
  );
};

// --- ГЛАВНЫЙ КОМПОНЕНТ APP ---
export default function CybercomApp() {
  const [currentPage, setCurrentPage] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Добавляем шрифт Manrope динамически
  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;700;800&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
    return () => document.head.removeChild(link);
  }, []);

  const navigate = (page) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { id: "home", label: "Главная" },
    { id: "homenet", label: "Для дома" },
    { id: "business", label: "Для бизнеса" },
    { id: "video", label: "Видеонаблюдение" },
    { id: "equipment", label: "Оборудование" },
    { id: "support", label: "Поддержка" },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-['Manrope',sans-serif] selection:bg-[#84CC16] selection:text-white">
      {/* HEADER / NAVBAR */}
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          {/* Logo */}
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => navigate("home")}
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#65A30D] to-[#84CC16] flex items-center justify-center shadow-md">
              <Wifi className="text-white" size={24} />
            </div>
            <span className="text-2xl font-extrabold text-[#0F172A] tracking-tight">
              Cybercom
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => navigate(link.id)}
                className={`px-4 py-2 rounded-lg font-bold text-sm transition-colors ${
                  currentPage === link.id
                    ? "text-[#84CC16] bg-lime-50"
                    : "text-slate-600 hover:text-[#0F172A] hover:bg-slate-100"
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+78000000000"
              className="flex items-center gap-2 font-bold text-slate-700 hover:text-[#84CC16] transition-colors"
            >
              <PhoneCall size={18} /> 8 (800) 000-00-00
            </a>
            <Button variant="primary" className="py-2 px-5 text-sm">
              <UserCircle size={18} /> Кабинет
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-slate-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-20 left-0 w-full bg-white border-b border-slate-200 shadow-xl py-4 px-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => navigate(link.id)}
                className={`text-left px-4 py-3 rounded-xl font-bold text-lg ${
                  currentPage === link.id
                    ? "bg-lime-50 text-[#84CC16]"
                    : "text-slate-700"
                }`}
              >
                {link.label}
              </button>
            ))}
            <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col gap-4">
              <Button className="w-full">Личный кабинет</Button>
            </div>
          </div>
        )}
      </header>

      {/* MAIN CONTENT AREA */}
      <main>
        {currentPage === "home" && <HomePage navigate={navigate} />}
        {currentPage === "homenet" && <HomeNetPage />}
        {currentPage === "business" && (
          <div className="pt-32 pb-24 text-center min-h-screen">
            <SectionHeading
              title="Интернет для бизнеса"
              subtitle="Надежные решения с SLA, выделенными IP и приоритетной поддержкой 24/7."
            />
            <Button variant="primary" onClick={() => navigate("support")}>
              Связаться с менеджером
            </Button>
          </div>
        )}
        {currentPage === "video" && (
          <div className="pt-32 pb-24 text-center min-h-screen">
            <SectionHeading
              title="Городское видеонаблюдение"
              subtitle="Доступ к более чем 300 уличным камерам для вашей безопасности."
            />
          </div>
        )}
        {currentPage === "equipment" && <EquipmentPage />}
        {currentPage === "support" && <SupportPage />}
      </main>

      {/* FOOTER */}
      <footer className="bg-[#0F172A] text-slate-400 py-16">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-full bg-[#84CC16] flex items-center justify-center">
                <Wifi className="text-white" size={16} />
              </div>
              <span className="text-xl font-extrabold text-white">
                Cybercom
              </span>
            </div>
            <p className="text-sm mb-6">
              Надежный интернет-провайдер с человеческим лицом. Подключаем,
              настраиваем, заботимся.
            </p>
            <div className="flex gap-4">
              {/* Соцсети */}
              <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#84CC16] text-white cursor-pointer transition-colors">
                <MessageCircle size={18} />
              </div>
              <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-500 text-white cursor-pointer transition-colors">
                <Tv size={18} />
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Клиентам</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => navigate("homenet")}
                  className="hover:text-white transition-colors"
                >
                  Интернет для дома
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("business")}
                  className="hover:text-white transition-colors"
                >
                  Для бизнеса
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("video")}
                  className="hover:text-white transition-colors"
                >
                  Видеонаблюдение
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("equipment")}
                  className="hover:text-white transition-colors"
                >
                  Оборудование
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Компания</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => navigate("support")}
                  className="hover:text-white transition-colors"
                >
                  Служба поддержки
                </button>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Документы и оферта
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Контакты
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Личный кабинет
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Контакты</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <PhoneCall size={18} className="text-[#84CC16]" /> 8 (800)
                000-00-00
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={18} className="text-[#84CC16]" /> г. Москва, ул.
                Примерная, д. 1
              </li>
              <li className="text-xs text-slate-500 pt-4">
                Ежедневно с 9:00 до 18:00 без выходных
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 mt-12 pt-8 border-t border-slate-800 text-xs text-center flex flex-col md:flex-row justify-between items-center">
          <p>
            © 2026 Cybercom. Все права защищены. Разработано в рамках дипломного
            проекта.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">
              Политика конфиденциальности
            </a>
            <a href="#" className="hover:text-white">
              Карта сайта
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
