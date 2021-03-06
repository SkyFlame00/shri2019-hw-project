# React-приложение Arcanum

## Установка

Сначала необходимо установить и запустить [API-сервер](https://github.com/SkyFlame00/shri2019-hw-project/tree/master/api). После этого в данной папке репозитория вызовите команды:

```sh
$ npm i
$ npm run build
```

## Запуск

```sh
$ npm run start
```

Сервер будет запущен на http://localhost:9000.

## Структура

* `src/index.js` - точка входа в приложение
* `dist` - в эту директорию вебпаком складываются файлы для отдачи клиенту
* `src/components` - здесь хранятся компоненты приложения
* `src/config` - здесь хранятся конфиги. Единственный конфиг - адрес API-сервера

## Несколько слов о ходе работы...

Я впервые писал что-то на реакте (был только небольшой опыт работы с ангуляром год назад). К сожалению, сделан только самый минимум (и то вроде не полностью: выводить нужно только текстовые файлы, а у меня по логике приложения выводятся все подряд).

Возможно, ошибкой было решение делать дропдаун, потому что на его продумывание ушло очень много времени. Наверное, стоило сделать просто селект.

Также я параллельно исправлял некоторые недостатки верстки, которые выявил мой рецензент в соответствующем дз, и внедрил часть его предложений по улучшению.

Необходимо было еще доработать API-сервер.

Начинал читать про реакт-редакс, но не успел его прикрутить.

## Что сделано
Сделан самый базовый функционал, требуемый в задании, а также:
* Спиннер 😂

## Очевидные недостатки
* Дропдаун закрывается только при повторном клике на кнопку. События клика вне дропдауна не обрабатываются
* Нет разделения по слоям: все компоненты лежат в одной папке
* В консоли выводится ошибка о том, что каждый элемент списка должен иметь key в компоненте `HorizontalMenuItem`. Сходу я не смог решить, в чем дело, поскольку, как мне показалось, я поставил ключи везде. Но времени на поиск не было, поэтому я решил оставить так
* Нет обработки ошибочных URL. Если запрашиваемый репозиторий/директория/файл не существует, то просто будет крутиться спиннер
* Показывается содержимое всего подряд, а не только текстовых файлов
* Верстка перенесена частично: нет футера, мобильной верстки и многого другого

## Инструменты

### webpack
Необходим для сборки JS- и SCSS- файлов.

### Модули для webpack
* разные модули babel - транспиляция JSX в JS
* `css-loader`, `node-sass`, `sass-loader`, `style-loader` - необходимы для работы с SCSS- и CSS-файлами
* `url-loader` - необходим для отдачи шрифтов
* `@svgr/webpack` - необходим для отдачи svg-файлов

### express
Необходим для раздачи файлов клиенту