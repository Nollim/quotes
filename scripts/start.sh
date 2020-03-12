rm /home/pi/quotes/app/.env
cp /home/pi/quotes/config/.env.prod /home/pi/quotes/app/.env
cd /home/pi/quotes/app
node index.js
