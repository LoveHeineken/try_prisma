npm init -y
npm i --save-dev prisma typescript ts-node @types/node nodemon
npx prisma init --datasource-provider postgresql
npx prisma format
npx prisma migrate dev --name init
npm i @prisma/client
npx prisma generate

# setup postgresql
brew reinstall postgresql@14 # install latest
postgres --version
initdb /usr/local/var/postgres -E utf8 # set UTF8 as default
brew services start postgresql # start postgres
postgres -D /usr/local/var/postgres # check log
rm -rf /usr/local/var/postgres.old
brew postgresql-upgrade-database

