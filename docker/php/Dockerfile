# 元になるイメージを取得する
FROM php:8.0-fpm

# composerの最新版をinstall
COPY --from=composer /usr/bin/composer /usr/bin/composer

# PHPの拡張モジュールをインストール
RUN apt-get update \
&& apt-get install -y \
git \
zip \
unzip \
vim
RUN apt-get update \
    && apt-get install -y libpq-dev \
    && docker-php-ext-install pdo_mysql pdo_pgsql \
    && apt-get install -y vim

WORKDIR /var/www/html/journal-chat