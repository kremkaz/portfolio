# Портфолио Евгении Артюшиной

Сайт-портфолио продуктового дизайнера (UX/UI) с кейсами Vecta, Tanuki и BusTime. Есть русская и английская версии.

**Сайт:** https://kremkaz.github.io/portfolio/

## Стек

Next.js (App Router, статический экспорт), Tailwind CSS v4, shadcn/ui на Base UI, Motion. Пакетный менеджер — pnpm.

## Локальный запуск

```bash
pnpm install
pnpm dev
```

Сайт откроется на [http://localhost:3000](http://localhost:3000), английская версия — на `/en`.

## Где что лежит

- `content/` — все тексты: главная (`home.ts`, `home.en.ts`), подписи интерфейса (`ui.ts`) и кейсы (`content/cases/`, отдельный файл на кейс и язык)
- `app/` — страницы
- `components/` — компоненты сайта, `components/ui/` — компоненты shadcn
- `public/` — картинки кейсов, фото и PDF-резюме
- `design-tokens.md` — цвета, типографика, структура карточки кейса
- `animations.md` — паттерны анимаций

## Деплой

Каждый пуш в `main` запускает GitHub Actions (`.github/workflows/deploy.yml`): workflow собирает статический сайт в `out/` и публикует его на GitHub Pages. Префикс `/portfolio` workflow передаёт сборке через `NEXT_PUBLIC_BASE_PATH`, поэтому локально сайт открывается с корня.
