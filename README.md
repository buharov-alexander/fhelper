# Fhelper

The new version of Financial Helper

### Build
Build jar:
- Go to `fhelper-service`
- Execute `./mvnw clean install`

### Run
Run application locally: 
- Execute `./mvnw spring-boot:run`
Run frontend:
- Go to `fhelper-service`
- Execute `npm start`

### Start Postgres DB
Start docker with postgres:  
`docker run -p 5433:5432 -d --name postgres_db -e POSTGRES_DB=fhelper -e POSTGRES_HOST_AUTH_METHOD=trust --rm postgres`  
Init database:  
`psql -h localhost -p 5433 -U postgres fhelper < ./database/scripts/init.sql`
