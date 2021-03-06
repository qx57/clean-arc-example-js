# Пример реализации чистой архитектуры в автотестах на JS



## Base
Требования:
- Node.js 12.6 и выше
- Selenium Web Driver. Для корректной работы вам потребуется файл **_chromedriver.exe_**
  (скачать можно [тут](https://chromedriver.chromium.org/downloads)). Положите его в корень репозитория.
- Для локального запуска тестов необходимо настроить Environment variables:
```
PATH=C:\chromedriver.exe;ENV=dev
``` 


## Test Definition Objects (TDO)

* **Папка:** tdo/

В папке содержатся примеры TDO для тестов API и UI (в соответствующих пакетах).
Важно: клиенты(интеграции) добавляются в модуль при помощи специализированного метода (типа **setClient**):

```js
module.exports.setClient = (current_client) => {
  client = current_client;
  return this;
}
```
сам же клиент формируется в объекте адаптера (см. Адаптеры)

В папке **_resources/schemas_** находятся используемые для инициализации
клиента для тестов API (и для проверки контрактов) Swagger-файлы.



## Test cases

### Код теста

* **Папка:** test/

Пример реализации тестов API и UI. В данном примере в качестве API клиента используется
**_sync-request_**, а UI тесты основаны на Selenium Web Driver.

В тесты подключается TDO как модуль (из контекста):
```js
var endpoint1 = context.getEndpoint1();
```
В UI классе дополнительно прямо из контекста может быть вызван веб-драйвер (для управления сессиями):
```js
context.getWebDriver().close();
```
Конкретные пакеты, используемые в интеграциях, указываются непосредственно в контексте.

### Контекст

* **Папка:** test/context/

Класс контекста формирует набор модулей, необходимых для выполнения теста/группы тестов.
в контекст добавляются выбранная для теста реализация клиента/веб-драйвера, которая затем передается
 в адаптер для магической обработки:
```js
var client = require.main.require('integrations/api_client/sync_request_client');
var api_client = require.main.require('core/adapters/api_client').setIntegration(client).getIntegration();
```
Также в контексте подключаются TDO, в которые затем пробрасывается объект адаптера - таким образом 
происходит подключение конкретного клиента в TDO и использование результатов его работы 
(Response, WebELement) в тесте.

### Настройки

* **Файл:** environment.json

Содержит все необходимые для проведения тестов настройки и данные. 
Файл считывается при помощи модуля **_environment_** (integrations/environment), после чего
переменные окружения доступны в тесте в параметре **_settings_** (см. **Custom Framework**).


## Custom Framework

* **Папка:** core/

Фреймворк состоит из 3-х основных частей:
* Framework Core (модуль с подключением контекста и общими функциями)
* Библиотеки адаптеров (для использования в TDO и клиентах)
* Базовый контекст тестов

### Framework Core
* **Файл:** core/core.js

Модуль, подключающий общий контекст, базовый тестовый фреймворк, матчеры, и реализующий 
базовый функционал, например - чтение переменных окружения из файла настроек тестов.

### Адаптеры

* **Папка:** core/adapters/

В папке собраны адаптеры (аналоги интерфейсов в ООП) для интеграций, которые в дальнейшем 
будут использованы в TDO. ВНИМАНИЕ! МАГИЯ! (см. core/adapters/_proto.js)

### Базовый контекст

* **Папка:** core/

Подключает необходимые для всех тестов зависимости (например, конфигуратор тестового окружения).
Подключение происходит в базовом модуле **Framework Core**:
```js
var env = require('./context').getIntegration();
module.exports.settings = env.getEnvironmentSettings();
```


## Integrations

* **Папка:** integrations/

В примере приведены реализации клиентов и драйверов для тестов.

**ВАЖНО!** **_Все_** клиенты должны обладать набором методов, описанных в соответствующем адаптере
**_core/adapters_**!

## Maintainers
- [Denis Kudriashov](https://github.com/qx57)