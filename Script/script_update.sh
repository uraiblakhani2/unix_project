#!/bin/bash
sudo rm -r /var/www/html/*
cd /home/uraib/unix_project
git pull
sudo cp -RT Website /var/www/html/
