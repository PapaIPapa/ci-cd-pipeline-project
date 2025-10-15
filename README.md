# CI/CD Pipeline Project

Этот проект демонстрирует полноценный CI/CD pipeline с использованием GitHub Actions.

## Особенности

- 🔄 Автоматическое семантическое версионирование
- 🐳 Автоматическая сборка и публикация Docker образов
- 📱 Уведомления в Telegram о релизах
- 🏷️ Автоматические лейблы для Pull Requests
- 🔒 Проверки безопасности и качества кода
- 📝 Автоматическая генерация Changelog

## Workflow Structure

1. **Feature Branch** - тестирование на feature/hotfix ветках
2. **Pull Request** - валидация и проверки при создании PR
3. **Main Branch** - сборка, релиз и деплой при мерже в main

## Conventional Commits

Проект использует Conventional Commits для автоматического версионирования:

- `feat:` - новая функциональность (minor версия)
- `fix:` - исправление ошибки (patch версия)  
- `feat!:` или `BREAKING CHANGE:` - ломающие изменения (major версия)

## Используемые технологии

- Node.js + Express
- Docker
- GitHub Actions
- Semantic Release
- Telegram Bot API
- Docker Hub
