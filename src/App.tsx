import { Phone, Mail, MapPin, BookOpen, GraduationCap, ClipboardList, FileText, Users, Home, Users as Users2, Beaker, Building2, Utensils, Dumbbell } from 'lucide-react';
import { useState } from 'react';

function App() {
  const [activePage, setActivePage] = useState('admission');

  const navItems = [
    { id: 'home', label: 'Главная', icon: Home },
    { id: 'admission', label: 'Абитуриентам', icon: GraduationCap },
    { id: 'students', label: 'Студентам', icon: BookOpen },
    { id: 'teachers', label: 'Преподавателям', icon: Users2 },
    { id: 'about', label: 'Об Университете' },
    { id: 'postgraduate', label: 'Аспирантура' },
    { id: 'science', label: 'Наука', icon: Beaker },
  ];

  const specialties = [
    { name: 'Программная инженерия', code: '09.03.04', minScore: 245, budget: 25, paid: 15 },
    { name: 'Информационные системы и технологии', code: '09.03.02', minScore: 238, budget: 30, paid: 20 },
    { name: 'Экономика', code: '38.03.01', minScore: 235, budget: 35, paid: 25 },
    { name: 'Юриспруденция', code: '40.03.01', minScore: 242, budget: 40, paid: 30 },
    { name: 'Строительство', code: '08.03.01', minScore: 228, budget: 45, paid: 35 },
    { name: 'Менеджмент', code: '38.03.02', minScore: 232, budget: 30, paid: 25 },
  ];

  const exams = [
    { specialty: 'Программная инженерия', subjects: ['Математика', 'Русский язык', 'Информатика'] },
    { specialty: 'Экономика', subjects: ['Математика', 'Русский язык', 'Обществознание'] },
    { specialty: 'Юриспруденция', subjects: ['Обществознание', 'Русский язык', 'История'] },
    { specialty: 'Строительство', subjects: ['Математика', 'Русский язык', 'Физика'] },
  ];

  const admissionRules = [
    'Прием документов: с 20 июня по 25 июля',
    'Зачисление на бюджет: до 3 августа',
    'Зачисление на платное: до 20 августа',
    'Необходимые документы: паспорт, аттестат, СНИЛС, фотографии 3х4',
    'Можно подать документы онлайн через личный кабинет абитуриента',
    'Льготы для победителей олимпиад и медалистов',
  ];

  const infrastructure = [
    { title: 'Общежитие', description: 'Современное студенческое общежитие с комфортными условиями проживания, расположенное на территории университета', icon: Building2 },
    { title: 'Спортивный комплекс', description: 'Полностью оборудованный спортзал с тренажерами, волейбольная площадка, теннисные корты и физкультурное оборудование', icon: Dumbbell },
    { title: 'Столовая и буфеты', description: 'Несколько столовых и буфетов с разнообразным меню, здоровое питание по доступным ценам', icon: Utensils },
  ];

  const postgraduateInfo = {
    meetings: [
      { date: '15 сентября', time: '14:00', location: 'Корпус Б, аудитория 301', topic: 'Вводное собрание аспирантов' },
      { date: '22 сентября', time: '15:00', location: 'Корпус Б, аудитория 301', topic: 'Информация о программах обучения' },
      { date: '29 сентября', time: '14:00', location: 'Корпус Б, аудитория 301', topic: 'Консультация руководителей программ' },
    ]
  };

  const renderPage = () => {
    if (activePage === 'about') {
      return (
        <>
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border-t-4 border-blue-700">
            <h2 className="text-3xl font-bold text-blue-950 mb-6">Инфраструктура университета</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {infrastructure.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border-l-4 border-blue-700">
                    <div className="flex items-center gap-3 mb-4">
                      <Icon className="w-8 h-8 text-blue-700" />
                      <h3 className="font-bold text-lg text-blue-950">{item.title}</h3>
                    </div>
                    <p className="text-gray-700">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      );
    }

    if (activePage === 'postgraduate') {
      return (
        <>
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border-t-4 border-blue-700">
            <h2 className="text-3xl font-bold text-blue-950 mb-6">Информация об Аспирантуре</h2>
            <p className="text-lg text-gray-700 mb-6">Добро пожаловать в отдел аспирантуры ЮЗГУ. Мы предлагаем качественное образование по различным научным направлениям.</p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-700">
                <Phone className="w-8 h-8 text-blue-700 mb-3" />
                <h3 className="font-semibold text-lg text-blue-950 mb-2">Телефон</h3>
                <p className="text-gray-700">+7 (4712) 50-48-15</p>
                <p className="text-sm text-gray-600 mt-2">Отдел аспирантуры</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-700">
                <Mail className="w-8 h-8 text-blue-700 mb-3" />
                <h3 className="font-semibold text-lg text-blue-950 mb-2">Email</h3>
                <p className="text-gray-700">graduate@swsu.ru</p>
                <p className="text-sm text-gray-600 mt-2">Ответим в течение дня</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-700">
                <MapPin className="w-8 h-8 text-blue-700 mb-3" />
                <h3 className="font-semibold text-lg text-blue-950 mb-2">Офис</h3>
                <p className="text-gray-700">Корпус Б, каб. 215</p>
                <p className="text-sm text-gray-600 mt-2">Пн-Пт: 9:00 - 17:00</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 border-t-4 border-blue-700">
            <h2 className="text-3xl font-bold text-blue-950 mb-6">Расписание собраний аспирантов</h2>
            <div className="space-y-4">
              {postgraduateInfo.meetings.map((meeting, index) => (
                <div key={index} className="flex flex-col md:flex-row items-start md:items-center justify-between bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg border-l-4 border-blue-700">
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-blue-950 mb-2">{meeting.topic}</h3>
                    <div className="flex flex-wrap gap-4 text-gray-700">
                      <div className="flex items-center gap-2">
                        <FileText className="w-5 h-5 text-blue-700" />
                        <span>{meeting.date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <ClipboardList className="w-5 h-5 text-blue-700" />
                        <span>{meeting.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-5 h-5 text-blue-700" />
                        <span>{meeting.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      );
    }

    if (activePage !== 'admission') {
      return (
        <div className="bg-white rounded-2xl shadow-xl p-12 text-center">
          <p className="text-2xl text-gray-600">Содержание страницы "{navItems.find(item => item.id === activePage)?.label}" будет добавлено позже</p>
        </div>
      );
    }

    return (
      <>
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border-t-4 border-blue-700">
          <h2 className="text-3xl font-bold text-blue-950 mb-6 flex items-center gap-3">
            <MapPin className="w-8 h-8 text-blue-700" />
            Адрес университета
          </h2>
          <div className="bg-blue-50 p-6 rounded-xl">
            <p className="text-lg text-gray-800">
              <span className="font-semibold">Город:</span> Курск
            </p>
            <p className="text-lg text-gray-800 mt-2">
              <span className="font-semibold">Адрес:</span> улица 50 лет Октября, 94
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border-t-4 border-blue-700">
          <h2 className="text-3xl font-bold text-blue-950 mb-6 flex items-center gap-3">
            <BookOpen className="w-8 h-8 text-blue-700" />
            Специальности и проходные баллы 2026
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-blue-700 text-white">
                  <th className="px-6 py-4 text-left rounded-tl-lg">Специальность</th>
                  <th className="px-6 py-4 text-left">Код</th>
                  <th className="px-6 py-4 text-center">Проходной балл</th>
                  <th className="px-6 py-4 text-center">Бюджет</th>
                  <th className="px-6 py-4 text-center rounded-tr-lg">Платное</th>
                </tr>
              </thead>
              <tbody>
                {specialties.map((specialty, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-blue-50' : 'bg-white'}>
                    <td className="px-6 py-4 font-medium text-gray-900">{specialty.name}</td>
                    <td className="px-6 py-4 text-gray-700">{specialty.code}</td>
                    <td className="px-6 py-4 text-center font-bold text-blue-700">{specialty.minScore}</td>
                    <td className="px-6 py-4 text-center text-gray-700">{specialty.budget}</td>
                    <td className="px-6 py-4 text-center text-gray-700">{specialty.paid}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border-t-4 border-blue-700">
          <h2 className="text-3xl font-bold text-blue-950 mb-6 flex items-center gap-3">
            <ClipboardList className="w-8 h-8 text-blue-700" />
            Необходимые экзамены ЕГЭ
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {exams.map((exam, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border-l-4 border-blue-700">
                <h3 className="font-bold text-lg text-blue-950 mb-3">{exam.specialty}</h3>
                <ul className="space-y-2">
                  {exam.subjects.map((subject, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-700">
                      <span className="w-2 h-2 bg-blue-700 rounded-full"></span>
                      {subject}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border-t-4 border-blue-700">
          <h2 className="text-3xl font-bold text-blue-950 mb-6 flex items-center gap-3">
            <FileText className="w-8 h-8 text-blue-700" />
            Правила приема
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {admissionRules.map((rule, index) => (
              <div key={index} className="flex items-start gap-3 bg-blue-50 p-4 rounded-lg">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-700 text-white rounded-full flex items-center justify-center font-bold">
                  {index + 1}
                </div>
                <p className="text-gray-700 pt-1">{rule}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border-t-4 border-blue-700">
          <h2 className="text-3xl font-bold text-blue-950 mb-6 flex items-center gap-3">
            <Users className="w-8 h-8 text-blue-700" />
            Списки поступивших
          </h2>
          <div className="bg-gradient-to-r from-blue-700 to-blue-600 text-white p-8 rounded-xl text-center">
            <p className="text-xl mb-4">Списки поступивших публикуются после завершения приемной кампании</p>
            <p className="text-lg text-blue-100">Следите за обновлениями в личном кабинете абитуриента</p>
            <button className="mt-6 bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors shadow-lg">
              Проверить статус заявления
            </button>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-900 to-blue-700 rounded-2xl shadow-xl p-8 text-white">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <Phone className="w-8 h-8" />
            Контактная информация для абитуриентов
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <Phone className="w-8 h-8 mb-3" />
              <h3 className="font-semibold text-lg mb-2">Телефон</h3>
              <p>+7 (4712) 50-48-00</p>
              <p className="text-sm text-blue-100 mt-1">Приемная комиссия</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <Mail className="w-8 h-8 mb-3" />
              <h3 className="font-semibold text-lg mb-2">Email</h3>
              <p>priem@swsu.ru</p>
              <p className="text-sm text-blue-100 mt-1">Ответим в течение дня</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <MapPin className="w-8 h-8 mb-3" />
              <h3 className="font-semibold text-lg mb-2">Приемная комиссия</h3>
              <p>Корпус А, каб. 105</p>
              <p className="text-sm text-blue-100 mt-1">Пн-Пт: 9:00 - 18:00</p>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-slate-100">
      <header className="bg-gradient-to-r from-blue-950 to-blue-800 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-6 border-b border-blue-700">
            <div>
              <h1 className="text-4xl font-bold">ЮЗГУ</h1>
              <p className="text-blue-100">Юго-Западный Государственный университет</p>
            </div>
            <GraduationCap className="w-20 h-20 text-blue-300" />
          </div>

          <nav className="flex flex-wrap gap-1 py-4">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setActivePage(item.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                    activePage === item.id
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'text-blue-100 hover:bg-blue-700'
                  }`}
                >
                  {Icon && <Icon className="w-5 h-5" />}
                  {item.label}
                </button>
              );
            })}
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {renderPage()}
      </main>

      <footer className="bg-blue-950 text-white mt-12 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg mb-2">© 2026 Юго-Западный Государственный университет</p>
          <p className="text-blue-300">Курск, улица 50 лет Октября, 94</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
