# AGENTS.md — port

## Microsoft Word — основной инструмент для Word-документов

- Для открытия, чтения, редактирования, сохранения, преобразования, экспорта в PDF и визуальной проверки файлов `.doc` и `.docx` в первую очередь используй установленный Microsoft Word через COM Automation.
- Не запускай стандартный рендер через LibreOffice первым и не используй отсутствие LibreOffice как основание для отказа от визуальной проверки.
- LibreOffice разрешён только как резервный вариант после подтверждённой недоступности или сбоя Microsoft Word. В результате явно укажи причину перехода на резервный инструмент и ограничения проверки.
- Не заявляй об успешной визуальной проверке, пока фактически не просмотрены страницы, отрендеренные или экспортированные через Microsoft Word либо согласованный резервный инструмент.


Общие правила workspace — в `../AGENTS.md`.

## Проект

Портфолио-сайт. Стек: Vite + React, деплой на GitHub Pages.
Статус: рабочий.

## Запуск (Docker)

Прод:
```bash
docker compose up --build
```
→ http://localhost:8080

Дев (hot reload):
```bash
docker compose -f docker-compose.dev.yml up --build
```
→ http://localhost:5173

## Деплой

GitHub Pages через GitHub Actions. Репозиторий: `trikotlet/sokolov`.
URL: `https://trikotlet.github.io/sokolov/`

## Особенности

- SPA-роутинг: deep links обрабатываются через `public/404.html`.
- `VITE_BASE_PATH` нормализуется через общий хелпер для Vite, роутинга и редиректа.
- При 404: проверить Settings → Pages → Source: GitHub Actions, перезапустить workflow.

## Правила

- Не менять `VITE_BASE_PATH` без проверки всех трёх мест использования.
- Перед деплоем: `npm run build` должен проходить без ошибок.
