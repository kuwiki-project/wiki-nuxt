#!/bin/sh

# 必要なパッケージをインストール
sudo yarn
# ビルド
sudo yarn build
# すでに動いているものをストップ
ps --no-heading -C "sudo nohup yarn wiki-nuxt-start" -o pid | awk '{ print "kill " $0 }' | sudo sh
# スタート
sudo nohup yarn wiki-nuxt-start &
