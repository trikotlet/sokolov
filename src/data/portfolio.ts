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
        desc: "OMS — это система управления заказами, которая ведёт заказ от оформления до исполнения и снимает с менеджеров рутинные операции. В этом проекте мы перевели исполнение из ручного контура в систему и снизили зависимость процесса от 1С ERP.",
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
        subtitle: "Перевели OMS из наблюдающей модели в реально исполняющую",
        summary:
          "OMS — это система управления заказами, которая ведёт заказ от оформления до исполнения и снимает с менеджеров рутинные операции. В этом проекте мы перевели исполнение из ручного контура в систему и снизили зависимость процесса от 1С ERP.",
        img: "/project-2.svg",
        teaserVideo: "/evraz_video_crop.mp4",
        teaserPoster: "/video-posters/evraz-video-poster.webp",
        role: "Руководитель проектов",
        team: "Бизнес-заказчики, ИТ-команды, подрядчики",
        timeline: "2024 -> настоящее время",
        problem:
          "Значимая часть исполнения заказов оставалась в ручном контуре и логике 1С, из-за чего скорость сделки зависела от количества ручных действий, качества статусной модели и согласованности между командами.",
        solution:
          "Зафиксировали критерии автоисполнения и источники истины по статусам, разложили поток заказов на сценарии, расширяли исполнительную модель OMS и параллельно усиливали релизный и эксплуатационный контур.",
        impact:
          "OMS начал обрабатывать практически весь создаваемый поток заказов, а подавляющая часть сценариев была хотя бы частично автоматизирована. Система стала рабочим исполнительным контуром, а не надстройкой над 1С.",
        starBlock: {
          situation:
            "OMS уже был внедрён, но значимая часть исполнения заказов всё ещё жила в ручном контуре и логике 1С. Из-за этого скорость сделки зависела не только от системы, но и от количества ручных действий, качества статусной модели и согласованности между продажами, логистикой и операционными командами. Проекту нужен был переход от наблюдающей модели к реально исполняющей.",
          task:
            "Моя задача была не просто доделать OMS, а увеличить долю заказов, которые система способна доводить до результата без постоянного участия менеджера. Параллельно нужно было снизить нагрузку на 1С, сократить ручные касания и ускорить цикл исполнения заказа без поломки действующего бизнес-процесса.",
          actions: [
            "Сначала зафиксировали критерии успеха: что именно считаем автоисполнением, какие статусы являются источником истины и по каким метрикам оцениваем эффект.",
            "Затем разложили поток заказов на сценарии, приоритизировали их по влиянию на бизнес и последовательно расширяли исполнительную модель OMS.",
            "Параллельно усилили релизный и эксплуатационный контур: мониторинг, алерты, работу со статусной моделью и стабилизировали интеграционный контур под рост нагрузки.",
          ],
          result:
            "В итоге в обработку OMS начал попадать практически весь создаваемый поток заказов, а подавляющая часть сценариев была хотя бы частично автоматизирована. Доля операций без участия менеджера вышла примерно на уровень пятой части процесса, а производительность на менеджера выросла на этапе оформления и заметно улучшилась на этапе отгрузки.",
        },
        resultBlock: {
          title: "Что сделали",
          intro:
            "Сфокусировались на бизнес-эффекте, автоисполнении и устойчивой эксплуатации под рост нагрузки.",
          roleText:
            "Я отвечал за то, чтобы проект давал результат в бизнесе: цели и KPI, roadmap по сценариям, синхронизацию бизнеса и ИТ, управление приоритетами, статусами, релизами и интеграционными рисками.",
          contextText:
            "OMS уже был внедрён, но значимая часть исполнения заказов всё ещё жила в ручном контуре и логике 1С. Из-за этого система не была полноценным исполнительным контуром и слишком сильно зависела от ручных действий и 1С.",
          goalText:
            "Увеличить долю автоисполнения, сократить ручные касания, снизить нагрузку на 1С и ускорить цикл исполнения без поломки действующего бизнес-процесса.",
          items: [
            { label: "Зафиксировали критерии успеха: что считаем автоисполнением, какие статусы являются источником истины и какими метриками меряем эффект." },
            { label: "Разложили поток заказов на сценарии, приоритизировали их по влиянию на бизнес и последовательно расширяли исполнительную модель OMS." },
            { label: "Усилили релизный контур: управление изменениями, контроль интеграционных рисков и предсказуемый вывод изменений в прод." },
            { label: "Усилили эксплуатацию: мониторинг, алерты, наблюдаемость и работу со статусной моделью." },
            { label: "Стабилизировали интеграционный контур под рост нагрузки, чтобы ошибка в одном звене не ломала операционный поток целиком." },
          ],
          scaleText:
            "Ключевой операционный слой: OMS, 1С ERP, Bitrix24, логистические и уведомительные сценарии, статусная модель, мониторинг и процессный контур. Работа шла итерационно, несколькими волнами, в интеграционном и микросервисном ландшафте.",
          teamsText: "Бизнес, продажи, логистика, операционные команды, OMS, 1С ERP, Bitrix24 и интеграционные сервисы.",
          processText: "Итерационная работа волнами: расширение типов заказов, усложнение исполнительных сценариев и постоянная доработка релизного контура.",
          toolsText: "OMS, 1С ERP, Bitrix24, логистические и уведомительные сценарии, мониторинг, алертинг и статусная модель.",
          challengesTitle: "Ключевые ограничения",
          challengesItems: [
            "Скорость сделки зависела не только от системы, но и от количества ручных действий.",
            "Качество исполнения упиралось в статусную модель и согласованность между командами.",
            "Ошибка в одном интеграционном звене быстро становилась сюрпризом для всего контура.",
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
        artifactImages: [
          "/exeed-artifacts/trade-in-calculator.png",
          "/exeed-artifacts/model-comparison.png",
        ],
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
        title: "Order Management System (OMS)",
        desc: "OMS takes an order from creation through fulfillment and removes routine work from managers. In this project, we moved execution out of a manual workflow and into the system, reducing the dependency on 1C ERP.",
        img: "/project-2.svg",
        teaserVideo: "/evraz_video_crop.mp4",
        teaserPoster: "/video-posters/evraz-video-poster.webp",
        tags: ["#EVRAZ", "1С ERP", "MES", "Camunda", "Kafka"],
      },
      {
        caseStudyId: "exeed",
        title: "EXEED",
        desc: "Delivered 7 projects for exeed.ru and its 150-dealer network.",
        img: "/project-1.svg",
        teaserVideo: "/exeed-banner-video-desktop.mp4",
        teaserPoster: "/video-posters/exeed-video-poster.webp",
        tags: ["#Perx", "Automotive", "UI/UX", "Web", "Business Analysis", "Product"],
      },
      {
        caseStudyId: "cortex",
        title: "Cortex - Threat Intelligence Hub",
        desc: "A unified workspace for signal correlation, triage, and alert optimization.",
        img: "/project-1.svg",
        tags: ["#threat-intel", "#enterprise", "#product"],
      },
      {
        caseStudyId: "atlas",
        title: "Atlas - Compliance Control Center",
        desc: "A control center for requirements, evidence, and audit workflows.",
        img: "/project-2.svg",
        tags: ["#compliance", "#automation", "#saas"],
      },
      {
        caseStudyId: "lumen",
        title: "Lumen - Risk Posture Monitor",
        desc: "Real-time monitoring of deviations, risks, and mitigation progress.",
        img: "/project-1.svg",
        tags: ["#risk", "#monitoring", "#ops"],
      },
      {
        caseStudyId: "pulse",
        title: "Pulse - Demo Product Insights",
        desc: "A demo case for launching a product insights dashboard for delivery and analytics teams.",
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
        title: "Order Management System (OMS)",
        subtitle: "Turned OMS from a monitoring layer into an execution engine",
        summary:
          "OMS takes an order from creation through fulfillment and removes routine work from managers. In this project, we moved execution out of a manual workflow and into the system, reducing the dependency on 1C ERP.",
        img: "/project-2.svg",
        teaserVideo: "/evraz_video_crop.mp4",
        teaserPoster: "/video-posters/evraz-video-poster.webp",
        role: "Project Manager",
        team: "Business stakeholders, IT teams, external vendors",
        timeline: "2024 -> present",
        problem:
          "A significant part of order execution remained in a manual workflow and in 1C logic, so deal speed still depended on manual actions, status quality, and cross-team coordination.",
        solution:
          "We defined auto-execution criteria and system-of-record statuses, mapped the order flow into scenarios, expanded the OMS execution model, and strengthened release and operational stability.",
        impact:
          "OMS started handling almost the entire incoming order flow, most scenarios became at least partially automated, and the system became a true execution layer rather than an add-on to 1C.",
        starBlock: {
          situation:
            "OMS had already been implemented, but a significant part of order execution still lived in a manual workflow and in 1C logic. Deal speed depended not only on the system, but also on manual steps, status quality, and alignment across sales, logistics, and operations teams. The project needed to shift from a monitoring layer to a true execution engine.",
          task:
            "My task was not just to finish OMS, but to increase the share of orders the system could complete without constant manager involvement. In parallel, we had to reduce the load on 1C, cut manual touchpoints, and speed up execution without breaking the existing business process.",
          actions: [
            "First, we defined the success criteria: what exactly counts as auto-execution, which statuses are the source of truth, and which metrics we use to measure impact.",
            "Then we broke the order flow down into scenarios, prioritized them by business impact, and expanded the OMS execution model step by step.",
            "In parallel, we strengthened the release and operations loop: monitoring, alerting, work on the status model, and stabilization of the integration layer under growing load.",
          ],
          result:
            "OMS started handling almost the entire incoming order flow, and most scenarios became at least partially automated. The share of operations completed without a manager reached roughly one fifth of the process, while per-manager productivity improved at both order creation and shipment stages.",
        },
        resultBlock: {
          title: "What we did",
          intro:
            "We focused on business impact, auto-execution, and stable operations under growing load.",
          roleText:
            "I was responsible for business outcomes: goals and KPIs, the scenario roadmap, business and IT alignment, priority management, status model decisions, releases, and integration risks.",
          contextText:
            "OMS had already been implemented, but a significant part of order execution still lived in a manual workflow and in 1C logic. The system was not yet a full execution layer and still depended too much on manual work and 1C.",
          goalText:
            "Increase the share of auto-execution, cut manual touchpoints, reduce the load on 1C, and accelerate execution without breaking the existing business process.",
          items: [
            { label: "Defined success criteria: what counts as auto-execution, which statuses are the source of truth, and which metrics are used to measure impact." },
            { label: "Mapped the order flow into scenarios, prioritized them by business impact, and step by step expanded the OMS execution model." },
            { label: "Strengthened the release loop: change management, control of integration risks, and predictable production rollout." },
            { label: "Strengthened operations: monitoring, alerts, observability, and work on the status model." },
            { label: "Stabilized the integration layer under higher load so that one weak point would not break the whole operational flow." },
          ],
          scaleText:
            "A core operational layer: OMS, 1C ERP, Bitrix24, logistics and notification scenarios, the status model, monitoring, and the surrounding process layer. The work moved in several waves across an integration-heavy microservice landscape.",
          teamsText: "Business, sales, logistics, operations teams, OMS, 1C ERP, Bitrix24, and integration services.",
          processText: "Iterative waves of work: expanding order types, increasing execution complexity, and continuously refining the release loop.",
          toolsText: "OMS, 1C ERP, Bitrix24, logistics and notification scenarios, monitoring, alerting, and the status model.",
          challengesTitle: "Key constraints",
          challengesItems: [
            "Deal speed depended not only on the system, but also on the number of manual actions.",
            "Execution quality depended on the status model and coordination between teams.",
            "An error in one integration point quickly became a surprise for the whole landscape.",
          ],
        },
      },
      {
        id: "exeed",
        title: "EXEED",
        subtitle: "7 projects for exeed.ru and a 150-dealer network",
        summary:
          "Delivered 7 projects for exeed.ru and its 150-dealer network.",
        img: "/project-1.svg",
        teaserVideo: "/exeed-banner-video-desktop.mp4",
        teaserPoster: "/video-posters/exeed-video-poster.webp",
        artifactImages: [
          "/exeed-artifacts/trade-in-calculator.png",
          "/exeed-artifacts/model-comparison.png",
        ],
        role: "Project Manager",
        team: "Importer team and dealer network",
        timeline: "Multiple releases",
        problem: "Initiatives of different scale and complexity had to be launched for both the central website and dealers.",
        solution: "Built a delivery flow from initiative to release with coordination of teams, requirements, and deadlines.",
        impact: "7 delivered projects and faster rollout of changes across the entire dealer network.",
        starBlock: {
          situation:
            "The importer website and a network of about 150 dealers needed coordinated launches of initiatives of different complexity.",
          task:
            "Ensure predictable delivery of digital services and integrations without slipping on schedule or quality.",
          actions: [
            "Organized the delivery flow: requirements, task setup, team synchronization, and delivery control.",
            "Aligned the integration work for feeds, APIs, and lead generation and reduced release risks.",
            "Launched a series of product initiatives for the funnel of selection, calculation, and lead capture.",
          ],
          result:
            "All 7 projects were shipped to production, and the speed of rolling out changes across the dealer network increased.",
          resultItems: [
            { label: "Trade-in calculator", href: "https://exeed.ru/calculate-trade-in/" },
            { label: "Lead generation service from forms", href: "https://autocrm.ru/" },
            { label: "Cars in stock service", href: "https://exeed.ru/cars/" },
            { label: "Maintenance cost calculator", href: "https://exeed.ru/maintenance_calculator/" },
            { label: "Trim comparison widget", href: "https://exeed.ru/compare/" },
            { label: "Model Range widget", href: "https://services.platform.prod.exeed.perx.ru/widgets/modelrange/" },
            { label: "Online store", href: "https://exeed.ru/cars/" },
          ],
        },
        resultBlock: {
          title: "What I did",
          roleText:
            "Project / Delivery Manager (web and integrations): requirements -> specification -> task setup -> development oversight -> API verification -> launch -> content rollout.",
          contextText:
            "exeed.ru plus about 150 dealer websites. The same functionality had to work under different conditions, with different content versions, integrations, and local exceptions. At the same time, up to 4 projects were running in parallel.",
          goalText:
            "Strengthen the digital funnel from vehicle selection to calculation to lead capture, and do it at scale for both the importer and dealers without turning every release into chaos.",
          items: [
            { label: "Trade-in calculator", href: "https://exeed.ru/calculate-trade-in/", note: "with Avito" },
            { label: "Lead generation service from forms", href: "https://autocrm.ru/", note: "with Autocrm.ru" },
            { label: "Cars in stock service", href: "https://exeed.ru/cars/", note: "based on Auto.ru feed standard" },
            { label: "Maintenance cost calculator", href: "https://exeed.ru/maintenance_calculator/" },
            { label: "Trim comparison widget", href: "https://exeed.ru/compare/" },
            { label: "Model Range widget", href: "https://services.platform.prod.exeed.perx.ru/widgets/modelrange/" },
          ],
          scaleText: "7 projects, duration: 250 hours (about 2 months) -> 800 hours (about 5 months)",
          teamsText: "Teams of 2-5 people: development, design, frontend, content, QA",
          processText: "Waterfall / Kanban",
          toolsText: "Wiki + Yandex Tracker / Redmine / YouGile",
          challengesTitle: "Challenges",
          challengesItems: [
            "Dealer network: same requirements, very different on-the-ground realities.",
            "Integrations and feeds: data quality determines whether a feature works at all.",
            "Changing requirements: about 50% of projects shifted because of clarifications, changes, and early estimates.",
          ],
        },
      },
      {
        id: "kris",
        title: "KRIS - Incident Analysis",
        subtitle: "Workspace for high-load investigations",
        summary:
          "A case management interface with clear ownership, evidence tracking, and smooth handoffs between shifts.",
        img: "/project-2.svg",
        role: "Project Manager",
        team: "PM, 4 engineers, QA",
        timeline: "4 months",
        problem: "Critical incidents stalled because data was fragmented and ownership was unclear.",
        solution: "Introduced an investigation timeline, participant roles, and structured case statuses.",
        impact: "The case closure cycle was reduced, and continuity between shifts improved.",
        starBlock: {
          situation:
            "Investigations were running under high load, data was fragmented, and ownership between shifts was getting lost.",
          task:
            "Reduce the incident closure cycle and make case handoff between shifts predictable.",
          actions: [
            "Built a single investigation timeline and standardized case statuses.",
            "Defined participant roles and escalation rules for critical stages.",
            "Added structured evidence capture and shift handoff mechanics.",
          ],
          result:
            "Case closure time went down, and handoff continuity between shifts became stable and transparent.",
        },
      },
      {
        id: "cortex",
        title: "Cortex - Threat Intelligence Hub",
        subtitle: "Correlation, triage, and signal quality tuning",
        summary:
          "A central console for signal enrichment, IOC correlation, and alert relevance control.",
        img: "/project-1.svg",
        role: "Project Manager",
        team: "2 PMs, 6 engineers, data analyst",
        timeline: "8 months",
        problem: "Alert noise reduced trust and delayed SOC decision-making.",
        solution: "Added confidence indicators, explainable correlations, and in-flow relevance controls.",
        impact: "Signal quality improved and response decisions became faster.",
        starBlock: {
          situation:
            "The SOC team worked in a stream of noisy alerts, which reduced trust in signals and slowed down response.",
          task:
            "Improve signal quality and speed up decisions without making analysts daily work more complex.",
          actions: [
            "Introduced confidence indicators and explainable IOC correlation.",
            "Added a triage flow and alert relevance controls directly into the analyst workflow.",
            "Set up a feedback loop to tune rules and improve signal quality.",
          ],
          result:
            "The share of useful signals increased, and the SOC team started making response decisions faster and with more confidence.",
        },
      },
      {
        id: "atlas",
        title: "Atlas - Compliance Control Center",
        subtitle: "Connecting policies and evidence for audits",
        summary:
          "A compliance layer connecting requirements, owners, and supporting evidence.",
        img: "/project-2.svg",
        role: "Project Manager",
        team: "PM, 5 engineers",
        timeline: "5 months",
        problem: "Audit preparation was manual, slow, and lacked clear status visibility.",
        solution: "Built reusable evidence templates and automated task routing to owners.",
        impact: "Manual effort decreased, and audit preparation became more predictable.",
        starBlock: {
          situation:
            "Audit preparation was handled manually: data and evidence were collected slowly and without transparent status.",
          task:
            "Make audit preparation manageable, repeatable, and less dependent on manual coordination.",
          actions: [
            "Connected requirements, owners, and evidence in one workflow.",
            "Prepared artifact templates and rules for checking evidence completeness.",
            "Automated task routing and owner status control.",
          ],
          result:
            "Manual workload decreased, and audit preparation became more predictable in both timing and quality.",
        },
      },
      {
        id: "lumen",
        title: "Lumen - Risk Posture Monitor",
        subtitle: "Monitoring deviations and remediation control",
        summary:
          "A risk posture view with prioritized deviations and action paths for operations teams.",
        img: "/project-1.svg",
        role: "Project Manager",
        team: "PM, 4 engineers, security expert",
        timeline: "5 months",
        problem: "Teams could see a snapshot of posture, but lacked clear priorities and ownership.",
        solution: "Introduced risk buckets, priorities, and remediation workflows for resolving critical deviations.",
        impact: "Remediation of critical risks accelerated, and management visibility improved.",
        starBlock: {
          situation:
            "Teams could see posture deviations, but lacked a shared prioritization system and clear ownership.",
          task:
            "Give operations teams a clear sequence of actions and accelerate remediation of critical risks.",
          actions: [
            "Grouped deviations into risk buckets and introduced remediation priorities.",
            "Defined remediation routes and ownership areas by risk type.",
            "Set up monitoring of mitigation actions and progress visibility for management.",
          ],
          result:
            "Critical risks started closing faster, and remediation status became transparent across all management levels.",
        },
      },
      {
        id: "pulse",
        title: "Pulse - Demo Product Insights",
        subtitle: "Product insights dashboard for delivery teams",
        summary:
          "Demo case: a single view of product metrics and release status for faster delivery bottleneck detection.",
        img: "/project-2.svg",
        role: "Project Manager",
        team: "PM, analyst, 3 engineers",
        timeline: "6 weeks",
        problem:
          "Teams tracked metrics across different sources and spotted funnel drops and release delays too late.",
        solution:
          "Built a single metrics layer, added deviation signals, and introduced a weekly review routine tied to actions.",
        impact:
          "Time to detect issues dropped, and decisions started from one shared set of data.",
        starBlock: {
          situation:
            "Product and delivery metrics were spread across different tools, so problem signals arrived too late.",
          task:
            "Build a single overview layer and reduce the time from detecting a deviation to an aligned team action.",
          actions: [
            "Defined one shared set of product and release metrics for weekly review.",
            "Built a dashboard with prioritized deviations and quick drill-downs to causes.",
            "Introduced a working rhythm: signal -> hypothesis -> action -> effect validation.",
          ],
          result:
            "Problems started surfacing earlier, and improvement decisions are now made from one trusted data source.",
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
