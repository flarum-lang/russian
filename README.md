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
| [`flarum/audit`](https://github.com/flarum/audit) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/flarum-audit/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/flarum-audit/ru/) |
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
| [`fof/author-change`](https://github.com/FriendsOfFlarum/author-change) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/fof-author-change/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/fof-author-change/ru/) |
| [`fof/badges`](https://github.com/FriendsOfFlarum/badges) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/fof-badges/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/fof-badges/ru/) |
| [`fof/ban-ips`](https://github.com/FriendsOfFlarum/ban-ips) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/fof-ban-ips/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/fof-ban-ips/ru/) |
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
| [`fof/doorman`](https://github.com/FriendsOfFlarum/doorman) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/fof-doorman/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/fof-doorman/ru/) |
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
| [`fof/mailing`](https://github.com/FriendsOfFlarum/mailing) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/fof-mailing/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/fof-mailing/ru/) |
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
| [`fof/photoswipe`](https://github.com/FriendsOfFlarum/photoswipe) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/fof-photoswipe/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/fof-photoswipe/ru/) |
| [`fof/polls`](https://github.com/FriendsOfFlarum/polls) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/fof-polls/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/fof-polls/ru/) |
| [`fof/prevent-necrobumping`](https://github.com/FriendsOfFlarum/prevent-necrobumping) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/fof-prevent-necrobumping/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/fof-prevent-necrobumping/ru/) |
| [`fof/profile-image-crop`](https://github.com/FriendsOfFlarum/profile-image-crop) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/fof-profile-image-crop/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/fof-profile-image-crop/ru/) |
| [`fof/pwned-passwords`](https://github.com/FriendsOfFlarum/pwned-passwords) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/fof-pwned-passwords/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/fof-pwned-passwords/ru/) |
| [`fof/reactions`](https://github.com/FriendsOfFlarum/reactions) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/fof-reactions/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/fof-reactions/ru/) |
| [`fof/recaptcha`](https://github.com/FriendsOfFlarum/recaptcha) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/fof-recaptcha/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/fof-recaptcha/ru/) |
| [`fof/rich-text`](https://github.com/FriendsOfFlarum/rich-text) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/fof-rich-text/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/fof-rich-text/ru/) |
| [`fof/sentry`](https://github.com/FriendsOfFlarum/sentry) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/fof-sentry/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/fof-sentry/ru/) |
| [`fof/seo`](https://github.com/FriendsOfFlarum/seo) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/fof-seo/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/fof-seo/ru/) |
| [`fof/share-social`](https://github.com/FriendsOfFlarum/share-social) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/fof-share-social/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/fof-share-social/ru/) |
| [`fof/signature`](https://github.com/FriendsOfFlarum/signature) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/fof-signature/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/fof-signature/ru/) |
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
| [`antoinefr/flarum-ext-money`](https://github.com/AntoineFr/flarum-ext-money) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/antoinefr-money/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/antoinefr-money/ru/) |
| [`dashzeveg/flarum-ads-manager`](https://github.com/dashzeveg/flarum-ads-manager) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/dashzeveg-ads-manager/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/dashzeveg-ads-manager/ru/) |
| [`dashzeveg/flarum-custom-head`](https://github.com/dashzeveg/flarum-custom-head) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/dashzeveg-custom-head/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/dashzeveg-custom-head/ru/) |
| [`datlechin/flarum-bbcode-hide-content`](https://github.com/datlechin/flarum-bbcode-hide-content) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/datlechin-bbcode-hide-content/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/datlechin-bbcode-hide-content/ru/) |
| [`datlechin/flarum-birthdays`](https://github.com/datlechin/flarum-birthdays) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/datlechin-birthdays/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/datlechin-birthdays/ru/) |
| [`datlechin/flarum-copy-links`](https://github.com/datlechin/flarum-copy-links) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/datlechin-copy-links/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/datlechin-copy-links/ru/) |
| [`datlechin/flarum-discussion-overview`](https://github.com/datlechin/flarum-discussion-overview) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/datlechin-discussion-overview/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/datlechin-discussion-overview/ru/) |
| [`datlechin/flarum-link-preview`](https://github.com/datlechin/flarum-link-preview) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/datlechin-link-preview/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/datlechin-link-preview/ru/) |
| [`datlechin/flarum-mermaid`](https://github.com/datlechin/flarum-mermaid) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/datlechin-mermaid/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/datlechin-mermaid/ru/) |
| [`datlechin/flarum-more-discussions`](https://github.com/datlechin/flarum-more-discussions) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/datlechin-more-discussions/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/datlechin-more-discussions/ru/) |
| [`datlechin/flarum-passkey`](https://github.com/datlechin/flarum-passkey) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/datlechin-passkey/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/datlechin-passkey/ru/) |
| [`datlechin/flarum-posted-on`](https://github.com/datlechin/flarum-posted-on) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/datlechin-posted-on/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/datlechin-posted-on/ru/) |
| [`datlechin/flarum-scroll-buttons`](https://github.com/datlechin/flarum-scroll-buttons) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/datlechin-scroll-buttons/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/datlechin-scroll-buttons/ru/) |
| [`datlechin/flarum-signup-button`](https://github.com/datlechin/flarum-signup-button) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/datlechin-signup-button/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/datlechin-signup-button/ru/) |
| [`datlechin/flarum-silent-edit`](https://github.com/datlechin/flarum-silent-edit) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/datlechin-silent-edit/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/datlechin-silent-edit/ru/) |
| [`datlechin/flarum-tag-passwords`](https://github.com/datlechin/flarum-tag-passwords) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/datlechin-tag-passwords/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/datlechin-tag-passwords/ru/) |
| [`datlechin/flarum-title-length`](https://github.com/datlechin/flarum-title-length) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/datlechin-title-length/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/datlechin-title-length/ru/) |
| [`ekumanov/flarum-ext-forum-widgets`](https://github.com/ekumanov/flarum-ext-forum-stats-widget) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/ekumanov-forum-widgets/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/ekumanov-forum-widgets/ru/) |
| [`ekumanov/flarum-ext-inline-audio`](https://github.com/ekumanov/flarum-ext-inline-audio) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/ekumanov-inline-audio/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/ekumanov-inline-audio/ru/) |
| [`ekumanov/flarum-ext-markdown-tables`](https://github.com/ekumanov/flarum-ext-markdown-tables) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/ekumanov-markdown-tables/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/ekumanov-markdown-tables/ru/) |
| [`ekumanov/flarum-ext-new-posts-notice`](https://github.com/ekumanov/flarum-ext-new-posts-notice) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/ekumanov-new-posts-notice/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/ekumanov-new-posts-notice/ru/) |
| [`ekumanov/flarum-ext-post-search`](https://github.com/ekumanov/flarum-ext-post-search) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/ekumanov-post-search/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/ekumanov-post-search/ru/) |
| [`ernestdefoe/aurora`](https://github.com/ernestdefoe/aurora) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/ernestdefoe-aurora/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/ernestdefoe-aurora/ru/) |
| [`ernestdefoe/cross-references`](https://github.com/ernestdefoe/cross-references) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/ernestdefoe-cross-references/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/ernestdefoe-cross-references/ru/) |
| [`ernestdefoe/flarum-facebook-post`](https://github.com/ernestdefoe/flarum-facebook-post) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/ernestdefoe-facebook-post/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/ernestdefoe-facebook-post/ru/) |
| [`ernestdefoe/google-fonts`](https://github.com/ernestdefoe/google-fonts) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/ernestdefoe-google-fonts/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/ernestdefoe-google-fonts/ru/) |
| [`ernestdefoe/hero-builder`](https://github.com/ernestdefoe/hero-builder) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/ernestdefoe-hero-builder/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/ernestdefoe-hero-builder/ru/) |
| [`ernestdefoe/social-groups`](https://github.com/ernestdefoe/social-groups) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/ernestdefoe-social-groups/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/ernestdefoe-social-groups/ru/) |
| [`ernestdefoe/theme-toggle`](https://github.com/ernestdefoe/theme-toggle) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/ernestdefoe-theme-toggle/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/ernestdefoe-theme-toggle/ru/) |
| [`flectar/flarum-turnstile`](https://github.com/flectar/flarum-ext-turnstile) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/flectar-turnstile/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/flectar-turnstile/ru/) |
| [`forumaker/magicbb`](https://github.com/forumaker/magicbb) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/forumaker-magicbb/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/forumaker-magicbb/ru/) |
| [`forumaker/magicdice`](https://github.com/forumaker/magicdice) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/forumaker-magicdice/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/forumaker-magicdice/ru/) |
| [`forumaker/magicread`](https://github.com/forumaker/magicread) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/forumaker-magicread/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/forumaker-magicread/ru/) |
| [`forumaker/magicslider`](https://github.com/forumaker/magicslider) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/forumaker-magicslider/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/forumaker-magicslider/ru/) |
| [`gitzaai/cnsearch`](https://github.com/gitzaai/cnsearch) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/gitzaai-cnsearch/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/gitzaai-cnsearch/ru/) |
| [`glowingblue/password-strength`](https://github.com/glowingblue/flarum-ext-password-strength) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/glowingblue-password-strength/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/glowingblue-password-strength/ru/) |
| [`huoxin/relative-url`](https://github.com/huoxin233/flarum-ext-relative-url) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/huoxin-relative-url/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/huoxin-relative-url/ru/) |
| [`huseyinfiliz/awards`](https://github.com/huseyinfiliz/awards) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/huseyinfiliz-awards/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/huseyinfiliz-awards/ru/) |
| [`huseyinfiliz/flarum-diff`](https://github.com/huseyinfiliz/flarum-diff) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/huseyinfiliz-diff/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/huseyinfiliz-diff/ru/) |
| [`huseyinfiliz/leaderboard`](https://github.com/huseyinfiliz/leaderboard) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/huseyinfiliz-leaderboard/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/huseyinfiliz-leaderboard/ru/) |
| [`huseyinfiliz/modern-footer`](https://github.com/huseyinfiliz/modern-footer) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/huseyinfiliz-modern-footer/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/huseyinfiliz-modern-footer/ru/) |
| [`huseyinfiliz/notificationhub`](https://github.com/huseyinfiliz/notificationhub) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/huseyinfiliz-notificationhub/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/huseyinfiliz-notificationhub/ru/) |
| [`huseyinfiliz/rewind`](https://github.com/huseyinfiliz/rewind) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/huseyinfiliz-rewind/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/huseyinfiliz-rewind/ru/) |
| [`huseyinfiliz/stickiest`](https://github.com/huseyinfiliz/stickiest) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/huseyinfiliz-stickiest/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/huseyinfiliz-stickiest/ru/) |
| [`huseyinfiliz/sticky-title`](https://github.com/huseyinfiliz/sticky-title) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/huseyinfiliz-sticky-title/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/huseyinfiliz-sticky-title/ru/) |
| [`ianm/boring-avatars`](https://github.com/imorland/flarum-ext-boring-avatars) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/ianm-boring-avatars/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/ianm-boring-avatars/ru/) |
| [`ianm/follow-users`](https://github.com/imorland/follow-users) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/ianm-follow-users/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/ianm-follow-users/ru/) |
| [`ianm/html-head`](https://github.com/imorland/html-head) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/ianm-html-head/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/ianm-html-head/ru/) |
| [`ianm/log-viewer`](https://github.com/imorland/flarum-ext-log-viewer) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/ianm-log-viewer/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/ianm-log-viewer/ru/) |
| [`ianm/oauth-reddit`](https://github.com/imorland/flarum-ext-oauth-reddit) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/ianm-oauth-reddit/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/ianm-oauth-reddit/ru/) |
| [`ianm/syndication`](https://github.com/imorland/syndication) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/ianm-syndication/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/ianm-syndication/ru/) |
| [`ianm/twofactor`](https://github.com/imorland/flarum-ext-twofactor) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/ianm-twofactor/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/ianm-twofactor/ru/) |
| [`import-ai/flarum-webhook-notification`](https://github.com/import-ai/flarum-webhook-notification) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/import-ai-webhook-notification/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/import-ai-webhook-notification/ru/) |
| [`irmmr/flarum-ext-rtl`](https://github.com/irmmr/flarum-ext-rtl) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/irmmr-rtl/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/irmmr-rtl/ru/) |
| [`justoverclock/flarum-ext-welcomebox`](https://github.com/justoverclockl/flarum-ext-welcomebox) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/justoverclock-welcomebox/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/justoverclock-welcomebox/ru/) |
| [`linkrobins/blog`](https://github.com/linkrobins/blog) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/linkrobins-blog/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/linkrobins-blog/ru/) |
| [`linkrobins/clipboard`](https://github.com/linkrobins/clipboard) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/linkrobins-clipboard/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/linkrobins-clipboard/ru/) |
| [`linkrobins/countdown-widget`](https://github.com/linkrobins/countdown-widget) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/linkrobins-countdown-widget/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/linkrobins-countdown-widget/ru/) |
| [`linkrobins/font-sizer`](https://github.com/linkrobins/font-sizer) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/linkrobins-font-sizer/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/linkrobins-font-sizer/ru/) |
| [`linkrobins/html-widget`](https://github.com/linkrobins/html-widget) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/linkrobins-html-widget/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/linkrobins-html-widget/ru/) |
| [`linkrobins/markdown-widget`](https://github.com/linkrobins/markdown-widget) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/linkrobins-markdown-widget/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/linkrobins-markdown-widget/ru/) |
| [`linkrobins/op`](https://github.com/linkrobins/OP) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/linkrobins-op/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/linkrobins-op/ru/) |
| [`linkrobins/post-num`](https://github.com/linkrobins/post-num) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/linkrobins-post-num/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/linkrobins-post-num/ru/) |
| [`linkrobins/referral`](https://github.com/linkrobins/referral) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/linkrobins-referral/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/linkrobins-referral/ru/) |
| [`linkrobins/shoutbox`](https://github.com/linkrobins/shoutbox) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/linkrobins-shoutbox/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/linkrobins-shoutbox/ru/) |
| [`linkrobins/support`](https://github.com/linkrobins/support) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/linkrobins-support/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/linkrobins-support/ru/) |
| [`linkrobins/wiki`](https://github.com/linkrobins/flarum-wiki) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/linkrobins-wiki/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/linkrobins-wiki/ru/) |
| [`maicol07/flarum-ext-sso`](https://github.com/maicol07/flarum-ext-sso) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/maicol07-sso/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/maicol07-sso/ru/) |
| [`michaelbelgium/flarum-discussion-views`](https://github.com/MichaelBelgium/flarum-discussion-views) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/michaelbelgium-discussion-views/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/michaelbelgium-discussion-views/ru/) |
| [`michaelbelgium/flarum-profile-views`](https://github.com/MichaelBelgium/flarum-profile-views) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/michaelbelgium-profile-views/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/michaelbelgium-profile-views/ru/) |
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
| [`ramon/auth-modals`](https://github.com/ram0ng1/auth-modals) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/ramon-auth-modals/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/ramon-auth-modals/ru/) |
| [`ramon/avocado`](https://github.com/ram0ng1/avocado) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/ramon-avocado/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/ramon-avocado/ru/) |
| [`ramon/backup`](https://github.com/ram0ng1/backup) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/ramon-backup/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/ramon-backup/ru/) |
| [`ramon/guest-cta`](https://github.com/ram0ng1/guest-cta) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/ramon-guest-cta/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/ramon-guest-cta/ru/) |
| [`ramon/point-system`](https://github.com/ram0ng1/point-system) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/ramon-point-system/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/ramon-point-system/ru/) |
| [`ramon/stickers`](https://github.com/ram0ng1/stickers) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/ramon-stickers/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/ramon-stickers/ru/) |
| [`ramon/verified`](https://github.com/ram0ng1/verified) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/ramon-verified/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/ramon-verified/ru/) |
| [`resofire/blog-cards`](https://github.com/ResofireV2/blog-cards) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/resofire-blog-cards/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/resofire-blog-cards/ru/) |
| [`resofire/digest-mail`](https://github.com/ResofireV2/digest-mail) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/resofire-digest-mail/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/resofire-digest-mail/ru/) |
| [`resofire/menu-control`](https://github.com/ResofireV2/menu-control) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/resofire-menu-control/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/resofire-menu-control/ru/) |
| [`resofire/mobile-search`](https://github.com/ResofireV2/mobile-search) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/resofire-mobile-search/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/resofire-mobile-search/ru/) |
| [`rob006/flarum-ext-last-post-avatar`](https://github.com/rob006-software/flarum-ext-last-post-avatar) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/rob006-last-post-avatar/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/rob006-last-post-avatar/ru/) |
| [`sycho/flarum-advanced-extension-categories`](https://github.com/SychO9/flarum-advanced-extension-categories) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/sycho-advanced-extension-categories/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/sycho-advanced-extension-categories/ru/) |
| [`sycho/flarum-github-milestone`](https://github.com/SychO9/flarum-github-milestone) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/sycho-github-milestone/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/sycho-github-milestone/ru/) |
| [`sycho/flarum-move-posts`](https://github.com/SychO9/flarum-move-posts) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/sycho-move-posts/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/sycho-move-posts/ru/) |
| [`sycho/flarum-private-facade`](https://github.com/SychO9/flarum-private-facade) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/sycho-private-facade/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/sycho-private-facade/ru/) |
| [`sycho/flarum-profile-cover`](https://github.com/SychO9/flarum-profile-cover) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/sycho-profile-cover/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/sycho-profile-cover/ru/) |
| [`tryhackx/flarum-advanced-pages`](https://github.com/TryHackX/flarum-advanced-pages) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/tryhackx-advanced-pages/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/tryhackx-advanced-pages/ru/) |
| [`tryhackx/flarum-topic-rating`](https://github.com/TryHackX/flarum-topic-rating) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/tryhackx-topic-rating/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/tryhackx-topic-rating/ru/) |
| [`walsgit/flarum-discussion-cards`](https://github.com/WalsGit/flarum-discussion-cards) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/walsgit-discussion-cards/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/walsgit-discussion-cards/ru/) |
| [`walsgit/recycle-bin`](https://github.com/WalsGit/recycle-bin) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/walsgit-recycle-bin/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/walsgit-recycle-bin/ru/) |

<!-- various-extensions-list-stop -->


## Translation status for premium extensions

<!-- premium-extensions-list-start -->

| Расширение | Статус |
| --- | --- |
| [`datitisev/flarum-backup`](https://flarum.org/extension/datitisev/flarum-backup) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/datitisev-backup/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/datitisev-backup/ru/) |
| [`justoverclock/related-discussions`](https://flarum.org/extension/justoverclock/related-discussions) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum2/ru/justoverclock-related-discussions/svg-badge.svg)](https://weblate.rob006.net/projects/flarum2/justoverclock-related-discussions/ru/) |

<!-- premium-extensions-list-stop -->
