export type Language = "ru" | "en";

export type ExperienceItem = {
  years: string;
  company: string;
  title: string;
};

export type ProjectCard = {
  caseStudyId: string;
  title: string;
  desc: string;
  img: string;
  teaserVideo?: string;
  teaserPoster?: string;
  tags: string[];
};

export type CaseStudy = {
  id: string;
  title: string;
  subtitle: string;
  summary: string;
  img: string;
  teaserVideo?: string;
  teaserPoster?: string;
  artifactImages?: string[];
  role: string;
  team: string;
  timeline: string;
  problem: string;
  solution: string;
  impact: string;
  starBlock?: {
    situation: string;
    task: string;
    actions: string[];
    result: string;
    resultItems?: Array<{ label: string; href: string; note?: string }>;
  };
  resultBlock?: {
    title: string;
    intro?: string;
    items: Array<{ label: string; href?: string; note?: string }>;
    roleText: string;
    contextText: string;
    goalText: string;
    scaleText: string;
    teamsText: string;
    processText: string;
    toolsText: string;
    challengesTitle: string;
    challengesItems: string[];
  };
};

export type Profile = {
  fullName: string;
  role: string;
  headline: string;
  descriptor: string;
  location: string;
  availability: string;
  email: string;
  callToAction: string;
  callLink: string;
};

export type Outcome = {
  metric: string;
  details: string;
};

export type SocialLink = {
  label: string;
  href: string;
};

export type UiText = {
  navProjects: string;
  navExperience: string;
  outcomesTitle: string;
  requestResume: string;
  resumeAria: string;
  projectsOverline: string;
  projectsTitle: string;
  projectsLead: string;
  metaRole: string;
  metaTeam: string;
  metaTimeline: string;
  metaProblem: string;
  metaSolution: string;
  metaImpact: string;
  openCaseStudy: string;
  languageToggle: string;
  callSubject: string;
  resumeSubject: string;
  caseStudySubject: string;
  footerLeft: string;
};

export type PortfolioContent = {
  profile: Profile;
  outcomes: Outcome[];
  experience: ExperienceItem[];
  projectCards: ProjectCard[];
  socialLinks: SocialLink[];
  caseStudies: CaseStudy[];
  ui: UiText;
};

export const defaultLanguage: Language = "ru";

export const contentByLanguage: Record<Language, PortfolioContent> = {
  ru: {
    profile: {
      fullName: "Роман Соколов",
      role: "Проектный менеджер",
      headline:
        "Веду цифровые проекты с\u00A0фокусом на\u00A0результат, процессы и\u00A0людей. Помогаю находить решения на\u00A0стыке технологий, маркетинга и\u00A0дизайна.",
      descriptor: "",
      location: "Based in RU",
      availability: "Available worldwide",
      email: "sokolovroman@mail.ru",
      callToAction: "Выбрать время для созвона",
      callLink: "https://calink.ru/RomanSokolov",
    },
    outcomes: [
      { metric: "+23%", details: "рост вовлеченности: увеличена средняя длительность сессии" },
      { metric: "-18%", details: "сокращена стоимость привлечения клиента (CAC)" },
      { metric: "+3%", details: "рост операционной эффективности загрузки вагонов на ЗСМК" },
    ],
    experience: [
      { years: "2024 ->", company: "ЕВРАЗ", title: "Руководитель проектов" },
      { years: "2022 -> 2023", company: "Perx", title: "Руководитель проектов" },
      { years: "2020 -> 2022", company: "Аквелон", title: "Руководитель проектов" },
    ],
    projectCards: [
      {
        caseStudyId: "evraz-oms",
        title: "Система управления заказами (OMS)",
        desc: "Автоматизировали исполнение заказов и разгрузили 1С ERP.",
        img: "/project-2.svg",
        teaserVideo: "/evraz_video_crop.mp4",
        teaserPoster: "/video-posters/evraz-video-poster.webp",
        tags: ["#ЕВРАЗ", "1С ERP", "MES", "Camunda", "Kafka"],
      },
      {
        caseStudyId: "exeed",
        title: "EXEED",
        desc: "Реализовал 7 проектов различной сложности на сайте импортера exeed.ru и его 150 дилеров.",
        img: "/project-1.svg",
        teaserVideo: "/exeed-banner-video-desktop.mp4",
        teaserPoster: "/video-posters/exeed-video-poster.webp",
        tags: ["#Perx", "Automotive", "UI/UX", "Web", "Business Analyze", "Product"],
      },
      {
        caseStudyId: "cortex",
        title: "Cortex - Threat Intelligence Hub",
        desc: "Единое рабочее место для корреляции сигналов, триажа и настройки алертов.",
        img: "/project-1.svg",
        tags: ["#threat-intel", "#enterprise", "#product"],
      },
      {
        caseStudyId: "atlas",
        title: "Atlas - Compliance Control Center",
        desc: "Управление контрольными требованиями, доказательствами и аудитными процессами.",
        img: "/project-2.svg",
        tags: ["#compliance", "#automation", "#saas"],
      },
      {
        caseStudyId: "lumen",
        title: "Lumen - Risk Posture Monitor",
        desc: "Мониторинг отклонений, рисков и выполнения мер по их снижению в реальном времени.",
        img: "/project-1.svg",
        tags: ["#risk", "#monitoring", "#ops"],
      },
      {
        caseStudyId: "pulse",
        title: "Pulse - Demo Product Insights",
        desc: "Демо-кейс по запуску панели продуктовых инсайтов для команд delivery и аналитики.",
        img: "/project-2.svg",
        tags: ["#demo", "#analytics", "#delivery"],
      },
    ],
    socialLinks: [
      { label: "Telegram", href: "https://t.me/SokolovRoma" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/rsokolov/" },
      { label: "Написать письмо", href: "mailto:sokolovroman@mail.ru" },
    ],
    caseStudies: [
      {
        id: "evraz-oms",
        title: "Система управления заказами (OMS)",
        subtitle: "Автоматизировали исполнение заказов и разгрузили 1С ERP",
        summary:
          "OMS уже работал, но операционный контур всё ещё держался на людях и логике в 1С. Мы перевели исполнение в систему и снизили нагрузку на 1С ERP.",
        img: "/project-2.svg",
        teaserVideo: "/evraz_video_crop.mp4",
        teaserPoster: "/video-posters/evraz-video-poster.webp",
        role: "Руководитель проектов",
        team: "Бизнес-заказчики, ИТ-команды, подрядчики",
        timeline: "2024 -> настоящее время",
        problem:
          "Автоматизация оставалась частичной: ключевые этапы зависели от ручных действий, а 1С ERP получал лишнюю операционную нагрузку.",
        solution:
          "Зафиксировали критерии автоисполнения, приоритизировали сценарии, стабилизировали релизный контур и усилили эксплуатацию (мониторинг, алерты, инциденты).",
        impact:
          "12.01.2025 вышли в опытную эксплуатацию и подтвердили эффект на реальных объёмах: меньше ручных касаний, выше доля автоисполнения OMS и ниже зависимость от 1С.",
        starBlock: {
          situation:
            "OMS уже был внедрён, но значимая часть исполнения заказов оставалась в ручном контуре и логике 1С.",
          task:
            "Увеличить долю автоисполнения, снизить ручные касания и зависимость операционного контура от 1С.",
          actions: [
            "Зафиксировали критерии успеха, источники статусов и набор метрик автоисполнения.",
            "Разложили поток заказов на сценарии и приоритизировали их по влиянию и зависимостям.",
            "Стабилизировали delivery и эксплуатацию: релизы, мониторинг, алерты, разбор инцидентов.",
          ],
          result:
            "12.01.2025 вышли в опытную эксплуатацию: подтвердили снижение ручных касаний и рост доли автоисполнения OMS.",
        },
        resultBlock: {
          title: "Что сделали",
          intro:
            "Сфокусировались на измеримом операционном эффекте и предсказуемой работе в проде.",
          roleText:
            "Отвечал за цели и критерии успеха, roadmap, синхронизацию бизнеса и IT, релизы и риски интеграций, эксплуатационную готовность.",
          contextText:
            "OMS был внедрён, но значимая часть потока заказов оставалась в ручном контуре и логике 1С. Это замедляло цикл сделки и повышало стоимость процесса при росте объёма.",
          goalText:
            "Увеличить долю автоисполнения OMS, сократить ручные касания и зависимость от 1С, выйти в опытную эксплуатацию 12.01.2025.",
          items: [
            { label: "Определили успех: что считаем автоисполнением, какие статусы берём из системы и какими метриками меряем результат." },
            { label: "Разложили поток заказов на сценарии: типы, условия, исключения и зависимости; проставили приоритеты «сейчас/позже/зависит от вендора»." },
            { label: "Стабилизировали delivery: релизный график, контроль интеграционных рисков, предсказуемые изменения в проде." },
            { label: "Усилили эксплуатацию: мониторинг, алерты, наблюдаемость и регулярный разбор инцидентов." },
            { label: "Зафиксировали границы этапа: сценарий «1 заказ -> несколько машин» вынесли в следующую волну как зависимость от релиза вендора." },
          ],
          scaleText: "Запуск в опытную эксплуатацию: 12.01.2025.",
          teamsText: "Бизнес, операционный контур, команды OMS, 1С ERP и интеграций.",
          processText: "Итерационная приоритизация сценариев + релизный контур с управлением рисками.",
          toolsText: "OMS, 1С ERP, интеграционные сервисы, мониторинг и алертинг.",
          challengesTitle: "Ключевые ограничения",
          challengesItems: [
            "Статусы и исполнение заказов зависели от дисциплины людей.",
            "1С ERP получал лишнюю операционную нагрузку.",
            "Релизы и инциденты могли превращаться в непредсказуемые сюрпризы.",
          ],
        },
      },
      {
        id: "exeed",
        title: "EXEED",
        subtitle: "7 проектов для exeed.ru и сети из 150 дилеров",
        summary:
          "Реализовал 7 проектов различной сложности на сайте импортера exeed.ru и его 150 дилеров.",
        img: "/project-1.svg",
        teaserVideo: "/exeed-banner-video-desktop.mp4",
        teaserPoster: "/video-posters/exeed-video-poster.webp",
        role: "Руководитель проекта",
        team: "Команда импортера и дилерская сеть",
        timeline: "Несколько релизов",
        problem: "Требовалось запускать инициативы разной сложности и масштаба для центрального сайта и дилеров.",
        solution: "Выстроен поток delivery от инициативы до релиза с координацией команд, требований и сроков.",
        impact: "7 реализованных проектов и ускоренный вывод изменений в продакшн по всей сети.",
        starBlock: {
          situation:
            "Импортерский сайт и сеть из ~150 дилеров требовали синхронного запуска инициатив разной сложности.",
          task:
            "Обеспечить предсказуемый выпуск цифровых сервисов и интеграций без срывов по срокам и качеству.",
          actions: [
            "Организовали delivery-поток: требования, постановка, синхронизация команд и контроль выполнения.",
            "Согласовали работу по интеграциям (фиды, API, лидогенерация) и снизили риски релизов.",
            "Запустили серию продуктовых инициатив для воронки выбора, расчёта и заявки.",
          ],
          result:
            "7 проектов выведены в продакшн, скорость внедрения изменений по сети дилеров выросла.",
          resultItems: [
            { label: "Трейд-ин калькулятор", href: "https://exeed.ru/calculate-trade-in/" },
            { label: "Сервис лидогенерации из форм", href: "https://autocrm.ru/" },
            { label: "Сервис «Автомобили в наличии»", href: "https://exeed.ru/cars/" },
            { label: "Калькулятор технического обслуживания", href: "https://exeed.ru/maintenance_calculator/" },
            { label: "Виджет сравнения комплектаций", href: "https://exeed.ru/compare/" },
            { label: "Виджет Model Range", href: "https://services.platform.prod.exeed.perx.ru/widgets/modelrange/" },
            { label: "Онлайн-магазин", href: "https://exeed.ru/cars/" },
          ],
        },
        resultBlock: {
          title: "Что сделал",
          roleText:
            "Project / Delivery Manager (веб + интеграции): требования -> ТЗ -> постановка -> контроль разработки -> проверка API -> запуск -> обучение контента.",
          contextText:
            "exeed.ru + ~150 дилерских сайтов. Один и тот же функционал должен жить в разных условиях, с разными версиями контента, интеграций и «а у нас тут особенный дилер, его трогать нельзя». И да, параллельно до 4 проектов.",
          goalText:
            "Усилить цифровую воронку: выбор авто -> расчёт -> заявка, и сделать это массово (импортёр + дилеры), не превратив релиз в сериал на 12 сезонов.",
          items: [
            { label: "Трейд-ин калькулятор", href: "https://exeed.ru/calculate-trade-in/", note: "совместно с Авито" },
            { label: "Сервис лидогенерации из форм", href: "https://autocrm.ru/", note: "совместно с Autocrm.ru" },
            { label: "Сервис «Автомобили в наличии»", href: "https://exeed.ru/cars/", note: "на базе фидов по стандарту Auto.ru" },
            { label: "Калькулятор технического обслуживания", href: "https://exeed.ru/maintenance_calculator/" },
            { label: "Виджет сравнения комплектаций", href: "https://exeed.ru/compare/" },
            { label: "Виджет «Model Range»", href: "https://services.platform.prod.exeed.perx.ru/widgets/modelrange/" },
          ],
          scaleText: "7 проектов, длительность: 250 ч/ч (~2 месяца) -> 800 ч/ч (~5 месяцев)",
          teamsText: "Команды 2–5 человек: dev, design, frontend, content, QA",
          processText: "Waterfall / Kanban",
          toolsText: "Wiki + Yandex Tracker / Redmine / YouGile",
          challengesTitle: "Сложности",
          challengesItems: [
            "Сеть дилеров: одинаковые требования, разные реальности.",
            "Интеграции и фиды: данные решают, будет ли фича работать вообще.",
            "Меняющиеся требования: около 50% проектов сдвигались из-за уточнений/изменений и первичных оценок.",
          ],
        },
      },
      {
        id: "kris",
        title: "KRIS - Incident Analysis",
        subtitle: "Рабочее пространство для high-load расследований",
        summary:
          "Интерфейс ведения кейсов с прозрачной ответственностью, фиксацией доказательств и удобной передачей задач между сменами.",
        img: "/project-2.svg",
        role: "Руководитель проекта",
        team: "PM, 4 инженера, QA",
        timeline: "4 месяца",
        problem: "Критичные инциденты зависали из-за разрозненности данных и неочевидной ответственности.",
        solution: "Введены таймлайн расследования, роли участников и структурированные статусы кейса.",
        impact: "Сократился цикл закрытия кейсов и улучшилась преемственность между сменами.",
        starBlock: {
          situation:
            "Расследования шли в условиях high-load, данные были разрознены, а ответственность между сменами терялась.",
          task:
            "Сократить цикл закрытия инцидентов и сделать передачу кейсов между сменами предсказуемой.",
          actions: [
            "Собрали единый таймлайн расследования и стандартизировали статусы кейса.",
            "Зафиксировали роли участников и правила эскалации на критичных этапах.",
            "Добавили структурированную фиксацию доказательств и handoff между сменами.",
          ],
          result:
            "Время закрытия кейсов сократилось, а преемственность между сменами стала стабильной и прозрачной.",
        },
      },
      {
        id: "cortex",
        title: "Cortex - Threat Intelligence Hub",
        subtitle: "Корреляция, триаж и настройка качества сигналов",
        summary:
          "Центральная консоль для обогащения сигналов, корреляции IOC и управления релевантностью оповещений.",
        img: "/project-1.svg",
        role: "Руководитель проекта",
        team: "2 PM, 6 инженеров, дата-аналитик",
        timeline: "8 месяцев",
        problem: "Шум в алертах снижал доверие и задерживал принятие решений командой SOC.",
        solution: "Добавлены показатели доверия, объяснимые корреляции и управление настройками прямо в потоке работы.",
        impact: "Повышено качество сигналов и ускорено принятие решений по реагированию.",
        starBlock: {
          situation:
            "SOC-команда работала в потоке шумных алертов, что снижало доверие к сигналам и замедляло реагирование.",
          task:
            "Повысить качество сигналов и ускорить принятие решений без усложнения ежедневной работы аналитиков.",
          actions: [
            "Внедрили показатели доверия и объяснимую корреляцию IOC.",
            "Добавили triage-поток и управление релевантностью алертов внутри рабочего контура.",
            "Настроили цикл обратной связи для корректировки правил и качества сигналов.",
          ],
          result:
            "Доля полезных сигналов выросла, а команда SOC стала быстрее принимать решения по реагированию.",
        },
      },
      {
        id: "atlas",
        title: "Atlas - Compliance Control Center",
        subtitle: "Связка политик и доказательств для аудита",
        summary:
          "Контур управления комплаенсом, который связывает требования, владельцев и подтверждающие артефакты.",
        img: "/project-2.svg",
        role: "Руководитель проекта",
        team: "PM, 5 инженеров",
        timeline: "5 месяцев",
        problem: "Подготовка к аудитам была ручной, долгой и не прозрачной по статусу.",
        solution: "Собраны шаблоны доказательств и автоматизирована маршрутизация задач по владельцам.",
        impact: "Снижены ручные затраты и повышена предсказуемость подготовки к проверкам.",
        starBlock: {
          situation:
            "Подготовка к аудитам шла вручную: данные и доказательства собирались долго и без прозрачного статуса.",
          task:
            "Сделать процесс подготовки к проверкам управляемым, повторяемым и менее зависимым от ручной координации.",
          actions: [
            "Связали требования, владельцев и доказательства в единый контур.",
            "Подготовили шаблоны артефактов и правила проверки полноты доказательной базы.",
            "Автоматизировали маршрутизацию задач и контроль статусов по владельцам.",
          ],
          result:
            "Ручная нагрузка снизилась, а подготовка к аудитам стала предсказуемой по срокам и качеству.",
        },
      },
      {
        id: "lumen",
        title: "Lumen - Risk Posture Monitor",
        subtitle: "Мониторинг отклонений и контроль ремедиации",
        summary:
          "Экран риск-позиции с приоритизацией отклонений и маршрутами действий для операционных команд.",
        img: "/project-1.svg",
        role: "Руководитель проекта",
        team: "PM, 4 инженера, эксперт по ИБ",
        timeline: "5 месяцев",
        problem: "Команды видели только снимок состояния, но не понимали приоритеты и ответственность.",
        solution: "Внедрены риск-бакеты, приоритеты и сценарии работы по устранению критичных отклонений.",
        impact: "Ускорена ремедиация критичных рисков и улучшена прозрачность для руководства.",
        starBlock: {
          situation:
            "Команды видели отклонения в posture, но не имели единой системы приоритетов и закреплённой ответственности.",
          task:
            "Дать операционным командам понятный порядок действий и ускорить ремедиацию критичных рисков.",
          actions: [
            "Сгруппировали отклонения по риск-бакетам и ввели приоритеты устранения.",
            "Определили маршруты ремедиации и зоны ответственности по типам рисков.",
            "Настроили мониторинг выполнения мер и видимость прогресса для руководства.",
          ],
          result:
            "Критичные риски стали закрываться быстрее, а статус ремедиации стал прозрачным для всех уровней управления.",
        },
      },
      {
        id: "pulse",
        title: "Pulse - Demo Product Insights",
        subtitle: "Панель продуктовых инсайтов для delivery-команд",
        summary:
          "Демо-кейс: собрали единый экран продуктовых метрик и статусов релизов, чтобы быстрее находить узкие места в delivery.",
        img: "/project-2.svg",
        role: "Руководитель проекта",
        team: "PM, аналитик, 3 инженера",
        timeline: "6 недель",
        problem:
          "Команды видели метрики в разных источниках и поздно замечали просадки по воронке и срокам релизов.",
        solution:
          "Собрали единый контур показателей, добавили сигналы отклонений и регламент weekly-review по действиям.",
        impact:
          "Сократилось время обнаружения проблем, а обсуждение решений стало опираться на единый набор данных.",
        starBlock: {
          situation:
            "Метрики продукта и delivery были разнесены по разным инструментам, из-за чего сигналы проблем приходили слишком поздно.",
          task:
            "Собрать единый обзорный контур и сократить время от обнаружения отклонения до согласованного действия команды.",
          actions: [
            "Определили единый список продуктовых и релизных метрик для weekly-review.",
            "Собрали дашборд с приоритизацией отклонений и быстрыми переходами к причинам.",
            "Встроили ритм обсуждений: сигнал -> гипотеза -> действие -> проверка эффекта.",
          ],
          result:
            "Проблемы стали фиксироваться раньше, а решения по улучшениям принимаются на едином наборе данных.",
        },
      },
    ],
    ui: {
      navProjects: "Проекты",
      navExperience: "Опыт",
      outcomesTitle: "Избранные достижения",
      requestResume: "Запросить резюме",
      resumeAria: "Запросить резюме по email",
      projectsOverline: "",
      projectsTitle: "Избранные проекты",
      projectsLead: "Практические кейсы по запуску и развитию цифровых продуктов.",
      metaRole: "Роль",
      metaTeam: "Команда",
      metaTimeline: "Срок",
      metaProblem: "Проблема",
      metaSolution: "Решение",
      metaImpact: "Результат",
      openCaseStudy: "Открыть кейс",
      languageToggle: "EN",
      callSubject: "Обсуждение проекта",
      resumeSubject: "Запрос резюме",
      caseStudySubject: "Запрос по кейсу",
      footerLeft: "2026 Проектный менеджер",
    },
  },
  en: {
    profile: {
      fullName: "Roman Sokolov",
      role: "Project Manager",
      headline:
        "I lead digital projects focused on outcomes, processes, and people. I help find solutions at the intersection of technology, marketing, and design.",
      descriptor: "",
      location: "Based in RU",
      availability: "Available worldwide",
      email: "sokolovroman@mail.ru",
      callToAction: "Book a call",
      callLink: "https://calink.ru/RomanSokolov",
    },
    outcomes: [
      { metric: "+23%", details: "engagement growth: increased average session duration" },
      { metric: "-18%", details: "reduced customer acquisition cost (CAC)" },
      { metric: "+3%", details: "increase in operational efficiency of railcar loading at WSMP" },
    ],
    experience: [
      { years: "2024 ->", company: "EVRAZ", title: "Project Manager" },
      { years: "2022 -> 2023", company: "Perx", title: "Project Manager" },
      { years: "2020 -> 2022", company: "Aquelon", title: "Project Manager" },
    ],
    projectCards: [
      {
        caseStudyId: "evraz-oms",
        title: "EVRAZ",
        desc: "Ensuring operation and development of production, sales, and corporate IT infrastructure management systems.",
        img: "/project-2.svg",
        teaserVideo: "/evraz_video_crop.mp4",
        teaserPoster: "/video-posters/evraz-video-poster.webp",
        tags: ["1С ERP", "MES", "Camunda", "Kafka"],
      },
      {
        caseStudyId: "exeed",
        title: "EXEED",
        desc: "Delivered 7 projects of varying complexity for exeed.ru and its network of 150 dealers.",
        img: "/project-1.svg",
        teaserVideo: "/exeed-banner-video-desktop.mp4",
        teaserPoster: "/video-posters/exeed-video-poster.webp",
        tags: ["#Perx", "Automotive", "UI/UX", "Web", "Business Analyze", "Product"],
      },
      {
        caseStudyId: "cortex",
        title: "Cortex - Threat Intelligence Hub",
        desc: "Unified analyst workspace with correlation, triage, and alert tuning.",
        img: "/project-1.svg",
        tags: ["#threat-intel", "#enterprise", "#product"],
      },
      {
        caseStudyId: "atlas",
        title: "Atlas - Compliance Control Center",
        desc: "Policy evidence mapping and workflow automation for audits.",
        img: "/project-2.svg",
        tags: ["#compliance", "#automation", "#saas"],
      },
      {
        caseStudyId: "lumen",
        title: "Lumen - Risk Posture Monitor",
        desc: "Realtime posture visibility, drift detection, and remediation flow.",
        img: "/project-1.svg",
        tags: ["#risk", "#monitoring", "#ops"],
      },
      {
        caseStudyId: "pulse",
        title: "Pulse - Demo Product Insights",
        desc: "Demo case of a product insights dashboard for delivery and analytics teams.",
        img: "/project-2.svg",
        tags: ["#demo", "#analytics", "#delivery"],
      },
    ],
    socialLinks: [
      { label: "Telegram", href: "https://t.me/SokolovRoma" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/rsokolov/" },
      { label: "Write email", href: "mailto:sokolovroman@mail.ru" },
    ],
    caseStudies: [
      {
        id: "evraz-oms",
        title: "EVRAZ",
        subtitle: "Development of production, sales, and corporate IT systems",
        summary:
          "Ensuring operation and development of production, sales, and corporate IT infrastructure management systems.",
        img: "/project-2.svg",
        teaserVideo: "/evraz_video_crop.mp4",
        teaserPoster: "/video-posters/evraz-video-poster.webp",
        role: "Project Manager",
        team: "Business stakeholders, IT teams, external vendors",
        timeline: "2024 -> present",
        problem:
          "Critical systems had to remain stable while multiple cross-domain changes were delivered in parallel for production and sales processes.",
        solution:
          "Established a predictable delivery setup with initiative prioritization, cross-team alignment, dependency tracking, and risk control.",
        impact:
          "Sustained reliability of key IT services and improved speed of rolling out business-critical changes.",
      },
      {
        id: "exeed",
        title: "EXEED",
        subtitle: "7 projects for exeed.ru and a 150-dealer network",
        summary:
          "Delivered 7 projects of varying complexity for exeed.ru and its network of 150 dealers.",
        img: "/project-1.svg",
        teaserVideo: "/exeed-banner-video-desktop.mp4",
        teaserPoster: "/video-posters/exeed-video-poster.webp",
        role: "Project Manager",
        team: "Importer team and dealer network",
        timeline: "Multiple releases",
        problem: "Initiatives of different complexity had to be delivered consistently across the importer website and dealers.",
        solution: "Set up a predictable delivery flow from initiative to release with cross-team coordination.",
        impact: "7 shipped projects and faster rollout of changes across the network.",
      },
      {
        id: "kris",
        title: "KRIS - Incident Analysis",
        subtitle: "High-load investigation workspace",
        summary:
          "A case management interface for parallel incident analysis with clear ownership and evidence tracking.",
        img: "/project-2.svg",
        role: "Project Manager",
        team: "PM, 4 Engineers, QA",
        timeline: "4 months",
        problem: "Critical incidents stalled due to fragmented data and unclear ownership.",
        solution: "Introduced timeline-driven cases, role visibility, and structured investigation states.",
        impact: "Shorter case resolution cycle and improved shift-to-shift continuity.",
      },
      {
        id: "cortex",
        title: "Cortex - Threat Intelligence Hub",
        subtitle: "Correlation, triage, and signal quality tuning",
        summary:
          "A central console for signal enrichment, IOC correlation, and tuning alert relevance.",
        img: "/project-1.svg",
        role: "Project Manager",
        team: "2 PMs, 6 Engineers, Data Analyst",
        timeline: "8 months",
        problem: "Alert fatigue reduced analyst trust and delayed response actions.",
        solution: "Built confidence indicators, explainable correlations, and in-flow tuning controls.",
        impact: "Higher analyst trust and improved actionable alert ratio.",
      },
      {
        id: "atlas",
        title: "Atlas - Compliance Control Center",
        subtitle: "Policy evidence mapping for audits",
        summary:
          "A compliance cockpit connecting controls, owners, and evidence with recurring audit automation.",
        img: "/project-2.svg",
        role: "Project Manager",
        team: "PM, 5 Engineers",
        timeline: "5 months",
        problem: "Audit preparation was manual, repetitive, and difficult to track.",
        solution: "Mapped policy-to-evidence flows and introduced reusable collection templates.",
        impact: "Reduced manual effort and improved audit readiness visibility.",
      },
      {
        id: "lumen",
        title: "Lumen - Risk Posture Monitor",
        subtitle: "Realtime drift and remediation tracking",
        summary:
          "A monitoring surface for posture deviations with clear prioritization and remediation pathways.",
        img: "/project-1.svg",
        role: "Project Manager",
        team: "PM, 4 Engineers, Security Expert",
        timeline: "5 months",
        problem: "Teams lacked clear priorities and ownership for drift remediation.",
        solution: "Created risk buckets, prioritization cues, and guided remediation workflows.",
        impact: "Faster mitigation of critical drift and clearer executive reporting.",
      },
      {
        id: "pulse",
        title: "Pulse - Demo Product Insights",
        subtitle: "Product insights dashboard for delivery teams",
        summary:
          "Demo case: a unified dashboard for product metrics and release signals to spot delivery bottlenecks faster.",
        img: "/project-2.svg",
        role: "Project Manager",
        team: "PM, Analyst, 3 Engineers",
        timeline: "6 weeks",
        problem:
          "Metrics were scattered across tools, making it hard to detect funnel drops and release slowdowns early.",
        solution:
          "Built a single metrics layer with deviation signals and a weekly review loop tied to concrete actions.",
        impact:
          "Faster issue detection and more consistent decision-making based on one trusted data view.",
        starBlock: {
          situation:
            "Product and delivery metrics were scattered across multiple tools, so warning signals appeared too late.",
          task:
            "Create a unified review surface and reduce time from detecting deviation to aligned team action.",
          actions: [
            "Defined a single set of product and release metrics for weekly review.",
            "Built a dashboard with prioritized deviation signals and quick drill-downs.",
            "Introduced a working loop: signal -> hypothesis -> action -> effect validation.",
          ],
          result:
            "Teams spot issues earlier and make decisions from one trusted data view.",
        },
      },
    ],
    ui: {
      navProjects: "Projects",
      navExperience: "Experience",
      outcomesTitle: "Selected outcomes",
      requestResume: "Request resume",
      resumeAria: "Request resume by email",
      projectsOverline: "",
      projectsTitle: "Selected projects",
      projectsLead: "Practical case studies on launching and scaling digital products.",
      metaRole: "Role",
      metaTeam: "Team",
      metaTimeline: "Timeline",
      metaProblem: "Problem",
      metaSolution: "Solution",
      metaImpact: "Impact",
      openCaseStudy: "Open case study",
      languageToggle: "RU",
      callSubject: "Project discussion",
      resumeSubject: "Resume request",
      caseStudySubject: "Case study request",
      footerLeft: "2026 Проектный менеджер",
    },
  },
};
