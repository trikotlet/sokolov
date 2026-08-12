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
  roleDetails?: string[];
  scopeDetails?: Array<{
    title?: string;
    text?: string;
    items?: Array<{ label?: string; text: string }>;
  }>;
  team: string;
  timeline: string;
  problem: string;
  solution: string;
  impact: string;
  techTags?: string[];
  starBlock?: {
    situation: string;
    task: string;
    taskIntro?: string;
    taskItems?: string[];
    actionIntro?: string;
    actionItems?: string[];
    actionNotes?: string[];
    actions: string[];
    result: string;
    resultNotes?: string[];
    resultItems?: Array<{ label: string; href: string; note?: string }>;
  };
  resultBlock?: {
    title: string;
    intro?: string;
    items: Array<{ label: string; href?: string; note?: string }>;
    roleText: string;
    roleIntro?: string;
    roleItems?: string[];
    contextText?: string;
    goalText?: string;
    scaleText: string;
    scaleNotes?: string[];
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
        desc: "OMS — это система управления заказами, которая ведёт заказ от\u00A0оформления до\u00A0исполнения и снимает с\u00A0менеджеров рутинные операции.",
        img: "/project-2.svg",
        teaserVideo: "/evraz_video_crop.mp4",
        teaserPoster: "/video-posters/evraz-video-poster.webp",
        tags: ["#ЕВРАЗ", "2025", "1С ERP", "Starfish24", "Microservices"],
      },
      {
        caseStudyId: "exeed",
        title: "EXEED: цифровые сервисы для продаж и дилерской сети",
        desc: "Запустил ряд веб-сервисов для exeed.ru и сети из 150 дилеров: трейд-ин, авто в наличии, ТО-калькулятор, сравнение комплектаций.",
        img: "/project-1.svg",
        teaserVideo: "/exeed-banner-video-desktop.mp4",
        teaserPoster: "/video-posters/exeed-video-poster.webp",
        tags: ["#Perx", "2023", "Automotive", "UI/UX", "Web", "Business Analyze", "Product"],
      },
      {
        caseStudyId: "prompter",
        title: "Подсказчик веса пачки: как цифровой сервис помог сократить недогруз вагонов",
        desc: "Цифровой сервис для операторов, который подсказывает, сколько пачек, слоев и какого веса нужно собрать, чтобы точнее закрывать вагонную норму.",
        img: "/prompter.webp",
        tags: ["#ЕВРАЗ", "2024", "Operations", "Digital Service", "Logistics"],
      },
      {
        caseStudyId: "dotherapy",
        title: "DO Therapy: онлайн-сервис психологической помощи",
        desc: "Запустили сервис подбора психологов с записью, оплатой, онлайн-консультациями и регистрацией специалистов.",
        img: "/dotherapy-artifacts/dotherapy-main.webp",
        tags: ["#Nerve.AI", "2021-2022", "Healthcare", "CustDev", "Web"],
      },
      {
        caseStudyId: "charge-cars",
        title: "Charge Cars - промо-сайт премиум электрокаров",
        desc: "Запуск иммерсивного сайта для электрокара на базе Ford Mustang Fastback 1967 с анимацией, видео и адаптацией под разные устройства.",
        img: "/chargecars-artifacts/chargecars-main.webp",
        tags: ["#Nerve.AI", "2021-2022", "Automotive", "3D", "Web"],
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
        techTags: ["Camunda BPM", "Kafka", "Event-Driven Architecture", "PostgreSQL", "Grafana"],
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
          task: "Моя задача была не просто доделать OMS, а увеличить долю заказов, которые система способна доводить до результата без постоянного участия менеджера. Параллельно нужно было снизить нагрузку на 1С, сократить ручные касания и ускорить цикл исполнения заказа без поломки действующего бизнес-процесса.",
          actions: [
            "Сначала договорились, что считать успехом: какое исполнение называть автоматическим, какие статусы брать за эталон и как мерить эффект.",
            "Разделили заказы на сценарии, выбрали приоритетные для бизнеса и шаг за шагом дорабатывали логику OMS. Одновременно настроили мониторинг и оповещения, навели порядок в статусах и подготовили систему к росту нагрузки.",
            "Двигались итерациями: добавляли новые типы заказов, усложняли сценарии и отлаживали выпуск обновлений.",
          ],
          result:
            "В итоге в обработку OMS начал попадать практически весь создаваемый поток заказов, а подавляющая часть сценариев была хотя бы частично автоматизирована. Доля операций без участия менеджера вышла примерно на уровень пятой части процесса, а производительность на менеджера выросла на этапе оформления и заметно улучшилась на этапе отгрузки.",
        },
        resultBlock: {
          title: "Что сделали",
          intro: "Сфокусировались на бизнес-эффекте, автоисполнении и устойчивой эксплуатации под рост нагрузки.",
          roleText:
            "Я отвечал за то, чтобы проект давал результат в бизнесе: цели и KPI, roadmap по сценариям, синхронизацию бизнеса и ИТ, управление приоритетами, статусами, релизами и интеграционными рисками.",
          contextText:
            "OMS уже был внедрён, но значимая часть исполнения заказов всё ещё жила в ручном контуре и логике 1С. Из-за этого система не была полноценным исполнительным контуром и слишком сильно зависела от ручных действий и 1С.",
          goalText:
            "Увеличить долю автоисполнения, сократить ручные касания, снизить нагрузку на 1С и ускорить цикл исполнения без поломки действующего бизнес-процесса.",
          items: [
            {
              label:
                "Зафиксировали критерии успеха: что считаем автоисполнением, какие статусы являются источником истины и какими метриками меряем эффект.",
            },
            {
              label:
                "Разложили поток заказов на сценарии, приоритизировали их по влиянию на бизнес и последовательно расширяли исполнительную модель OMS.",
            },
            {
              label:
                "Усилили релизный контур: управление изменениями, контроль интеграционных рисков и предсказуемый вывод изменений в прод.",
            },
            { label: "Усилили эксплуатацию: мониторинг, алерты, наблюдаемость и работу со статусной моделью." },
            {
              label:
                "Стабилизировали интеграционный контур под рост нагрузки, чтобы ошибка в одном звене не ломала операционный поток целиком.",
            },
          ],
          scaleText:
            "Ключевой операционный слой: OMS, 1С ERP, Bitrix24, логистические и уведомительные сценарии, статусная модель, мониторинг и процессный контур. Работа шла итерационно, несколькими волнами, в интеграционном и микросервисном ландшафте.",
          teamsText:
            "Бизнес, продажи, логистика, операционные команды, OMS, 1С ERP, Bitrix24 и интеграционные сервисы.",
          processText: "",
          toolsText: "",
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
        title: "EXEED: цифровые сервисы для продаж и дилерской сети",
        subtitle:
          "Запустил ряд веб-сервисов для exeed.ru и сети из 150 дилеров: трейд-ин, авто в наличии, ТО-калькулятор, сравнение комплектаций.",
        summary:
          "Запустил ряд веб-сервисов для exeed.ru и сети из 150 дилеров: трейд-ин, авто в наличии, ТО-калькулятор, сравнение комплектаций.",
        img: "/project-1.svg",
        teaserVideo: "/exeed-banner-video-desktop.mp4",
        teaserPoster: "/video-posters/exeed-video-poster.webp",
        artifactImages: ["/exeed-artifacts/trade-in-calculator.png", "/exeed-artifacts/model-comparison.png"],
        role: "Руководитель проекта",
        team: "Команда импортера и дилерская сеть",
        timeline: "Несколько релизов",
        problem: "Требовалось запускать инициативы разной сложности и масштаба для центрального сайта и дилеров.",
        solution: "Выстроен поток delivery от инициативы до релиза с координацией команд, требований и сроков.",
        impact: "7 реализованных проектов и ускоренный вывод изменений в продакшн по всей сети.",
        starBlock: {
          situation:
            "Сайт импортера EXEED уже приводил клиентов, но их путь к покупке был разрозненным. Некоторые сценарии — от выбора машины и оценки трейд-ин до записи на сервис — работали плохо или не были связаны между собой. Бизнесу требовались не просто новые страницы, а рабочие цифровые сервисы, которые помогают пользователю быстрее определиться с выбором, собирают заявки, поддерживают дилеров и легко встраиваются в текущую ИТ-инфраструктуру.",
          task: "Запускать новые сервисы для exeed.ru и дилерской сети, координировать внутреннюю команду и подрядчиков, интегрироваться с внешними платформами и API и держать под контролем требования, сроки и качество сразу по нескольким проектам в параллели.",
          taskIntro:
            "Моей задачей было не просто выпускать отдельные веб-фичи, а последовательно собирать на сайте импортера рабочий сервисный слой, который поддерживает продажи и послепродажный сценарий. Нужно было одновременно:",
          taskItems: [
            "запускать новые сервисы для exeed.ru и дилерской сети,",
            "координировать внутреннюю команду и подрядчиков,",
            "интегрироваться с внешними платформами и API,",
            "держать под контролем требования, сроки и качество сразу по нескольким проектам в параллели.",
          ],
          actionIntro:
            "Вел проекты как менеджер, погружаясь в аналитику: от идеи до запуска и приемки. Что именно делал:",
          actionItems: [
            "собирал и уточнял требования с бизнесом;",
            "формализовывал их в ТЗ;",
            "проектировал пользовательские сценарии и прототипы в Miro и Moqups;",
            "декомпозировал задачи для внутренней команды и подрядчиков;",
            "тестировал API и интеграционные сценарии в Postman;",
            "вел документацию во внутренней Wiki;",
            "обучал контент-специалистов работе с новыми сервисами после запуска.",
          ],
          actionNotes: [
            "Работа шла в гибридной модели: где-то ближе к waterfall, где-то ближе к kanban. Часть задач требовала жесткой фиксации объема, часть приходилось вести итерационно из-за изменения требований и внешних зависимостей.",
            "Фокус был на том, чтобы сервисы не жили каждый в своем аквариуме.",
          ],
          actions: [
            "Организовали delivery-поток: требования, постановка, синхронизация команд и контроль выполнения.",
            "Согласовали работу по интеграциям (фиды, API, лидогенерация) и снизили риски релизов.",
            "Запустили серию продуктовых инициатив для воронки выбора, расчёта и заявки.",
          ],
          result:
            "За время работы вывел в прод 7 проектов различной сложности для сайта импортера EXEED и дилерской сети из 150 дилеров:",
          resultNotes: [
            "В половине проектов сроки сдвигались из-за неточных оценок на старте или новых требований заказчика. Несмотря на это, удалось сохранить качество, довести все решения до запуска и удержать доверие клиента.",
          ],
          resultItems: [
            { label: "Трейд-ин калькулятор", href: "https://exeed.ru/calculate-trade-in/" },
            { label: "Сервис лидогенерации из форм", href: "https://autocrm.ru/" },
            { label: "Сервис «Автомобили в наличии»", href: "https://exeed.ru/cars/" },
            { label: "Калькулятор технического обслуживания", href: "https://exeed.ru/maintenance_calculator/" },
            { label: "Виджет сравнения комплектаций", href: "https://exeed.ru/compare/" },
            { label: "Виджет Model Range", href: "https://services.platform.prod.exeed.perx.ru/widgets/modelrange/" },
          ],
        },
        resultBlock: {
          title: "Что сделал",
          roleText: "Отвечал за весь цикл ведения проектов как менеджер и аналитик.",
          roleIntro: "Отвечал за весь цикл ведения проектов как менеджер и аналитик:",
          roleItems: [
            "собирал требования и писал ТЗ;",
            "управлял бюджетом и распределял ресурсы;",
            "ставил задачи разработчикам и подрядчикам;",
            "контролировал разработку и тестировал API;",
            "принимал готовые решения, запускал их и обучал пользователей.",
          ],
          items: [
            { label: "Трейд-ин калькулятор", href: "https://exeed.ru/calculate-trade-in/", note: "совместно с Авито" },
            { label: "Сервис лидогенерации из форм", href: "https://autocrm.ru/", note: "совместно с Autocrm.ru" },
            {
              label: "Сервис «Автомобили в наличии»",
              href: "https://exeed.ru/cars/",
              note: "на базе фидов по стандарту Auto.ru",
            },
            { label: "Калькулятор технического обслуживания", href: "https://exeed.ru/maintenance_calculator/" },
            { label: "Виджет сравнения комплектаций", href: "https://exeed.ru/compare/" },
            { label: "Виджет «Model Range»", href: "https://services.platform.prod.exeed.perx.ru/widgets/modelrange/" },
          ],
          scaleText: "Ключевой контур проекта: сайт импортера EXEED + сеть из 150 дилеров.",
          scaleNotes: [
            "Работа велась сразу по нескольким цифровым сервисам, которые влияли на клиентский путь от первого интереса к автомобилю до сервисного взаимодействия.",
            "Вел до четырех проектов на разных стадиях одновременно. Команды состояли из 2–7 специалистов, реализация занимала от 2 до 5 месяцев при трудозатратах от 250 до 800 человеко-часов на каждый проект.",
          ],
          teamsText: "Команды 2–7 человек: dev, design, frontend, content, QA",
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
        id: "prompter",
        title: "Подсказчик веса пачки: как цифровой сервис помог сократить недогруз вагонов",
        subtitle: "Цифровая подсказка для точного закрытия вагонной нормы",
        summary:
          "Внедрил цифровой сервис для операторов, который подсказывает, сколько пачек, слоев и какого веса нужно собрать, чтобы точнее закрывать вагонную норму.",
        img: "/prompter.webp",
        role: "Руководитель ИТ-части проекта",
        roleDetails: [
          "Я руководил ИТ-частью проекта. Организовал запуск и рабочий процесс, координировал разработчиков и инженеров. Управлял всеми этапами — от проверки концепции (PoC) до полноценного релиза. Контролировал сроки, риски и синхронизировал работу команды с заказчиком и производственными цехами. В итоге довел решение до опытной эксплуатации и подготовил проектную документацию.",
          "При этом я не ограничивался только управлением. Часть задач по аналитике и тестированию взял на себя: проектировал решение, прорабатывал пользовательские сценарии и логику подсказчика. Сам участвовал в тестах, собирал отзывы пользователей и превращал их в задачи для команды.",
          "По сути, я работал на стыке управления, аналитики и проектирования. Мне нужно было не просто следить за графиком, а помогать команде создавать продукт, который реально впишется в производственный процесс.",
        ],
        scopeDetails: [
          {
            text: "Проект охватывал участок упаковки и отгрузки металлопроката и длился около 8 месяцев активной реализации, от PoC до опытной эксплуатации в реальной цеховой среде.",
          },
          {
            items: [
              { text: "Внедрение затронуло четыре весовые линии и рабочие места операторов." },
              { text: "Сервис встроили в действующий интерфейс оператора и связали с MES/Wonderware." },
              { text: "Проект потребовал доработки ИТ-инфраструктуры и прямого подключения оборудования к системе." },
            ],
          },
          {
            text: "Решение в реальном времени обрабатывает данные о погрузке, сигналы от перекладывающих устройств и рассчитывает вагонную норму с учетом параметров пачек, слоев, штанг и совместимости плавок.",
          },
          {
            text: "Для реализации собрали кросс-функциональную команду: от Python и React-разработчиков до инженеров MES/C#, DevOps-специалистов и экспертов со стороны производства.",
          },
        ],
        team: "Бизнес-заказчики, операторы, ИТ-команда",
        timeline: "Проектная поставка",
        problem:
          "Операторам было сложно вручную подобрать комбинацию пачек, слоев и веса так, чтобы точно закрыть вагонную норму без недогруза.",
        solution:
          "Внедрили подсказчик, который рассчитывает рекомендуемую конфигурацию погрузки и помогает оператору быстрее принять решение в рабочем процессе.",
        impact:
          "Средняя загрузка вагонов выросла на 3%, что помогло сократить недогруз и снизить транспортные расходы.",
        starBlock: {
          situation:
            "На участке упаковки и отгрузки металлопроката операторы полагались на ручной расчет и личный опыт. Из-за этого вагоны в среднем загружались только на 94% от целевой нормы: возникал недогруз, требовалось больше подвижного состава, росли транспортные затраты. Бизнесу нужен был инструмент, который помогал бы добирать вагонную норму прямо в процессе погрузки, а не разбирать отклонения уже после.",
          task: "Нужно было внедрить сервис-подсказчик, который в реальном времени показывает оператору, сколько полных пачек осталось собрать, сколько слоев и штанг должно быть в пачке, какой должна быть закрывающая пачка, какой вес уже набран и какой результат получится при выполнении инструкции. Дополнительно требовалось предупреждать пользователя при попытке закрытия вагонной нормы с отклонением и дать справочную информацию по схемам погрузки.",
          actions: [
            "Мы начали с разбора реального сценария работы оператора на текущем экране погрузки и собрали CJM: в какой момент принимается решение, каких данных не хватает и где ручной расчет чаще всего дает ошибку. На этой основе спроектировали логику подсказчика и подготовили алгоритм расчета количества пачек, слоев, штанг и целевого веса для закрытия вагонной нормы. С технической стороны это был не виджет, а полноценный интеграционный сервис.",
            "Подсказчик встроили в интерфейс текущего экрана оператора, чтобы рекомендации появлялись прямо в рабочем контуре, без переключения между окнами. Дополнительно интегрировали решение с данными участка упаковки и сигналами от перекладывающих устройств, добавили предупреждения.",
            "Отдельная сложность была в том, что проект пришлось адаптировать под реальную цеховую среду, а не под идеальный интерфейс на макете. Команда пересобирала визуальные акценты и подачу информации так, чтобы оператору было удобно работать с подсказчиком на производственном экране: крупные числовые значения, простая визуальная логика.",
          ],
          result:
            "Мы внедрили сервис, который подсказывает оператору нужный вес пачки. Систему встроили прямо в рабочее место и связали с производственным контуром. Теперь оператор получает понятные рекомендации: как набирать основные и закрывающие пачки и сколько продукции еще можно добавить с учетом ограничений по весу. Сервис показывает текущую и прогнозируемую массу, следит за наполнением вагонной нормы и собирает статистику. Благодаря проекту средняя загрузка вагонов выросла на 3%, что помогло сократить недогруз и снизить транспортные расходы. Кроме того, автоматический контроль отклонений приучил сотрудников строже соблюдать регламенты на участке.",
        },
        techTags: ["Python", "C#/WCF", "RabbitMQ", "REST API", "OpenShift", "MES", "Wonderware"],
      },
      {
        id: "dotherapy",
        title: "DO Therapy: онлайн-сервис психологической помощи",
        subtitle: "Запуск маркетплейса психологов с подбором, записью, оплатой и онлайн-консультациями",
        summary:
          "Проект для Московского института психоанализа: мы запустили клиентский путь от подбора специалиста до онлайн-сессии и параллельно собрали контур регистрации и проверки психологов.",
        img: "/dotherapy-artifacts/dotherapy-main.webp",
        artifactImages: ["/dotherapy-artifacts/dotherapy-main.webp"],
        role: "Руководитель проекта",
        team: "Заказчик, продуктовая команда, разработка, QA и интеграционные подрядчики",
        timeline: "Ноябрь 2021 -> апрель 2022",
        problem:
          "Проект стартовал с высокой неопределенностью: клиент ожидал предсказуемый запуск, но не были выбраны платежи, видеосвязь и SMS-регистрация, а требования к административной панели появились уже по ходу работы.",
        solution:
          "Перевел работу в прозрачный Time & Material-контур: фиксировал влияние изменений на сроки и бюджет, помогал доуточнять сценарии и держал команду сфокусированной на запуске ключевого пользовательского пути.",
        impact:
          "Сервис довели до завершения по первоначальным целям: подбор специалиста, запись, оплата, онлайн-консультации и регистрация психологов были собраны в один рабочий продукт.",
        techTags: ["Healthcare", "Marketplace", "CloudPayments", "Voximplant", "CustDev", "Web"],
        starBlock: {
          situation:
            "Московский институт психоанализа запускал DO Therapy - сервис психологической помощи, где клиент подбирает специалиста под свой запрос, записывается на консультацию и получает помощь онлайн.",
          task: "Нужно было собрать не просто сайт, а рабочий сервис с многоступенчатым подбором, бронированием, оплатой, видеосвязью, чат-поддержкой, регистрацией специалистов и административной частью.",
          actions: [
            "Зафиксировал Time & Material как управленческую модель проекта и сделал изменения прозрачными: каждое уточнение связывали со сроками, бюджетом и рисками.",
            "Разобрал с заказчиком ключевые сценарии: подбор специалиста, запись на сеанс, оплата, онлайн-консультация, чат-поддержка, регистрация и проверка психологов.",
            "Скоординировал интеграции CloudPayments и Voximplant, а также включил новые требования к административной панели в общий план без потери контроля над ожиданиями клиента.",
          ],
          result:
            "Команда довела сервис до завершения: ключевые клиентские и административные сценарии были реализованы, а заказчик получил управляемый процесс с понятной логикой изменений, рисков, сроков и бюджета.",
        },
      },
      {
        id: "charge-cars",
        title: "Charge Cars - промо-сайт премиум электрокаров",
        subtitle:
          "Иммерсивный сайт для британского электрокара с видео, scroll-анимацией и премиальной подачей продукта",
        summary:
          "Charge Cars переосмыслил Ford Mustang Fastback 1967 как премиальный электрокар. Команде нужно было превратить готовый дизайн в технологичный промо-сайт с большим количеством видео, сложной анимации и одинаково сильным впечатлением на desktop и mobile.",
        img: "/chargecars-artifacts/chargecars-main.webp",
        artifactImages: [
          "/chargecars-artifacts/chargecars-main.webp",
          "/chargecars-artifacts/chargecars-detail-1.webp",
          "/chargecars-artifacts/chargecars-detail-2.webp",
        ],
        role: "Руководитель проекта",
        team: "Клиент, проектная команда, frontend-разработка, дизайн-эксперты",
        timeline: "Декабрь 2021 -> апрель 2022",
        problem:
          "После реализации первых экранов клиент понял, что сайт формально соответствует требованиям, но не дает ожидаемого уровня эффектности и премиальности.",
        solution:
          "Перевел проект в режим управляемых экспериментов: согласовал перенос рисков по срокам, организовал регулярные брейнштормы, синхронизировал дизайн и разработку вокруг анимаций, видео и производительности.",
        impact:
          "Финальная версия сайта удовлетворила клиента: продукт получил технологичную, элегантную и дорогую по восприятию digital-презентацию.",
        techTags: ["Automotive", "3D", "Scroll Animation", "Video", "UI/UX", "Web"],
        starBlock: {
          situation:
            "Charge Cars - британский стартап, выпускающий премиальные электрокары на базе классического Ford Mustang Fastback 1967. Для запуска нужен был промо-сайт по готовому дизайну, с анимацией и видео в духе продуктовых страниц Apple.",
          task: "Нужно было реализовать сайт, который выглядит дорого, быстро загружается для пользователей из разных регионов и одинаково хорошо работает на desktop и mobile. При этом часть технических решений по видео и scroll-анимации требовала экспериментов.",
          actions: [
            "После первых экранов согласовал с клиентом переход в экспериментальный режим и зафиксировал, что задержки по новым материалам, согласованиям и гипотезам продлевают сроки проекта.",
            "Организовал проработку нескольких моделей анимации: привязка к скроллу, секции-истории с проигрыванием фрагментов видео и гибридный сценарий, который в итоге приняли.",
            "Синхронизировал техническую команду вокруг кастомной логики видео без готовых библиотек и подключил дизайн-экспертизу для переработки меню, акцентов и восприятия главной страницы.",
          ],
          result:
            "Команда трансформировала исходную идею и довела сайт до результата, который совпал с ожиданиями клиента: технологичный, элегантный и премиальный digital-образ автомобиля.",
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
        tags: ["#EVRAZ", "2025", "1С ERP", "Starfish24", "Microservices"],
      },
      {
        caseStudyId: "exeed",
        title: "EXEED",
        desc: "Delivered 7 projects for exeed.ru and its 150-dealer network.",
        img: "/project-1.svg",
        teaserVideo: "/exeed-banner-video-desktop.mp4",
        teaserPoster: "/video-posters/exeed-video-poster.webp",
        tags: ["#Perx", "2023", "Automotive", "UI/UX", "Web", "Business Analysis", "Product"],
      },
      {
        caseStudyId: "prompter",
        title: "Pack Weight Assistant",
        desc: "A digital service for operators that suggests how many packs and layers to assemble, and what target weight to use, to close the wagon loading norm more accurately.",
        img: "/prompter.webp",
        tags: ["#EVRAZ", "2024", "Operations", "Digital Service", "Logistics"],
      },
      {
        caseStudyId: "dotherapy",
        title: "DO Therapy - Online Mental Health Service",
        desc: "Launched a psychologist matching service with booking, payments, online sessions, and specialist onboarding.",
        img: "/dotherapy-artifacts/dotherapy-main.webp",
        tags: ["#Nerve.AI", "2021-2022", "Healthcare", "CustDev", "Web"],
      },
      {
        caseStudyId: "charge-cars",
        title: "Charge Cars - Premium EV Promo Website",
        desc: "Launched an immersive website for an electric Ford Mustang Fastback 1967 with animation, video, and cross-device delivery.",
        img: "/chargecars-artifacts/chargecars-main.webp",
        tags: ["#Nerve.AI", "2021-2022", "Automotive", "3D", "Web"],
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
        techTags: ["Camunda BPM", "Kafka", "Event-Driven Architecture", "PostgreSQL", "Grafana"],
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
          task: "My task was not just to finish OMS, but to increase the share of orders the system could complete without constant manager involvement. In parallel, we had to reduce the load on 1C, cut manual touchpoints, and speed up execution without breaking the existing business process.",
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
          intro: "We focused on business impact, auto-execution, and stable operations under growing load.",
          roleText:
            "I was responsible for business outcomes: goals and KPIs, the scenario roadmap, business and IT alignment, priority management, status model decisions, releases, and integration risks.",
          contextText:
            "OMS had already been implemented, but a significant part of order execution still lived in a manual workflow and in 1C logic. The system was not yet a full execution layer and still depended too much on manual work and 1C.",
          goalText:
            "Increase the share of auto-execution, cut manual touchpoints, reduce the load on 1C, and accelerate execution without breaking the existing business process.",
          items: [
            {
              label:
                "Defined success criteria: what counts as auto-execution, which statuses are the source of truth, and which metrics are used to measure impact.",
            },
            {
              label:
                "Mapped the order flow into scenarios, prioritized them by business impact, and step by step expanded the OMS execution model.",
            },
            {
              label:
                "Strengthened the release loop: change management, control of integration risks, and predictable production rollout.",
            },
            { label: "Strengthened operations: monitoring, alerts, observability, and work on the status model." },
            {
              label:
                "Stabilized the integration layer under higher load so that one weak point would not break the whole operational flow.",
            },
          ],
          scaleText:
            "A core operational layer: OMS, 1C ERP, Bitrix24, logistics and notification scenarios, the status model, monitoring, and the surrounding process layer. The work moved in several waves across an integration-heavy microservice landscape.",
          teamsText: "Business, sales, logistics, operations teams, OMS, 1C ERP, Bitrix24, and integration services.",
          processText: "",
          toolsText: "",
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
        subtitle: "Digital services for the importer website and a 150-dealer network",
        summary: "Delivered 7 projects for exeed.ru and its 150-dealer network.",
        img: "/project-1.svg",
        teaserVideo: "/exeed-banner-video-desktop.mp4",
        teaserPoster: "/video-posters/exeed-video-poster.webp",
        artifactImages: ["/exeed-artifacts/trade-in-calculator.png", "/exeed-artifacts/model-comparison.png"],
        role: "Project Manager",
        team: "Importer team and dealer network",
        timeline: "Multiple releases",
        problem:
          "Initiatives of different scale and complexity had to be launched for both the central website and dealers.",
        solution:
          "Built a delivery flow from initiative to release with coordination of teams, requirements, and deadlines.",
        impact: "7 delivered projects and faster rollout of changes across the entire dealer network.",
        starBlock: {
          situation:
            "The importer website and a network of about 150 dealers needed coordinated launches of initiatives of different complexity.",
          task: "Ensure predictable delivery of digital services and integrations without slipping on schedule or quality.",
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
          teamsText: "Teams of 2-7 people: development, design, frontend, content, QA",
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
        id: "prompter",
        title: "Pack Weight Assistant",
        subtitle: "How a digital service helped reduce wagon underloading",
        summary:
          "Implemented a digital service for operators that suggests how many packs and layers to assemble, and what target weight to use, to close the wagon loading norm more accurately.",
        img: "/prompter.webp",
        role: "IT Project Lead",
        roleDetails: [
          "I led the IT part of the project. I organized the launch and working process, coordinated developers and engineers, and managed all stages from proof of concept (PoC) to full release. I controlled timelines and risks, and synchronized the team with the customer and production shops. As a result, I brought the solution to pilot operation and prepared the project documentation.",
          "At the same time, I did not limit myself to management only. I took on part of the analytical and testing work: designed the solution, worked through user scenarios, and shaped the assistant logic. I also participated in testing, collected user feedback, and translated it into tasks for the team.",
          "In practice, I worked at the intersection of management, analysis, and solution design. My job was not just to watch the schedule, but to help the team create a product that would actually fit into the production process.",
        ],
        scopeDetails: [
          {
            text: "The project covered the metal products packing and shipment area and lasted about 8 months of active implementation, from PoC to pilot operation in a real shop-floor environment.",
          },
          {
            items: [
              { text: "The implementation covered four weighing lines and operator workplaces." },
              {
                text: "The service was embedded into the existing operator interface and connected to MES/Wonderware.",
              },
              { text: "The project required IT infrastructure changes and direct equipment connection to the system." },
            ],
          },
          {
            text: "The solution processes loading data and signals from transfer equipment in real time, calculating the wagon loading norm based on pack, layer, bar parameters, and heat compatibility.",
          },
          {
            text: "A cross-functional team was assembled for delivery: from Python and React developers to MES/C# engineers, DevOps specialists, and production-side experts.",
          },
        ],
        team: "Business stakeholders, operators, IT team",
        timeline: "Project delivery",
        problem:
          "Operators had to manually choose a combination of packs, layers, and weight to close the wagon loading norm, which increased the risk of underloading.",
        solution:
          "We implemented an assistant that calculates the recommended loading configuration and helps the operator make a faster decision in the working process.",
        impact: "Average wagon loading increased by 3%, helping reduce underloading and lower transportation costs.",
        starBlock: {
          situation:
            "At the metal products packing and shipment area, operators relied on manual calculation and personal experience. As a result, wagons were loaded to only 94% of the target norm on average: underloading occurred, more rolling stock was required, and transportation costs increased. The business needed a tool that would help reach the wagon norm during loading, instead of analyzing deviations after the fact.",
          task: "The task was to implement an assistant service that shows the operator in real time how many full packs still need to be assembled, how many layers and bars should be in a pack, what the closing pack should look like, what weight has already been accumulated, and what result will be reached if the instruction is followed. The service also had to warn the user when they tried to close the wagon loading norm with a deviation and provide reference information on loading schemes.",
          actions: [
            "We started by analyzing the operator's real workflow on the current loading screen and mapped the CJM: when the decision is made, which data is missing, and where manual calculation most often creates errors. Based on this, we designed the assistant logic and prepared the algorithm for calculating the number of packs, layers, bars, and target weight needed to close the wagon loading norm. Technically, this was not a widget, but a full integration service.",
            "We embedded the assistant into the current operator screen so recommendations appeared directly in the working flow, without switching between windows. We also integrated it with packing area data and signals from transfer equipment, and added warnings.",
            "A separate challenge was adapting the project to the real shop-floor environment, not to an ideal mockup interface. The team rebuilt visual emphasis and information hierarchy so the operator could comfortably use the assistant on a production screen: large numeric values and simple visual logic.",
          ],
          result:
            "We implemented a service that suggests the required pack weight to the operator. The system was embedded directly into the workplace and connected to the production environment. The operator now receives clear recommendations: how to assemble main and closing packs, and how much more product can be added while respecting weight limits. The service shows current and forecast mass, tracks wagon norm fill, and collects statistics. As a result, average wagon loading increased by 3%, helping reduce underloading and lower transportation costs. In addition, automatic deviation control helped employees follow shop-floor regulations more strictly.",
        },
        techTags: ["Python", "C#/WCF", "RabbitMQ", "REST API", "OpenShift", "MES", "Wonderware"],
      },
      {
        id: "dotherapy",
        title: "DO Therapy - Online Mental Health Service",
        subtitle: "A psychologist marketplace with matching, booking, payments, and online sessions",
        summary:
          "A project for the Moscow Institute of Psychoanalysis: we launched the client journey from specialist matching to an online session and built the onboarding flow for psychologists.",
        img: "/dotherapy-artifacts/dotherapy-main.webp",
        artifactImages: ["/dotherapy-artifacts/dotherapy-main.webp"],
        role: "Project Manager",
        team: "Client, product team, development, QA, and integration vendors",
        timeline: "November 2021 -> April 2022",
        problem:
          "The project started with high uncertainty: the client expected a predictable launch, but payments, video calls, and SMS registration were not selected yet, and admin panel requirements appeared during delivery.",
        solution:
          "I moved the work into a transparent Time & Material delivery loop: tracked how changes affected timeline and budget, helped refine scenarios, and kept the team focused on the core launch path.",
        impact:
          "The service was completed against the original goals: specialist matching, booking, payments, online sessions, and psychologist registration were assembled into one working product.",
        techTags: ["Healthcare", "Marketplace", "CloudPayments", "Voximplant", "CustDev", "Web"],
        starBlock: {
          situation:
            "The Moscow Institute of Psychoanalysis was launching DO Therapy, a mental health service where a client can find a specialist for their request, book a consultation, and receive help online.",
          task: "Build not just a website, but a working service with multi-step matching, booking, payments, video calls, chat support, specialist registration, and an admin area.",
          actions: [
            "Set Time & Material as the delivery model and made changes transparent: every clarification was connected to timeline, budget, and delivery risk.",
            "Worked through the core journeys with the client: specialist matching, session booking, payment, online consultation, chat support, psychologist registration, and competency review.",
            "Coordinated CloudPayments and Voximplant integrations and folded new admin panel requirements into the delivery plan without losing control of client expectations.",
          ],
          result:
            "The team brought the service to completion: core client and admin scenarios were delivered, while the client had a controlled process with clear handling of changes, risks, timeline, and budget.",
        },
      },
      {
        id: "charge-cars",
        title: "Charge Cars - Premium EV Promo Website",
        subtitle:
          "An immersive product site for a British electric Mustang with video, scroll animation, and premium storytelling",
        summary:
          "Charge Cars reimagined the 1967 Ford Mustang Fastback as a premium electric car. The project turned a finished design into a high-impact website with video-heavy storytelling, complex animation, and a strong desktop and mobile experience.",
        img: "/chargecars-artifacts/chargecars-main.webp",
        artifactImages: [
          "/chargecars-artifacts/chargecars-main.webp",
          "/chargecars-artifacts/chargecars-detail-1.webp",
          "/chargecars-artifacts/chargecars-detail-2.webp",
        ],
        role: "Project Manager",
        team: "Client, project team, frontend development, design experts",
        timeline: "December 2021 -> April 2022",
        problem:
          "After the first screens were implemented, the client felt that the site matched the formal requirements but did not yet deliver the expected level of impact and premium perception.",
        solution:
          "I moved the project into a controlled experimentation mode: aligned timeline risk with the client, organized regular brainstorming, and coordinated design and engineering around animation, video behavior, and performance.",
        impact:
          "The final site met the client's expectations and gave the product a technological, elegant, and premium digital presentation.",
        techTags: ["Automotive", "3D", "Scroll Animation", "Video", "UI/UX", "Web"],
        starBlock: {
          situation:
            "Charge Cars is a British startup building premium electric cars based on the classic 1967 Ford Mustang Fastback. The client needed a website based on a finished design, with animation and video inspired by Apple product pages.",
          task: "Build a site that feels expensive, loads quickly for users across regions, and works well on both desktop and mobile. Several video and scroll-animation mechanics required experimentation.",
          actions: [
            "After the first screens, aligned an experimental delivery mode with the client and made delays from new assets, approvals, and hypotheses part of the project timeline logic.",
            "Organized exploration of several animation models: scroll-bound motion, story sections that play fragments of video, and the hybrid model that was eventually accepted.",
            "Coordinated the engineering team around custom video logic without ready-made libraries and brought in design expertise to improve navigation, emphasis, and the main page experience.",
          ],
          result:
            "The team transformed the original idea into a result that matched the client's expectations: a technological, elegant, and premium digital presence for the car.",
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
