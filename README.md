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

| Расширение | Статус |
| --- | --- |
| [`flarum/akismet`](https://github.com/flarum/akismet) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/flarum-akismet/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/flarum-akismet/ru/) |
| [`flarum/approval`](https://github.com/flarum/approval) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/flarum-approval/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/flarum-approval/ru/) |
| [`flarum/emoji`](https://github.com/flarum/emoji) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/flarum-emoji/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/flarum-emoji/ru/) |
| [`flarum/flags`](https://github.com/flarum/flags) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/flarum-flags/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/flarum-flags/ru/) |
| [`flarum/likes`](https://github.com/flarum/likes) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/flarum-likes/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/flarum-likes/ru/) |
| [`flarum/lock`](https://github.com/flarum/lock) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/flarum-lock/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/flarum-lock/ru/) |
| [`flarum/markdown`](https://github.com/flarum/markdown) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/flarum-markdown/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/flarum-markdown/ru/) |
| [`flarum/mentions`](https://github.com/flarum/mentions) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/flarum-mentions/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/flarum-mentions/ru/) |
| [`flarum/nicknames`](https://github.com/flarum/nicknames) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/flarum-nicknames/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/flarum-nicknames/ru/) |
| [`flarum/pusher`](https://github.com/flarum/pusher) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/flarum-pusher/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/flarum-pusher/ru/) |
| [`flarum/statistics`](https://github.com/flarum/statistics) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/flarum-statistics/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/flarum-statistics/ru/) |
| [`flarum/sticky`](https://github.com/flarum/sticky) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/flarum-sticky/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/flarum-sticky/ru/) |
| [`flarum/subscriptions`](https://github.com/flarum/subscriptions) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/flarum-subscriptions/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/flarum-subscriptions/ru/) |
| [`flarum/suspend`](https://github.com/flarum/suspend) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/flarum-suspend/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/flarum-suspend/ru/) |
| [`flarum/tags`](https://github.com/flarum/tags) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/flarum-tags/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/flarum-tags/ru/) |

<!-- flarum-extensions-list-stop -->


## Translation status for Friends of Flarum extensions

<!-- fof-extensions-list-start -->

| Расширение | Статус |
| --- | --- |
| [`fof/analytics`](https://github.com/FriendsOfFlarum/analytics) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/fof-analytics/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/fof-analytics/ru/) |
| [`fof/ban-ips`](https://github.com/FriendsOfFlarum/ban-ips) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/fof-ban-ips/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/fof-ban-ips/ru/) |
| [`fof/best-answer`](https://github.com/FriendsOfFlarum/best-answer) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/fof-best-answer/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/fof-best-answer/ru/) |
| [`fof/byobu`](https://github.com/FriendsOfFlarum/byobu) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/fof-byobu/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/fof-byobu/ru/) |
| [`fof/cookie-consent`](https://github.com/FriendsOfFlarum/cookie-consent) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/fof-cookie-consent/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/fof-cookie-consent/ru/) |
| [`fof/custom-footer`](https://github.com/FriendsOfFlarum/custom-footer) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/fof-custom-footer/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/fof-custom-footer/ru/) |
| [`fof/default-group`](https://github.com/FriendsOfFlarum/default-group) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/fof-default-group/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/fof-default-group/ru/) |
| [`fof/default-user-preferences`](https://github.com/FriendsOfFlarum/default-user-preferences) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/fof-default-user-preferences/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/fof-default-user-preferences/ru/) |
| [`fof/discussion-language`](https://github.com/FriendsOfFlarum/discussion-language) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/fof-discussion-language/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/fof-discussion-language/ru/) |
| [`fof/discussion-thumbnail`](https://github.com/FriendsOfFlarum/discussion-thumbnail) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/fof-discussion-thumbnail/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/fof-discussion-thumbnail/ru/) |
| [`fof/disposable-emails`](https://github.com/FriendsOfFlarum/disposable-emails) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/fof-disposable-emails/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/fof-disposable-emails/ru/) |
| [`fof/doorman`](https://github.com/FriendsOfFlarum/doorman) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/fof-doorman/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/fof-doorman/ru/) |
| [`fof/drafts`](https://github.com/FriendsOfFlarum/drafts) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/fof-drafts/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/fof-drafts/ru/) |
| [`fof/filter`](https://github.com/FriendsOfFlarum/filter) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/fof-filter/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/fof-filter/ru/) |
| [`fof/follow-tags`](https://github.com/FriendsOfFlarum/follow-tags) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/fof-follow-tags/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/fof-follow-tags/ru/) |
| [`fof/formatting`](https://github.com/FriendsOfFlarum/formatting) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/fof-formatting/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/fof-formatting/ru/) |
| [`fof/forum-statistics-widget`](https://github.com/FriendsOfFlarum/forum-statistics-widget) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/fof-forum-statistics-widget/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/fof-forum-statistics-widget/ru/) |
| [`fof/frontpage`](https://github.com/FriendsOfFlarum/frontpage) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/fof-frontpage/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/fof-frontpage/ru/) |
| [`fof/gamification`](https://github.com/FriendsOfFlarum/gamification) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/fof-gamification/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/fof-gamification/ru/) |
| [`fof/geoip`](https://github.com/FriendsOfFlarum/geoip) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/fof-geoip/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/fof-geoip/ru/) |
| [`fof/github-sponsors`](https://github.com/FriendsOfFlarum/github-sponsors) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/fof-github-sponsors/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/fof-github-sponsors/ru/) |
| [`fof/html-errors`](https://github.com/FriendsOfFlarum/html-errors) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/fof-html-errors/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/fof-html-errors/ru/) |
| [`fof/ignore-users`](https://github.com/FriendsOfFlarum/ignore-users) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/fof-ignore-users/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/fof-ignore-users/ru/) |
| [`fof/impersonate`](https://github.com/FriendsOfFlarum/impersonate) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/fof-impersonate/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/fof-impersonate/ru/) |
| [`fof/linguist`](https://github.com/FriendsOfFlarum/linguist) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/fof-linguist/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/fof-linguist/ru/) |
| [`fof/links`](https://github.com/FriendsOfFlarum/links) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/fof-links/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/fof-links/ru/) |
| [`fof/mason`](https://github.com/FriendsOfFlarum/mason) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/fof-mason/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/fof-mason/ru/) |
| [`fof/masquerade`](https://github.com/FriendsOfFlarum/masquerade) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/fof-masquerade/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/fof-masquerade/ru/) |
| [`fof/merge-discussions`](https://github.com/FriendsOfFlarum/merge-discussions) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/fof-merge-discussions/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/fof-merge-discussions/ru/) |
| [`fof/moderator-notes`](https://github.com/FriendsOfFlarum/moderator-notes) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/fof-moderator-notes/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/fof-moderator-notes/ru/) |
| [`fof/nightmode`](https://github.com/FriendsOfFlarum/nightmode) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/fof-nightmode/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/fof-nightmode/ru/) |
| [`fof/oauth`](https://github.com/FriendsOfFlarum/oauth) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/fof-oauth/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/fof-oauth/ru/) |
| [`fof/open-collective`](https://github.com/FriendsOfFlarum/open-collective) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/fof-open-collective/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/fof-open-collective/ru/) |
| [`fof/pages`](https://github.com/FriendsOfFlarum/pages) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/fof-pages/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/fof-pages/ru/) |
| [`fof/passport`](https://github.com/FriendsOfFlarum/passport) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/fof-passport/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/fof-passport/ru/) |
| [`fof/polls`](https://github.com/FriendsOfFlarum/polls) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/fof-polls/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/fof-polls/ru/) |
| [`fof/pretty-mail`](https://github.com/FriendsOfFlarum/pretty-mail) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/fof-pretty-mail/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/fof-pretty-mail/ru/) |
| [`fof/prevent-necrobumping`](https://github.com/FriendsOfFlarum/prevent-necrobumping) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/fof-prevent-necrobumping/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/fof-prevent-necrobumping/ru/) |
| [`fof/pwned-passwords`](https://github.com/FriendsOfFlarum/pwned-passwords) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/fof-pwned-passwords/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/fof-pwned-passwords/ru/) |
| [`fof/reactions`](https://github.com/FriendsOfFlarum/reactions) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/fof-reactions/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/fof-reactions/ru/) |
| [`fof/recaptcha`](https://github.com/FriendsOfFlarum/recaptcha) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/fof-recaptcha/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/fof-recaptcha/ru/) |
| [`fof/secure-https`](https://github.com/FriendsOfFlarum/secure-https) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/fof-secure-https/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/fof-secure-https/ru/) |
| [`fof/sentry`](https://github.com/FriendsOfFlarum/sentry) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/fof-sentry/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/fof-sentry/ru/) |
| [`fof/share-social`](https://github.com/FriendsOfFlarum/share-social) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/fof-share-social/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/fof-share-social/ru/) |
| [`fof/sitemap`](https://github.com/FriendsOfFlarum/sitemap) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/fof-sitemap/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/fof-sitemap/ru/) |
| [`fof/socialprofile`](https://github.com/FriendsOfFlarum/socialprofile) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/fof-socialprofile/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/fof-socialprofile/ru/) |
| [`fof/spamblock`](https://github.com/FriendsOfFlarum/spamblock) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/fof-spamblock/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/fof-spamblock/ru/) |
| [`fof/split`](https://github.com/FriendsOfFlarum/split) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/fof-split/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/fof-split/ru/) |
| [`fof/stopforumspam`](https://github.com/FriendsOfFlarum/stopforumspam) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/fof-stopforumspam/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/fof-stopforumspam/ru/) |
| [`fof/subscribed`](https://github.com/FriendsOfFlarum/subscribed) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/fof-subscribed/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/fof-subscribed/ru/) |
| [`fof/terms`](https://github.com/FriendsOfFlarum/terms) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/fof-terms/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/fof-terms/ru/) |
| [`fof/upload`](https://github.com/FriendsOfFlarum/upload) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/fof-upload/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/fof-upload/ru/) |
| [`fof/user-bio`](https://github.com/FriendsOfFlarum/user-bio) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/fof-user-bio/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/fof-user-bio/ru/) |
| [`fof/user-directory`](https://github.com/FriendsOfFlarum/user-directory) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/fof-user-directory/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/fof-user-directory/ru/) |
| [`fof/username-request`](https://github.com/FriendsOfFlarum/username-request) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/fof-username-request/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/fof-username-request/ru/) |
| [`fof/webhooks`](https://github.com/FriendsOfFlarum/webhooks) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/fof-webhooks/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/fof-webhooks/ru/) |

<!-- fof-extensions-list-stop -->


## Translation status for community extensions

<!-- various-extensions-list-start -->

| Расширение | Статус |
| --- | --- |
| [`acpl/flarum-lscache`](https://github.com/android-com-pl/flarum-lscache) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/acpl-lscache/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/acpl-lscache/ru/) |
| [`acpl/mobile-tab`](https://github.com/android-com-pl/mobile-tab) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/acpl-mobile-tab/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/acpl-mobile-tab/ru/) |
| [`acpl/my-tags`](https://github.com/android-com-pl/my-tags) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/acpl-my-tags/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/acpl-my-tags/ru/) |
| [`afrux/asirem`](https://github.com/afrux/asirem) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/afrux-asirem/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/afrux-asirem/ru/) |
| [`afrux/forum-stats-widget`](https://github.com/afrux/forum-stats-widget) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/afrux-forum-stats-widget/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/afrux-forum-stats-widget/ru/) |
| [`afrux/forum-widgets-core`](https://github.com/afrux/forum-widgets-core) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/afrux-forum-widgets-core/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/afrux-forum-widgets-core/ru/) |
| [`afrux/news-widget`](https://github.com/afrux/news-widget) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/afrux-news-widget/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/afrux-news-widget/ru/) |
| [`afrux/online-users-widget`](https://github.com/afrux/online-users-widget) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/afrux-online-users-widget/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/afrux-online-users-widget/ru/) |
| [`afrux/top-posters-widget`](https://github.com/afrux/top-posters-widget) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/afrux-top-posters-widget/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/afrux-top-posters-widget/ru/) |
| [`antoinefr/flarum-ext-money`](https://github.com/AntoineFr/flarum-ext-money) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/antoinefr-money/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/antoinefr-money/ru/) |
| [`antoinefr/flarum-ext-online`](https://github.com/AntoineFr/flarum-ext-online) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/antoinefr-online/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/antoinefr-online/ru/) |
| [`askvortsov/flarum-article-series`](https://github.com/askvortsov1/flarum-article-series) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/askvortsov-article-series/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/askvortsov-article-series/ru/) |
| [`askvortsov/flarum-auto-moderator`](https://github.com/askvortsov1/flarum-auto-moderator) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/askvortsov-auto-moderator/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/askvortsov-auto-moderator/ru/) |
| [`askvortsov/flarum-categories`](https://github.com/askvortsov1/flarum-categories) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/askvortsov-categories/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/askvortsov-categories/ru/) |
| [`askvortsov/flarum-checklist`](https://github.com/askvortsov1/flarum-checklist) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/askvortsov-checklist/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/askvortsov-checklist/ru/) |
| [`askvortsov/flarum-discussion-templates`](https://github.com/askvortsov1/flarum-discussion-templates) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/askvortsov-discussion-templates/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/askvortsov-discussion-templates/ru/) |
| [`askvortsov/flarum-help-tags`](https://github.com/askvortsov1/flarum-help-tags) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/askvortsov-help-tags/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/askvortsov-help-tags/ru/) |
| [`askvortsov/flarum-markdown-tables`](https://github.com/askvortsov1/flarum-markdown-tables) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/askvortsov-markdown-tables/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/askvortsov-markdown-tables/ru/) |
| [`askvortsov/flarum-moderator-warnings`](https://github.com/askvortsov1/flarum-moderator-warnings) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/askvortsov-moderator-warnings/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/askvortsov-moderator-warnings/ru/) |
| [`askvortsov/flarum-pwa`](https://github.com/askvortsov1/flarum-pwa) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/askvortsov-pwa/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/askvortsov-pwa/ru/) |
| [`askvortsov/flarum-rich-text`](https://github.com/askvortsov1/flarum-rich-text) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/askvortsov-rich-text/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/askvortsov-rich-text/ru/) |
| [`askvortsov/flarum-saml`](https://github.com/askvortsov1/flarum-saml) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/askvortsov-saml/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/askvortsov-saml/ru/) |
| [`blomstra/flag-duplicates`](https://github.com/blomstra/flarum-ext-flag-duplicate) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/blomstra-flag-duplicates/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/blomstra-flag-duplicates/ru/) |
| [`blomstra/mark-unread`](https://github.com/blomstra/flarum-ext-mark-unread) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/blomstra-mark-unread/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/blomstra-mark-unread/ru/) |
| [`blomstra/search`](https://github.com/blomstra/flarum-ext-search) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/blomstra-search/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/blomstra-search/ru/) |
| [`blomstra/secondary-tags-toggler`](https://github.com/blomstra/flarum-ext-secondary-tags-toggler) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/blomstra-secondary-tags-toggler/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/blomstra-secondary-tags-toggler/ru/) |
| [`blomstra/sort-order-toggle`](https://github.com/blomstra/flarum-ext-sort-order-toggle) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/blomstra-sort-order-toggle/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/blomstra-sort-order-toggle/ru/) |
| [`blomstra/user-filter`](https://github.com/blomstra/flarum-ext-user-filter) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/blomstra-user-filter/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/blomstra-user-filter/ru/) |
| [`blomstra/welcome-login`](https://github.com/blomstra/flarum-ext-welcome-login) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/blomstra-welcome-login/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/blomstra-welcome-login/ru/) |
| [`clarkwinkelmann/catch-the-fish`](https://github.com/clarkwinkelmann/catch-the-fish) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/clarkwinkelmann-catch-the-fish/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/clarkwinkelmann-catch-the-fish/ru/) |
| [`clarkwinkelmann/flarum-ext-author-change`](https://github.com/clarkwinkelmann/flarum-ext-author-change) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/clarkwinkelmann-author-change/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/clarkwinkelmann-author-change/ru/) |
| [`clarkwinkelmann/flarum-ext-carving-contest`](https://github.com/clarkwinkelmann/flarum-ext-carving-contest) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/clarkwinkelmann-carving-contest/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/clarkwinkelmann-carving-contest/ru/) |
| [`clarkwinkelmann/flarum-ext-clippy`](https://github.com/clarkwinkelmann/flarum-ext-clippy) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/clarkwinkelmann-clippy/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/clarkwinkelmann-clippy/ru/) |
| [`clarkwinkelmann/flarum-ext-collapsible-posts`](https://github.com/clarkwinkelmann/flarum-ext-collapsible-posts) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/clarkwinkelmann-collapsible-posts/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/clarkwinkelmann-collapsible-posts/ru/) |
| [`clarkwinkelmann/flarum-ext-create-user-modal`](https://github.com/clarkwinkelmann/flarum-ext-create-user-modal) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/clarkwinkelmann-create-user-modal/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/clarkwinkelmann-create-user-modal/ru/) |
| [`clarkwinkelmann/flarum-ext-email-as-display-name`](https://github.com/clarkwinkelmann/flarum-ext-email-as-display-name) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/clarkwinkelmann-email-as-display-name/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/clarkwinkelmann-email-as-display-name/ru/) |
| [`clarkwinkelmann/flarum-ext-email-whitelist`](https://github.com/clarkwinkelmann/flarum-ext-email-whitelist) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/clarkwinkelmann-email-whitelist/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/clarkwinkelmann-email-whitelist/ru/) |
| [`clarkwinkelmann/flarum-ext-emojionearea`](https://github.com/clarkwinkelmann/flarum-ext-emojionearea) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/clarkwinkelmann-emojionearea/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/clarkwinkelmann-emojionearea/ru/) |
| [`clarkwinkelmann/flarum-ext-external-email-validation`](https://github.com/clarkwinkelmann/flarum-ext-external-email-validation) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/clarkwinkelmann-external-email-validation/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/clarkwinkelmann-external-email-validation/ru/) |
| [`clarkwinkelmann/flarum-ext-featured-discussions`](https://github.com/clarkwinkelmann/flarum-ext-featured-discussions) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/clarkwinkelmann-featured-discussions/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/clarkwinkelmann-featured-discussions/ru/) |
| [`clarkwinkelmann/flarum-ext-first-post-approval`](https://github.com/clarkwinkelmann/flarum-ext-first-post-approval) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/clarkwinkelmann-first-post-approval/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/clarkwinkelmann-first-post-approval/ru/) |
| [`clarkwinkelmann/flarum-ext-follow-tags-prompt`](https://github.com/clarkwinkelmann/flarum-ext-follow-tags-prompt) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/clarkwinkelmann-follow-tags-prompt/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/clarkwinkelmann-follow-tags-prompt/ru/) |
| [`clarkwinkelmann/flarum-ext-group-invitation`](https://github.com/clarkwinkelmann/flarum-ext-group-invitation) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/clarkwinkelmann-group-invitation/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/clarkwinkelmann-group-invitation/ru/) |
| [`clarkwinkelmann/flarum-ext-group-list`](https://github.com/clarkwinkelmann/flarum-ext-group-list) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/clarkwinkelmann-group-list/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/clarkwinkelmann-group-list/ru/) |
| [`clarkwinkelmann/flarum-ext-ipsum-autocomplete`](https://github.com/clarkwinkelmann/flarum-ext-ipsum-autocomplete) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/clarkwinkelmann-ipsum-autocomplete/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/clarkwinkelmann-ipsum-autocomplete/ru/) |
| [`clarkwinkelmann/flarum-ext-likes-received`](https://github.com/clarkwinkelmann/flarum-ext-likes-received) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/clarkwinkelmann-likes-received/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/clarkwinkelmann-likes-received/ru/) |
| [`clarkwinkelmann/flarum-ext-mailing`](https://github.com/clarkwinkelmann/flarum-ext-mailing) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/clarkwinkelmann-mailing/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/clarkwinkelmann-mailing/ru/) |
| [`clarkwinkelmann/flarum-ext-mass-actions`](https://github.com/clarkwinkelmann/flarum-ext-mass-actions) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/clarkwinkelmann-mass-actions/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/clarkwinkelmann-mass-actions/ru/) |
| [`clarkwinkelmann/flarum-ext-passwordless`](https://github.com/clarkwinkelmann/flarum-ext-passwordless) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/clarkwinkelmann-passwordless/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/clarkwinkelmann-passwordless/ru/) |
| [`clarkwinkelmann/flarum-ext-popular-discussion-badge`](https://github.com/clarkwinkelmann/flarum-ext-popular-discussion-badge) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/clarkwinkelmann-popular-discussion-badge/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/clarkwinkelmann-popular-discussion-badge/ru/) |
| [`clarkwinkelmann/flarum-ext-post-bookmarks`](https://github.com/clarkwinkelmann/flarum-ext-post-bookmarks) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/clarkwinkelmann-post-bookmarks/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/clarkwinkelmann-post-bookmarks/ru/) |
| [`clarkwinkelmann/flarum-ext-predefined-avatars`](https://github.com/clarkwinkelmann/flarum-ext-predefined-avatars) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/clarkwinkelmann-predefined-avatars/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/clarkwinkelmann-predefined-avatars/ru/) |
| [`clarkwinkelmann/flarum-ext-see-past-first-post`](https://github.com/clarkwinkelmann/flarum-ext-see-past-first-post) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/clarkwinkelmann-see-past-first-post/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/clarkwinkelmann-see-past-first-post/ru/) |
| [`clarkwinkelmann/flarum-ext-shadow-ban`](https://github.com/clarkwinkelmann/flarum-ext-shadow-ban) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/clarkwinkelmann-shadow-ban/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/clarkwinkelmann-shadow-ban/ru/) |
| [`clarkwinkelmann/flarum-ext-status`](https://github.com/clarkwinkelmann/flarum-ext-status) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/clarkwinkelmann-status/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/clarkwinkelmann-status/ru/) |
| [`clarkwinkelmann/flarum-ext-translation-inspector`](https://github.com/clarkwinkelmann/flarum-ext-translation-inspector) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/clarkwinkelmann-translation-inspector/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/clarkwinkelmann-translation-inspector/ru/) |
| [`clarkwinkelmann/flarum-ext-username-blacklist`](https://github.com/clarkwinkelmann/flarum-ext-username-blacklist) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/clarkwinkelmann-username-blacklist/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/clarkwinkelmann-username-blacklist/ru/) |
| [`clarkwinkelmann/flarum-ext-who-read`](https://github.com/clarkwinkelmann/flarum-ext-who-read) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/clarkwinkelmann-who-read/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/clarkwinkelmann-who-read/ru/) |
| [`datitisev/flarum-discussion-agree-message`](https://github.com/datitisev/flarum-discussion-agree-message) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/datitisev-discussion-agree-message/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/datitisev-discussion-agree-message/ru/) |
| [`datlechin/flarum-add-like-controls`](https://github.com/datlechin/flarum-add-like-controls) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/datlechin-add-like-controls/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/datlechin-add-like-controls/ru/) |
| [`datlechin/flarum-birthdays`](https://github.com/datlechin/flarum-birthdays) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/datlechin-birthdays/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/datlechin-birthdays/ru/) |
| [`datlechin/flarum-landing-page`](https://github.com/datlechin/flarum-landing-page) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/datlechin-landing-page/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/datlechin-landing-page/ru/) |
| [`datlechin/flarum-link-preview`](https://github.com/datlechin/flarum-link-preview) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/datlechin-link-preview/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/datlechin-link-preview/ru/) |
| [`datlechin/flarum-more-discussions`](https://github.com/datlechin/flarum-more-discussions) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/datlechin-more-discussions/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/datlechin-more-discussions/ru/) |
| [`datlechin/flarum-scroll-buttons`](https://github.com/datlechin/flarum-scroll-buttons) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/datlechin-scroll-buttons/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/datlechin-scroll-buttons/ru/) |
| [`datlechin/flarum-signup-button`](https://github.com/datlechin/flarum-signup-button) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/datlechin-signup-button/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/datlechin-signup-button/ru/) |
| [`datlechin/flarum-tag-passwords`](https://github.com/datlechin/flarum-tag-passwords) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/datlechin-tag-passwords/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/datlechin-tag-passwords/ru/) |
| [`datlechin/flarum-usercard-uid`](https://github.com/datlechin/flarum-usercard-uid) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/datlechin-usercard-uid/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/datlechin-usercard-uid/ru/) |
| [`davwheat/custom-sidenav-links`](https://github.com/davwheat/flarum-ext-custom-sidenav-links) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/davwheat-custom-sidenav-links/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/davwheat-custom-sidenav-links/ru/) |
| [`davwheat/flarum-ext-ads`](https://github.com/davwheat/flarum-ext-ads) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/davwheat-ads/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/davwheat-ads/ru/) |
| [`davwheat/flarum-ext-share`](https://github.com/davwheat/flarum-ext-share) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/davwheat-share/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/davwheat-share/ru/) |
| [`dem13n/topic-starter-label`](https://github.com/Dem13n/topic-starter-label) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/dem13n-topic-starter-label/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/dem13n-topic-starter-label/ru/) |
| [`extiverse/mercury`](https://github.com/extiverse/mercury) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/extiverse-mercury/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/extiverse-mercury/ru/) |
| [`ffans/clipboardjs`](https://github.com/FFans/clipboardjs) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/ffans-clipboardjs/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/ffans-clipboardjs/ru/) |
| [`flarumite/simple-discussion-views`](https://github.com/flarumite/simple-discussion-views) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/flarumite-simple-discussion-views/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/flarumite-simple-discussion-views/ru/) |
| [`flarumite/simple-spoilers`](https://github.com/flarumite/simple-spoilers) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/flarumite-simple-spoilers/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/flarumite-simple-spoilers/ru/) |
| [`ganuonglachanh/sonic`](https://github.com/ganuonglachanh/flarum-sonic) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/ganuonglachanh-sonic/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/ganuonglachanh-sonic/ru/) |
| [`glowingblue/password-strength`](https://github.com/glowingblue/flarum-ext-password-strength) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/glowingblue-password-strength/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/glowingblue-password-strength/ru/) |
| [`ianm/follow-users`](https://github.com/imorland/follow-users) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/ianm-follow-users/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/ianm-follow-users/ru/) |
| [`ianm/html-head`](https://github.com/imorland/html-head) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/ianm-html-head/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/ianm-html-head/ru/) |
| [`ianm/level-ranks`](https://github.com/imorland/level-ranks) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/ianm-level-ranks/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/ianm-level-ranks/ru/) |
| [`itnt/flarum-uitab`](https://github.com/Littlegolden/flarum-uitab) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/itnt-uitab/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/itnt-uitab/ru/) |
| [`justoverclock/auto-post-count-badge`](https://github.com/justoverclockl/auto-post-count-badge) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/justoverclock-auto-post-count-badge/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/justoverclock-auto-post-count-badge/ru/) |
| [`justoverclock/best-answer-badge`](https://github.com/justoverclockl/best-answer-badge) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/justoverclock-best-answer-badge/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/justoverclock-best-answer-badge/ru/) |
| [`justoverclock/composer-autocomplete`](https://github.com/justoverclockl/composer-autocomplete) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/justoverclock-composer-autocomplete/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/justoverclock-composer-autocomplete/ru/) |
| [`justoverclock/custom-header`](https://github.com/justoverclockl/custom-header) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/justoverclock-custom-header/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/justoverclock-custom-header/ru/) |
| [`justoverclock/custom-html-widget`](https://github.com/justoverclockl/custom-html-widget) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/justoverclock-custom-html-widget/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/justoverclock-custom-html-widget/ru/) |
| [`justoverclock/discussion-hero-showtags`](https://github.com/justoverclockl/discussion-hero-showtags) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/justoverclock-discussion-hero-showtags/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/justoverclock-discussion-hero-showtags/ru/) |
| [`justoverclock/discussion-info`](https://github.com/justoverclockl/discussions-info) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/justoverclock-discussion-info/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/justoverclock-discussion-info/ru/) |
| [`justoverclock/edit-posts`](https://github.com/justoverclockl/edit-posts) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/justoverclock-edit-posts/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/justoverclock-edit-posts/ru/) |
| [`justoverclock/events-countdown`](https://github.com/justoverclockl/events-countdown) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/justoverclock-events-countdown/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/justoverclock-events-countdown/ru/) |
| [`justoverclock/feautured-discussions-widget`](https://github.com/justoverclockl/feautured-discussions-widget) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/justoverclock-feautured-discussions-widget/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/justoverclock-feautured-discussions-widget/ru/) |
| [`justoverclock/flachat`](https://github.com/justoverclockl/flachat) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/justoverclock-flachat/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/justoverclock-flachat/ru/) |
| [`justoverclock/flarum-ext-contactme`](https://github.com/justoverclockl/flarum-ext-contactme) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/justoverclock-contactme/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/justoverclock-contactme/ru/) |
| [`justoverclock/flarum-ext-feedback`](https://github.com/justoverclockl/flarum-ext-feedback) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/justoverclock-feedback/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/justoverclock-feedback/ru/) |
| [`justoverclock/flarum-ext-guestengagement`](https://github.com/justoverclockl/flarum-ext-guestengagement) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/justoverclock-guestengagement/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/justoverclock-guestengagement/ru/) |
| [`justoverclock/flarum-ext-hashtag`](https://github.com/justoverclockl/flarum-ext-hashtag) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/justoverclock-hashtag/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/justoverclock-hashtag/ru/) |
| [`justoverclock/flarum-ext-infocards`](https://github.com/justoverclockl/flarum-ext-infocards) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/justoverclock-infocards/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/justoverclock-infocards/ru/) |
| [`justoverclock/flarum-ext-keywords`](https://github.com/justoverclockl/flarum-ext-keywords) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/justoverclock-keywords/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/justoverclock-keywords/ru/) |
| [`justoverclock/flarum-ext-newsfeed`](https://github.com/justoverclockl/flarum-ext-newsfeed) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/justoverclock-newsfeed/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/justoverclock-newsfeed/ru/) |
| [`justoverclock/flarum-ext-newsletter`](https://github.com/justoverclockl/flarum-ext-newsletter) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/justoverclock-newsletter/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/justoverclock-newsletter/ru/) |
| [`justoverclock/flarum-ext-purify`](https://github.com/justoverclockl/flarum-ext-purify) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/justoverclock-purify/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/justoverclock-purify/ru/) |
| [`justoverclock/flarum-ext-pwgen`](https://github.com/justoverclockl/flarum-ext-pwgen) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/justoverclock-pwgen/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/justoverclock-pwgen/ru/) |
| [`justoverclock/flarum-ext-realtimecode`](https://github.com/justoverclockl/flarum-ext-realtimecode) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/justoverclock-realtimecode/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/justoverclock-realtimecode/ru/) |
| [`justoverclock/flarum-ext-welcomebox`](https://github.com/justoverclockl/flarum-ext-welcomebox) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/justoverclock-welcomebox/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/justoverclock-welcomebox/ru/) |
| [`justoverclock/geo-weather`](https://github.com/justoverclockl/geo-weather) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/justoverclock-geo-weather/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/justoverclock-geo-weather/ru/) |
| [`justoverclock/header-slideshow`](https://github.com/justoverclockl/header-slideshow) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/justoverclock-header-slideshow/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/justoverclock-header-slideshow/ru/) |
| [`justoverclock/hot-discussions`](https://github.com/justoverclockl/hot-discussions) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/justoverclock-hot-discussions/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/justoverclock-hot-discussions/ru/) |
| [`justoverclock/hot-discussions-cards`](https://github.com/justoverclockl/hot-discussions-cards) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/justoverclock-hot-discussions-cards/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/justoverclock-hot-discussions-cards/ru/) |
| [`justoverclock/last-post-useravatar`](https://github.com/justoverclockl/last-post-useravatar) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/justoverclock-last-post-useravatar/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/justoverclock-last-post-useravatar/ru/) |
| [`justoverclock/last-registered-users`](https://github.com/justoverclockl/last-registered-users) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/justoverclock-last-registered-users/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/justoverclock-last-registered-users/ru/) |
| [`justoverclock/last-users-posts`](https://github.com/justoverclockl/last-users-posts) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/justoverclock-last-users-posts/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/justoverclock-last-users-posts/ru/) |
| [`justoverclock/user-pc-specs`](https://github.com/justoverclockl/user-pc-specs) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/justoverclock-user-pc-specs/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/justoverclock-user-pc-specs/ru/) |
| [`justoverclock/username-blacklist`](https://github.com/justoverclockl/username-blacklist) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/justoverclock-username-blacklist/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/justoverclock-username-blacklist/ru/) |
| [`justoverclock/youtube-video-feed`](https://github.com/justoverclockl/youtube-video-feed) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/justoverclock-youtube-video-feed/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/justoverclock-youtube-video-feed/ru/) |
| [`katosdev/signature`](https://github.com/katosdev/signature) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/katosdev-signature/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/katosdev-signature/ru/) |
| [`kyrne/whisper`](https://github.com/KyrneDev/whisper) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/kyrne-whisper/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/kyrne-whisper/ru/) |
| [`malago/flarum-achievements`](https://github.com/malago86/flarum-achievements) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/malago-achievements/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/malago-achievements/ru/) |
| [`matteocontrini/flarum-imgur-upload`](https://github.com/matteocontrini/flarum-imgur-upload) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/matteocontrini-imgur-upload/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/matteocontrini-imgur-upload/ru/) |
| [`michaelbelgium/flarum-discussion-views`](https://github.com/MichaelBelgium/flarum-discussion-views) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/michaelbelgium-discussion-views/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/michaelbelgium-discussion-views/ru/) |
| [`michaelbelgium/flarum-profile-views`](https://github.com/MichaelBelgium/flarum-profile-views) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/michaelbelgium-profile-views/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/michaelbelgium-profile-views/ru/) |
| [`migratetoflarum/canonical`](https://github.com/migratetoflarum/canonical) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/migratetoflarum-canonical/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/migratetoflarum-canonical/ru/) |
| [`miniflar/top-like-givers-widget`](https://github.com/miniflar/top-like-givers-widget) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/miniflar-top-like-givers-widget/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/miniflar-top-like-givers-widget/ru/) |
| [`nearata/flarum-ext-copy-code-to-clipboard`](https://github.com/Nearata/flarum-ext-copy-code-to-clipboard) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/nearata-copy-code-to-clipboard/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/nearata-copy-code-to-clipboard/ru/) |
| [`nearata/flarum-ext-minecraft-avatars`](https://github.com/Nearata/flarum-ext-minecraft-avatars) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/nearata-minecraft-avatars/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/nearata-minecraft-avatars/ru/) |
| [`nearata/flarum-ext-signup-confirm-password`](https://github.com/Nearata/flarum-ext-signup-confirm-password) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/nearata-signup-confirm-password/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/nearata-signup-confirm-password/ru/) |
| [`nosun/reply-to-see`](https://github.com/nosun/flarum-ext-reply2see) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/nosun-reply-to-see/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/nosun-reply-to-see/ru/) |
| [`ralkage/flarum-hcaptcha`](https://github.com/Ralkage/flarum-hcaptcha) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/ralkage-hcaptcha/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/ralkage-hcaptcha/ru/) |
| [`ramesh-dada/flarum-gui-image-and-link`](https://github.com/ramesh-dada/Flarum-GUI-Image-and-Link) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/ramesh-dada-gui-image-and-link/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/ramesh-dada-gui-image-and-link/ru/) |
| [`ramesh-dada/realtime`](https://github.com/ramesh-dada/realtime) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/ramesh-dada-realtime/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/ramesh-dada-realtime/ru/) |
| [`serakoi/flarum-hideprofile`](https://github.com/Serakoi/flarum-hideprofile) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/serakoi-hideprofile/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/serakoi-hideprofile/ru/) |
| [`sycho/flarum-advanced-extension-categories`](https://github.com/SychO9/flarum-advanced-extension-categories) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/sycho-advanced-extension-categories/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/sycho-advanced-extension-categories/ru/) |
| [`sycho/flarum-github-milestone`](https://github.com/SychO9/flarum-github-milestone) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/sycho-github-milestone/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/sycho-github-milestone/ru/) |
| [`sycho/flarum-move-posts`](https://github.com/SychO9/flarum-move-posts) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/sycho-move-posts/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/sycho-move-posts/ru/) |
| [`sycho/flarum-profile-cover`](https://github.com/SychO9/flarum-profile-cover) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/sycho-profile-cover/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/sycho-profile-cover/ru/) |
| [`the-turk/flarum-miserable-users`](https://github.com/the-turk/flarum-miserable-users) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/the-turk-miserable-users/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/the-turk-miserable-users/ru/) |
| [`the-turk/flarum-pallet-theme`](https://github.com/the-turk/flarum-pallet-theme) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/the-turk-pallet-theme/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/the-turk-pallet-theme/ru/) |
| [`the-turk/flarum-quiet-edits`](https://github.com/the-turk/flarum-quiet-edits) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/the-turk-quiet-edits/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/the-turk-quiet-edits/ru/) |
| [`v17development/flarum-blog`](https://github.com/v17development/flarum-blog) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/v17development-blog/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/v17development-blog/ru/) |
| [`v17development/flarum-seo`](https://github.com/v17development/flarum-seo) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/v17development-seo/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/v17development-seo/ru/) |
| [`v17development/flarum-user-badges`](https://github.com/v17development/flarum-user-badges) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/v17development-user-badges/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/v17development-user-badges/ru/) |
| [`webbinaro/flarum-calendar`](https://github.com/eddiewebb/flarum-calendar) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/webbinaro-calendar/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/webbinaro-calendar/ru/) |
| [`zerosonesfun/expired-posts`](https://github.com/zerosonesfun/expired-posts) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/zerosonesfun-expired-posts/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/zerosonesfun-expired-posts/ru/) |
| [`zerosonesfun/flarum-bbcode-button`](https://github.com/zerosonesfun/flarum-bbcode-button) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/zerosonesfun-bbcode-button/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/zerosonesfun-bbcode-button/ru/) |

<!-- various-extensions-list-stop -->


## Translation status for premium extensions

<!-- premium-extensions-list-start -->

| Расширение | Статус |
| --- | --- |
| [`blomstra/payments`](https://extiverse.com/extension/blomstra/payments) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/blomstra-payments/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/blomstra-payments/ru/) |
| [`blomstra/readme`](https://extiverse.com/extension/blomstra/readme) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/blomstra-readme/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/blomstra-readme/ru/) |
| [`blomstra/realtime`](https://extiverse.com/extension/blomstra/realtime) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/blomstra-realtime/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/blomstra-realtime/ru/) |
| [`datitisev/flarum-backup`](https://extiverse.com/extension/datitisev/flarum-backup) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/datitisev-backup/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/datitisev-backup/ru/) |
| [`datitisev/flarum-maintenance`](https://extiverse.com/extension/datitisev/flarum-maintenance) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/datitisev-maintenance/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/datitisev-maintenance/ru/) |
| [`davwheat/virtual-authors`](https://extiverse.com/extension/davwheat/virtual-authors) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/davwheat-virtual-authors/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/davwheat-virtual-authors/ru/) |
| [`glowingblue/localizd`](https://extiverse.com/extension/glowingblue/localizd) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/glowingblue-localizd/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/glowingblue-localizd/ru/) |
| [`justoverclock/auto-post-badge-pro`](https://extiverse.com/extension/justoverclock/auto-post-badge-pro) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/justoverclock-auto-post-badge-pro/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/justoverclock-auto-post-badge-pro/ru/) |
| [`justoverclock/frontend-blog`](https://extiverse.com/extension/justoverclock/frontend-blog) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/justoverclock-frontend-blog/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/justoverclock-frontend-blog/ru/) |
| [`justoverclock/imdb-api`](https://extiverse.com/extension/justoverclock/imdb-api) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/justoverclock-imdb-api/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/justoverclock-imdb-api/ru/) |
| [`justoverclock/related-discussions`](https://extiverse.com/extension/justoverclock/related-discussions) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/justoverclock-related-discussions/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/justoverclock-related-discussions/ru/) |
| [`justoverclock/theaudiodb-api`](https://extiverse.com/extension/justoverclock/theaudiodb-api) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/justoverclock-theaudiodb-api/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/justoverclock-theaudiodb-api/ru/) |
| [`justoverclock/website-live-screenshot`](https://extiverse.com/extension/justoverclock/website-live-screenshot) | [![Статус перевода](https://weblate.rob006.net/widgets/flarum/ru/justoverclock-website-live-screenshot/svg-badge.svg)](https://weblate.rob006.net/projects/flarum/justoverclock-website-live-screenshot/ru/) |

<!-- premium-extensions-list-stop -->
