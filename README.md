# newzy

Newzy is a news backend API.

## End Point

### News

| Method | Endpoint | Description |
|---|---|---|
| POST | /news | Create a news |
| GET | /news | Get news |
| UPDATE | /news/:id | Update a news |
| DELETE | /news/:id | Delete a news |

### Topic

| Method | Endpoint | Description |
|---|---|---|
| POST | /topic | Create a topic |
| GET | /topic | Get topics |
| UPDATE | /topic/:id | Update a topic |
| DELETE | /topic/:id | Delete a topic |

### Postman Collection

You can test newzy api using postman by imporing `newzy.postman_collection.json`

## How To Install Package Dependency

- Please run

```sh
npm install
```

## How To Run

- Make sure you have installed postgres in your local
- Or you can use docker

```sh
docker-compose up -d db
```

- Run migration and seed db using

```
knex migrate:latest
knex seed:run
```

- Start server by running

```sh
npm start
```

## How To Test

### Unit Test

Please run

```sh
npm test
```

### Integration Test

- Please maske sure re-migrate and re-seed db

```sh
knex migrate:down
knex migrate:latest
knex seed:run
```
