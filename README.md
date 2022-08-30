# Information / Информация

Пакет русской локализации движка [**Flarum**](https://flarum.org/) - программного обеспечения нового поколения для создания сообществ. Реализована поддержка единичных и множественных чисел (переменных). Все фразы взяты в двойные кавычки для предотвращения конфликтов со знаками препинания, потому что их в русском языке используется большее количество, по сравнению с английским.

## Install / Установка

**Flarum** использует [**Composer**](https://getcomposer.org/) для управления зависимостями и расширениями.

Русский пакет локализации доступен в [**Packagist**](https://packagist.org/packages/flarum-lang/russian) и может быть установлен при помощи **Composer**.

Убедитесь, что **Composer** установлен на вашем компьютере, и введите следующую команду в терминале, находясь в корневой директории **Flarum**:

```shell
composer require flarum-lang/russian
```

Так же, данная команда может быть использована для обновления языкового пакета, без обновления сторонних компонентов.

Обратите внимание, что пакет локализации будет добавлен в качестве зависимости **Flarum**, и он также будет автоматически обновляться при обновлении движка форума.

## Update / Обновление

Для обновления локализации необходимо выполнить следующие команды:

```shell
composer update flarum-lang/russian
php flarum cache:clear
```

## Remove / Удаление

Для удаления локализации необходимо выполнить следующие команды:

```shell
composer remove flarum-lang/russian
php flarum cache:clear
```

## Translation status for Flarum core

| Component | Status |
| --- | --- |
| [Core](https://github.com/flarum/flarum-core) | [![Translation status](https://weblate.rob006.net/widgets/flarum/ru/core/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/core/ru/) |
| Validation | [![Translation status](https://weblate.rob006.net/widgets/flarum/ru/validation/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/validation/ru/) |


## Translation status for official extensions

<!-- flarum-extensions-list-start -->

| Extension | Status |
| --- | --- |

<!-- flarum-extensions-list-stop -->


## Translation status for Friends of Flarum extensions

<!-- fof-extensions-list-start -->

| Extension | Status |
| --- | --- |

<!-- fof-extensions-list-stop -->


## Translation status for community extensions

<!-- various-extensions-list-start -->

| Extension | Status |
| --- | --- |

<!-- various-extensions-list-stop -->


## Translation status for premium extensions

<!-- premium-extensions-list-start -->

| Extension | Status |
| --- | --- |

<!-- premium-extensions-list-stop -->
