## Описание проекта

`gendiff` — консольная утилита и библиотека для поиска различий между конфигурационными файлами (JSON/YAML). Программа строит внутреннее дерево изменений и умеет выводить результат в нескольких форматах: `stylish`, `plain` и `json`. Утилиту можно запускать из CLI либо использовать как пакет `@hexlet/code` в других проектах.

## Hexlet tests and linter status:
[![Actions Status](https://github.com/MarinaV38/qa-auto-engineer-javascript-project-87/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/MarinaV38/qa-auto-engineer-javascript-project-87/actions)
[![Node CI](https://github.com/MarinaV38/qa-auto-engineer-javascript-project-87/actions/workflows/ci.yml/badge.svg)](https://github.com/MarinaV38/qa-auto-engineer-javascript-project-87/actions/workflows/ci.yml)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=MarinaV38_qa-auto-engineer-javascript-project-87&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=MarinaV38_qa-auto-engineer-javascript-project-87)
[![Test Coverage](https://sonarcloud.io/api/project_badges/measure?project=MarinaV38_qa-auto-engineer-javascript-project-87&metric=coverage)](https://sonarcloud.io/summary/new_code?id=MarinaV38_qa-auto-engineer-javascript-project-87)


## Используемые технологии

- Node.js 20+
- Commander.js — CLI-интерфейс
- js-yaml — поддержка YAML
- Jest — модульные тесты и покрытие
- ESLint (Airbnb base) — контроль стиля
- GitHub Actions + SonarCloud — CI, качество и покрытия

## Установка и использование

```bash
# установка зависимостей
make install

# запуск линтера и тестов
make lint
npm test

# сравнение файлов (формат stylish по умолчанию)
node bin/gendiff.js path/to/file1.json path/to/file2.yml

# явный выбор формата
node bin/gendiff.js file1.yml file2.yml --format plain
node bin/gendiff.js file1.yml file2.yml --format json

# глобальная установка (опционально)
npm link
gendiff file1.json file2.json -f stylish
```

## Пример использования JSON

[![asciicast](https://asciinema.org/a/2WMneIlaXmiNXv2Sn1TI33ILN.svg)](https://asciinema.org/a/2WMneIlaXmiNXv2Sn1TI33ILN)

## Пример использования YAML

[![asciicast](https://asciinema.org/a/4P2VHw3FkoUYS09wKUiEzVPjs.svg)](https://asciinema.org/a/4P2VHw3FkoUYS09wKUiEzVPjs)

## Пример вывода в формате plain

[![asciicast](https://asciinema.org/a/VY8kqXRh284J6Rtgu0x6NEeaa.svg)](https://asciinema.org/a/VY8kqXRh284J6Rtgu0x6NEeaa)

## Пример вывода в формате json

[![asciicast](https://asciinema.org/a/PWq9AIw5XCMztC7JmpBGYl0O6.svg)](https://asciinema.org/a/PWq9AIw5XCMztC7JmpBGYl0O6)
