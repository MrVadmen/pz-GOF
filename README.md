# Practical lesson pz-GOF  
# Реалізація GOF патернів проєктування  

> У цьому занятті студенти отримують практичний досвід імплементації класичних патернів проєктування (GoF — Gang of Four).  
> Мета — навчитися застосовувати породжувальні, структурні та поведінкові патерни для покращення архітектури програмних рішень.


## What need to do:
* Ознайомитися з основними групами патернів GoF:
  * Породжувальні (Creational)
  * Структурні (Structural)
  * Поведінкові (Behavioral)
* Реалізувати:
  * **2 породжувальні патерни** (наприклад: Factory Method, Abstract Factory, Builder, Singleton, Prototype)
  * **2 структурні патерни** (наприклад: Adapter, Facade, Decorator, Composite, Proxy, Bridge)
  * **2 поведінковий патерн** (наприклад: Strategy, Observer, Command, Iterator, Chain of Responsibility)
* Продемонструвати роботу кожного патерна (консольний приклад або простий сценарій)
* Пояснити, яку проблему вирішує кожен патерн
* Порівняти, як патерни покращують архітектуру коду порівняно з «анти-прикладами»
* Підготувати коротку документацію в README.md


## Acceptance criteria
* Використовуючи мову програмування Typescript
* Реалізовано **мінімум 5 патернів**:
  * 2 породжувальні
  * 2 структурні
  * 2 поведінковий
* Кожен патерн:
  * реалізований у окремій директорії  
  * має зрозумілий приклад застосування  
  * має коротке пояснення призначення  
  * демонструє очікувану роботу (через console.log або unit-тест)
* Код структурований за групами патернів
* README.md містить:
  * опис реалізованих патернів  
  * приклади запуску  
  * короткі висновки  
* Самостійна робота виконана:
  * додаткові патерни / додаткові приклади / альтернативні реалізації (опціонально)
* Проєкт успішно запускається

## Directory Structure

```
├── pz-GOF
│   ├── src
│   │   ├── creational
│   │   │   ├── factory-method
│   │   │   ├── builder
│   │   │   └── singleton
│   │   ├── structural
│   │   │   ├── adapter
│   │   │   ├── facade
│   │   │   └── decorator
│   │   ├── behavioral
│   │   │   ├── strategy
│   │   │   └── observer
│   ├── examples
│   │   ├── run-all.ts
│   ├── .editorconfig
│   ├── .gitignore
│   ├── package.json
│   ├── README.md
└──

```
## Useful links

[Refactoring Guru — Патерни проєктування](https://refactoring.guru/uk/design-patterns)

[Design Patterns in JavaScript](https://www.patterns.dev/posts/classic-design-patterns/)

[Head First Design Patterns (book)](https://www.oreilly.com/library/view/head-first-design/0596007124/)

[JavaScript Design Patterns — Addy Osmani](https://addyosmani.com/resources/essentialjsdesignpatterns/book/)

[Gang of Four (GoF) Patterns Overview](https://www.digitalocean.com/community/tutorials/gangs-of-four-gof-design-patterns)

[Ти мусиш знати ці патерни проєктування!](https://www.youtube.com/watch?v=Dc6AEjHvpP8)

[abstract-factory-pattern](https://medium.com/@artemkhrenov/abstract-factory-pattern-implementation-in-javascript-7d05c99842b4)


Що я зробив:
Реалізував 6 класичних патернів (по 2 на кожну групу) на TypeScript. Щоб було цікавіше і ближче до нашої спеціальності, я прив'язав усі патерни до тематики військових телекомунікацій та управління:

Factory Method — для вибору типу доставки (бронеавтомобіль/дрон).

Singleton — для створення єдиного з'єднання з Командним Пунктом.

Adapter — для підключення старої аналогової рації до цифрової мережі.

Facade — для розгортання станції зв'язку однією командою (генератор + антена + криптомодуль).

Strategy — для перемикання маршрутизації (швидкий канал або захищений VPN).

Observer — для миттєвої розсилки наказів зі штабу до підрозділів.

Команди для перевірки (щоб вам було зручно запустити):

Щоб запустити і перевірити одразу всі 6 патернів, введіть у терміналі:
npx ts-node examples/run-all.ts

Якщо хочете запустити їх по черзі, ось команди для кожного окремо:

Породжувальні:
npx ts-node src/creational/factory-method/index.ts
npx ts-node src/creational/singleton/index.ts

Структурні:
npx ts-node src/structural/adapter/index.ts
npx ts-node src/structural/facade/index.ts

Поведінкові:
npx ts-node src/behavioral/strategy/index.ts
npx ts-node src/behavioral/observer/index.ts