#!/bin/bash

node --inspect-brk=0.0.0.0 . &
cd /usr/src/app
node .

