# Информация

Пакет русской локализации движка [**Flarum**](https://flarum.org/) - программного обеспечения нового поколения для создания сообществ. Реализована поддержка единичных и множественных чисел (переменных). Все фразы взяты в двойные кавычки для предотвращения конфликтов со знаками препинания, потому что их в русском языке используется большее количество, по сравнению с английским.

## Установка

**Flarum** использует [**Composer**](https://getcomposer.org/) для управления зависимостями и расширениями.

Русский пакет локализации доступен в [**Packagist**](https://packagist.org/packages/flarum-lang/russian) и может быть установлен при помощи **Composer**.

Убедитесь, что **Composer** установлен на вашем компьютере, и введите следующую команду в терминале, находясь в корневой директории **Flarum**:

```shell
composer require "flarum-lang/russian:*"
```

Так же, данная команда может быть использована для обновления языкового пакета, без обновления сторонних компонентов.

Обратите внимание, что пакет локализации будет добавлен в качестве зависимости **Flarum**, и он также будет автоматически обновляться при обновлении движка форума.

## Обновление

Для обновления локализации необходимо выполнить следующие команды:

```shell
composer update flarum-lang/russian
php flarum cache:clear
```

## Удаление

Для удаления локализации необходимо выполнить следующие команды:

```shell
composer remove flarum-lang/russian
php flarum cache:clear
```

## Translation status for Flarum core

| Component | Status |
| --- | --- |
| [Core](https://github.com/flarum/flarum-core) | [![Translation status](https://weblate.rob006.net/widgets/flarum2/ru/core/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/core/ru/) |
| Validation | [![Translation status](https://weblate.rob006.net/widgets/flarum2/ru/validation/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/validation/ru/) |


## Translation status for official extensions

<!-- flarum-extensions-list-start -->

| Расширение | Статус |
| --- | --- |
| [`flarum/akismet`](https://github.com/flarum/akismet) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/flarum-akismet/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/flarum-akismet/ru/) |
| [`flarum/approval`](https://github.com/flarum/approval) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/flarum-approval/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/flarum-approval/ru/) |
| [`flarum/bbcode`](https://github.com/flarum/bbcode) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/flarum-bbcode/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/flarum-bbcode/ru/) |
| [`flarum/emoji`](https://github.com/flarum/emoji) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/flarum-emoji/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/flarum-emoji/ru/) |
| [`flarum/extension-manager`](https://github.com/flarum/extension-manager) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/flarum-extension-manager/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/flarum-extension-manager/ru/) |
| [`flarum/flags`](https://github.com/flarum/flags) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/flarum-flags/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/flarum-flags/ru/) |
| [`flarum/gdpr`](https://github.com/flarum/gdpr) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/flarum-gdpr/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/flarum-gdpr/ru/) |
| [`flarum/likes`](https://github.com/flarum/likes) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/flarum-likes/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/flarum-likes/ru/) |
| [`flarum/lock`](https://github.com/flarum/lock) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/flarum-lock/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/flarum-lock/ru/) |
| [`flarum/markdown`](https://github.com/flarum/markdown) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/flarum-markdown/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/flarum-markdown/ru/) |
| [`flarum/mentions`](https://github.com/flarum/mentions) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/flarum-mentions/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/flarum-mentions/ru/) |
| [`flarum/messages`](https://github.com/flarum/messages) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/flarum-messages/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/flarum-messages/ru/) |
| [`flarum/nicknames`](https://github.com/flarum/nicknames) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/flarum-nicknames/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/flarum-nicknames/ru/) |
| [`flarum/pusher`](https://github.com/flarum/pusher) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/flarum-pusher/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/flarum-pusher/ru/) |
| [`flarum/realtime`](https://github.com/flarum/realtime) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/flarum-realtime/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/flarum-realtime/ru/) |
| [`flarum/statistics`](https://github.com/flarum/statistics) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/flarum-statistics/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/flarum-statistics/ru/) |
| [`flarum/sticky`](https://github.com/flarum/sticky) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/flarum-sticky/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/flarum-sticky/ru/) |
| [`flarum/subscriptions`](https://github.com/flarum/subscriptions) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/flarum-subscriptions/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/flarum-subscriptions/ru/) |
| [`flarum/suspend`](https://github.com/flarum/suspend) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/flarum-suspend/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/flarum-suspend/ru/) |
| [`flarum/tags`](https://github.com/flarum/tags) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/flarum-tags/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/flarum-tags/ru/) |

<!-- flarum-extensions-list-stop -->


## Translation status for Friends of Flarum extensions

<!-- fof-extensions-list-start -->

| Расширение | Статус |
| --- | --- |
| [`fof/analytics`](https://github.com/FriendsOfFlarum/analytics) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/fof-analytics/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/fof-analytics/ru/) |
| [`fof/anti-spam`](https://github.com/FriendsOfFlarum/anti-spam) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/fof-anti-spam/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/fof-anti-spam/ru/) |
| [`fof/badges`](https://github.com/FriendsOfFlarum/badges) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/fof-badges/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/fof-badges/ru/) |
| [`fof/best-answer`](https://github.com/FriendsOfFlarum/best-answer) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/fof-best-answer/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/fof-best-answer/ru/) |
| [`fof/byobu`](https://github.com/FriendsOfFlarum/byobu) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/fof-byobu/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/fof-byobu/ru/) |
| [`fof/categories`](https://github.com/FriendsOfFlarum/categories) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/fof-categories/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/fof-categories/ru/) |
| [`fof/checklist`](https://github.com/FriendsOfFlarum/checklist) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/fof-checklist/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/fof-checklist/ru/) |
| [`fof/clockwork`](https://github.com/FriendsOfFlarum/clockwork) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/fof-clockwork/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/fof-clockwork/ru/) |
| [`fof/default-group`](https://github.com/FriendsOfFlarum/default-group) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/fof-default-group/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/fof-default-group/ru/) |
| [`fof/default-user-preferences`](https://github.com/FriendsOfFlarum/default-user-preferences) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/fof-default-user-preferences/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/fof-default-user-preferences/ru/) |
| [`fof/discussion-templates`](https://github.com/FriendsOfFlarum/discussion-templates) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/fof-discussion-templates/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/fof-discussion-templates/ru/) |
| [`fof/discussion-thumbnail`](https://github.com/FriendsOfFlarum/discussion-thumbnail) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/fof-discussion-thumbnail/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/fof-discussion-thumbnail/ru/) |
| [`fof/discussion-views`](https://github.com/FriendsOfFlarum/discussion-views) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/fof-discussion-views/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/fof-discussion-views/ru/) |
| [`fof/disposable-emails`](https://github.com/FriendsOfFlarum/disposable-emails) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/fof-disposable-emails/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/fof-disposable-emails/ru/) |
| [`fof/drafts`](https://github.com/FriendsOfFlarum/drafts) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/fof-drafts/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/fof-drafts/ru/) |
| [`fof/follow-tags`](https://github.com/FriendsOfFlarum/follow-tags) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/fof-follow-tags/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/fof-follow-tags/ru/) |
| [`fof/formatting`](https://github.com/FriendsOfFlarum/formatting) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/fof-formatting/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/fof-formatting/ru/) |
| [`fof/forum-statistics-widget`](https://github.com/FriendsOfFlarum/forum-statistics-widget) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/fof-forum-statistics-widget/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/fof-forum-statistics-widget/ru/) |
| [`fof/forum-stats-widget`](https://github.com/FriendsOfFlarum/forum-stats-widget) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/fof-forum-stats-widget/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/fof-forum-stats-widget/ru/) |
| [`fof/forum-widgets-core`](https://github.com/FriendsOfFlarum/forum-widgets-core) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/fof-forum-widgets-core/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/fof-forum-widgets-core/ru/) |
| [`fof/frontpage`](https://github.com/FriendsOfFlarum/frontpage) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/fof-frontpage/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/fof-frontpage/ru/) |
| [`fof/gamification`](https://github.com/FriendsOfFlarum/gamification) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/fof-gamification/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/fof-gamification/ru/) |
| [`fof/geoip`](https://github.com/FriendsOfFlarum/geoip) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/fof-geoip/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/fof-geoip/ru/) |
| [`fof/github-sponsors`](https://github.com/FriendsOfFlarum/github-sponsors) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/fof-github-sponsors/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/fof-github-sponsors/ru/) |
| [`fof/horizon`](https://github.com/FriendsOfFlarum/horizon) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/fof-horizon/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/fof-horizon/ru/) |
| [`fof/html-errors`](https://github.com/FriendsOfFlarum/html-errors) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/fof-html-errors/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/fof-html-errors/ru/) |
| [`fof/ignore-users`](https://github.com/FriendsOfFlarum/ignore-users) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/fof-ignore-users/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/fof-ignore-users/ru/) |
| [`fof/impersonate`](https://github.com/FriendsOfFlarum/impersonate) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/fof-impersonate/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/fof-impersonate/ru/) |
| [`fof/linguist`](https://github.com/FriendsOfFlarum/linguist) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/fof-linguist/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/fof-linguist/ru/) |
| [`fof/links`](https://github.com/FriendsOfFlarum/links) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/fof-links/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/fof-links/ru/) |
| [`fof/masquerade`](https://github.com/FriendsOfFlarum/masquerade) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/fof-masquerade/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/fof-masquerade/ru/) |
| [`fof/merge-discussions`](https://github.com/FriendsOfFlarum/merge-discussions) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/fof-merge-discussions/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/fof-merge-discussions/ru/) |
| [`fof/moderator-notes`](https://github.com/FriendsOfFlarum/moderator-notes) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/fof-moderator-notes/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/fof-moderator-notes/ru/) |
| [`fof/moderator-warnings`](https://github.com/FriendsOfFlarum/moderator-warnings) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/fof-moderator-warnings/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/fof-moderator-warnings/ru/) |
| [`fof/move-posts`](https://github.com/FriendsOfFlarum/move-posts) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/fof-move-posts/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/fof-move-posts/ru/) |
| [`fof/news-widget`](https://github.com/FriendsOfFlarum/news-widget) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/fof-news-widget/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/fof-news-widget/ru/) |
| [`fof/oauth`](https://github.com/FriendsOfFlarum/oauth) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/fof-oauth/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/fof-oauth/ru/) |
| [`fof/online-users-widget`](https://github.com/FriendsOfFlarum/online-users-widget) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/fof-online-users-widget/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/fof-online-users-widget/ru/) |
| [`fof/open-collective`](https://github.com/FriendsOfFlarum/open-collective) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/fof-open-collective/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/fof-open-collective/ru/) |
| [`fof/pages`](https://github.com/FriendsOfFlarum/pages) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/fof-pages/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/fof-pages/ru/) |
| [`fof/polls`](https://github.com/FriendsOfFlarum/polls) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/fof-polls/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/fof-polls/ru/) |
| [`fof/prevent-necrobumping`](https://github.com/FriendsOfFlarum/prevent-necrobumping) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/fof-prevent-necrobumping/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/fof-prevent-necrobumping/ru/) |
| [`fof/profile-image-crop`](https://github.com/FriendsOfFlarum/profile-image-crop) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/fof-profile-image-crop/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/fof-profile-image-crop/ru/) |
| [`fof/pwned-passwords`](https://github.com/FriendsOfFlarum/pwned-passwords) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/fof-pwned-passwords/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/fof-pwned-passwords/ru/) |
| [`fof/reactions`](https://github.com/FriendsOfFlarum/reactions) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/fof-reactions/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/fof-reactions/ru/) |
| [`fof/recaptcha`](https://github.com/FriendsOfFlarum/recaptcha) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/fof-recaptcha/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/fof-recaptcha/ru/) |
| [`fof/rich-text`](https://github.com/FriendsOfFlarum/rich-text) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/fof-rich-text/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/fof-rich-text/ru/) |
| [`fof/sentry`](https://github.com/FriendsOfFlarum/sentry) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/fof-sentry/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/fof-sentry/ru/) |
| [`fof/share-social`](https://github.com/FriendsOfFlarum/share-social) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/fof-share-social/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/fof-share-social/ru/) |
| [`fof/sitemap`](https://github.com/FriendsOfFlarum/sitemap) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/fof-sitemap/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/fof-sitemap/ru/) |
| [`fof/socialprofile`](https://github.com/FriendsOfFlarum/socialprofile) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/fof-socialprofile/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/fof-socialprofile/ru/) |
| [`fof/split`](https://github.com/FriendsOfFlarum/split) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/fof-split/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/fof-split/ru/) |
| [`fof/subscribed`](https://github.com/FriendsOfFlarum/subscribed) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/fof-subscribed/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/fof-subscribed/ru/) |
| [`fof/synopsis`](https://github.com/FriendsOfFlarum/synopsis) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/fof-synopsis/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/fof-synopsis/ru/) |
| [`fof/terms`](https://github.com/FriendsOfFlarum/terms) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/fof-terms/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/fof-terms/ru/) |
| [`fof/top-posters-widget`](https://github.com/FriendsOfFlarum/top-posters-widget) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/fof-top-posters-widget/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/fof-top-posters-widget/ru/) |
| [`fof/upload`](https://github.com/FriendsOfFlarum/upload) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/fof-upload/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/fof-upload/ru/) |
| [`fof/user-bio`](https://github.com/FriendsOfFlarum/user-bio) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/fof-user-bio/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/fof-user-bio/ru/) |
| [`fof/user-directory`](https://github.com/FriendsOfFlarum/user-directory) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/fof-user-directory/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/fof-user-directory/ru/) |
| [`fof/usercard-stats`](https://github.com/FriendsOfFlarum/usercard-stats) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/fof-usercard-stats/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/fof-usercard-stats/ru/) |
| [`fof/username-request`](https://github.com/FriendsOfFlarum/username-request) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/fof-username-request/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/fof-username-request/ru/) |
| [`fof/webhooks`](https://github.com/FriendsOfFlarum/webhooks) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/fof-webhooks/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/fof-webhooks/ru/) |

<!-- fof-extensions-list-stop -->


## Translation status for community extensions

<!-- various-extensions-list-start -->

| Расширение | Статус |
| --- | --- |
| [`acpl/flarum-lscache`](https://github.com/android-com-pl/flarum-lscache) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/acpl-lscache/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/acpl-lscache/ru/) |
| [`acpl/mobile-tab`](https://github.com/android-com-pl/mobile-tab) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/acpl-mobile-tab/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/acpl-mobile-tab/ru/) |
| [`acpl/my-tags`](https://github.com/android-com-pl/my-tags) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/acpl-my-tags/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/acpl-my-tags/ru/) |
| [`dashzeveg/flarum-ads-manager`](https://github.com/dashzeveg/flarum-ads-manager) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/dashzeveg-ads-manager/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/dashzeveg-ads-manager/ru/) |
| [`dashzeveg/flarum-custom-head`](https://github.com/dashzeveg/flarum-custom-head) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/dashzeveg-custom-head/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/dashzeveg-custom-head/ru/) |
| [`datlechin/flarum-bbcode-hide-content`](https://github.com/datlechin/flarum-bbcode-hide-content) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/datlechin-bbcode-hide-content/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/datlechin-bbcode-hide-content/ru/) |
| [`datlechin/flarum-birthdays`](https://github.com/datlechin/flarum-birthdays) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/datlechin-birthdays/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/datlechin-birthdays/ru/) |
| [`datlechin/flarum-copy-links`](https://github.com/datlechin/flarum-copy-links) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/datlechin-copy-links/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/datlechin-copy-links/ru/) |
| [`datlechin/flarum-discussion-overview`](https://github.com/datlechin/flarum-discussion-overview) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/datlechin-discussion-overview/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/datlechin-discussion-overview/ru/) |
| [`datlechin/flarum-link-preview`](https://github.com/datlechin/flarum-link-preview) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/datlechin-link-preview/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/datlechin-link-preview/ru/) |
| [`datlechin/flarum-more-discussions`](https://github.com/datlechin/flarum-more-discussions) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/datlechin-more-discussions/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/datlechin-more-discussions/ru/) |
| [`datlechin/flarum-posted-on`](https://github.com/datlechin/flarum-posted-on) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/datlechin-posted-on/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/datlechin-posted-on/ru/) |
| [`datlechin/flarum-scroll-buttons`](https://github.com/datlechin/flarum-scroll-buttons) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/datlechin-scroll-buttons/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/datlechin-scroll-buttons/ru/) |
| [`datlechin/flarum-signup-button`](https://github.com/datlechin/flarum-signup-button) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/datlechin-signup-button/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/datlechin-signup-button/ru/) |
| [`datlechin/flarum-silent-edit`](https://github.com/datlechin/flarum-silent-edit) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/datlechin-silent-edit/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/datlechin-silent-edit/ru/) |
| [`datlechin/flarum-tag-passwords`](https://github.com/datlechin/flarum-tag-passwords) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/datlechin-tag-passwords/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/datlechin-tag-passwords/ru/) |
| [`ekumanov/flarum-ext-forum-widgets`](https://github.com/ekumanov/flarum-ext-forum-stats-widget) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/ekumanov-forum-widgets/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/ekumanov-forum-widgets/ru/) |
| [`ekumanov/flarum-ext-inline-audio`](https://github.com/ekumanov/flarum-ext-inline-audio) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/ekumanov-inline-audio/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/ekumanov-inline-audio/ru/) |
| [`ekumanov/flarum-ext-new-posts-notice`](https://github.com/ekumanov/flarum-ext-new-posts-notice) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/ekumanov-new-posts-notice/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/ekumanov-new-posts-notice/ru/) |
| [`ekumanov/flarum-ext-post-search`](https://github.com/ekumanov/flarum-ext-post-search) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/ekumanov-post-search/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/ekumanov-post-search/ru/) |
| [`flectar/flarum-turnstile`](https://github.com/flectar/flarum-ext-turnstile) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/flectar-turnstile/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/flectar-turnstile/ru/) |
| [`forumaker/magicbb`](https://github.com/forumaker/magicbb) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/forumaker-magicbb/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/forumaker-magicbb/ru/) |
| [`forumaker/magicdice`](https://github.com/forumaker/magicdice) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/forumaker-magicdice/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/forumaker-magicdice/ru/) |
| [`forumaker/magicread`](https://github.com/forumaker/magicread) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/forumaker-magicread/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/forumaker-magicread/ru/) |
| [`forumaker/magicslider`](https://github.com/forumaker/magicslider) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/forumaker-magicslider/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/forumaker-magicslider/ru/) |
| [`huoxin/relative-url`](https://github.com/huoxin233/flarum-ext-relative-url) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/huoxin-relative-url/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/huoxin-relative-url/ru/) |
| [`huseyinfiliz/awards`](https://github.com/huseyinfiliz/awards) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/huseyinfiliz-awards/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/huseyinfiliz-awards/ru/) |
| [`huseyinfiliz/flarum-diff`](https://github.com/huseyinfiliz/flarum-diff) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/huseyinfiliz-diff/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/huseyinfiliz-diff/ru/) |
| [`huseyinfiliz/leaderboard`](https://github.com/huseyinfiliz/leaderboard) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/huseyinfiliz-leaderboard/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/huseyinfiliz-leaderboard/ru/) |
| [`huseyinfiliz/modern-footer`](https://github.com/huseyinfiliz/modern-footer) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/huseyinfiliz-modern-footer/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/huseyinfiliz-modern-footer/ru/) |
| [`huseyinfiliz/rewind`](https://github.com/huseyinfiliz/rewind) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/huseyinfiliz-rewind/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/huseyinfiliz-rewind/ru/) |
| [`huseyinfiliz/stickiest`](https://github.com/huseyinfiliz/stickiest) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/huseyinfiliz-stickiest/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/huseyinfiliz-stickiest/ru/) |
| [`ianm/boring-avatars`](https://github.com/imorland/flarum-ext-boring-avatars) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/ianm-boring-avatars/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/ianm-boring-avatars/ru/) |
| [`ianm/follow-users`](https://github.com/imorland/follow-users) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/ianm-follow-users/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/ianm-follow-users/ru/) |
| [`ianm/html-head`](https://github.com/imorland/html-head) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/ianm-html-head/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/ianm-html-head/ru/) |
| [`ianm/log-viewer`](https://github.com/imorland/flarum-ext-log-viewer) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/ianm-log-viewer/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/ianm-log-viewer/ru/) |
| [`ianm/twofactor`](https://github.com/imorland/flarum-ext-twofactor) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/ianm-twofactor/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/ianm-twofactor/ru/) |
| [`import-ai/flarum-webhook-notification`](https://github.com/import-ai/flarum-webhook-notification) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/import-ai-webhook-notification/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/import-ai-webhook-notification/ru/) |
| [`justoverclock/flarum-ext-welcomebox`](https://github.com/justoverclockl/flarum-ext-welcomebox) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/justoverclock-welcomebox/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/justoverclock-welcomebox/ru/) |
| [`migratetoflarum/fake-data`](https://github.com/migratetoflarum/fake-data) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/migratetoflarum-fake-data/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/migratetoflarum-fake-data/ru/) |
| [`pianotell/flarum-ext-flamoji`](https://github.com/PrimateCoder/flarum-flamoji) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/pianotell-flamoji/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/pianotell-flamoji/ru/) |
| [`quasimo/flarum-ext-carousel-grids`](https://github.com/Quasimo/flarum-ext-carousel-grids) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/quasimo-carousel-grids/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/quasimo-carousel-grids/ru/) |
| [`quasimo/flarum-ext-llms-txt`](https://github.com/Quasimo/flarum-ext-llms-txt) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/quasimo-llms-txt/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/quasimo-llms-txt/ru/) |
| [`quasimo/flarum-ext-tag-sidebar`](https://github.com/Quasimo/flarum-ext-tag-sidebar) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/quasimo-tag-sidebar/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/quasimo-tag-sidebar/ru/) |
| [`ralkage/flarum-ext-account-lockout`](https://github.com/Ralkage/flarum-ext-account-lockout) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/ralkage-account-lockout/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/ralkage-account-lockout/ru/) |
| [`ralkage/flarum-ext-ad-management`](https://github.com/Ralkage/flarum-ext-ad-management) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/ralkage-ad-management/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/ralkage-ad-management/ru/) |
| [`ralkage/flarum-ext-cap-captcha`](https://github.com/Ralkage/flarum-ext-cap-captcha) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/ralkage-cap-captcha/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/ralkage-cap-captcha/ru/) |
| [`ralkage/flarum-ext-linked-accounts`](https://github.com/Ralkage/flarum-ext-linked-accounts) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/ralkage-linked-accounts/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/ralkage-linked-accounts/ru/) |
| [`ralkage/flarum-ext-profile-messages`](https://github.com/Ralkage/flarum-ext-profile-messages) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/ralkage-profile-messages/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/ralkage-profile-messages/ru/) |
| [`ralkage/flarum-ext-word-censor`](https://github.com/Ralkage/flarum-ext-word-censor) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/ralkage-word-censor/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/ralkage-word-censor/ru/) |
| [`ralkage/flarum-ext-word-counter`](https://github.com/Ralkage/flarum-ext-word-counter) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/ralkage-word-counter/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/ralkage-word-counter/ru/) |
| [`ralkage/flarum-hcaptcha`](https://github.com/Ralkage/flarum-hcaptcha) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/ralkage-hcaptcha/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/ralkage-hcaptcha/ru/) |
| [`ramon/avocado`](https://github.com/ram0ng1/avocado) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/ramon-avocado/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/ramon-avocado/ru/) |
| [`resofire/blog-cards`](https://github.com/ResofireV2/blog-cards) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/resofire-blog-cards/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/resofire-blog-cards/ru/) |
| [`resofire/digest-mail`](https://github.com/ResofireV2/digest-mail) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/resofire-digest-mail/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/resofire-digest-mail/ru/) |
| [`resofire/discussion-participants`](https://github.com/ResofireV2/discussion-participants) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/resofire-discussion-participants/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/resofire-discussion-participants/ru/) |
| [`resofire/menu-control`](https://github.com/ResofireV2/menu-control) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/resofire-menu-control/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/resofire-menu-control/ru/) |
| [`resofire/mobile-search`](https://github.com/ResofireV2/mobile-search) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/resofire-mobile-search/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/resofire-mobile-search/ru/) |
| [`sycho/flarum-advanced-extension-categories`](https://github.com/SychO9/flarum-advanced-extension-categories) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/sycho-advanced-extension-categories/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/sycho-advanced-extension-categories/ru/) |
| [`sycho/flarum-github-milestone`](https://github.com/SychO9/flarum-github-milestone) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/sycho-github-milestone/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/sycho-github-milestone/ru/) |
| [`sycho/flarum-move-posts`](https://github.com/SychO9/flarum-move-posts) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/sycho-move-posts/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/sycho-move-posts/ru/) |
| [`sycho/flarum-private-facade`](https://github.com/SychO9/flarum-private-facade) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/sycho-private-facade/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/sycho-private-facade/ru/) |
| [`sycho/flarum-profile-cover`](https://github.com/SychO9/flarum-profile-cover) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/sycho-profile-cover/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/sycho-profile-cover/ru/) |
| [`tryhackx/flarum-advanced-pages`](https://github.com/TryHackX/flarum-advanced-pages) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/tryhackx-advanced-pages/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/tryhackx-advanced-pages/ru/) |
| [`walsgit/recycle-bin`](https://github.com/WalsGit/recycle-bin) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/walsgit-recycle-bin/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/walsgit-recycle-bin/ru/) |

<!-- various-extensions-list-stop -->


## Translation status for premium extensions

<!-- premium-extensions-list-start -->

| Расширение | Статус |
| --- | --- |
| [`datitisev/flarum-backup`](https://flarum.org/extension/datitisev/flarum-backup) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/datitisev-backup/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/datitisev-backup/ru/) |
| [`justoverclock/related-discussions`](https://flarum.org/extension/justoverclock/related-discussions) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/justoverclock-related-discussions/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/justoverclock-related-discussions/ru/) |

<!-- premium-extensions-list-stop -->
