# Voltra API Smoke Test

This document contains representative API requests and responses for each main resource in the Voltra REST API.

## Deployment

**Base URL**

```text
https://voltra-backend.vercel.app/api
```

---

## Health

### GET /health

Check the health of the backend API

**Request**

```bash
curl -X 'GET' \'https://voltra-backend.vercel.app/api/health'

```

**Response**

```json
{
  "status": "Success",
  "message": "Voltra Backend is running",
  "timestamp": "2026-09-07T04:20:58.015Z"
}
```

---

## Auth

### Register

Create new user Account

**Request**

```bash
curl -X 'POST' \ 'https://voltra-backend.vercel.app/api/auth/register' \
  -H 'Content-Type: application/json' \
  -d '{
"fullName": "Jason Marx",
"email": "jason@example.com",
"password": "jason123",
"phoneNumber": "081234534567"
}'
```

**Response**

```json
{
  "message": "New user created successfully",
  "data": {
    "id": 9,
    "fullName": "Jason Marx",
    "email": "jason@example.com",
    "phoneNumber": "081234534567",
    "role": "USER",
    "createdAt": "2026-09-07T04:31:28.800Z"
  }
}
```

### Login

Authenticate the user and return an access token

**Request**

```bash
curl -X 'POST' \ 'https://voltra-backend.vercel.app/api/auth/login' \
  -H 'Content-Type: application/json' \
  -d '{
"email": "jason@example.com",
"password": "jason123"
}'
```

**Response**

```json
{
  "accessToken": "<JWT_ACCESS_TOKEN>",
  "refreshToken": "<JWT_REFRESH_TOKEN>"
}
```

---

## Stations

### GET /stations

Retrieves all stations.

**Request**

```bash
curl -X 'GET' \ 'https://voltra-backend.vercel.app/api/stations' \
    -H 'Authorization: Bearer <JWT_ACCESS_TOKEN>' 
```

**Response**

```json
{
  "message": "All charging stations retrieved successfully",
  "data": [
    {
      "id": 20,
      "name": "Voltra Station Tanjung Perak Port",
      "location": "Pelabuhan Tanjung Perak",
      "area": "Perak Utara, Pabean Cantikan",
      "address": "Jl. Perak Timur No.620, Perak Utara, Pabean Cantikan, Surabaya",
      "latitude": -7.257472,
      "longitude": 112.752088,
      "description": "Voltra Station Tanjung Perak Port provides Normal, Fast, and Ultra EV charging services.",
      "status": "AVAILABLE",
      "imageUrl": null,
      "createdAt": "2026-09-06T10:51:00.093Z",
      "updatedAt": "2026-09-06T10:51:00.093Z",
      "slots": [
        {
          "id": 195,
          "stationId": 20,
          "slotCode": "ST20-N01",
          "chargerType": "NORMAL",
          "powerKw": 22,
          "pricePerKwh": "2500",
          "status": "AVAILABLE",
          "createdAt": "2026-09-06T10:51:00.093Z",
          "updatedAt": "2026-09-06T10:51:00.093Z"
        },
        {
          "id": 196,
          "stationId": 20,
          "slotCode": "ST20-N02",
          "chargerType": "NORMAL",
          "powerKw": 22,
          "pricePerKwh": "2500",
          "status": "AVAILABLE",
          "createdAt": "2026-09-06T10:51:00.093Z",
          "updatedAt": "2026-09-06T10:51:00.093Z"
        },
        {
          "id": 197,
          "stationId": 20,
          "slotCode": "ST20-N03",
          "chargerType": "NORMAL",
          "powerKw": 22,
          "pricePerKwh": "2500",
          "status": "AVAILABLE",
          "createdAt": "2026-09-06T10:51:00.093Z",
          "updatedAt": "2026-09-06T10:51:00.093Z"
        },
        {
          "id": 198,
          "stationId": 20,
          "slotCode": "ST20-N04",
          "chargerType": "NORMAL",
          "powerKw": 22,
          "pricePerKwh": "2500",
          "status": "AVAILABLE",
          "createdAt": "2026-09-06T10:51:00.093Z",
          "updatedAt": "2026-09-06T10:51:00.093Z"
        },
        {
          "id": 199,
          "stationId": 20,
          "slotCode": "ST20-N05",
          "chargerType": "NORMAL",
          "powerKw": 22,
          "pricePerKwh": "2500",
          "status": "OCCUPIED",
          "createdAt": "2026-09-06T10:51:00.093Z",
          "updatedAt": "2026-09-06T10:51:00.093Z"
        },
        {
          "id": 200,
          "stationId": 20,
          "slotCode": "ST20-N06",
          "chargerType": "NORMAL",
          "powerKw": 22,
          "pricePerKwh": "2500",
          "status": "OCCUPIED",
          "createdAt": "2026-09-06T10:51:00.093Z",
          "updatedAt": "2026-09-06T10:51:00.093Z"
        },
        {
          "id": 201,
          "stationId": 20,
          "slotCode": "ST20-N07",
          "chargerType": "NORMAL",
          "powerKw": 22,
          "pricePerKwh": "2500",
          "status": "OCCUPIED",
          "createdAt": "2026-09-06T10:51:00.093Z",
          "updatedAt": "2026-09-06T10:51:00.093Z"
        },
        {
          "id": 202,
          "stationId": 20,
          "slotCode": "ST20-N08",
          "chargerType": "NORMAL",
          "powerKw": 22,
          "pricePerKwh": "2500",
          "status": "OCCUPIED",
          "createdAt": "2026-09-06T10:51:00.093Z",
          "updatedAt": "2026-09-06T10:51:00.093Z"
        },
        {
          "id": 203,
          "stationId": 20,
          "slotCode": "ST20-F01",
          "chargerType": "FAST",
          "powerKw": 60,
          "pricePerKwh": "3750",
          "status": "AVAILABLE",
          "createdAt": "2026-09-06T10:51:00.093Z",
          "updatedAt": "2026-09-06T10:51:00.093Z"
        },
        {
          "id": 204,
          "stationId": 20,
          "slotCode": "ST20-F02",
          "chargerType": "FAST",
          "powerKw": 60,
          "pricePerKwh": "3750",
          "status": "AVAILABLE",
          "createdAt": "2026-09-06T10:51:00.093Z",
          "updatedAt": "2026-09-06T10:51:00.093Z"
        },
        {
          "id": 205,
          "stationId": 20,
          "slotCode": "ST20-F03",
          "chargerType": "FAST",
          "powerKw": 60,
          "pricePerKwh": "3750",
          "status": "OCCUPIED",
          "createdAt": "2026-09-06T10:51:00.093Z",
          "updatedAt": "2026-09-06T10:51:00.093Z"
        },
        {
          "id": 206,
          "stationId": 20,
          "slotCode": "ST20-F04",
          "chargerType": "FAST",
          "powerKw": 60,
          "pricePerKwh": "3750",
          "status": "OCCUPIED",
          "createdAt": "2026-09-06T10:51:00.093Z",
          "updatedAt": "2026-09-06T10:51:00.093Z"
        },
        {
          "id": 207,
          "stationId": 20,
          "slotCode": "ST20-F05",
          "chargerType": "FAST",
          "powerKw": 60,
          "pricePerKwh": "3750",
          "status": "OCCUPIED",
          "createdAt": "2026-09-06T10:51:00.093Z",
          "updatedAt": "2026-09-06T10:51:00.093Z"
        },
        {
          "id": 208,
          "stationId": 20,
          "slotCode": "ST20-F06",
          "chargerType": "FAST",
          "powerKw": 60,
          "pricePerKwh": "3750",
          "status": "OCCUPIED",
          "createdAt": "2026-09-06T10:51:00.093Z",
          "updatedAt": "2026-09-06T10:51:00.093Z"
        },
        {
          "id": 209,
          "stationId": 20,
          "slotCode": "ST20-U01",
          "chargerType": "ULTRA",
          "powerKw": 150,
          "pricePerKwh": "5500",
          "status": "AVAILABLE",
          "createdAt": "2026-09-06T10:51:00.093Z",
          "updatedAt": "2026-09-06T10:51:00.093Z"
        },
        {
          "id": 210,
          "stationId": 20,
          "slotCode": "ST20-U02",
          "chargerType": "ULTRA",
          "powerKw": 150,
          "pricePerKwh": "5500",
          "status": "OCCUPIED",
          "createdAt": "2026-09-06T10:51:00.093Z",
          "updatedAt": "2026-09-06T10:51:00.093Z"
        },
        {
          "id": 211,
          "stationId": 20,
          "slotCode": "ST20-U03",
          "chargerType": "ULTRA",
          "powerKw": 150,
          "pricePerKwh": "5500",
          "status": "OCCUPIED",
          "createdAt": "2026-09-06T10:51:00.093Z",
          "updatedAt": "2026-09-06T10:51:00.093Z"
        }
      ]
    },
    {
      "id": 19,
      "name": "Voltra Station Jembatan Merah Plaza",
      "location": "Jembatan Merah Plaza",
      "area": "Krembangan Selatan",
      "address": "Jl. Rajawali No.82-84, Krembangan Selatan, Surabaya",
      "latitude": -7.257472,
      "longitude": 112.752088,
      "description": "Voltra Station Jembatan Merah Plaza provides Normal, Fast, and Ultra EV charging services.",
      "status": "AVAILABLE",
      "imageUrl": null,
      "createdAt": "2026-09-06T10:50:59.916Z",
      "updatedAt": "2026-09-06T10:50:59.916Z",
      "slots": [
        {
          "id": 187,
          "stationId": 19,
          "slotCode": "ST19-N01",
          "chargerType": "NORMAL",
          "powerKw": 22,
          "pricePerKwh": "2500",
          "status": "AVAILABLE",
          "createdAt": "2026-09-06T10:50:59.916Z",
          "updatedAt": "2026-09-06T10:50:59.916Z"
        },
        {
          "id": 188,
          "stationId": 19,
          "slotCode": "ST19-N02",
          "chargerType": "NORMAL",
          "powerKw": 22,
          "pricePerKwh": "2500",
          "status": "AVAILABLE",
          "createdAt": "2026-09-06T10:50:59.916Z",
          "updatedAt": "2026-09-06T10:50:59.916Z"
        },
        {
          "id": 189,
          "stationId": 19,
          "slotCode": "ST19-N03",
          "chargerType": "NORMAL",
          "powerKw": 22,
          "pricePerKwh": "2500",
          "status": "AVAILABLE",
          "createdAt": "2026-09-06T10:50:59.916Z",
          "updatedAt": "2026-09-06T10:50:59.916Z"
        },
        {
          "id": 190,
          "stationId": 19,
          "slotCode": "ST19-N04",
          "chargerType": "NORMAL",
          "powerKw": 22,
          "pricePerKwh": "2500",
          "status": "OCCUPIED",
          "createdAt": "2026-09-06T10:50:59.916Z",
          "updatedAt": "2026-09-06T10:50:59.916Z"
        },
        {
          "id": 191,
          "stationId": 19,
          "slotCode": "ST19-N05",
          "chargerType": "NORMAL",
          "powerKw": 22,
          "pricePerKwh": "2500",
          "status": "OCCUPIED",
          "createdAt": "2026-09-06T10:50:59.916Z",
          "updatedAt": "2026-09-06T10:50:59.916Z"
        },
        {
          "id": 192,
          "stationId": 19,
          "slotCode": "ST19-F01",
          "chargerType": "FAST",
          "powerKw": 60,
          "pricePerKwh": "3750",
          "status": "AVAILABLE",
          "createdAt": "2026-09-06T10:50:59.916Z",
          "updatedAt": "2026-09-06T10:50:59.916Z"
        },
        {
          "id": 193,
          "stationId": 19,
          "slotCode": "ST19-F02",
          "chargerType": "FAST",
          "powerKw": 60,
          "pricePerKwh": "3750",
          "status": "OCCUPIED",
          "createdAt": "2026-09-06T10:50:59.916Z",
          "updatedAt": "2026-09-06T10:50:59.916Z"
        },
        {
          "id": 194,
          "stationId": 19,
          "slotCode": "ST19-U01",
          "chargerType": "ULTRA",
          "powerKw": 150,
          "pricePerKwh": "5500",
          "status": "AVAILABLE",
          "createdAt": "2026-09-06T10:50:59.916Z",
          "updatedAt": "2026-09-06T10:50:59.916Z"
        }
      ]
    },
    {
      "id": 18,
      "name": "Voltra Station Plaza Marina",
      "location": "Plaza Marina",
      "area": "Wonocolo",
      "address": "Jl. Margorejo Indah No.97-99, Wonocolo, Surabaya",
      "latitude": -7.257472,
      "longitude": 112.752088,
      "description": "Voltra Station Plaza Marina provides Normal, Fast, and Ultra EV charging services.",
      "status": "BUSY",
      "imageUrl": null,
      "createdAt": "2026-09-06T10:50:59.739Z",
      "updatedAt": "2026-09-06T10:50:59.739Z",
      "slots": [
        {
          "id": 175,
          "stationId": 18,
          "slotCode": "ST18-N01",
          "chargerType": "NORMAL",
          "powerKw": 22,
          "pricePerKwh": "2500",
          "status": "OCCUPIED",
          "createdAt": "2026-09-06T10:50:59.739Z",
          "updatedAt": "2026-09-06T10:50:59.739Z"
        },
        {
          "id": 176,
          "stationId": 18,
          "slotCode": "ST18-N02",
          "chargerType": "NORMAL",
          "powerKw": 22,
          "pricePerKwh": "2500",
          "status": "OCCUPIED",
          "createdAt": "2026-09-06T10:50:59.739Z",
          "updatedAt": "2026-09-06T10:50:59.739Z"
        },
        {
          "id": 177,
          "stationId": 18,
          "slotCode": "ST18-N03",
          "chargerType": "NORMAL",
          "powerKw": 22,
          "pricePerKwh": "2500",
          "status": "OCCUPIED",
          "createdAt": "2026-09-06T10:50:59.739Z",
          "updatedAt": "2026-09-06T10:50:59.739Z"
        },
        {
          "id": 178,
          "stationId": 18,
          "slotCode": "ST18-N04",
          "chargerType": "NORMAL",
          "powerKw": 22,
          "pricePerKwh": "2500",
          "status": "OCCUPIED",
          "createdAt": "2026-09-06T10:50:59.739Z",
          "updatedAt": "2026-09-06T10:50:59.739Z"
        },
        {
          "id": 179,
          "stationId": 18,
          "slotCode": "ST18-N05",
          "chargerType": "NORMAL",
          "powerKw": 22,
          "pricePerKwh": "2500",
          "status": "OCCUPIED",
          "createdAt": "2026-09-06T10:50:59.739Z",
          "updatedAt": "2026-09-06T10:50:59.739Z"
        },
        {
          "id": 180,
          "stationId": 18,
          "slotCode": "ST18-N06",
          "chargerType": "NORMAL",
          "powerKw": 22,
          "pricePerKwh": "2500",
          "status": "OCCUPIED",
          "createdAt": "2026-09-06T10:50:59.739Z",
          "updatedAt": "2026-09-06T10:50:59.739Z"
        },
        {
          "id": 181,
          "stationId": 18,
          "slotCode": "ST18-F01",
          "chargerType": "FAST",
          "powerKw": 60,
          "pricePerKwh": "3750",
          "status": "OCCUPIED",
          "createdAt": "2026-09-06T10:50:59.739Z",
          "updatedAt": "2026-09-06T10:50:59.739Z"
        },
        {
          "id": 182,
          "stationId": 18,
          "slotCode": "ST18-F02",
          "chargerType": "FAST",
          "powerKw": 60,
          "pricePerKwh": "3750",
          "status": "OCCUPIED",
          "createdAt": "2026-09-06T10:50:59.739Z",
          "updatedAt": "2026-09-06T10:50:59.739Z"
        },
        {
          "id": 183,
          "stationId": 18,
          "slotCode": "ST18-F03",
          "chargerType": "FAST",
          "powerKw": 60,
          "pricePerKwh": "3750",
          "status": "OCCUPIED",
          "createdAt": "2026-09-06T10:50:59.739Z",
          "updatedAt": "2026-09-06T10:50:59.739Z"
        },
        {
          "id": 184,
          "stationId": 18,
          "slotCode": "ST18-F04",
          "chargerType": "FAST",
          "powerKw": 60,
          "pricePerKwh": "3750",
          "status": "OCCUPIED",
          "createdAt": "2026-09-06T10:50:59.739Z",
          "updatedAt": "2026-09-06T10:50:59.739Z"
        },
        {
          "id": 185,
          "stationId": 18,
          "slotCode": "ST18-U01",
          "chargerType": "ULTRA",
          "powerKw": 150,
          "pricePerKwh": "5500",
          "status": "OCCUPIED",
          "createdAt": "2026-09-06T10:50:59.739Z",
          "updatedAt": "2026-09-06T10:50:59.739Z"
        },
        {
          "id": 186,
          "stationId": 18,
          "slotCode": "ST18-U02",
          "chargerType": "ULTRA",
          "powerKw": 150,
          "pricePerKwh": "5500",
          "status": "OCCUPIED",
          "createdAt": "2026-09-06T10:50:59.739Z",
          "updatedAt": "2026-09-06T10:50:59.739Z"
        }
      ]
    },
    {
      "id": 17,
      "name": "Voltra Station DBL Arena",
      "location": "DBL Arena",
      "area": "Wonokromo",
      "address": "Jl. Ahmad Yani No.88, Wonokromo, Surabaya",
      "latitude": -7.257472,
      "longitude": 112.752088,
      "description": "Voltra Station DBL Arena provides Normal, Fast, and Ultra EV charging services.",
      "status": "BUSY",
      "imageUrl": null,
      "createdAt": "2026-09-06T10:50:59.565Z",
      "updatedAt": "2026-09-06T10:50:59.565Z",
      "slots": [
        {
          "id": 167,
          "stationId": 17,
          "slotCode": "ST17-N01",
          "chargerType": "NORMAL",
          "powerKw": 22,
          "pricePerKwh": "2500",
          "status": "AVAILABLE",
          "createdAt": "2026-09-06T10:50:59.565Z",
          "updatedAt": "2026-09-06T10:50:59.565Z"
        },
        {
          "id": 168,
          "stationId": 17,
          "slotCode": "ST17-N02",
          "chargerType": "NORMAL",
          "powerKw": 22,
          "pricePerKwh": "2500",
          "status": "OCCUPIED",
          "createdAt": "2026-09-06T10:50:59.565Z",
          "updatedAt": "2026-09-06T10:50:59.565Z"
        },
        {
          "id": 169,
          "stationId": 17,
          "slotCode": "ST17-N03",
          "chargerType": "NORMAL",
          "powerKw": 22,
          "pricePerKwh": "2500",
          "status": "OCCUPIED",
          "createdAt": "2026-09-06T10:50:59.565Z",
          "updatedAt": "2026-09-06T10:50:59.565Z"
        },
        {
          "id": 170,
          "stationId": 17,
          "slotCode": "ST17-N04",
          "chargerType": "NORMAL",
          "powerKw": 22,
          "pricePerKwh": "2500",
          "status": "OCCUPIED",
          "createdAt": "2026-09-06T10:50:59.565Z",
          "updatedAt": "2026-09-06T10:50:59.565Z"
        },
        {
          "id": 171,
          "stationId": 17,
          "slotCode": "ST17-F01",
          "chargerType": "FAST",
          "powerKw": 60,
          "pricePerKwh": "3750",
          "status": "AVAILABLE",
          "createdAt": "2026-09-06T10:50:59.565Z",
          "updatedAt": "2026-09-06T10:50:59.565Z"
        },
        {
          "id": 172,
          "stationId": 17,
          "slotCode": "ST17-F02",
          "chargerType": "FAST",
          "powerKw": 60,
          "pricePerKwh": "3750",
          "status": "OCCUPIED",
          "createdAt": "2026-09-06T10:50:59.565Z",
          "updatedAt": "2026-09-06T10:50:59.565Z"
        },
        {
          "id": 173,
          "stationId": 17,
          "slotCode": "ST17-F03",
          "chargerType": "FAST",
          "powerKw": 60,
          "pricePerKwh": "3750",
          "status": "OCCUPIED",
          "createdAt": "2026-09-06T10:50:59.565Z",
          "updatedAt": "2026-09-06T10:50:59.565Z"
        },
        {
          "id": 174,
          "stationId": 17,
          "slotCode": "ST17-U01",
          "chargerType": "ULTRA",
          "powerKw": 150,
          "pricePerKwh": "5500",
          "status": "OCCUPIED",
          "createdAt": "2026-09-06T10:50:59.565Z",
          "updatedAt": "2026-09-06T10:50:59.565Z"
        }
      ]
    },
    {
      "id": 16,
      "name": "Voltra Station CITO",
      "location": "City of Tomorrow Mall",
      "area": "Gayungan",
      "address": "Jl. Ahmad Yani No.288, Gayungan, Surabaya",
      "latitude": -7.257472,
      "longitude": 112.752088,
      "description": "Voltra Station CITO provides Normal, Fast, and Ultra EV charging services.",
      "status": "AVAILABLE",
      "imageUrl": null,
      "createdAt": "2026-09-06T10:50:59.393Z",
      "updatedAt": "2026-09-06T10:50:59.393Z",
      "slots": [
        {
          "id": 158,
          "stationId": 16,
          "slotCode": "ST16-N01",
          "chargerType": "NORMAL",
          "powerKw": 22,
          "pricePerKwh": "2500",
          "status": "AVAILABLE",
          "createdAt": "2026-09-06T10:50:59.393Z",
          "updatedAt": "2026-09-06T10:50:59.393Z"
        },
        {
          "id": 159,
          "stationId": 16,
          "slotCode": "ST16-N02",
          "chargerType": "NORMAL",
          "powerKw": 22,
          "pricePerKwh": "2500",
          "status": "AVAILABLE",
          "createdAt": "2026-09-06T10:50:59.393Z",
          "updatedAt": "2026-09-06T10:50:59.393Z"
        },
        {
          "id": 160,
          "stationId": 16,
          "slotCode": "ST16-N03",
          "chargerType": "NORMAL",
          "powerKw": 22,
          "pricePerKwh": "2500",
          "status": "AVAILABLE",
          "createdAt": "2026-09-06T10:50:59.393Z",
          "updatedAt": "2026-09-06T10:50:59.393Z"
        },
        {
          "id": 161,
          "stationId": 16,
          "slotCode": "ST16-N04",
          "chargerType": "NORMAL",
          "powerKw": 22,
          "pricePerKwh": "2500",
          "status": "AVAILABLE",
          "createdAt": "2026-09-06T10:50:59.393Z",
          "updatedAt": "2026-09-06T10:50:59.393Z"
        },
        {
          "id": 162,
          "stationId": 16,
          "slotCode": "ST16-N05",
          "chargerType": "NORMAL",
          "powerKw": 22,
          "pricePerKwh": "2500",
          "status": "OCCUPIED",
          "createdAt": "2026-09-06T10:50:59.393Z",
          "updatedAt": "2026-09-06T10:50:59.393Z"
        },
        {
          "id": 163,
          "stationId": 16,
          "slotCode": "ST16-F01",
          "chargerType": "FAST",
          "powerKw": 60,
          "pricePerKwh": "3750",
          "status": "AVAILABLE",
          "createdAt": "2026-09-06T10:50:59.393Z",
          "updatedAt": "2026-09-06T10:50:59.393Z"
        },
        {
          "id": 164,
          "stationId": 16,
          "slotCode": "ST16-F02",
          "chargerType": "FAST",
          "powerKw": 60,
          "pricePerKwh": "3750",
          "status": "AVAILABLE",
          "createdAt": "2026-09-06T10:50:59.393Z",
          "updatedAt": "2026-09-06T10:50:59.393Z"
        },
        {
          "id": 165,
          "stationId": 16,
          "slotCode": "ST16-F03",
          "chargerType": "FAST",
          "powerKw": 60,
          "pricePerKwh": "3750",
          "status": "OCCUPIED",
          "createdAt": "2026-09-06T10:50:59.393Z",
          "updatedAt": "2026-09-06T10:50:59.393Z"
        },
        {
          "id": 166,
          "stationId": 16,
          "slotCode": "ST16-U01",
          "chargerType": "ULTRA",
          "powerKw": 150,
          "pricePerKwh": "5500",
          "status": "AVAILABLE",
          "createdAt": "2026-09-06T10:50:59.393Z",
          "updatedAt": "2026-09-06T10:50:59.393Z"
        }
      ]
    },
    {
      "id": 15,
      "name": "Voltra Station Royal Plaza",
      "location": "Royal Plaza",
      "area": "Wonokromo",
      "address": "Jl. Ahmad Yani No.16-18, Wonokromo, Surabaya",
      "latitude": -7.257472,
      "longitude": 112.752088,
      "description": "Voltra Station Royal Plaza provides Normal, Fast, and Ultra EV charging services.",
      "status": "BUSY",
      "imageUrl": null,
      "createdAt": "2026-09-06T10:50:59.219Z",
      "updatedAt": "2026-09-06T10:50:59.219Z",
      "slots": [
        {
          "id": 146,
          "stationId": 15,
          "slotCode": "ST15-N01",
          "chargerType": "NORMAL",
          "powerKw": 22,
          "pricePerKwh": "2500",
          "status": "AVAILABLE",
          "createdAt": "2026-09-06T10:50:59.219Z",
          "updatedAt": "2026-09-06T10:50:59.219Z"
        },
        {
          "id": 147,
          "stationId": 15,
          "slotCode": "ST15-N02",
          "chargerType": "NORMAL",
          "powerKw": 22,
          "pricePerKwh": "2500",
          "status": "AVAILABLE",
          "createdAt": "2026-09-06T10:50:59.219Z",
          "updatedAt": "2026-09-06T10:50:59.219Z"
        },
        {
          "id": 148,
          "stationId": 15,
          "slotCode": "ST15-N03",
          "chargerType": "NORMAL",
          "powerKw": 22,
          "pricePerKwh": "2500",
          "status": "OCCUPIED",
          "createdAt": "2026-09-06T10:50:59.219Z",
          "updatedAt": "2026-09-06T10:50:59.219Z"
        },
        {
          "id": 149,
          "stationId": 15,
          "slotCode": "ST15-N04",
          "chargerType": "NORMAL",
          "powerKw": 22,
          "pricePerKwh": "2500",
          "status": "OCCUPIED",
          "createdAt": "2026-09-06T10:50:59.219Z",
          "updatedAt": "2026-09-06T10:50:59.219Z"
        },
        {
          "id": 150,
          "stationId": 15,
          "slotCode": "ST15-N05",
          "chargerType": "NORMAL",
          "powerKw": 22,
          "pricePerKwh": "2500",
          "status": "OCCUPIED",
          "createdAt": "2026-09-06T10:50:59.219Z",
          "updatedAt": "2026-09-06T10:50:59.219Z"
        },
        {
          "id": 151,
          "stationId": 15,
          "slotCode": "ST15-N06",
          "chargerType": "NORMAL",
          "powerKw": 22,
          "pricePerKwh": "2500",
          "status": "OCCUPIED",
          "createdAt": "2026-09-06T10:50:59.219Z",
          "updatedAt": "2026-09-06T10:50:59.219Z"
        },
        {
          "id": 152,
          "stationId": 15,
          "slotCode": "ST15-F01",
          "chargerType": "FAST",
          "powerKw": 60,
          "pricePerKwh": "3750",
          "status": "AVAILABLE",
          "createdAt": "2026-09-06T10:50:59.219Z",
          "updatedAt": "2026-09-06T10:50:59.219Z"
        },
        {
          "id": 153,
          "stationId": 15,
          "slotCode": "ST15-F02",
          "chargerType": "FAST",
          "powerKw": 60,
          "pricePerKwh": "3750",
          "status": "OCCUPIED",
          "createdAt": "2026-09-06T10:50:59.219Z",
          "updatedAt": "2026-09-06T10:50:59.219Z"
        },
        {
          "id": 154,
          "stationId": 15,
          "slotCode": "ST15-F03",
          "chargerType": "FAST",
          "powerKw": 60,
          "pricePerKwh": "3750",
          "status": "OCCUPIED",
          "createdAt": "2026-09-06T10:50:59.219Z",
          "updatedAt": "2026-09-06T10:50:59.219Z"
        },
        {
          "id": 155,
          "stationId": 15,
          "slotCode": "ST15-F04",
          "chargerType": "FAST",
          "powerKw": 60,
          "pricePerKwh": "3750",
          "status": "OCCUPIED",
          "createdAt": "2026-09-06T10:50:59.219Z",
          "updatedAt": "2026-09-06T10:50:59.219Z"
        },
        {
          "id": 156,
          "stationId": 15,
          "slotCode": "ST15-U01",
          "chargerType": "ULTRA",
          "powerKw": 150,
          "pricePerKwh": "5500",
          "status": "AVAILABLE",
          "createdAt": "2026-09-06T10:50:59.219Z",
          "updatedAt": "2026-09-06T10:50:59.219Z"
        },
        {
          "id": 157,
          "stationId": 15,
          "slotCode": "ST15-U02",
          "chargerType": "ULTRA",
          "powerKw": 150,
          "pricePerKwh": "5500",
          "status": "OCCUPIED",
          "createdAt": "2026-09-06T10:50:59.219Z",
          "updatedAt": "2026-09-06T10:50:59.219Z"
        }
      ]
    },
    {
      "id": 14,
      "name": "Voltra Station Kenjeran Park",
      "location": "Kenjeran Park",
      "area": "Bulak",
      "address": "Jl. Sukolilo No.100, Bulak, Surabaya",
      "latitude": -7.257472,
      "longitude": 112.752088,
      "description": "Voltra Station Kenjeran Park provides Normal, Fast, and Ultra EV charging services.",
      "status": "AVAILABLE",
      "imageUrl": null,
      "createdAt": "2026-09-06T10:50:59.041Z",
      "updatedAt": "2026-09-06T10:50:59.041Z",
      "slots": [
        {
          "id": 139,
          "stationId": 14,
          "slotCode": "ST14-N01",
          "chargerType": "NORMAL",
          "powerKw": 22,
          "pricePerKwh": "2500",
          "status": "AVAILABLE",
          "createdAt": "2026-09-06T10:50:59.041Z",
          "updatedAt": "2026-09-06T10:50:59.041Z"
        },
        {
          "id": 140,
          "stationId": 14,
          "slotCode": "ST14-N02",
          "chargerType": "NORMAL",
          "powerKw": 22,
          "pricePerKwh": "2500",
          "status": "AVAILABLE",
          "createdAt": "2026-09-06T10:50:59.041Z",
          "updatedAt": "2026-09-06T10:50:59.041Z"
        },
        {
          "id": 141,
          "stationId": 14,
          "slotCode": "ST14-N03",
          "chargerType": "NORMAL",
          "powerKw": 22,
          "pricePerKwh": "2500",
          "status": "OCCUPIED",
          "createdAt": "2026-09-06T10:50:59.041Z",
          "updatedAt": "2026-09-06T10:50:59.041Z"
        },
        {
          "id": 142,
          "stationId": 14,
          "slotCode": "ST14-N04",
          "chargerType": "NORMAL",
          "powerKw": 22,
          "pricePerKwh": "2500",
          "status": "OCCUPIED",
          "createdAt": "2026-09-06T10:50:59.041Z",
          "updatedAt": "2026-09-06T10:50:59.041Z"
        },
        {
          "id": 143,
          "stationId": 14,
          "slotCode": "ST14-F01",
          "chargerType": "FAST",
          "powerKw": 60,
          "pricePerKwh": "3750",
          "status": "AVAILABLE",
          "createdAt": "2026-09-06T10:50:59.041Z",
          "updatedAt": "2026-09-06T10:50:59.041Z"
        },
        {
          "id": 144,
          "stationId": 14,
          "slotCode": "ST14-F02",
          "chargerType": "FAST",
          "powerKw": 60,
          "pricePerKwh": "3750",
          "status": "OCCUPIED",
          "createdAt": "2026-09-06T10:50:59.041Z",
          "updatedAt": "2026-09-06T10:50:59.041Z"
        },
        {
          "id": 145,
          "stationId": 14,
          "slotCode": "ST14-U01",
          "chargerType": "ULTRA",
          "powerKw": 150,
          "pricePerKwh": "5500",
          "status": "OCCUPIED",
          "createdAt": "2026-09-06T10:50:59.041Z",
          "updatedAt": "2026-09-06T10:50:59.041Z"
        }
      ]
    },
    {
      "id": 13,
      "name": "Voltra Station MERR",
      "location": "MERR Business District",
      "area": "Rungkut",
      "address": "Jl. Dr. Ir. H. Soekarno, Rungkut, Surabaya",
      "latitude": -7.257472,
      "longitude": 112.752088,
      "description": "Voltra Station MERR provides Normal, Fast, and Ultra EV charging services.",
      "status": "BUSY",
      "imageUrl": null,
      "createdAt": "2026-09-06T10:50:58.838Z",
      "updatedAt": "2026-09-06T10:50:58.838Z",
      "slots": [
        {
          "id": 130,
          "stationId": 13,
          "slotCode": "ST13-N01",
          "chargerType": "NORMAL",
          "powerKw": 22,
          "pricePerKwh": "2500",
          "status": "AVAILABLE",
          "createdAt": "2026-09-06T10:50:58.838Z",
          "updatedAt": "2026-09-06T10:50:58.838Z"
        },
        {
          "id": 131,
          "stationId": 13,
          "slotCode": "ST13-N02",
          "chargerType": "NORMAL",
          "powerKw": 22,
          "pricePerKwh": "2500",
          "status": "OCCUPIED",
          "createdAt": "2026-09-06T10:50:58.838Z",
          "updatedAt": "2026-09-06T10:50:58.838Z"
        },
        {
          "id": 132,
          "stationId": 13,
          "slotCode": "ST13-N03",
          "chargerType": "NORMAL",
          "powerKw": 22,
          "pricePerKwh": "2500",
          "status": "OCCUPIED",
          "createdAt": "2026-09-06T10:50:58.838Z",
          "updatedAt": "2026-09-06T10:50:58.838Z"
        },
        {
          "id": 133,
          "stationId": 13,
          "slotCode": "ST13-N04",
          "chargerType": "NORMAL",
          "powerKw": 22,
          "pricePerKwh": "2500",
          "status": "OCCUPIED",
          "createdAt": "2026-09-06T10:50:58.838Z",
          "updatedAt": "2026-09-06T10:50:58.838Z"
        },
        {
          "id": 134,
          "stationId": 13,
          "slotCode": "ST13-N05",
          "chargerType": "NORMAL",
          "powerKw": 22,
          "pricePerKwh": "2500",
          "status": "OCCUPIED",
          "createdAt": "2026-09-06T10:50:58.838Z",
          "updatedAt": "2026-09-06T10:50:58.838Z"
        },
        {
          "id": 135,
          "stationId": 13,
          "slotCode": "ST13-F01",
          "chargerType": "FAST",
          "powerKw": 60,
          "pricePerKwh": "3750",
          "status": "OCCUPIED",
          "createdAt": "2026-09-06T10:50:58.838Z",
          "updatedAt": "2026-09-06T10:50:58.838Z"
        },
        {
          "id": 136,
          "stationId": 13,
          "slotCode": "ST13-F02",
          "chargerType": "FAST",
          "powerKw": 60,
          "pricePerKwh": "3750",
          "status": "OCCUPIED",
          "createdAt": "2026-09-06T10:50:58.838Z",
          "updatedAt": "2026-09-06T10:50:58.838Z"
        },
        {
          "id": 137,
          "stationId": 13,
          "slotCode": "ST13-F03",
          "chargerType": "FAST",
          "powerKw": 60,
          "pricePerKwh": "3750",
          "status": "OCCUPIED",
          "createdAt": "2026-09-06T10:50:58.838Z",
          "updatedAt": "2026-09-06T10:50:58.838Z"
        },
        {
          "id": 138,
          "stationId": 13,
          "slotCode": "ST13-U01",
          "chargerType": "ULTRA",
          "powerKw": 150,
          "pricePerKwh": "5500",
          "status": "OCCUPIED",
          "createdAt": "2026-09-06T10:50:58.838Z",
          "updatedAt": "2026-09-06T10:50:58.838Z"
        }
      ]
    },
    {
      "id": 12,
      "name": "Voltra Station ITS",
      "location": "Institut Teknologi Sepuluh Nopember",
      "area": "Keputih, Sukolilo",
      "address": "Jl. Teknik Kimia, Keputih, Sukolilo, Surabaya",
      "latitude": -7.257472,
      "longitude": 112.752088,
      "description": "Voltra Station ITS provides Normal, Fast, and Ultra EV charging services.",
      "status": "AVAILABLE",
      "imageUrl": null,
      "createdAt": "2026-09-06T10:50:58.642Z",
      "updatedAt": "2026-09-06T10:50:58.642Z",
      "slots": [
        {
          "id": 121,
          "stationId": 12,
          "slotCode": "ST12-N01",
          "chargerType": "NORMAL",
          "powerKw": 22,
          "pricePerKwh": "2500",
          "status": "AVAILABLE",
          "createdAt": "2026-09-06T10:50:58.642Z",
          "updatedAt": "2026-09-06T10:50:58.642Z"
        },
        {
          "id": 122,
          "stationId": 12,
          "slotCode": "ST12-N02",
          "chargerType": "NORMAL",
          "powerKw": 22,
          "pricePerKwh": "2500",
          "status": "AVAILABLE",
          "createdAt": "2026-09-06T10:50:58.642Z",
          "updatedAt": "2026-09-06T10:50:58.642Z"
        },
        {
          "id": 123,
          "stationId": 12,
          "slotCode": "ST12-N03",
          "chargerType": "NORMAL",
          "powerKw": 22,
          "pricePerKwh": "2500",
          "status": "AVAILABLE",
          "createdAt": "2026-09-06T10:50:58.642Z",
          "updatedAt": "2026-09-06T10:50:58.642Z"
        },
        {
          "id": 124,
          "stationId": 12,
          "slotCode": "ST12-N04",
          "chargerType": "NORMAL",
          "powerKw": 22,
          "pricePerKwh": "2500",
          "status": "OCCUPIED",
          "createdAt": "2026-09-06T10:50:58.642Z",
          "updatedAt": "2026-09-06T10:50:58.642Z"
        },
        {
          "id": 125,
          "stationId": 12,
          "slotCode": "ST12-N05",
          "chargerType": "NORMAL",
          "powerKw": 22,
          "pricePerKwh": "2500",
          "status": "OCCUPIED",
          "createdAt": "2026-09-06T10:50:58.642Z",
          "updatedAt": "2026-09-06T10:50:58.642Z"
        },
        {
          "id": 126,
          "stationId": 12,
          "slotCode": "ST12-F01",
          "chargerType": "FAST",
          "powerKw": 60,
          "pricePerKwh": "3750",
          "status": "AVAILABLE",
          "createdAt": "2026-09-06T10:50:58.642Z",
          "updatedAt": "2026-09-06T10:50:58.642Z"
        },
        {
          "id": 127,
          "stationId": 12,
          "slotCode": "ST12-F02",
          "chargerType": "FAST",
          "powerKw": 60,
          "pricePerKwh": "3750",
          "status": "AVAILABLE",
          "createdAt": "2026-09-06T10:50:58.642Z",
          "updatedAt": "2026-09-06T10:50:58.642Z"
        },
        {
          "id": 128,
          "stationId": 12,
          "slotCode": "ST12-F03",
          "chargerType": "FAST",
          "powerKw": 60,
          "pricePerKwh": "3750",
          "status": "OCCUPIED",
          "createdAt": "2026-09-06T10:50:58.642Z",
          "updatedAt": "2026-09-06T10:50:58.642Z"
        },
        {
          "id": 129,
          "stationId": 12,
          "slotCode": "ST12-U01",
          "chargerType": "ULTRA",
          "powerKw": 150,
          "pricePerKwh": "5500",
          "status": "AVAILABLE",
          "createdAt": "2026-09-06T10:50:58.642Z",
          "updatedAt": "2026-09-06T10:50:58.642Z"
        }
      ]
    },
    {
      "id": 11,
      "name": "Voltra Station Pakuwon City Mall",
      "location": "Pakuwon City Mall",
      "area": "Mulyorejo",
      "address": "Jl. Raya Laguna KJW Putih Tambak, Mulyorejo, Surabaya",
      "latitude": -7.257472,
      "longitude": 112.752088,
      "description": "Voltra Station Pakuwon City Mall provides Normal, Fast, and Ultra EV charging services.",
      "status": "AVAILABLE",
      "imageUrl": null,
      "createdAt": "2026-09-06T10:50:58.465Z",
      "updatedAt": "2026-09-06T10:50:58.465Z",
      "slots": [
        {
          "id": 109,
          "stationId": 11,
          "slotCode": "ST11-N01",
          "chargerType": "NORMAL",
          "powerKw": 22,
          "pricePerKwh": "2500",
          "status": "AVAILABLE",
          "createdAt": "2026-09-06T10:50:58.465Z",
          "updatedAt": "2026-09-06T10:50:58.465Z"
        },
        {
          "id": 110,
          "stationId": 11,
          "slotCode": "ST11-N02",
          "chargerType": "NORMAL",
          "powerKw": 22,
          "pricePerKwh": "2500",
          "status": "AVAILABLE",
          "createdAt": "2026-09-06T10:50:58.465Z",
          "updatedAt": "2026-09-06T10:50:58.465Z"
        },
        {
          "id": 111,
          "stationId": 11,
          "slotCode": "ST11-N03",
          "chargerType": "NORMAL",
          "powerKw": 22,
          "pricePerKwh": "2500",
          "status": "AVAILABLE",
          "createdAt": "2026-09-06T10:50:58.465Z",
          "updatedAt": "2026-09-06T10:50:58.465Z"
        },
        {
          "id": 112,
          "stationId": 11,
          "slotCode": "ST11-N04",
          "chargerType": "NORMAL",
          "powerKw": 22,
          "pricePerKwh": "2500",
          "status": "AVAILABLE",
          "createdAt": "2026-09-06T10:50:58.465Z",
          "updatedAt": "2026-09-06T10:50:58.465Z"
        },
        {
          "id": 113,
          "stationId": 11,
          "slotCode": "ST11-N05",
          "chargerType": "NORMAL",
          "powerKw": 22,
          "pricePerKwh": "2500",
          "status": "OCCUPIED",
          "createdAt": "2026-09-06T10:50:58.465Z",
          "updatedAt": "2026-09-06T10:50:58.465Z"
        },
        {
          "id": 114,
          "stationId": 11,
          "slotCode": "ST11-N06",
          "chargerType": "NORMAL",
          "powerKw": 22,
          "pricePerKwh": "2500",
          "status": "OCCUPIED",
          "createdAt": "2026-09-06T10:50:58.465Z",
          "updatedAt": "2026-09-06T10:50:58.465Z"
        },
        {
          "id": 115,
          "stationId": 11,
          "slotCode": "ST11-F01",
          "chargerType": "FAST",
          "powerKw": 60,
          "pricePerKwh": "3750",
          "status": "AVAILABLE",
          "createdAt": "2026-09-06T10:50:58.465Z",
          "updatedAt": "2026-09-06T10:50:58.465Z"
        },
        {
          "id": 116,
          "stationId": 11,
          "slotCode": "ST11-F02",
          "chargerType": "FAST",
          "powerKw": 60,
          "pricePerKwh": "3750",
          "status": "AVAILABLE",
          "createdAt": "2026-09-06T10:50:58.465Z",
          "updatedAt": "2026-09-06T10:50:58.465Z"
        },
        {
          "id": 117,
          "stationId": 11,
          "slotCode": "ST11-F03",
          "chargerType": "FAST",
          "powerKw": 60,
          "pricePerKwh": "3750",
          "status": "OCCUPIED",
          "createdAt": "2026-09-06T10:50:58.465Z",
          "updatedAt": "2026-09-06T10:50:58.465Z"
        },
        {
          "id": 118,
          "stationId": 11,
          "slotCode": "ST11-F04",
          "chargerType": "FAST",
          "powerKw": 60,
          "pricePerKwh": "3750",
          "status": "OCCUPIED",
          "createdAt": "2026-09-06T10:50:58.465Z",
          "updatedAt": "2026-09-06T10:50:58.465Z"
        },
        {
          "id": 119,
          "stationId": 11,
          "slotCode": "ST11-U01",
          "chargerType": "ULTRA",
          "powerKw": 150,
          "pricePerKwh": "5500",
          "status": "AVAILABLE",
          "createdAt": "2026-09-06T10:50:58.465Z",
          "updatedAt": "2026-09-06T10:50:58.465Z"
        },
        {
          "id": 120,
          "stationId": 11,
          "slotCode": "ST11-U02",
          "chargerType": "ULTRA",
          "powerKw": 150,
          "pricePerKwh": "5500",
          "status": "AVAILABLE",
          "createdAt": "2026-09-06T10:50:58.465Z",
          "updatedAt": "2026-09-06T10:50:58.465Z"
        }
      ]
    },
    {
      "id": 10,
      "name": "Voltra Station Galaxy Mall",
      "location": "Galaxy Mall 3",
      "area": "Mulyorejo",
      "address": "Jl. Dharmahusada Indah Timur No.35-37, Mulyorejo, Surabaya",
      "latitude": -7.257472,
      "longitude": 112.752088,
      "description": "Voltra Station Galaxy Mall provides Normal, Fast, and Ultra EV charging services.",
      "status": "BUSY",
      "imageUrl": null,
      "createdAt": "2026-09-06T10:50:58.277Z",
      "updatedAt": "2026-09-06T10:50:58.277Z",
      "slots": [
        {
          "id": 97,
          "stationId": 10,
          "slotCode": "ST10-N01",
          "chargerType": "NORMAL",
          "powerKw": 22,
          "pricePerKwh": "2500",
          "status": "AVAILABLE",
          "createdAt": "2026-09-06T10:50:58.277Z",
          "updatedAt": "2026-09-06T10:50:58.277Z"
        },
        {
          "id": 98,
          "stationId": 10,
          "slotCode": "ST10-N02",
          "chargerType": "NORMAL",
          "powerKw": 22,
          "pricePerKwh": "2500",
          "status": "AVAILABLE",
          "createdAt": "2026-09-06T10:50:58.277Z",
          "updatedAt": "2026-09-06T10:50:58.277Z"
        },
        {
          "id": 99,
          "stationId": 10,
          "slotCode": "ST10-N03",
          "chargerType": "NORMAL",
          "powerKw": 22,
          "pricePerKwh": "2500",
          "status": "OCCUPIED",
          "createdAt": "2026-09-06T10:50:58.277Z",
          "updatedAt": "2026-09-06T10:50:58.277Z"
        },
        {
          "id": 100,
          "stationId": 10,
          "slotCode": "ST10-N04",
          "chargerType": "NORMAL",
          "powerKw": 22,
          "pricePerKwh": "2500",
          "status": "OCCUPIED",
          "createdAt": "2026-09-06T10:50:58.277Z",
          "updatedAt": "2026-09-06T10:50:58.277Z"
        },
        {
          "id": 101,
          "stationId": 10,
          "slotCode": "ST10-N05",
          "chargerType": "NORMAL",
          "powerKw": 22,
          "pricePerKwh": "2500",
          "status": "OCCUPIED",
          "createdAt": "2026-09-06T10:50:58.277Z",
          "updatedAt": "2026-09-06T10:50:58.277Z"
        },
        {
          "id": 102,
          "stationId": 10,
          "slotCode": "ST10-N06",
          "chargerType": "NORMAL",
          "powerKw": 22,
          "pricePerKwh": "2500",
          "status": "OCCUPIED",
          "createdAt": "2026-09-06T10:50:58.277Z",
          "updatedAt": "2026-09-06T10:50:58.277Z"
        },
        {
          "id": 103,
          "stationId": 10,
          "slotCode": "ST10-F01",
          "chargerType": "FAST",
          "powerKw": 60,
          "pricePerKwh": "3750",
          "status": "AVAILABLE",
          "createdAt": "2026-09-06T10:50:58.277Z",
          "updatedAt": "2026-09-06T10:50:58.277Z"
        },
        {
          "id": 104,
          "stationId": 10,
          "slotCode": "ST10-F02",
          "chargerType": "FAST",
          "powerKw": 60,
          "pricePerKwh": "3750",
          "status": "OCCUPIED",
          "createdAt": "2026-09-06T10:50:58.277Z",
          "updatedAt": "2026-09-06T10:50:58.277Z"
        },
        {
          "id": 105,
          "stationId": 10,
          "slotCode": "ST10-F03",
          "chargerType": "FAST",
          "powerKw": 60,
          "pricePerKwh": "3750",
          "status": "OCCUPIED",
          "createdAt": "2026-09-06T10:50:58.277Z",
          "updatedAt": "2026-09-06T10:50:58.277Z"
        },
        {
          "id": 106,
          "stationId": 10,
          "slotCode": "ST10-F04",
          "chargerType": "FAST",
          "powerKw": 60,
          "pricePerKwh": "3750",
          "status": "OCCUPIED",
          "createdAt": "2026-09-06T10:50:58.277Z",
          "updatedAt": "2026-09-06T10:50:58.277Z"
        },
        {
          "id": 107,
          "stationId": 10,
          "slotCode": "ST10-U01",
          "chargerType": "ULTRA",
          "powerKw": 150,
          "pricePerKwh": "5500",
          "status": "OCCUPIED",
          "createdAt": "2026-09-06T10:50:58.277Z",
          "updatedAt": "2026-09-06T10:50:58.277Z"
        },
        {
          "id": 108,
          "stationId": 10,
          "slotCode": "ST10-U02",
          "chargerType": "ULTRA",
          "powerKw": 150,
          "pricePerKwh": "5500",
          "status": "OCCUPIED",
          "createdAt": "2026-09-06T10:50:58.277Z",
          "updatedAt": "2026-09-06T10:50:58.277Z"
        }
      ]
    },
    {
      "id": 9,
      "name": "Voltra Station Spazio Tower",
      "location": "Spazio Tower",
      "area": "Pradahkalikendal",
      "address": "Jl. Mayjen Yono Suwoyo, Pradahkalikendal, Surabaya",
      "latitude": -7.257472,
      "longitude": 112.752088,
      "description": "Voltra Station Spazio Tower provides Normal, Fast, and Ultra EV charging services.",
      "status": "BUSY",
      "imageUrl": null,
      "createdAt": "2026-09-06T10:50:58.082Z",
      "updatedAt": "2026-09-06T10:50:58.082Z",
      "slots": [
        {
          "id": 90,
          "stationId": 9,
          "slotCode": "ST09-N01",
          "chargerType": "NORMAL",
          "powerKw": 22,
          "pricePerKwh": "2500",
          "status": "AVAILABLE",
          "createdAt": "2026-09-06T10:50:58.082Z",
          "updatedAt": "2026-09-06T10:50:58.082Z"
        },
        {
          "id": 91,
          "stationId": 9,
          "slotCode": "ST09-N02",
          "chargerType": "NORMAL",
          "powerKw": 22,
          "pricePerKwh": "2500",
          "status": "OCCUPIED",
          "createdAt": "2026-09-06T10:50:58.082Z",
          "updatedAt": "2026-09-06T10:50:58.082Z"
        },
        {
          "id": 92,
          "stationId": 9,
          "slotCode": "ST09-N03",
          "chargerType": "NORMAL",
          "powerKw": 22,
          "pricePerKwh": "2500",
          "status": "OCCUPIED",
          "createdAt": "2026-09-06T10:50:58.082Z",
          "updatedAt": "2026-09-06T10:50:58.082Z"
        },
        {
          "id": 93,
          "stationId": 9,
          "slotCode": "ST09-N04",
          "chargerType": "NORMAL",
          "powerKw": 22,
          "pricePerKwh": "2500",
          "status": "OCCUPIED",
          "createdAt": "2026-09-06T10:50:58.082Z",
          "updatedAt": "2026-09-06T10:50:58.082Z"
        },
        {
          "id": 94,
          "stationId": 9,
          "slotCode": "ST09-F01",
          "chargerType": "FAST",
          "powerKw": 60,
          "pricePerKwh": "3750",
          "status": "AVAILABLE",
          "createdAt": "2026-09-06T10:50:58.082Z",
          "updatedAt": "2026-09-06T10:50:58.082Z"
        },
        {
          "id": 95,
          "stationId": 9,
          "slotCode": "ST09-F02",
          "chargerType": "FAST",
          "powerKw": 60,
          "pricePerKwh": "3750",
          "status": "OCCUPIED",
          "createdAt": "2026-09-06T10:50:58.082Z",
          "updatedAt": "2026-09-06T10:50:58.082Z"
        },
        {
          "id": 96,
          "stationId": 9,
          "slotCode": "ST09-U01",
          "chargerType": "ULTRA",
          "powerKw": 150,
          "pricePerKwh": "5500",
          "status": "OCCUPIED",
          "createdAt": "2026-09-06T10:50:58.082Z",
          "updatedAt": "2026-09-06T10:50:58.082Z"
        }
      ]
    },
    {
      "id": 8,
      "name": "Voltra Station PTC",
      "location": "Pakuwon Trade Center",
      "area": "Pradahkalikendal",
      "address": "Jl. HR Muhammad No.2, Pradahkalikendal, Surabaya",
      "latitude": -7.257472,
      "longitude": 112.752088,
      "description": "Voltra Station PTC provides Normal, Fast, and Ultra EV charging services.",
      "status": "BUSY",
      "imageUrl": null,
      "createdAt": "2026-09-06T10:50:57.907Z",
      "updatedAt": "2026-09-06T10:50:57.907Z",
      "slots": [
        {
          "id": 78,
          "stationId": 8,
          "slotCode": "ST08-N01",
          "chargerType": "NORMAL",
          "powerKw": 22,
          "pricePerKwh": "2500",
          "status": "AVAILABLE",
          "createdAt": "2026-09-06T10:50:57.907Z",
          "updatedAt": "2026-09-06T10:50:57.907Z"
        },
        {
          "id": 79,
          "stationId": 8,
          "slotCode": "ST08-N02",
          "chargerType": "NORMAL",
          "powerKw": 22,
          "pricePerKwh": "2500",
          "status": "AVAILABLE",
          "createdAt": "2026-09-06T10:50:57.907Z",
          "updatedAt": "2026-09-06T10:50:57.907Z"
        },
        {
          "id": 80,
          "stationId": 8,
          "slotCode": "ST08-N03",
          "chargerType": "NORMAL",
          "powerKw": 22,
          "pricePerKwh": "2500",
          "status": "OCCUPIED",
          "createdAt": "2026-09-06T10:50:57.907Z",
          "updatedAt": "2026-09-06T10:50:57.907Z"
        },
        {
          "id": 81,
          "stationId": 8,
          "slotCode": "ST08-N04",
          "chargerType": "NORMAL",
          "powerKw": 22,
          "pricePerKwh": "2500",
          "status": "OCCUPIED",
          "createdAt": "2026-09-06T10:50:57.907Z",
          "updatedAt": "2026-09-06T10:50:57.907Z"
        },
        {
          "id": 82,
          "stationId": 8,
          "slotCode": "ST08-N05",
          "chargerType": "NORMAL",
          "powerKw": 22,
          "pricePerKwh": "2500",
          "status": "OCCUPIED",
          "createdAt": "2026-09-06T10:50:57.907Z",
          "updatedAt": "2026-09-06T10:50:57.907Z"
        },
        {
          "id": 83,
          "stationId": 8,
          "slotCode": "ST08-N06",
          "chargerType": "NORMAL",
          "powerKw": 22,
          "pricePerKwh": "2500",
          "status": "OCCUPIED",
          "createdAt": "2026-09-06T10:50:57.907Z",
          "updatedAt": "2026-09-06T10:50:57.907Z"
        },
        {
          "id": 84,
          "stationId": 8,
          "slotCode": "ST08-F01",
          "chargerType": "FAST",
          "powerKw": 60,
          "pricePerKwh": "3750",
          "status": "AVAILABLE",
          "createdAt": "2026-09-06T10:50:57.907Z",
          "updatedAt": "2026-09-06T10:50:57.907Z"
        },
        {
          "id": 85,
          "stationId": 8,
          "slotCode": "ST08-F02",
          "chargerType": "FAST",
          "powerKw": 60,
          "pricePerKwh": "3750",
          "status": "OCCUPIED",
          "createdAt": "2026-09-06T10:50:57.907Z",
          "updatedAt": "2026-09-06T10:50:57.907Z"
        },
        {
          "id": 86,
          "stationId": 8,
          "slotCode": "ST08-F03",
          "chargerType": "FAST",
          "powerKw": 60,
          "pricePerKwh": "3750",
          "status": "OCCUPIED",
          "createdAt": "2026-09-06T10:50:57.907Z",
          "updatedAt": "2026-09-06T10:50:57.907Z"
        },
        {
          "id": 87,
          "stationId": 8,
          "slotCode": "ST08-F04",
          "chargerType": "FAST",
          "powerKw": 60,
          "pricePerKwh": "3750",
          "status": "OCCUPIED",
          "createdAt": "2026-09-06T10:50:57.907Z",
          "updatedAt": "2026-09-06T10:50:57.907Z"
        },
        {
          "id": 88,
          "stationId": 8,
          "slotCode": "ST08-U01",
          "chargerType": "ULTRA",
          "powerKw": 150,
          "pricePerKwh": "5500",
          "status": "OCCUPIED",
          "createdAt": "2026-09-06T10:50:57.907Z",
          "updatedAt": "2026-09-06T10:50:57.907Z"
        },
        {
          "id": 89,
          "stationId": 8,
          "slotCode": "ST08-U02",
          "chargerType": "ULTRA",
          "powerKw": 150,
          "pricePerKwh": "5500",
          "status": "OCCUPIED",
          "createdAt": "2026-09-06T10:50:57.907Z",
          "updatedAt": "2026-09-06T10:50:57.907Z"
        }
      ]
    },
    {
      "id": 7,
      "name": "Voltra Station Lenmarc Mall",
      "location": "Lenmarc Mall",
      "area": "Pradahkalikendal",
      "address": "Jl. Bukit Darmo Boulevard, Pradahkalikendal, Surabaya",
      "latitude": -7.257472,
      "longitude": 112.752088,
      "description": "Voltra Station Lenmarc Mall provides Normal, Fast, and Ultra EV charging services.",
      "status": "AVAILABLE",
      "imageUrl": null,
      "createdAt": "2026-09-06T10:50:57.731Z",
      "updatedAt": "2026-09-06T10:50:57.731Z",
      "slots": [
        {
          "id": 69,
          "stationId": 7,
          "slotCode": "ST07-N01",
          "chargerType": "NORMAL",
          "powerKw": 22,
          "pricePerKwh": "2500",
          "status": "AVAILABLE",
          "createdAt": "2026-09-06T10:50:57.731Z",
          "updatedAt": "2026-09-06T10:50:57.731Z"
        },
        {
          "id": 70,
          "stationId": 7,
          "slotCode": "ST07-N02",
          "chargerType": "NORMAL",
          "powerKw": 22,
          "pricePerKwh": "2500",
          "status": "AVAILABLE",
          "createdAt": "2026-09-06T10:50:57.731Z",
          "updatedAt": "2026-09-06T10:50:57.731Z"
        },
        {
          "id": 71,
          "stationId": 7,
          "slotCode": "ST07-N03",
          "chargerType": "NORMAL",
          "powerKw": 22,
          "pricePerKwh": "2500",
          "status": "OCCUPIED",
          "createdAt": "2026-09-06T10:50:57.731Z",
          "updatedAt": "2026-09-06T10:50:57.731Z"
        },
        {
          "id": 72,
          "stationId": 7,
          "slotCode": "ST07-N04",
          "chargerType": "NORMAL",
          "powerKw": 22,
          "pricePerKwh": "2500",
          "status": "OCCUPIED",
          "createdAt": "2026-09-06T10:50:57.731Z",
          "updatedAt": "2026-09-06T10:50:57.731Z"
        },
        {
          "id": 73,
          "stationId": 7,
          "slotCode": "ST07-N05",
          "chargerType": "NORMAL",
          "powerKw": 22,
          "pricePerKwh": "2500",
          "status": "OCCUPIED",
          "createdAt": "2026-09-06T10:50:57.731Z",
          "updatedAt": "2026-09-06T10:50:57.731Z"
        },
        {
          "id": 74,
          "stationId": 7,
          "slotCode": "ST07-F01",
          "chargerType": "FAST",
          "powerKw": 60,
          "pricePerKwh": "3750",
          "status": "AVAILABLE",
          "createdAt": "2026-09-06T10:50:57.731Z",
          "updatedAt": "2026-09-06T10:50:57.731Z"
        },
        {
          "id": 75,
          "stationId": 7,
          "slotCode": "ST07-F02",
          "chargerType": "FAST",
          "powerKw": 60,
          "pricePerKwh": "3750",
          "status": "AVAILABLE",
          "createdAt": "2026-09-06T10:50:57.731Z",
          "updatedAt": "2026-09-06T10:50:57.731Z"
        },
        {
          "id": 76,
          "stationId": 7,
          "slotCode": "ST07-F03",
          "chargerType": "FAST",
          "powerKw": 60,
          "pricePerKwh": "3750",
          "status": "OCCUPIED",
          "createdAt": "2026-09-06T10:50:57.731Z",
          "updatedAt": "2026-09-06T10:50:57.731Z"
        },
        {
          "id": 77,
          "stationId": 7,
          "slotCode": "ST07-U01",
          "chargerType": "ULTRA",
          "powerKw": 150,
          "pricePerKwh": "5500",
          "status": "AVAILABLE",
          "createdAt": "2026-09-06T10:50:57.731Z",
          "updatedAt": "2026-09-06T10:50:57.731Z"
        }
      ]
    },
    {
      "id": 6,
      "name": "Voltra Station Ciputra World",
      "location": "Ciputra World Surabaya",
      "area": "Dukuh Pakis",
      "address": "Jl. Mayjen Sungkono No.89, Dukuh Pakis, Surabaya",
      "latitude": -7.257472,
      "longitude": 112.752088,
      "description": "Voltra Station Ciputra World provides Normal, Fast, and Ultra EV charging services.",
      "status": "BUSY",
      "imageUrl": null,
      "createdAt": "2026-09-06T10:50:57.490Z",
      "updatedAt": "2026-09-06T10:50:57.490Z",
      "slots": [
        {
          "id": 57,
          "stationId": 6,
          "slotCode": "ST06-N01",
          "chargerType": "NORMAL",
          "powerKw": 22,
          "pricePerKwh": "2500",
          "status": "OCCUPIED",
          "createdAt": "2026-09-06T10:50:57.490Z",
          "updatedAt": "2026-09-06T10:50:57.490Z"
        },
        {
          "id": 58,
          "stationId": 6,
          "slotCode": "ST06-N02",
          "chargerType": "NORMAL",
          "powerKw": 22,
          "pricePerKwh": "2500",
          "status": "OCCUPIED",
          "createdAt": "2026-09-06T10:50:57.490Z",
          "updatedAt": "2026-09-06T10:50:57.490Z"
        },
        {
          "id": 59,
          "stationId": 6,
          "slotCode": "ST06-N03",
          "chargerType": "NORMAL",
          "powerKw": 22,
          "pricePerKwh": "2500",
          "status": "OCCUPIED",
          "createdAt": "2026-09-06T10:50:57.490Z",
          "updatedAt": "2026-09-06T10:50:57.490Z"
        },
        {
          "id": 60,
          "stationId": 6,
          "slotCode": "ST06-N04",
          "chargerType": "NORMAL",
          "powerKw": 22,
          "pricePerKwh": "2500",
          "status": "OCCUPIED",
          "createdAt": "2026-09-06T10:50:57.490Z",
          "updatedAt": "2026-09-06T10:50:57.490Z"
        },
        {
          "id": 61,
          "stationId": 6,
          "slotCode": "ST06-N05",
          "chargerType": "NORMAL",
          "powerKw": 22,
          "pricePerKwh": "2500",
          "status": "OCCUPIED",
          "createdAt": "2026-09-06T10:50:57.490Z",
          "updatedAt": "2026-09-06T10:50:57.490Z"
        },
        {
          "id": 62,
          "stationId": 6,
          "slotCode": "ST06-N06",
          "chargerType": "NORMAL",
          "powerKw": 22,
          "pricePerKwh": "2500",
          "status": "OCCUPIED",
          "createdAt": "2026-09-06T10:50:57.490Z",
          "updatedAt": "2026-09-06T10:50:57.490Z"
        },
        {
          "id": 63,
          "stationId": 6,
          "slotCode": "ST06-F01",
          "chargerType": "FAST",
          "powerKw": 60,
          "pricePerKwh": "3750",
          "status": "OCCUPIED",
          "createdAt": "2026-09-06T10:50:57.490Z",
          "updatedAt": "2026-09-06T10:50:57.490Z"
        },
        {
          "id": 64,
          "stationId": 6,
          "slotCode": "ST06-F02",
          "chargerType": "FAST",
          "powerKw": 60,
          "pricePerKwh": "3750",
          "status": "OCCUPIED",
          "createdAt": "2026-09-06T10:50:57.490Z",
          "updatedAt": "2026-09-06T10:50:57.490Z"
        },
        {
          "id": 65,
          "stationId": 6,
          "slotCode": "ST06-F03",
          "chargerType": "FAST",
          "powerKw": 60,
          "pricePerKwh": "3750",
          "status": "OCCUPIED",
          "createdAt": "2026-09-06T10:50:57.490Z",
          "updatedAt": "2026-09-06T10:50:57.490Z"
        },
        {
          "id": 66,
          "stationId": 6,
          "slotCode": "ST06-F04",
          "chargerType": "FAST",
          "powerKw": 60,
          "pricePerKwh": "3750",
          "status": "OCCUPIED",
          "createdAt": "2026-09-06T10:50:57.490Z",
          "updatedAt": "2026-09-06T10:50:57.490Z"
        },
        {
          "id": 67,
          "stationId": 6,
          "slotCode": "ST06-U01",
          "chargerType": "ULTRA",
          "powerKw": 150,
          "pricePerKwh": "5500",
          "status": "OCCUPIED",
          "createdAt": "2026-09-06T10:50:57.490Z",
          "updatedAt": "2026-09-06T10:50:57.490Z"
        },
        {
          "id": 68,
          "stationId": 6,
          "slotCode": "ST06-U02",
          "chargerType": "ULTRA",
          "powerKw": 150,
          "pricePerKwh": "5500",
          "status": "OCCUPIED",
          "createdAt": "2026-09-06T10:50:57.490Z",
          "updatedAt": "2026-09-06T10:50:57.490Z"
        }
      ]
    },
    {
      "id": 5,
      "name": "Voltra Station Pakuwon Mall",
      "location": "Pakuwon Mall",
      "area": "Babatan, Wiyung",
      "address": "Jl. Puncak Indah Lontar No.2, Babatan, Wiyung, Surabaya",
      "latitude": -7.257472,
      "longitude": 112.752088,
      "description": "Voltra Station Pakuwon Mall provides Normal, Fast, and Ultra EV charging services.",
      "status": "AVAILABLE",
      "imageUrl": null,
      "createdAt": "2026-09-06T10:50:57.311Z",
      "updatedAt": "2026-09-06T10:50:57.311Z",
      "slots": [
        {
          "id": 41,
          "stationId": 5,
          "slotCode": "ST05-N01",
          "chargerType": "NORMAL",
          "powerKw": 22,
          "pricePerKwh": "2500",
          "status": "AVAILABLE",
          "createdAt": "2026-09-06T10:50:57.311Z",
          "updatedAt": "2026-09-06T10:50:57.311Z"
        },
        {
          "id": 42,
          "stationId": 5,
          "slotCode": "ST05-N02",
          "chargerType": "NORMAL",
          "powerKw": 22,
          "pricePerKwh": "2500",
          "status": "AVAILABLE",
          "createdAt": "2026-09-06T10:50:57.311Z",
          "updatedAt": "2026-09-06T10:50:57.311Z"
        },
        {
          "id": 43,
          "stationId": 5,
          "slotCode": "ST05-N03",
          "chargerType": "NORMAL",
          "powerKw": 22,
          "pricePerKwh": "2500",
          "status": "AVAILABLE",
          "createdAt": "2026-09-06T10:50:57.311Z",
          "updatedAt": "2026-09-06T10:50:57.311Z"
        },
        {
          "id": 44,
          "stationId": 5,
          "slotCode": "ST05-N04",
          "chargerType": "NORMAL",
          "powerKw": 22,
          "pricePerKwh": "2500",
          "status": "AVAILABLE",
          "createdAt": "2026-09-06T10:50:57.311Z",
          "updatedAt": "2026-09-06T10:50:57.311Z"
        },
        {
          "id": 45,
          "stationId": 5,
          "slotCode": "ST05-N05",
          "chargerType": "NORMAL",
          "powerKw": 22,
          "pricePerKwh": "2500",
          "status": "AVAILABLE",
          "createdAt": "2026-09-06T10:50:57.311Z",
          "updatedAt": "2026-09-06T10:50:57.311Z"
        },
        {
          "id": 46,
          "stationId": 5,
          "slotCode": "ST05-N06",
          "chargerType": "NORMAL",
          "powerKw": 22,
          "pricePerKwh": "2500",
          "status": "OCCUPIED",
          "createdAt": "2026-09-06T10:50:57.311Z",
          "updatedAt": "2026-09-06T10:50:57.311Z"
        },
        {
          "id": 47,
          "stationId": 5,
          "slotCode": "ST05-N07",
          "chargerType": "NORMAL",
          "powerKw": 22,
          "pricePerKwh": "2500",
          "status": "OCCUPIED",
          "createdAt": "2026-09-06T10:50:57.311Z",
          "updatedAt": "2026-09-06T10:50:57.311Z"
        },
        {
          "id": 48,
          "stationId": 5,
          "slotCode": "ST05-N08",
          "chargerType": "NORMAL",
          "powerKw": 22,
          "pricePerKwh": "2500",
          "status": "OCCUPIED",
          "createdAt": "2026-09-06T10:50:57.311Z",
          "updatedAt": "2026-09-06T10:50:57.311Z"
        },
        {
          "id": 49,
          "stationId": 5,
          "slotCode": "ST05-F01",
          "chargerType": "FAST",
          "powerKw": 60,
          "pricePerKwh": "3750",
          "status": "AVAILABLE",
          "createdAt": "2026-09-06T10:50:57.311Z",
          "updatedAt": "2026-09-06T10:50:57.311Z"
        },
        {
          "id": 50,
          "stationId": 5,
          "slotCode": "ST05-F02",
          "chargerType": "FAST",
          "powerKw": 60,
          "pricePerKwh": "3750",
          "status": "AVAILABLE",
          "createdAt": "2026-09-06T10:50:57.311Z",
          "updatedAt": "2026-09-06T10:50:57.311Z"
        },
        {
          "id": 51,
          "stationId": 5,
          "slotCode": "ST05-F03",
          "chargerType": "FAST",
          "powerKw": 60,
          "pricePerKwh": "3750",
          "status": "AVAILABLE",
          "createdAt": "2026-09-06T10:50:57.311Z",
          "updatedAt": "2026-09-06T10:50:57.311Z"
        },
        {
          "id": 52,
          "stationId": 5,
          "slotCode": "ST05-F04",
          "chargerType": "FAST",
          "powerKw": 60,
          "pricePerKwh": "3750",
          "status": "OCCUPIED",
          "createdAt": "2026-09-06T10:50:57.311Z",
          "updatedAt": "2026-09-06T10:50:57.311Z"
        },
        {
          "id": 53,
          "stationId": 5,
          "slotCode": "ST05-F05",
          "chargerType": "FAST",
          "powerKw": 60,
          "pricePerKwh": "3750",
          "status": "OCCUPIED",
          "createdAt": "2026-09-06T10:50:57.311Z",
          "updatedAt": "2026-09-06T10:50:57.311Z"
        },
        {
          "id": 54,
          "stationId": 5,
          "slotCode": "ST05-F06",
          "chargerType": "FAST",
          "powerKw": 60,
          "pricePerKwh": "3750",
          "status": "OCCUPIED",
          "createdAt": "2026-09-06T10:50:57.311Z",
          "updatedAt": "2026-09-06T10:50:57.311Z"
        },
        {
          "id": 55,
          "stationId": 5,
          "slotCode": "ST05-U01",
          "chargerType": "ULTRA",
          "powerKw": 150,
          "pricePerKwh": "5500",
          "status": "AVAILABLE",
          "createdAt": "2026-09-06T10:50:57.311Z",
          "updatedAt": "2026-09-06T10:50:57.311Z"
        },
        {
          "id": 56,
          "stationId": 5,
          "slotCode": "ST05-U02",
          "chargerType": "ULTRA",
          "powerKw": 150,
          "pricePerKwh": "5500",
          "status": "OCCUPIED",
          "createdAt": "2026-09-06T10:50:57.311Z",
          "updatedAt": "2026-09-06T10:50:57.311Z"
        }
      ]
    },
    {
      "id": 4,
      "name": "Voltra Station Surabaya Plaza",
      "location": "Surabaya Plaza",
      "area": "Embong Kaliasin, Genteng",
      "address": "Jl. Pemuda No.31-37, Embong Kaliasin, Genteng, Surabaya",
      "latitude": -7.257472,
      "longitude": 112.752088,
      "description": "Voltra Station Surabaya Plaza provides Normal, Fast, and Ultra EV charging services.",
      "status": "BUSY",
      "imageUrl": null,
      "createdAt": "2026-09-06T10:50:57.129Z",
      "updatedAt": "2026-09-06T10:50:57.129Z",
      "slots": [
        {
          "id": 31,
          "stationId": 4,
          "slotCode": "ST04-N01",
          "chargerType": "NORMAL",
          "powerKw": 22,
          "pricePerKwh": "2500",
          "status": "OCCUPIED",
          "createdAt": "2026-09-06T10:50:57.129Z",
          "updatedAt": "2026-09-06T10:50:57.129Z"
        },
        {
          "id": 32,
          "stationId": 4,
          "slotCode": "ST04-N02",
          "chargerType": "NORMAL",
          "powerKw": 22,
          "pricePerKwh": "2500",
          "status": "OCCUPIED",
          "createdAt": "2026-09-06T10:50:57.129Z",
          "updatedAt": "2026-09-06T10:50:57.129Z"
        },
        {
          "id": 33,
          "stationId": 4,
          "slotCode": "ST04-N03",
          "chargerType": "NORMAL",
          "powerKw": 22,
          "pricePerKwh": "2500",
          "status": "OCCUPIED",
          "createdAt": "2026-09-06T10:50:57.129Z",
          "updatedAt": "2026-09-06T10:50:57.129Z"
        },
        {
          "id": 34,
          "stationId": 4,
          "slotCode": "ST04-N04",
          "chargerType": "NORMAL",
          "powerKw": 22,
          "pricePerKwh": "2500",
          "status": "OCCUPIED",
          "createdAt": "2026-09-06T10:50:57.129Z",
          "updatedAt": "2026-09-06T10:50:57.129Z"
        },
        {
          "id": 35,
          "stationId": 4,
          "slotCode": "ST04-N05",
          "chargerType": "NORMAL",
          "powerKw": 22,
          "pricePerKwh": "2500",
          "status": "OCCUPIED",
          "createdAt": "2026-09-06T10:50:57.129Z",
          "updatedAt": "2026-09-06T10:50:57.129Z"
        },
        {
          "id": 36,
          "stationId": 4,
          "slotCode": "ST04-F01",
          "chargerType": "FAST",
          "powerKw": 60,
          "pricePerKwh": "3750",
          "status": "OCCUPIED",
          "createdAt": "2026-09-06T10:50:57.129Z",
          "updatedAt": "2026-09-06T10:50:57.129Z"
        },
        {
          "id": 37,
          "stationId": 4,
          "slotCode": "ST04-F02",
          "chargerType": "FAST",
          "powerKw": 60,
          "pricePerKwh": "3750",
          "status": "OCCUPIED",
          "createdAt": "2026-09-06T10:50:57.129Z",
          "updatedAt": "2026-09-06T10:50:57.129Z"
        },
        {
          "id": 38,
          "stationId": 4,
          "slotCode": "ST04-F03",
          "chargerType": "FAST",
          "powerKw": 60,
          "pricePerKwh": "3750",
          "status": "OCCUPIED",
          "createdAt": "2026-09-06T10:50:57.129Z",
          "updatedAt": "2026-09-06T10:50:57.129Z"
        },
        {
          "id": 39,
          "stationId": 4,
          "slotCode": "ST04-U01",
          "chargerType": "ULTRA",
          "powerKw": 150,
          "pricePerKwh": "5500",
          "status": "OCCUPIED",
          "createdAt": "2026-09-06T10:50:57.129Z",
          "updatedAt": "2026-09-06T10:50:57.129Z"
        },
        {
          "id": 40,
          "stationId": 4,
          "slotCode": "ST04-U02",
          "chargerType": "ULTRA",
          "powerKw": 150,
          "pricePerKwh": "5500",
          "status": "OCCUPIED",
          "createdAt": "2026-09-06T10:50:57.129Z",
          "updatedAt": "2026-09-06T10:50:57.129Z"
        }
      ]
    },
    {
      "id": 3,
      "name": "Voltra Station BG Junction",
      "location": "BG Junction Mall",
      "area": "Bubutan",
      "address": "Jl. Bubutan No.1-7, Bubutan, Surabaya",
      "latitude": -7.257472,
      "longitude": 112.752088,
      "description": "Voltra Station BG Junction provides Normal, Fast, and Ultra EV charging services.",
      "status": "BUSY",
      "imageUrl": null,
      "createdAt": "2026-09-06T10:50:56.952Z",
      "updatedAt": "2026-09-06T10:50:56.952Z",
      "slots": [
        {
          "id": 22,
          "stationId": 3,
          "slotCode": "ST03-N01",
          "chargerType": "NORMAL",
          "powerKw": 22,
          "pricePerKwh": "2500",
          "status": "AVAILABLE",
          "createdAt": "2026-09-06T10:50:56.952Z",
          "updatedAt": "2026-09-06T10:50:56.952Z"
        },
        {
          "id": 23,
          "stationId": 3,
          "slotCode": "ST03-N02",
          "chargerType": "NORMAL",
          "powerKw": 22,
          "pricePerKwh": "2500",
          "status": "OCCUPIED",
          "createdAt": "2026-09-06T10:50:56.952Z",
          "updatedAt": "2026-09-06T10:50:56.952Z"
        },
        {
          "id": 24,
          "stationId": 3,
          "slotCode": "ST03-N03",
          "chargerType": "NORMAL",
          "powerKw": 22,
          "pricePerKwh": "2500",
          "status": "OCCUPIED",
          "createdAt": "2026-09-06T10:50:56.952Z",
          "updatedAt": "2026-09-06T10:50:56.952Z"
        },
        {
          "id": 25,
          "stationId": 3,
          "slotCode": "ST03-N04",
          "chargerType": "NORMAL",
          "powerKw": 22,
          "pricePerKwh": "2500",
          "status": "OCCUPIED",
          "createdAt": "2026-09-06T10:50:56.952Z",
          "updatedAt": "2026-09-06T10:50:56.952Z"
        },
        {
          "id": 26,
          "stationId": 3,
          "slotCode": "ST03-N05",
          "chargerType": "NORMAL",
          "powerKw": 22,
          "pricePerKwh": "2500",
          "status": "OCCUPIED",
          "createdAt": "2026-09-06T10:50:56.952Z",
          "updatedAt": "2026-09-06T10:50:56.952Z"
        },
        {
          "id": 27,
          "stationId": 3,
          "slotCode": "ST03-F01",
          "chargerType": "FAST",
          "powerKw": 60,
          "pricePerKwh": "3750",
          "status": "AVAILABLE",
          "createdAt": "2026-09-06T10:50:56.952Z",
          "updatedAt": "2026-09-06T10:50:56.952Z"
        },
        {
          "id": 28,
          "stationId": 3,
          "slotCode": "ST03-F02",
          "chargerType": "FAST",
          "powerKw": 60,
          "pricePerKwh": "3750",
          "status": "OCCUPIED",
          "createdAt": "2026-09-06T10:50:56.952Z",
          "updatedAt": "2026-09-06T10:50:56.952Z"
        },
        {
          "id": 29,
          "stationId": 3,
          "slotCode": "ST03-F03",
          "chargerType": "FAST",
          "powerKw": 60,
          "pricePerKwh": "3750",
          "status": "OCCUPIED",
          "createdAt": "2026-09-06T10:50:56.952Z",
          "updatedAt": "2026-09-06T10:50:56.952Z"
        },
        {
          "id": 30,
          "stationId": 3,
          "slotCode": "ST03-U01",
          "chargerType": "ULTRA",
          "powerKw": 150,
          "pricePerKwh": "5500",
          "status": "OCCUPIED",
          "createdAt": "2026-09-06T10:50:56.952Z",
          "updatedAt": "2026-09-06T10:50:56.952Z"
        }
      ]
    },
    {
      "id": 2,
      "name": "Voltra Station Grand City Mall",
      "location": "Grand City Mall",
      "area": "Ketabang, Genteng",
      "address": "Jl. Gubeng Pojok No.1, Ketabang, Genteng, Surabaya",
      "latitude": -7.257472,
      "longitude": 112.752088,
      "description": "Voltra Station Grand City Mall provides Normal, Fast, and Ultra EV charging services.",
      "status": "AVAILABLE",
      "imageUrl": null,
      "createdAt": "2026-09-06T10:50:56.764Z",
      "updatedAt": "2026-09-06T10:50:56.764Z",
      "slots": [
        {
          "id": 13,
          "stationId": 2,
          "slotCode": "ST02-N01",
          "chargerType": "NORMAL",
          "powerKw": 22,
          "pricePerKwh": "2500",
          "status": "AVAILABLE",
          "createdAt": "2026-09-06T10:50:56.764Z",
          "updatedAt": "2026-09-06T10:50:56.764Z"
        },
        {
          "id": 14,
          "stationId": 2,
          "slotCode": "ST02-N02",
          "chargerType": "NORMAL",
          "powerKw": 22,
          "pricePerKwh": "2500",
          "status": "AVAILABLE",
          "createdAt": "2026-09-06T10:50:56.764Z",
          "updatedAt": "2026-09-06T10:50:56.764Z"
        },
        {
          "id": 15,
          "stationId": 2,
          "slotCode": "ST02-N03",
          "chargerType": "NORMAL",
          "powerKw": 22,
          "pricePerKwh": "2500",
          "status": "OCCUPIED",
          "createdAt": "2026-09-06T10:50:56.764Z",
          "updatedAt": "2026-09-06T10:50:56.764Z"
        },
        {
          "id": 16,
          "stationId": 2,
          "slotCode": "ST02-N04",
          "chargerType": "NORMAL",
          "powerKw": 22,
          "pricePerKwh": "2500",
          "status": "OCCUPIED",
          "createdAt": "2026-09-06T10:50:56.764Z",
          "updatedAt": "2026-09-06T10:50:56.764Z"
        },
        {
          "id": 17,
          "stationId": 2,
          "slotCode": "ST02-F01",
          "chargerType": "FAST",
          "powerKw": 60,
          "pricePerKwh": "3750",
          "status": "AVAILABLE",
          "createdAt": "2026-09-06T10:50:56.764Z",
          "updatedAt": "2026-09-06T10:50:56.764Z"
        },
        {
          "id": 18,
          "stationId": 2,
          "slotCode": "ST02-F02",
          "chargerType": "FAST",
          "powerKw": 60,
          "pricePerKwh": "3750",
          "status": "AVAILABLE",
          "createdAt": "2026-09-06T10:50:56.764Z",
          "updatedAt": "2026-09-06T10:50:56.764Z"
        },
        {
          "id": 19,
          "stationId": 2,
          "slotCode": "ST02-F03",
          "chargerType": "FAST",
          "powerKw": 60,
          "pricePerKwh": "3750",
          "status": "OCCUPIED",
          "createdAt": "2026-09-06T10:50:56.764Z",
          "updatedAt": "2026-09-06T10:50:56.764Z"
        },
        {
          "id": 20,
          "stationId": 2,
          "slotCode": "ST02-U01",
          "chargerType": "ULTRA",
          "powerKw": 150,
          "pricePerKwh": "5500",
          "status": "AVAILABLE",
          "createdAt": "2026-09-06T10:50:56.764Z",
          "updatedAt": "2026-09-06T10:50:56.764Z"
        },
        {
          "id": 21,
          "stationId": 2,
          "slotCode": "ST02-U02",
          "chargerType": "ULTRA",
          "powerKw": 150,
          "pricePerKwh": "5500",
          "status": "OCCUPIED",
          "createdAt": "2026-09-06T10:50:56.764Z",
          "updatedAt": "2026-09-06T10:50:56.764Z"
        }
      ]
    },
    {
      "id": 1,
      "name": "Voltra Station Tunjungan Plaza",
      "location": "Tunjungan Plaza 6",
      "area": "Kedungdoro, Tegalsari",
      "address": "Jl. Basuki Rahmat No.8-12, Kedungdoro, Tegalsari, Surabaya",
      "latitude": -7.257472,
      "longitude": 112.752088,
      "description": "Voltra Station Tunjungan Plaza provides Normal, Fast, and Ultra EV charging services.",
      "status": "AVAILABLE",
      "imageUrl": null,
      "createdAt": "2026-09-06T10:50:56.579Z",
      "updatedAt": "2026-09-06T10:50:56.579Z",
      "slots": [
        {
          "id": 1,
          "stationId": 1,
          "slotCode": "ST01-N01",
          "chargerType": "NORMAL",
          "powerKw": 22,
          "pricePerKwh": "2500",
          "status": "AVAILABLE",
          "createdAt": "2026-09-06T10:50:56.579Z",
          "updatedAt": "2026-09-06T10:50:56.579Z"
        },
        {
          "id": 2,
          "stationId": 1,
          "slotCode": "ST01-N02",
          "chargerType": "NORMAL",
          "powerKw": 22,
          "pricePerKwh": "2500",
          "status": "AVAILABLE",
          "createdAt": "2026-09-06T10:50:56.579Z",
          "updatedAt": "2026-09-06T10:50:56.579Z"
        },
        {
          "id": 3,
          "stationId": 1,
          "slotCode": "ST01-N03",
          "chargerType": "NORMAL",
          "powerKw": 22,
          "pricePerKwh": "2500",
          "status": "AVAILABLE",
          "createdAt": "2026-09-06T10:50:56.579Z",
          "updatedAt": "2026-09-06T10:50:56.579Z"
        },
        {
          "id": 4,
          "stationId": 1,
          "slotCode": "ST01-N04",
          "chargerType": "NORMAL",
          "powerKw": 22,
          "pricePerKwh": "2500",
          "status": "OCCUPIED",
          "createdAt": "2026-09-06T10:50:56.579Z",
          "updatedAt": "2026-09-06T10:50:56.579Z"
        },
        {
          "id": 5,
          "stationId": 1,
          "slotCode": "ST01-N05",
          "chargerType": "NORMAL",
          "powerKw": 22,
          "pricePerKwh": "2500",
          "status": "OCCUPIED",
          "createdAt": "2026-09-06T10:50:56.579Z",
          "updatedAt": "2026-09-06T10:50:56.579Z"
        },
        {
          "id": 6,
          "stationId": 1,
          "slotCode": "ST01-N06",
          "chargerType": "NORMAL",
          "powerKw": 22,
          "pricePerKwh": "2500",
          "status": "OCCUPIED",
          "createdAt": "2026-09-06T10:50:56.579Z",
          "updatedAt": "2026-09-06T10:50:56.579Z"
        },
        {
          "id": 7,
          "stationId": 1,
          "slotCode": "ST01-F01",
          "chargerType": "FAST",
          "powerKw": 60,
          "pricePerKwh": "3750",
          "status": "AVAILABLE",
          "createdAt": "2026-09-06T10:50:56.579Z",
          "updatedAt": "2026-09-06T10:50:56.579Z"
        },
        {
          "id": 8,
          "stationId": 1,
          "slotCode": "ST01-F02",
          "chargerType": "FAST",
          "powerKw": 60,
          "pricePerKwh": "3750",
          "status": "AVAILABLE",
          "createdAt": "2026-09-06T10:50:56.579Z",
          "updatedAt": "2026-09-06T10:50:56.579Z"
        },
        {
          "id": 9,
          "stationId": 1,
          "slotCode": "ST01-F03",
          "chargerType": "FAST",
          "powerKw": 60,
          "pricePerKwh": "3750",
          "status": "OCCUPIED",
          "createdAt": "2026-09-06T10:50:56.579Z",
          "updatedAt": "2026-09-06T10:50:56.579Z"
        },
        {
          "id": 10,
          "stationId": 1,
          "slotCode": "ST01-F04",
          "chargerType": "FAST",
          "powerKw": 60,
          "pricePerKwh": "3750",
          "status": "OCCUPIED",
          "createdAt": "2026-09-06T10:50:56.579Z",
          "updatedAt": "2026-09-06T10:50:56.579Z"
        },
        {
          "id": 11,
          "stationId": 1,
          "slotCode": "ST01-U01",
          "chargerType": "ULTRA",
          "powerKw": 150,
          "pricePerKwh": "5500",
          "status": "AVAILABLE",
          "createdAt": "2026-09-06T10:50:56.579Z",
          "updatedAt": "2026-09-06T10:50:56.579Z"
        },
        {
          "id": 12,
          "stationId": 1,
          "slotCode": "ST01-U02",
          "chargerType": "ULTRA",
          "powerKw": 150,
          "pricePerKwh": "5500",
          "status": "OCCUPIED",
          "createdAt": "2026-09-06T10:50:56.579Z",
          "updatedAt": "2026-09-06T10:50:56.579Z"
        }
      ]
    }
  ]
}
```

### GET /station/:id

Retrieves a specific station by its ID.

**Request**

```bash
curl -X 'GET' \ 'https://voltra-backend.vercel.app/api/stations/1' \
    -H 'Authorization: Bearer <JWT_ACCESS_TOKEN>' 
```

**Response**

```json
{
  "message": "Charging station ID 1 retrieved successfully",
  "data": {
    "id": 1,
    "name": "Voltra Station Tunjungan Plaza",
    "location": "Tunjungan Plaza 6",
    "area": "Kedungdoro, Tegalsari",
    "address": "Jl. Basuki Rahmat No.8-12, Kedungdoro, Tegalsari, Surabaya",
    "latitude": -7.257472,
    "longitude": 112.752088,
    "description": "Voltra Station Tunjungan Plaza provides Normal, Fast, and Ultra EV charging services.",
    "status": "AVAILABLE",
    "imageUrl": null,
    "createdAt": "2026-09-06T10:50:56.579Z",
    "updatedAt": "2026-09-06T10:50:56.579Z",
    "slots": [
      {
        "id": 1,
        "stationId": 1,
        "slotCode": "ST01-N01",
        "chargerType": "NORMAL",
        "powerKw": 22,
        "pricePerKwh": "2500",
        "status": "AVAILABLE",
        "createdAt": "2026-09-06T10:50:56.579Z",
        "updatedAt": "2026-09-06T10:50:56.579Z"
      },
      {
        "id": 2,
        "stationId": 1,
        "slotCode": "ST01-N02",
        "chargerType": "NORMAL",
        "powerKw": 22,
        "pricePerKwh": "2500",
        "status": "AVAILABLE",
        "createdAt": "2026-09-06T10:50:56.579Z",
        "updatedAt": "2026-09-06T10:50:56.579Z"
      },
      {
        "id": 3,
        "stationId": 1,
        "slotCode": "ST01-N03",
        "chargerType": "NORMAL",
        "powerKw": 22,
        "pricePerKwh": "2500",
        "status": "AVAILABLE",
        "createdAt": "2026-09-06T10:50:56.579Z",
        "updatedAt": "2026-09-06T10:50:56.579Z"
      },
      {
        "id": 4,
        "stationId": 1,
        "slotCode": "ST01-N04",
        "chargerType": "NORMAL",
        "powerKw": 22,
        "pricePerKwh": "2500",
        "status": "OCCUPIED",
        "createdAt": "2026-09-06T10:50:56.579Z",
        "updatedAt": "2026-09-06T10:50:56.579Z"
      },
      {
        "id": 5,
        "stationId": 1,
        "slotCode": "ST01-N05",
        "chargerType": "NORMAL",
        "powerKw": 22,
        "pricePerKwh": "2500",
        "status": "OCCUPIED",
        "createdAt": "2026-09-06T10:50:56.579Z",
        "updatedAt": "2026-09-06T10:50:56.579Z"
      },
      {
        "id": 6,
        "stationId": 1,
        "slotCode": "ST01-N06",
        "chargerType": "NORMAL",
        "powerKw": 22,
        "pricePerKwh": "2500",
        "status": "OCCUPIED",
        "createdAt": "2026-09-06T10:50:56.579Z",
        "updatedAt": "2026-09-06T10:50:56.579Z"
      },
      {
        "id": 7,
        "stationId": 1,
        "slotCode": "ST01-F01",
        "chargerType": "FAST",
        "powerKw": 60,
        "pricePerKwh": "3750",
        "status": "AVAILABLE",
        "createdAt": "2026-09-06T10:50:56.579Z",
        "updatedAt": "2026-09-06T10:50:56.579Z"
      },
      {
        "id": 8,
        "stationId": 1,
        "slotCode": "ST01-F02",
        "chargerType": "FAST",
        "powerKw": 60,
        "pricePerKwh": "3750",
        "status": "AVAILABLE",
        "createdAt": "2026-09-06T10:50:56.579Z",
        "updatedAt": "2026-09-06T10:50:56.579Z"
      },
      {
        "id": 9,
        "stationId": 1,
        "slotCode": "ST01-F03",
        "chargerType": "FAST",
        "powerKw": 60,
        "pricePerKwh": "3750",
        "status": "OCCUPIED",
        "createdAt": "2026-09-06T10:50:56.579Z",
        "updatedAt": "2026-09-06T10:50:56.579Z"
      },
      {
        "id": 10,
        "stationId": 1,
        "slotCode": "ST01-F04",
        "chargerType": "FAST",
        "powerKw": 60,
        "pricePerKwh": "3750",
        "status": "OCCUPIED",
        "createdAt": "2026-09-06T10:50:56.579Z",
        "updatedAt": "2026-09-06T10:50:56.579Z"
      },
      {
        "id": 11,
        "stationId": 1,
        "slotCode": "ST01-U01",
        "chargerType": "ULTRA",
        "powerKw": 150,
        "pricePerKwh": "5500",
        "status": "AVAILABLE",
        "createdAt": "2026-09-06T10:50:56.579Z",
        "updatedAt": "2026-09-06T10:50:56.579Z"
      },
      {
        "id": 12,
        "stationId": 1,
        "slotCode": "ST01-U02",
        "chargerType": "ULTRA",
        "powerKw": 150,
        "pricePerKwh": "5500",
        "status": "OCCUPIED",
        "createdAt": "2026-09-06T10:50:56.579Z",
        "updatedAt": "2026-09-06T10:50:56.579Z"
      }
    ]
  }
}
```

### POST /station

Creates a new station.

**Request**

```bash
curl -X 'POST' \ 'https://voltra-backend.vercel.app/api/stations' \
  -H 'Authorization: Bearer <JWT_ACCESS_TOKEN>' \
  -H 'Content-Type: application/json' \
  -d '{
    "name": "Station Surabaya Timur",
    "location": "Surabaya",
    "area": "Mulyorejo",
    "address": "Jl. Raya Mulyosari No. 25, Surabaya",
    "latitude": -7.2756,
    "longitude": 112.7958
}'
```

**Response**

```json
{
  "message": "New charging station created successfully",
  "data": {
    "id": 22,
    "name": "Station Surabaya Timur",
    "location": "Surabaya",
    "area": "Mulyorejo",
    "address": "Jl. Raya Mulyosari No. 25, Surabaya",
    "latitude": -7.2756,
    "longitude": 112.7958,
    "description": null,
    "status": "AVAILABLE",
    "imageUrl": null,
    "createdAt": "2026-09-07T11:03:14.459Z",
    "updatedAt": "2026-09-07T11:03:14.459Z"
  }
}
```

### PATCH /station/:id

Updates an existing station.

**Request**

```bash
curl -X 'PATCH' \ 'https://voltra-backend.vercel.app/api/stations/22' \
  -H 'Authorization: Bearer <JWT_ACCESS_TOKEN>' \
  -H 'Content-Type: application/json' \
  -d '{
"status": "MAINTENANCE"
}'
```

**Response**

```json
{
  "message": "Charging station ID 22 was updated successfully",
  "data": {
    "id": 22,
    "name": "Station Surabaya Timur",
    "location": "Surabaya",
    "area": "Mulyorejo",
    "address": "Jl. Raya Mulyosari No. 25, Surabaya",
    "latitude": -7.2756,
    "longitude": 112.7958,
    "description": null,
    "status": "MAINTENANCE",
    "imageUrl": null,
    "createdAt": "2026-09-07T11:03:14.459Z",
    "updatedAt": "2026-09-07T11:04:56.094Z"
  }
}
```

### DELETE /station/:id

Deletes a station by its ID.

**Request**

```bash
curl -X 'DELETE' \ 'https://voltra-backend.vercel.app/api/stations/22' \
    -H 'Authorization: Bearer <JWT_ACCESS_TOKEN>' \
```

**Response**

```json
{
  "message": "Charging station ID 22 was deleted successfully",
  "data": {
    "id": 22,
    "name": "Station Surabaya Timur",
    "location": "Surabaya",
    "area": "Mulyorejo",
    "address": "Jl. Raya Mulyosari No. 25, Surabaya",
    "latitude": -7.2756,
    "longitude": 112.7958,
    "description": null,
    "status": "MAINTENANCE",
    "imageUrl": null,
    "createdAt": "2026-09-07T11:03:14.459Z",
    "updatedAt": "2026-09-07T11:04:56.094Z"
  }
}
```

---

## Charging Slots

### GET /charging-slots

Retrieves all charging slots.

**Request**

```bash
curl -X 'GET' \ 'https://voltra-backend.vercel.app/api/charging-slots' \
    -H 'Authorization: Bearer <JWT_ACCESS_TOKEN>' \
```

**Response**

```json
{
  "message": "All charging slots retrieved successfully",
  "data": [
    {
      "id": 1,
      "stationId": 1,
      "slotCode": "ST01-N01",
      "chargerType": "NORMAL",
      "powerKw": 22,
      "pricePerKwh": 2500,
      "status": "AVAILABLE",
      "createdAt": "2026-09-06T10:50:56.579Z",
      "updatedAt": "2026-09-06T10:50:56.579Z"
    },
    {
      "id": 2,
      "stationId": 1,
      "slotCode": "ST01-N02",
      "chargerType": "NORMAL",
      "powerKw": 22,
      "pricePerKwh": 2500,
      "status": "AVAILABLE",
      "createdAt": "2026-09-06T10:50:56.579Z",
      "updatedAt": "2026-09-06T10:50:56.579Z"
    },
    {
      "id": 3,
      "stationId": 1,
      "slotCode": "ST01-N03",
      "chargerType": "NORMAL",
      "powerKw": 22,
      "pricePerKwh": 2500,
      "status": "AVAILABLE",
      "createdAt": "2026-09-06T10:50:56.579Z",
      "updatedAt": "2026-09-06T10:50:56.579Z"
    },
    {
      "id": 4,
      "stationId": 1,
      "slotCode": "ST01-N04",
      "chargerType": "NORMAL",
      "powerKw": 22,
      "pricePerKwh": 2500,
      "status": "OCCUPIED",
      "createdAt": "2026-09-06T10:50:56.579Z",
      "updatedAt": "2026-09-06T10:50:56.579Z"
    },
    {
      "id": 5,
      "stationId": 1,
      "slotCode": "ST01-N05",
      "chargerType": "NORMAL",
      "powerKw": 22,
      "pricePerKwh": 2500,
      "status": "OCCUPIED",
      "createdAt": "2026-09-06T10:50:56.579Z",
      "updatedAt": "2026-09-06T10:50:56.579Z"
    },
    {
      "id": 6,
      "stationId": 1,
      "slotCode": "ST01-N06",
      "chargerType": "NORMAL",
      "powerKw": 22,
      "pricePerKwh": 2500,
      "status": "OCCUPIED",
      "createdAt": "2026-09-06T10:50:56.579Z",
      "updatedAt": "2026-09-06T10:50:56.579Z"
    },
    {
      "id": 7,
      "stationId": 1,
      "slotCode": "ST01-F01",
      "chargerType": "FAST",
      "powerKw": 60,
      "pricePerKwh": 3750,
      "status": "AVAILABLE",
      "createdAt": "2026-09-06T10:50:56.579Z",
      "updatedAt": "2026-09-06T10:50:56.579Z"
    },
    {
      "id": 8,
      "stationId": 1,
      "slotCode": "ST01-F02",
      "chargerType": "FAST",
      "powerKw": 60,
      "pricePerKwh": 3750,
      "status": "AVAILABLE",
      "createdAt": "2026-09-06T10:50:56.579Z",
      "updatedAt": "2026-09-06T10:50:56.579Z"
    },
    {
      "id": 9,
      "stationId": 1,
      "slotCode": "ST01-F03",
      "chargerType": "FAST",
      "powerKw": 60,
      "pricePerKwh": 3750,
      "status": "OCCUPIED",
      "createdAt": "2026-09-06T10:50:56.579Z",
      "updatedAt": "2026-09-06T10:50:56.579Z"
    },
    {
      "id": 10,
      "stationId": 1,
      "slotCode": "ST01-F04",
      "chargerType": "FAST",
      "powerKw": 60,
      "pricePerKwh": 3750,
      "status": "OCCUPIED",
      "createdAt": "2026-09-06T10:50:56.579Z",
      "updatedAt": "2026-09-06T10:50:56.579Z"
    },
    {
      "id": 11,
      "stationId": 1,
      "slotCode": "ST01-U01",
      "chargerType": "ULTRA",
      "powerKw": 150,
      "pricePerKwh": 5500,
      "status": "AVAILABLE",
      "createdAt": "2026-09-06T10:50:56.579Z",
      "updatedAt": "2026-09-06T10:50:56.579Z"
    },
    {
      "id": 12,
      "stationId": 1,
      "slotCode": "ST01-U02",
      "chargerType": "ULTRA",
      "powerKw": 150,
      "pricePerKwh": 5500,
      "status": "OCCUPIED",
      "createdAt": "2026-09-06T10:50:56.579Z",
      "updatedAt": "2026-09-06T10:50:56.579Z"
    },
    {
      "id": 13,
      "stationId": 2,
      "slotCode": "ST02-N01",
      "chargerType": "NORMAL",
      "powerKw": 22,
      "pricePerKwh": 2500,
      "status": "AVAILABLE",
      "createdAt": "2026-09-06T10:50:56.764Z",
      "updatedAt": "2026-09-06T10:50:56.764Z"
    },
    {
      "id": 14,
      "stationId": 2,
      "slotCode": "ST02-N02",
      "chargerType": "NORMAL",
      "powerKw": 22,
      "pricePerKwh": 2500,
      "status": "AVAILABLE",
      "createdAt": "2026-09-06T10:50:56.764Z",
      "updatedAt": "2026-09-06T10:50:56.764Z"
    },
    {
      "id": 15,
      "stationId": 2,
      "slotCode": "ST02-N03",
      "chargerType": "NORMAL",
      "powerKw": 22,
      "pricePerKwh": 2500,
      "status": "OCCUPIED",
      "createdAt": "2026-09-06T10:50:56.764Z",
      "updatedAt": "2026-09-06T10:50:56.764Z"
    },
    {
      "id": 16,
      "stationId": 2,
      "slotCode": "ST02-N04",
      "chargerType": "NORMAL",
      "powerKw": 22,
      "pricePerKwh": 2500,
      "status": "OCCUPIED",
      "createdAt": "2026-09-06T10:50:56.764Z",
      "updatedAt": "2026-09-06T10:50:56.764Z"
    },
    {
      "id": 17,
      "stationId": 2,
      "slotCode": "ST02-F01",
      "chargerType": "FAST",
      "powerKw": 60,
      "pricePerKwh": 3750,
      "status": "AVAILABLE",
      "createdAt": "2026-09-06T10:50:56.764Z",
      "updatedAt": "2026-09-06T10:50:56.764Z"
    },
    {
      "id": 18,
      "stationId": 2,
      "slotCode": "ST02-F02",
      "chargerType": "FAST",
      "powerKw": 60,
      "pricePerKwh": 3750,
      "status": "AVAILABLE",
      "createdAt": "2026-09-06T10:50:56.764Z",
      "updatedAt": "2026-09-06T10:50:56.764Z"
    },
    {
      "id": 19,
      "stationId": 2,
      "slotCode": "ST02-F03",
      "chargerType": "FAST",
      "powerKw": 60,
      "pricePerKwh": 3750,
      "status": "OCCUPIED",
      "createdAt": "2026-09-06T10:50:56.764Z",
      "updatedAt": "2026-09-06T10:50:56.764Z"
    },
    {
      "id": 20,
      "stationId": 2,
      "slotCode": "ST02-U01",
      "chargerType": "ULTRA",
      "powerKw": 150,
      "pricePerKwh": 5500,
      "status": "AVAILABLE",
      "createdAt": "2026-09-06T10:50:56.764Z",
      "updatedAt": "2026-09-06T10:50:56.764Z"
    },
    {
      "id": 21,
      "stationId": 2,
      "slotCode": "ST02-U02",
      "chargerType": "ULTRA",
      "powerKw": 150,
      "pricePerKwh": 5500,
      "status": "OCCUPIED",
      "createdAt": "2026-09-06T10:50:56.764Z",
      "updatedAt": "2026-09-06T10:50:56.764Z"
    },
    {
      "id": 22,
      "stationId": 3,
      "slotCode": "ST03-N01",
      "chargerType": "NORMAL",
      "powerKw": 22,
      "pricePerKwh": 2500,
      "status": "AVAILABLE",
      "createdAt": "2026-09-06T10:50:56.952Z",
      "updatedAt": "2026-09-06T10:50:56.952Z"
    },
    {
      "id": 23,
      "stationId": 3,
      "slotCode": "ST03-N02",
      "chargerType": "NORMAL",
      "powerKw": 22,
      "pricePerKwh": 2500,
      "status": "OCCUPIED",
      "createdAt": "2026-09-06T10:50:56.952Z",
      "updatedAt": "2026-09-06T10:50:56.952Z"
    },
    {
      "id": 24,
      "stationId": 3,
      "slotCode": "ST03-N03",
      "chargerType": "NORMAL",
      "powerKw": 22,
      "pricePerKwh": 2500,
      "status": "OCCUPIED",
      "createdAt": "2026-09-06T10:50:56.952Z",
      "updatedAt": "2026-09-06T10:50:56.952Z"
    },
    {
      "id": 25,
      "stationId": 3,
      "slotCode": "ST03-N04",
      "chargerType": "NORMAL",
      "powerKw": 22,
      "pricePerKwh": 2500,
      "status": "OCCUPIED",
      "createdAt": "2026-09-06T10:50:56.952Z",
      "updatedAt": "2026-09-06T10:50:56.952Z"
    },
    {
      "id": 26,
      "stationId": 3,
      "slotCode": "ST03-N05",
      "chargerType": "NORMAL",
      "powerKw": 22,
      "pricePerKwh": 2500,
      "status": "OCCUPIED",
      "createdAt": "2026-09-06T10:50:56.952Z",
      "updatedAt": "2026-09-06T10:50:56.952Z"
    },
    {
      "id": 27,
      "stationId": 3,
      "slotCode": "ST03-F01",
      "chargerType": "FAST",
      "powerKw": 60,
      "pricePerKwh": 3750,
      "status": "AVAILABLE",
      "createdAt": "2026-09-06T10:50:56.952Z",
      "updatedAt": "2026-09-06T10:50:56.952Z"
    },
    {
      "id": 28,
      "stationId": 3,
      "slotCode": "ST03-F02",
      "chargerType": "FAST",
      "powerKw": 60,
      "pricePerKwh": 3750,
      "status": "OCCUPIED",
      "createdAt": "2026-09-06T10:50:56.952Z",
      "updatedAt": "2026-09-06T10:50:56.952Z"
    },
    {
      "id": 29,
      "stationId": 3,
      "slotCode": "ST03-F03",
      "chargerType": "FAST",
      "powerKw": 60,
      "pricePerKwh": 3750,
      "status": "OCCUPIED",
      "createdAt": "2026-09-06T10:50:56.952Z",
      "updatedAt": "2026-09-06T10:50:56.952Z"
    },
    {
      "id": 30,
      "stationId": 3,
      "slotCode": "ST03-U01",
      "chargerType": "ULTRA",
      "powerKw": 150,
      "pricePerKwh": 5500,
      "status": "OCCUPIED",
      "createdAt": "2026-09-06T10:50:56.952Z",
      "updatedAt": "2026-09-06T10:50:56.952Z"
    },
    {
      "id": 31,
      "stationId": 4,
      "slotCode": "ST04-N01",
      "chargerType": "NORMAL",
      "powerKw": 22,
      "pricePerKwh": 2500,
      "status": "OCCUPIED",
      "createdAt": "2026-09-06T10:50:57.129Z",
      "updatedAt": "2026-09-06T10:50:57.129Z"
    },
    {
      "id": 32,
      "stationId": 4,
      "slotCode": "ST04-N02",
      "chargerType": "NORMAL",
      "powerKw": 22,
      "pricePerKwh": 2500,
      "status": "OCCUPIED",
      "createdAt": "2026-09-06T10:50:57.129Z",
      "updatedAt": "2026-09-06T10:50:57.129Z"
    },
    {
      "id": 33,
      "stationId": 4,
      "slotCode": "ST04-N03",
      "chargerType": "NORMAL",
      "powerKw": 22,
      "pricePerKwh": 2500,
      "status": "OCCUPIED",
      "createdAt": "2026-09-06T10:50:57.129Z",
      "updatedAt": "2026-09-06T10:50:57.129Z"
    },
    {
      "id": 34,
      "stationId": 4,
      "slotCode": "ST04-N04",
      "chargerType": "NORMAL",
      "powerKw": 22,
      "pricePerKwh": 2500,
      "status": "OCCUPIED",
      "createdAt": "2026-09-06T10:50:57.129Z",
      "updatedAt": "2026-09-06T10:50:57.129Z"
    },
    {
      "id": 35,
      "stationId": 4,
      "slotCode": "ST04-N05",
      "chargerType": "NORMAL",
      "powerKw": 22,
      "pricePerKwh": 2500,
      "status": "OCCUPIED",
      "createdAt": "2026-09-06T10:50:57.129Z",
      "updatedAt": "2026-09-06T10:50:57.129Z"
    },
    {
      "id": 36,
      "stationId": 4,
      "slotCode": "ST04-F01",
      "chargerType": "FAST",
      "powerKw": 60,
      "pricePerKwh": 3750,
      "status": "OCCUPIED",
      "createdAt": "2026-09-06T10:50:57.129Z",
      "updatedAt": "2026-09-06T10:50:57.129Z"
    },
    {
      "id": 37,
      "stationId": 4,
      "slotCode": "ST04-F02",
      "chargerType": "FAST",
      "powerKw": 60,
      "pricePerKwh": 3750,
      "status": "OCCUPIED",
      "createdAt": "2026-09-06T10:50:57.129Z",
      "updatedAt": "2026-09-06T10:50:57.129Z"
    },
    {
      "id": 38,
      "stationId": 4,
      "slotCode": "ST04-F03",
      "chargerType": "FAST",
      "powerKw": 60,
      "pricePerKwh": 3750,
      "status": "OCCUPIED",
      "createdAt": "2026-09-06T10:50:57.129Z",
      "updatedAt": "2026-09-06T10:50:57.129Z"
    },
    {
      "id": 39,
      "stationId": 4,
      "slotCode": "ST04-U01",
      "chargerType": "ULTRA",
      "powerKw": 150,
      "pricePerKwh": 5500,
      "status": "OCCUPIED",
      "createdAt": "2026-09-06T10:50:57.129Z",
      "updatedAt": "2026-09-06T10:50:57.129Z"
    },
    {
      "id": 40,
      "stationId": 4,
      "slotCode": "ST04-U02",
      "chargerType": "ULTRA",
      "powerKw": 150,
      "pricePerKwh": 5500,
      "status": "OCCUPIED",
      "createdAt": "2026-09-06T10:50:57.129Z",
      "updatedAt": "2026-09-06T10:50:57.129Z"
    },
    {
      "id": 41,
      "stationId": 5,
      "slotCode": "ST05-N01",
      "chargerType": "NORMAL",
      "powerKw": 22,
      "pricePerKwh": 2500,
      "status": "AVAILABLE",
      "createdAt": "2026-09-06T10:50:57.311Z",
      "updatedAt": "2026-09-06T10:50:57.311Z"
    },
    {
      "id": 42,
      "stationId": 5,
      "slotCode": "ST05-N02",
      "chargerType": "NORMAL",
      "powerKw": 22,
      "pricePerKwh": 2500,
      "status": "AVAILABLE",
      "createdAt": "2026-09-06T10:50:57.311Z",
      "updatedAt": "2026-09-06T10:50:57.311Z"
    },
    {
      "id": 43,
      "stationId": 5,
      "slotCode": "ST05-N03",
      "chargerType": "NORMAL",
      "powerKw": 22,
      "pricePerKwh": 2500,
      "status": "AVAILABLE",
      "createdAt": "2026-09-06T10:50:57.311Z",
      "updatedAt": "2026-09-06T10:50:57.311Z"
    },
    {
      "id": 44,
      "stationId": 5,
      "slotCode": "ST05-N04",
      "chargerType": "NORMAL",
      "powerKw": 22,
      "pricePerKwh": 2500,
      "status": "AVAILABLE",
      "createdAt": "2026-09-06T10:50:57.311Z",
      "updatedAt": "2026-09-06T10:50:57.311Z"
    },
    {
      "id": 45,
      "stationId": 5,
      "slotCode": "ST05-N05",
      "chargerType": "NORMAL",
      "powerKw": 22,
      "pricePerKwh": 2500,
      "status": "AVAILABLE",
      "createdAt": "2026-09-06T10:50:57.311Z",
      "updatedAt": "2026-09-06T10:50:57.311Z"
    },
    {
      "id": 46,
      "stationId": 5,
      "slotCode": "ST05-N06",
      "chargerType": "NORMAL",
      "powerKw": 22,
      "pricePerKwh": 2500,
      "status": "OCCUPIED",
      "createdAt": "2026-09-06T10:50:57.311Z",
      "updatedAt": "2026-09-06T10:50:57.311Z"
    },
    {
      "id": 47,
      "stationId": 5,
      "slotCode": "ST05-N07",
      "chargerType": "NORMAL",
      "powerKw": 22,
      "pricePerKwh": 2500,
      "status": "OCCUPIED",
      "createdAt": "2026-09-06T10:50:57.311Z",
      "updatedAt": "2026-09-06T10:50:57.311Z"
    },
    {
      "id": 48,
      "stationId": 5,
      "slotCode": "ST05-N08",
      "chargerType": "NORMAL",
      "powerKw": 22,
      "pricePerKwh": 2500,
      "status": "OCCUPIED",
      "createdAt": "2026-09-06T10:50:57.311Z",
      "updatedAt": "2026-09-06T10:50:57.311Z"
    },
    {
      "id": 49,
      "stationId": 5,
      "slotCode": "ST05-F01",
      "chargerType": "FAST",
      "powerKw": 60,
      "pricePerKwh": 3750,
      "status": "AVAILABLE",
      "createdAt": "2026-09-06T10:50:57.311Z",
      "updatedAt": "2026-09-06T10:50:57.311Z"
    },
    {
      "id": 50,
      "stationId": 5,
      "slotCode": "ST05-F02",
      "chargerType": "FAST",
      "powerKw": 60,
      "pricePerKwh": 3750,
      "status": "AVAILABLE",
      "createdAt": "2026-09-06T10:50:57.311Z",
      "updatedAt": "2026-09-06T10:50:57.311Z"
    },
    {
      "id": 51,
      "stationId": 5,
      "slotCode": "ST05-F03",
      "chargerType": "FAST",
      "powerKw": 60,
      "pricePerKwh": 3750,
      "status": "AVAILABLE",
      "createdAt": "2026-09-06T10:50:57.311Z",
      "updatedAt": "2026-09-06T10:50:57.311Z"
    },
    {
      "id": 52,
      "stationId": 5,
      "slotCode": "ST05-F04",
      "chargerType": "FAST",
      "powerKw": 60,
      "pricePerKwh": 3750,
      "status": "OCCUPIED",
      "createdAt": "2026-09-06T10:50:57.311Z",
      "updatedAt": "2026-09-06T10:50:57.311Z"
    },
    {
      "id": 53,
      "stationId": 5,
      "slotCode": "ST05-F05",
      "chargerType": "FAST",
      "powerKw": 60,
      "pricePerKwh": 3750,
      "status": "OCCUPIED",
      "createdAt": "2026-09-06T10:50:57.311Z",
      "updatedAt": "2026-09-06T10:50:57.311Z"
    },
    {
      "id": 54,
      "stationId": 5,
      "slotCode": "ST05-F06",
      "chargerType": "FAST",
      "powerKw": 60,
      "pricePerKwh": 3750,
      "status": "OCCUPIED",
      "createdAt": "2026-09-06T10:50:57.311Z",
      "updatedAt": "2026-09-06T10:50:57.311Z"
    },
    {
      "id": 55,
      "stationId": 5,
      "slotCode": "ST05-U01",
      "chargerType": "ULTRA",
      "powerKw": 150,
      "pricePerKwh": 5500,
      "status": "AVAILABLE",
      "createdAt": "2026-09-06T10:50:57.311Z",
      "updatedAt": "2026-09-06T10:50:57.311Z"
    },
    {
      "id": 56,
      "stationId": 5,
      "slotCode": "ST05-U02",
      "chargerType": "ULTRA",
      "powerKw": 150,
      "pricePerKwh": 5500,
      "status": "OCCUPIED",
      "createdAt": "2026-09-06T10:50:57.311Z",
      "updatedAt": "2026-09-06T10:50:57.311Z"
    },
    {
      "id": 57,
      "stationId": 6,
      "slotCode": "ST06-N01",
      "chargerType": "NORMAL",
      "powerKw": 22,
      "pricePerKwh": 2500,
      "status": "OCCUPIED",
      "createdAt": "2026-09-06T10:50:57.490Z",
      "updatedAt": "2026-09-06T10:50:57.490Z"
    },
    {
      "id": 58,
      "stationId": 6,
      "slotCode": "ST06-N02",
      "chargerType": "NORMAL",
      "powerKw": 22,
      "pricePerKwh": 2500,
      "status": "OCCUPIED",
      "createdAt": "2026-09-06T10:50:57.490Z",
      "updatedAt": "2026-09-06T10:50:57.490Z"
    },
    {
      "id": 59,
      "stationId": 6,
      "slotCode": "ST06-N03",
      "chargerType": "NORMAL",
      "powerKw": 22,
      "pricePerKwh": 2500,
      "status": "OCCUPIED",
      "createdAt": "2026-09-06T10:50:57.490Z",
      "updatedAt": "2026-09-06T10:50:57.490Z"
    },
    {
      "id": 60,
      "stationId": 6,
      "slotCode": "ST06-N04",
      "chargerType": "NORMAL",
      "powerKw": 22,
      "pricePerKwh": 2500,
      "status": "OCCUPIED",
      "createdAt": "2026-09-06T10:50:57.490Z",
      "updatedAt": "2026-09-06T10:50:57.490Z"
    },
    {
      "id": 61,
      "stationId": 6,
      "slotCode": "ST06-N05",
      "chargerType": "NORMAL",
      "powerKw": 22,
      "pricePerKwh": 2500,
      "status": "OCCUPIED",
      "createdAt": "2026-09-06T10:50:57.490Z",
      "updatedAt": "2026-09-06T10:50:57.490Z"
    },
    {
      "id": 62,
      "stationId": 6,
      "slotCode": "ST06-N06",
      "chargerType": "NORMAL",
      "powerKw": 22,
      "pricePerKwh": 2500,
      "status": "OCCUPIED",
      "createdAt": "2026-09-06T10:50:57.490Z",
      "updatedAt": "2026-09-06T10:50:57.490Z"
    },
    {
      "id": 63,
      "stationId": 6,
      "slotCode": "ST06-F01",
      "chargerType": "FAST",
      "powerKw": 60,
      "pricePerKwh": 3750,
      "status": "OCCUPIED",
      "createdAt": "2026-09-06T10:50:57.490Z",
      "updatedAt": "2026-09-06T10:50:57.490Z"
    },
    {
      "id": 64,
      "stationId": 6,
      "slotCode": "ST06-F02",
      "chargerType": "FAST",
      "powerKw": 60,
      "pricePerKwh": 3750,
      "status": "OCCUPIED",
      "createdAt": "2026-09-06T10:50:57.490Z",
      "updatedAt": "2026-09-06T10:50:57.490Z"
    },
    {
      "id": 65,
      "stationId": 6,
      "slotCode": "ST06-F03",
      "chargerType": "FAST",
      "powerKw": 60,
      "pricePerKwh": 3750,
      "status": "OCCUPIED",
      "createdAt": "2026-09-06T10:50:57.490Z",
      "updatedAt": "2026-09-06T10:50:57.490Z"
    },
    {
      "id": 66,
      "stationId": 6,
      "slotCode": "ST06-F04",
      "chargerType": "FAST",
      "powerKw": 60,
      "pricePerKwh": 3750,
      "status": "OCCUPIED",
      "createdAt": "2026-09-06T10:50:57.490Z",
      "updatedAt": "2026-09-06T10:50:57.490Z"
    },
    {
      "id": 67,
      "stationId": 6,
      "slotCode": "ST06-U01",
      "chargerType": "ULTRA",
      "powerKw": 150,
      "pricePerKwh": 5500,
      "status": "OCCUPIED",
      "createdAt": "2026-09-06T10:50:57.490Z",
      "updatedAt": "2026-09-06T10:50:57.490Z"
    },
    {
      "id": 68,
      "stationId": 6,
      "slotCode": "ST06-U02",
      "chargerType": "ULTRA",
      "powerKw": 150,
      "pricePerKwh": 5500,
      "status": "OCCUPIED",
      "createdAt": "2026-09-06T10:50:57.490Z",
      "updatedAt": "2026-09-06T10:50:57.490Z"
    },
    {
      "id": 69,
      "stationId": 7,
      "slotCode": "ST07-N01",
      "chargerType": "NORMAL",
      "powerKw": 22,
      "pricePerKwh": 2500,
      "status": "AVAILABLE",
      "createdAt": "2026-09-06T10:50:57.731Z",
      "updatedAt": "2026-09-06T10:50:57.731Z"
    },
    {
      "id": 70,
      "stationId": 7,
      "slotCode": "ST07-N02",
      "chargerType": "NORMAL",
      "powerKw": 22,
      "pricePerKwh": 2500,
      "status": "AVAILABLE",
      "createdAt": "2026-09-06T10:50:57.731Z",
      "updatedAt": "2026-09-06T10:50:57.731Z"
    },
    {
      "id": 71,
      "stationId": 7,
      "slotCode": "ST07-N03",
      "chargerType": "NORMAL",
      "powerKw": 22,
      "pricePerKwh": 2500,
      "status": "OCCUPIED",
      "createdAt": "2026-09-06T10:50:57.731Z",
      "updatedAt": "2026-09-06T10:50:57.731Z"
    },
    {
      "id": 72,
      "stationId": 7,
      "slotCode": "ST07-N04",
      "chargerType": "NORMAL",
      "powerKw": 22,
      "pricePerKwh": 2500,
      "status": "OCCUPIED",
      "createdAt": "2026-09-06T10:50:57.731Z",
      "updatedAt": "2026-09-06T10:50:57.731Z"
    },
    {
      "id": 73,
      "stationId": 7,
      "slotCode": "ST07-N05",
      "chargerType": "NORMAL",
      "powerKw": 22,
      "pricePerKwh": 2500,
      "status": "OCCUPIED",
      "createdAt": "2026-09-06T10:50:57.731Z",
      "updatedAt": "2026-09-06T10:50:57.731Z"
    },
    {
      "id": 74,
      "stationId": 7,
      "slotCode": "ST07-F01",
      "chargerType": "FAST",
      "powerKw": 60,
      "pricePerKwh": 3750,
      "status": "AVAILABLE",
      "createdAt": "2026-09-06T10:50:57.731Z",
      "updatedAt": "2026-09-06T10:50:57.731Z"
    },
    {
      "id": 75,
      "stationId": 7,
      "slotCode": "ST07-F02",
      "chargerType": "FAST",
      "powerKw": 60,
      "pricePerKwh": 3750,
      "status": "AVAILABLE",
      "createdAt": "2026-09-06T10:50:57.731Z",
      "updatedAt": "2026-09-06T10:50:57.731Z"
    },
    {
      "id": 76,
      "stationId": 7,
      "slotCode": "ST07-F03",
      "chargerType": "FAST",
      "powerKw": 60,
      "pricePerKwh": 3750,
      "status": "OCCUPIED",
      "createdAt": "2026-09-06T10:50:57.731Z",
      "updatedAt": "2026-09-06T10:50:57.731Z"
    },
    {
      "id": 77,
      "stationId": 7,
      "slotCode": "ST07-U01",
      "chargerType": "ULTRA",
      "powerKw": 150,
      "pricePerKwh": 5500,
      "status": "AVAILABLE",
      "createdAt": "2026-09-06T10:50:57.731Z",
      "updatedAt": "2026-09-06T10:50:57.731Z"
    },
    {
      "id": 78,
      "stationId": 8,
      "slotCode": "ST08-N01",
      "chargerType": "NORMAL",
      "powerKw": 22,
      "pricePerKwh": 2500,
      "status": "AVAILABLE",
      "createdAt": "2026-09-06T10:50:57.907Z",
      "updatedAt": "2026-09-06T10:50:57.907Z"
    },
    {
      "id": 79,
      "stationId": 8,
      "slotCode": "ST08-N02",
      "chargerType": "NORMAL",
      "powerKw": 22,
      "pricePerKwh": 2500,
      "status": "AVAILABLE",
      "createdAt": "2026-09-06T10:50:57.907Z",
      "updatedAt": "2026-09-06T10:50:57.907Z"
    },
    {
      "id": 80,
      "stationId": 8,
      "slotCode": "ST08-N03",
      "chargerType": "NORMAL",
      "powerKw": 22,
      "pricePerKwh": 2500,
      "status": "OCCUPIED",
      "createdAt": "2026-09-06T10:50:57.907Z",
      "updatedAt": "2026-09-06T10:50:57.907Z"
    },
    {
      "id": 81,
      "stationId": 8,
      "slotCode": "ST08-N04",
      "chargerType": "NORMAL",
      "powerKw": 22,
      "pricePerKwh": 2500,
      "status": "OCCUPIED",
      "createdAt": "2026-09-06T10:50:57.907Z",
      "updatedAt": "2026-09-06T10:50:57.907Z"
    },
    {
      "id": 82,
      "stationId": 8,
      "slotCode": "ST08-N05",
      "chargerType": "NORMAL",
      "powerKw": 22,
      "pricePerKwh": 2500,
      "status": "OCCUPIED",
      "createdAt": "2026-09-06T10:50:57.907Z",
      "updatedAt": "2026-09-06T10:50:57.907Z"
    },
    {
      "id": 83,
      "stationId": 8,
      "slotCode": "ST08-N06",
      "chargerType": "NORMAL",
      "powerKw": 22,
      "pricePerKwh": 2500,
      "status": "OCCUPIED",
      "createdAt": "2026-09-06T10:50:57.907Z",
      "updatedAt": "2026-09-06T10:50:57.907Z"
    },
    {
      "id": 84,
      "stationId": 8,
      "slotCode": "ST08-F01",
      "chargerType": "FAST",
      "powerKw": 60,
      "pricePerKwh": 3750,
      "status": "AVAILABLE",
      "createdAt": "2026-09-06T10:50:57.907Z",
      "updatedAt": "2026-09-06T10:50:57.907Z"
    },
    {
      "id": 85,
      "stationId": 8,
      "slotCode": "ST08-F02",
      "chargerType": "FAST",
      "powerKw": 60,
      "pricePerKwh": 3750,
      "status": "OCCUPIED",
      "createdAt": "2026-09-06T10:50:57.907Z",
      "updatedAt": "2026-09-06T10:50:57.907Z"
    },
    {
      "id": 86,
      "stationId": 8,
      "slotCode": "ST08-F03",
      "chargerType": "FAST",
      "powerKw": 60,
      "pricePerKwh": 3750,
      "status": "OCCUPIED",
      "createdAt": "2026-09-06T10:50:57.907Z",
      "updatedAt": "2026-09-06T10:50:57.907Z"
    },
    {
      "id": 87,
      "stationId": 8,
      "slotCode": "ST08-F04",
      "chargerType": "FAST",
      "powerKw": 60,
      "pricePerKwh": 3750,
      "status": "OCCUPIED",
      "createdAt": "2026-09-06T10:50:57.907Z",
      "updatedAt": "2026-09-06T10:50:57.907Z"
    },
    {
      "id": 88,
      "stationId": 8,
      "slotCode": "ST08-U01",
      "chargerType": "ULTRA",
      "powerKw": 150,
      "pricePerKwh": 5500,
      "status": "OCCUPIED",
      "createdAt": "2026-09-06T10:50:57.907Z",
      "updatedAt": "2026-09-06T10:50:57.907Z"
    },
    {
      "id": 89,
      "stationId": 8,
      "slotCode": "ST08-U02",
      "chargerType": "ULTRA",
      "powerKw": 150,
      "pricePerKwh": 5500,
      "status": "OCCUPIED",
      "createdAt": "2026-09-06T10:50:57.907Z",
      "updatedAt": "2026-09-06T10:50:57.907Z"
    },
    {
      "id": 90,
      "stationId": 9,
      "slotCode": "ST09-N01",
      "chargerType": "NORMAL",
      "powerKw": 22,
      "pricePerKwh": 2500,
      "status": "AVAILABLE",
      "createdAt": "2026-09-06T10:50:58.082Z",
      "updatedAt": "2026-09-06T10:50:58.082Z"
    },
    {
      "id": 91,
      "stationId": 9,
      "slotCode": "ST09-N02",
      "chargerType": "NORMAL",
      "powerKw": 22,
      "pricePerKwh": 2500,
      "status": "OCCUPIED",
      "createdAt": "2026-09-06T10:50:58.082Z",
      "updatedAt": "2026-09-06T10:50:58.082Z"
    },
    {
      "id": 92,
      "stationId": 9,
      "slotCode": "ST09-N03",
      "chargerType": "NORMAL",
      "powerKw": 22,
      "pricePerKwh": 2500,
      "status": "OCCUPIED",
      "createdAt": "2026-09-06T10:50:58.082Z",
      "updatedAt": "2026-09-06T10:50:58.082Z"
    },
    {
      "id": 93,
      "stationId": 9,
      "slotCode": "ST09-N04",
      "chargerType": "NORMAL",
      "powerKw": 22,
      "pricePerKwh": 2500,
      "status": "OCCUPIED",
      "createdAt": "2026-09-06T10:50:58.082Z",
      "updatedAt": "2026-09-06T10:50:58.082Z"
    },
    {
      "id": 94,
      "stationId": 9,
      "slotCode": "ST09-F01",
      "chargerType": "FAST",
      "powerKw": 60,
      "pricePerKwh": 3750,
      "status": "AVAILABLE",
      "createdAt": "2026-09-06T10:50:58.082Z",
      "updatedAt": "2026-09-06T10:50:58.082Z"
    },
    {
      "id": 95,
      "stationId": 9,
      "slotCode": "ST09-F02",
      "chargerType": "FAST",
      "powerKw": 60,
      "pricePerKwh": 3750,
      "status": "OCCUPIED",
      "createdAt": "2026-09-06T10:50:58.082Z",
      "updatedAt": "2026-09-06T10:50:58.082Z"
    },
    {
      "id": 96,
      "stationId": 9,
      "slotCode": "ST09-U01",
      "chargerType": "ULTRA",
      "powerKw": 150,
      "pricePerKwh": 5500,
      "status": "OCCUPIED",
      "createdAt": "2026-09-06T10:50:58.082Z",
      "updatedAt": "2026-09-06T10:50:58.082Z"
    },
    {
      "id": 97,
      "stationId": 10,
      "slotCode": "ST10-N01",
      "chargerType": "NORMAL",
      "powerKw": 22,
      "pricePerKwh": 2500,
      "status": "AVAILABLE",
      "createdAt": "2026-09-06T10:50:58.277Z",
      "updatedAt": "2026-09-06T10:50:58.277Z"
    },
    {
      "id": 98,
      "stationId": 10,
      "slotCode": "ST10-N02",
      "chargerType": "NORMAL",
      "powerKw": 22,
      "pricePerKwh": 2500,
      "status": "AVAILABLE",
      "createdAt": "2026-09-06T10:50:58.277Z",
      "updatedAt": "2026-09-06T10:50:58.277Z"
    },
    {
      "id": 99,
      "stationId": 10,
      "slotCode": "ST10-N03",
      "chargerType": "NORMAL",
      "powerKw": 22,
      "pricePerKwh": 2500,
      "status": "OCCUPIED",
      "createdAt": "2026-09-06T10:50:58.277Z",
      "updatedAt": "2026-09-06T10:50:58.277Z"
    },
    {
      "id": 100,
      "stationId": 10,
      "slotCode": "ST10-N04",
      "chargerType": "NORMAL",
      "powerKw": 22,
      "pricePerKwh": 2500,
      "status": "OCCUPIED",
      "createdAt": "2026-09-06T10:50:58.277Z",
      "updatedAt": "2026-09-06T10:50:58.277Z"
    },
    {
      "id": 101,
      "stationId": 10,
      "slotCode": "ST10-N05",
      "chargerType": "NORMAL",
      "powerKw": 22,
      "pricePerKwh": 2500,
      "status": "OCCUPIED",
      "createdAt": "2026-09-06T10:50:58.277Z",
      "updatedAt": "2026-09-06T10:50:58.277Z"
    },
    {
      "id": 102,
      "stationId": 10,
      "slotCode": "ST10-N06",
      "chargerType": "NORMAL",
      "powerKw": 22,
      "pricePerKwh": 2500,
      "status": "OCCUPIED",
      "createdAt": "2026-09-06T10:50:58.277Z",
      "updatedAt": "2026-09-06T10:50:58.277Z"
    },
    {
      "id": 103,
      "stationId": 10,
      "slotCode": "ST10-F01",
      "chargerType": "FAST",
      "powerKw": 60,
      "pricePerKwh": 3750,
      "status": "AVAILABLE",
      "createdAt": "2026-09-06T10:50:58.277Z",
      "updatedAt": "2026-09-06T10:50:58.277Z"
    },
    {
      "id": 104,
      "stationId": 10,
      "slotCode": "ST10-F02",
      "chargerType": "FAST",
      "powerKw": 60,
      "pricePerKwh": 3750,
      "status": "OCCUPIED",
      "createdAt": "2026-09-06T10:50:58.277Z",
      "updatedAt": "2026-09-06T10:50:58.277Z"
    },
    {
      "id": 105,
      "stationId": 10,
      "slotCode": "ST10-F03",
      "chargerType": "FAST",
      "powerKw": 60,
      "pricePerKwh": 3750,
      "status": "OCCUPIED",
      "createdAt": "2026-09-06T10:50:58.277Z",
      "updatedAt": "2026-09-06T10:50:58.277Z"
    },
    {
      "id": 106,
      "stationId": 10,
      "slotCode": "ST10-F04",
      "chargerType": "FAST",
      "powerKw": 60,
      "pricePerKwh": 3750,
      "status": "OCCUPIED",
      "createdAt": "2026-09-06T10:50:58.277Z",
      "updatedAt": "2026-09-06T10:50:58.277Z"
    },
    {
      "id": 107,
      "stationId": 10,
      "slotCode": "ST10-U01",
      "chargerType": "ULTRA",
      "powerKw": 150,
      "pricePerKwh": 5500,
      "status": "OCCUPIED",
      "createdAt": "2026-09-06T10:50:58.277Z",
      "updatedAt": "2026-09-06T10:50:58.277Z"
    },
    {
      "id": 108,
      "stationId": 10,
      "slotCode": "ST10-U02",
      "chargerType": "ULTRA",
      "powerKw": 150,
      "pricePerKwh": 5500,
      "status": "OCCUPIED",
      "createdAt": "2026-09-06T10:50:58.277Z",
      "updatedAt": "2026-09-06T10:50:58.277Z"
    },
    {
      "id": 109,
      "stationId": 11,
      "slotCode": "ST11-N01",
      "chargerType": "NORMAL",
      "powerKw": 22,
      "pricePerKwh": 2500,
      "status": "AVAILABLE",
      "createdAt": "2026-09-06T10:50:58.465Z",
      "updatedAt": "2026-09-06T10:50:58.465Z"
    },
    {
      "id": 110,
      "stationId": 11,
      "slotCode": "ST11-N02",
      "chargerType": "NORMAL",
      "powerKw": 22,
      "pricePerKwh": 2500,
      "status": "AVAILABLE",
      "createdAt": "2026-09-06T10:50:58.465Z",
      "updatedAt": "2026-09-06T10:50:58.465Z"
    },
    {
      "id": 111,
      "stationId": 11,
      "slotCode": "ST11-N03",
      "chargerType": "NORMAL",
      "powerKw": 22,
      "pricePerKwh": 2500,
      "status": "AVAILABLE",
      "createdAt": "2026-09-06T10:50:58.465Z",
      "updatedAt": "2026-09-06T10:50:58.465Z"
    },
    {
      "id": 112,
      "stationId": 11,
      "slotCode": "ST11-N04",
      "chargerType": "NORMAL",
      "powerKw": 22,
      "pricePerKwh": 2500,
      "status": "AVAILABLE",
      "createdAt": "2026-09-06T10:50:58.465Z",
      "updatedAt": "2026-09-06T10:50:58.465Z"
    },
    {
      "id": 113,
      "stationId": 11,
      "slotCode": "ST11-N05",
      "chargerType": "NORMAL",
      "powerKw": 22,
      "pricePerKwh": 2500,
      "status": "OCCUPIED",
      "createdAt": "2026-09-06T10:50:58.465Z",
      "updatedAt": "2026-09-06T10:50:58.465Z"
    },
    {
      "id": 114,
      "stationId": 11,
      "slotCode": "ST11-N06",
      "chargerType": "NORMAL",
      "powerKw": 22,
      "pricePerKwh": 2500,
      "status": "OCCUPIED",
      "createdAt": "2026-09-06T10:50:58.465Z",
      "updatedAt": "2026-09-06T10:50:58.465Z"
    },
    {
      "id": 115,
      "stationId": 11,
      "slotCode": "ST11-F01",
      "chargerType": "FAST",
      "powerKw": 60,
      "pricePerKwh": 3750,
      "status": "AVAILABLE",
      "createdAt": "2026-09-06T10:50:58.465Z",
      "updatedAt": "2026-09-06T10:50:58.465Z"
    },
    {
      "id": 116,
      "stationId": 11,
      "slotCode": "ST11-F02",
      "chargerType": "FAST",
      "powerKw": 60,
      "pricePerKwh": 3750,
      "status": "AVAILABLE",
      "createdAt": "2026-09-06T10:50:58.465Z",
      "updatedAt": "2026-09-06T10:50:58.465Z"
    },
    {
      "id": 117,
      "stationId": 11,
      "slotCode": "ST11-F03",
      "chargerType": "FAST",
      "powerKw": 60,
      "pricePerKwh": 3750,
      "status": "OCCUPIED",
      "createdAt": "2026-09-06T10:50:58.465Z",
      "updatedAt": "2026-09-06T10:50:58.465Z"
    },
    {
      "id": 118,
      "stationId": 11,
      "slotCode": "ST11-F04",
      "chargerType": "FAST",
      "powerKw": 60,
      "pricePerKwh": 3750,
      "status": "OCCUPIED",
      "createdAt": "2026-09-06T10:50:58.465Z",
      "updatedAt": "2026-09-06T10:50:58.465Z"
    },
    {
      "id": 119,
      "stationId": 11,
      "slotCode": "ST11-U01",
      "chargerType": "ULTRA",
      "powerKw": 150,
      "pricePerKwh": 5500,
      "status": "AVAILABLE",
      "createdAt": "2026-09-06T10:50:58.465Z",
      "updatedAt": "2026-09-06T10:50:58.465Z"
    },
    {
      "id": 120,
      "stationId": 11,
      "slotCode": "ST11-U02",
      "chargerType": "ULTRA",
      "powerKw": 150,
      "pricePerKwh": 5500,
      "status": "AVAILABLE",
      "createdAt": "2026-09-06T10:50:58.465Z",
      "updatedAt": "2026-09-06T10:50:58.465Z"
    },
    {
      "id": 121,
      "stationId": 12,
      "slotCode": "ST12-N01",
      "chargerType": "NORMAL",
      "powerKw": 22,
      "pricePerKwh": 2500,
      "status": "AVAILABLE",
      "createdAt": "2026-09-06T10:50:58.642Z",
      "updatedAt": "2026-09-06T10:50:58.642Z"
    },
    {
      "id": 122,
      "stationId": 12,
      "slotCode": "ST12-N02",
      "chargerType": "NORMAL",
      "powerKw": 22,
      "pricePerKwh": 2500,
      "status": "AVAILABLE",
      "createdAt": "2026-09-06T10:50:58.642Z",
      "updatedAt": "2026-09-06T10:50:58.642Z"
    },
    {
      "id": 123,
      "stationId": 12,
      "slotCode": "ST12-N03",
      "chargerType": "NORMAL",
      "powerKw": 22,
      "pricePerKwh": 2500,
      "status": "AVAILABLE",
      "createdAt": "2026-09-06T10:50:58.642Z",
      "updatedAt": "2026-09-06T10:50:58.642Z"
    },
    {
      "id": 124,
      "stationId": 12,
      "slotCode": "ST12-N04",
      "chargerType": "NORMAL",
      "powerKw": 22,
      "pricePerKwh": 2500,
      "status": "OCCUPIED",
      "createdAt": "2026-09-06T10:50:58.642Z",
      "updatedAt": "2026-09-06T10:50:58.642Z"
    },
    {
      "id": 125,
      "stationId": 12,
      "slotCode": "ST12-N05",
      "chargerType": "NORMAL",
      "powerKw": 22,
      "pricePerKwh": 2500,
      "status": "OCCUPIED",
      "createdAt": "2026-09-06T10:50:58.642Z",
      "updatedAt": "2026-09-06T10:50:58.642Z"
    },
    {
      "id": 126,
      "stationId": 12,
      "slotCode": "ST12-F01",
      "chargerType": "FAST",
      "powerKw": 60,
      "pricePerKwh": 3750,
      "status": "AVAILABLE",
      "createdAt": "2026-09-06T10:50:58.642Z",
      "updatedAt": "2026-09-06T10:50:58.642Z"
    },
    {
      "id": 127,
      "stationId": 12,
      "slotCode": "ST12-F02",
      "chargerType": "FAST",
      "powerKw": 60,
      "pricePerKwh": 3750,
      "status": "AVAILABLE",
      "createdAt": "2026-09-06T10:50:58.642Z",
      "updatedAt": "2026-09-06T10:50:58.642Z"
    },
    {
      "id": 128,
      "stationId": 12,
      "slotCode": "ST12-F03",
      "chargerType": "FAST",
      "powerKw": 60,
      "pricePerKwh": 3750,
      "status": "OCCUPIED",
      "createdAt": "2026-09-06T10:50:58.642Z",
      "updatedAt": "2026-09-06T10:50:58.642Z"
    },
    {
      "id": 129,
      "stationId": 12,
      "slotCode": "ST12-U01",
      "chargerType": "ULTRA",
      "powerKw": 150,
      "pricePerKwh": 5500,
      "status": "AVAILABLE",
      "createdAt": "2026-09-06T10:50:58.642Z",
      "updatedAt": "2026-09-06T10:50:58.642Z"
    },
    {
      "id": 130,
      "stationId": 13,
      "slotCode": "ST13-N01",
      "chargerType": "NORMAL",
      "powerKw": 22,
      "pricePerKwh": 2500,
      "status": "AVAILABLE",
      "createdAt": "2026-09-06T10:50:58.838Z",
      "updatedAt": "2026-09-06T10:50:58.838Z"
    },
    {
      "id": 131,
      "stationId": 13,
      "slotCode": "ST13-N02",
      "chargerType": "NORMAL",
      "powerKw": 22,
      "pricePerKwh": 2500,
      "status": "OCCUPIED",
      "createdAt": "2026-09-06T10:50:58.838Z",
      "updatedAt": "2026-09-06T10:50:58.838Z"
    },
    {
      "id": 132,
      "stationId": 13,
      "slotCode": "ST13-N03",
      "chargerType": "NORMAL",
      "powerKw": 22,
      "pricePerKwh": 2500,
      "status": "OCCUPIED",
      "createdAt": "2026-09-06T10:50:58.838Z",
      "updatedAt": "2026-09-06T10:50:58.838Z"
    },
    {
      "id": 133,
      "stationId": 13,
      "slotCode": "ST13-N04",
      "chargerType": "NORMAL",
      "powerKw": 22,
      "pricePerKwh": 2500,
      "status": "OCCUPIED",
      "createdAt": "2026-09-06T10:50:58.838Z",
      "updatedAt": "2026-09-06T10:50:58.838Z"
    },
    {
      "id": 134,
      "stationId": 13,
      "slotCode": "ST13-N05",
      "chargerType": "NORMAL",
      "powerKw": 22,
      "pricePerKwh": 2500,
      "status": "OCCUPIED",
      "createdAt": "2026-09-06T10:50:58.838Z",
      "updatedAt": "2026-09-06T10:50:58.838Z"
    },
    {
      "id": 135,
      "stationId": 13,
      "slotCode": "ST13-F01",
      "chargerType": "FAST",
      "powerKw": 60,
      "pricePerKwh": 3750,
      "status": "OCCUPIED",
      "createdAt": "2026-09-06T10:50:58.838Z",
      "updatedAt": "2026-09-06T10:50:58.838Z"
    },
    {
      "id": 136,
      "stationId": 13,
      "slotCode": "ST13-F02",
      "chargerType": "FAST",
      "powerKw": 60,
      "pricePerKwh": 3750,
      "status": "OCCUPIED",
      "createdAt": "2026-09-06T10:50:58.838Z",
      "updatedAt": "2026-09-06T10:50:58.838Z"
    },
    {
      "id": 137,
      "stationId": 13,
      "slotCode": "ST13-F03",
      "chargerType": "FAST",
      "powerKw": 60,
      "pricePerKwh": 3750,
      "status": "OCCUPIED",
      "createdAt": "2026-09-06T10:50:58.838Z",
      "updatedAt": "2026-09-06T10:50:58.838Z"
    },
    {
      "id": 138,
      "stationId": 13,
      "slotCode": "ST13-U01",
      "chargerType": "ULTRA",
      "powerKw": 150,
      "pricePerKwh": 5500,
      "status": "OCCUPIED",
      "createdAt": "2026-09-06T10:50:58.838Z",
      "updatedAt": "2026-09-06T10:50:58.838Z"
    },
    {
      "id": 139,
      "stationId": 14,
      "slotCode": "ST14-N01",
      "chargerType": "NORMAL",
      "powerKw": 22,
      "pricePerKwh": 2500,
      "status": "AVAILABLE",
      "createdAt": "2026-09-06T10:50:59.041Z",
      "updatedAt": "2026-09-06T10:50:59.041Z"
    },
    {
      "id": 140,
      "stationId": 14,
      "slotCode": "ST14-N02",
      "chargerType": "NORMAL",
      "powerKw": 22,
      "pricePerKwh": 2500,
      "status": "AVAILABLE",
      "createdAt": "2026-09-06T10:50:59.041Z",
      "updatedAt": "2026-09-06T10:50:59.041Z"
    },
    {
      "id": 141,
      "stationId": 14,
      "slotCode": "ST14-N03",
      "chargerType": "NORMAL",
      "powerKw": 22,
      "pricePerKwh": 2500,
      "status": "OCCUPIED",
      "createdAt": "2026-09-06T10:50:59.041Z",
      "updatedAt": "2026-09-06T10:50:59.041Z"
    },
    {
      "id": 142,
      "stationId": 14,
      "slotCode": "ST14-N04",
      "chargerType": "NORMAL",
      "powerKw": 22,
      "pricePerKwh": 2500,
      "status": "OCCUPIED",
      "createdAt": "2026-09-06T10:50:59.041Z",
      "updatedAt": "2026-09-06T10:50:59.041Z"
    },
    {
      "id": 143,
      "stationId": 14,
      "slotCode": "ST14-F01",
      "chargerType": "FAST",
      "powerKw": 60,
      "pricePerKwh": 3750,
      "status": "AVAILABLE",
      "createdAt": "2026-09-06T10:50:59.041Z",
      "updatedAt": "2026-09-06T10:50:59.041Z"
    },
    {
      "id": 144,
      "stationId": 14,
      "slotCode": "ST14-F02",
      "chargerType": "FAST",
      "powerKw": 60,
      "pricePerKwh": 3750,
      "status": "OCCUPIED",
      "createdAt": "2026-09-06T10:50:59.041Z",
      "updatedAt": "2026-09-06T10:50:59.041Z"
    },
    {
      "id": 145,
      "stationId": 14,
      "slotCode": "ST14-U01",
      "chargerType": "ULTRA",
      "powerKw": 150,
      "pricePerKwh": 5500,
      "status": "OCCUPIED",
      "createdAt": "2026-09-06T10:50:59.041Z",
      "updatedAt": "2026-09-06T10:50:59.041Z"
    },
    {
      "id": 146,
      "stationId": 15,
      "slotCode": "ST15-N01",
      "chargerType": "NORMAL",
      "powerKw": 22,
      "pricePerKwh": 2500,
      "status": "AVAILABLE",
      "createdAt": "2026-09-06T10:50:59.219Z",
      "updatedAt": "2026-09-06T10:50:59.219Z"
    },
    {
      "id": 147,
      "stationId": 15,
      "slotCode": "ST15-N02",
      "chargerType": "NORMAL",
      "powerKw": 22,
      "pricePerKwh": 2500,
      "status": "AVAILABLE",
      "createdAt": "2026-09-06T10:50:59.219Z",
      "updatedAt": "2026-09-06T10:50:59.219Z"
    },
    {
      "id": 148,
      "stationId": 15,
      "slotCode": "ST15-N03",
      "chargerType": "NORMAL",
      "powerKw": 22,
      "pricePerKwh": 2500,
      "status": "OCCUPIED",
      "createdAt": "2026-09-06T10:50:59.219Z",
      "updatedAt": "2026-09-06T10:50:59.219Z"
    },
    {
      "id": 149,
      "stationId": 15,
      "slotCode": "ST15-N04",
      "chargerType": "NORMAL",
      "powerKw": 22,
      "pricePerKwh": 2500,
      "status": "OCCUPIED",
      "createdAt": "2026-09-06T10:50:59.219Z",
      "updatedAt": "2026-09-06T10:50:59.219Z"
    },
    {
      "id": 150,
      "stationId": 15,
      "slotCode": "ST15-N05",
      "chargerType": "NORMAL",
      "powerKw": 22,
      "pricePerKwh": 2500,
      "status": "OCCUPIED",
      "createdAt": "2026-09-06T10:50:59.219Z",
      "updatedAt": "2026-09-06T10:50:59.219Z"
    },
    {
      "id": 151,
      "stationId": 15,
      "slotCode": "ST15-N06",
      "chargerType": "NORMAL",
      "powerKw": 22,
      "pricePerKwh": 2500,
      "status": "OCCUPIED",
      "createdAt": "2026-09-06T10:50:59.219Z",
      "updatedAt": "2026-09-06T10:50:59.219Z"
    },
    {
      "id": 152,
      "stationId": 15,
      "slotCode": "ST15-F01",
      "chargerType": "FAST",
      "powerKw": 60,
      "pricePerKwh": 3750,
      "status": "AVAILABLE",
      "createdAt": "2026-09-06T10:50:59.219Z",
      "updatedAt": "2026-09-06T10:50:59.219Z"
    },
    {
      "id": 153,
      "stationId": 15,
      "slotCode": "ST15-F02",
      "chargerType": "FAST",
      "powerKw": 60,
      "pricePerKwh": 3750,
      "status": "OCCUPIED",
      "createdAt": "2026-09-06T10:50:59.219Z",
      "updatedAt": "2026-09-06T10:50:59.219Z"
    },
    {
      "id": 154,
      "stationId": 15,
      "slotCode": "ST15-F03",
      "chargerType": "FAST",
      "powerKw": 60,
      "pricePerKwh": 3750,
      "status": "OCCUPIED",
      "createdAt": "2026-09-06T10:50:59.219Z",
      "updatedAt": "2026-09-06T10:50:59.219Z"
    },
    {
      "id": 155,
      "stationId": 15,
      "slotCode": "ST15-F04",
      "chargerType": "FAST",
      "powerKw": 60,
      "pricePerKwh": 3750,
      "status": "OCCUPIED",
      "createdAt": "2026-09-06T10:50:59.219Z",
      "updatedAt": "2026-09-06T10:50:59.219Z"
    },
    {
      "id": 156,
      "stationId": 15,
      "slotCode": "ST15-U01",
      "chargerType": "ULTRA",
      "powerKw": 150,
      "pricePerKwh": 5500,
      "status": "AVAILABLE",
      "createdAt": "2026-09-06T10:50:59.219Z",
      "updatedAt": "2026-09-06T10:50:59.219Z"
    },
    {
      "id": 157,
      "stationId": 15,
      "slotCode": "ST15-U02",
      "chargerType": "ULTRA",
      "powerKw": 150,
      "pricePerKwh": 5500,
      "status": "OCCUPIED",
      "createdAt": "2026-09-06T10:50:59.219Z",
      "updatedAt": "2026-09-06T10:50:59.219Z"
    },
    {
      "id": 158,
      "stationId": 16,
      "slotCode": "ST16-N01",
      "chargerType": "NORMAL",
      "powerKw": 22,
      "pricePerKwh": 2500,
      "status": "AVAILABLE",
      "createdAt": "2026-09-06T10:50:59.393Z",
      "updatedAt": "2026-09-06T10:50:59.393Z"
    },
    {
      "id": 159,
      "stationId": 16,
      "slotCode": "ST16-N02",
      "chargerType": "NORMAL",
      "powerKw": 22,
      "pricePerKwh": 2500,
      "status": "AVAILABLE",
      "createdAt": "2026-09-06T10:50:59.393Z",
      "updatedAt": "2026-09-06T10:50:59.393Z"
    },
    {
      "id": 160,
      "stationId": 16,
      "slotCode": "ST16-N03",
      "chargerType": "NORMAL",
      "powerKw": 22,
      "pricePerKwh": 2500,
      "status": "AVAILABLE",
      "createdAt": "2026-09-06T10:50:59.393Z",
      "updatedAt": "2026-09-06T10:50:59.393Z"
    },
    {
      "id": 161,
      "stationId": 16,
      "slotCode": "ST16-N04",
      "chargerType": "NORMAL",
      "powerKw": 22,
      "pricePerKwh": 2500,
      "status": "AVAILABLE",
      "createdAt": "2026-09-06T10:50:59.393Z",
      "updatedAt": "2026-09-06T10:50:59.393Z"
    },
    {
      "id": 162,
      "stationId": 16,
      "slotCode": "ST16-N05",
      "chargerType": "NORMAL",
      "powerKw": 22,
      "pricePerKwh": 2500,
      "status": "OCCUPIED",
      "createdAt": "2026-09-06T10:50:59.393Z",
      "updatedAt": "2026-09-06T10:50:59.393Z"
    },
    {
      "id": 163,
      "stationId": 16,
      "slotCode": "ST16-F01",
      "chargerType": "FAST",
      "powerKw": 60,
      "pricePerKwh": 3750,
      "status": "AVAILABLE",
      "createdAt": "2026-09-06T10:50:59.393Z",
      "updatedAt": "2026-09-06T10:50:59.393Z"
    },
    {
      "id": 164,
      "stationId": 16,
      "slotCode": "ST16-F02",
      "chargerType": "FAST",
      "powerKw": 60,
      "pricePerKwh": 3750,
      "status": "AVAILABLE",
      "createdAt": "2026-09-06T10:50:59.393Z",
      "updatedAt": "2026-09-06T10:50:59.393Z"
    },
    {
      "id": 165,
      "stationId": 16,
      "slotCode": "ST16-F03",
      "chargerType": "FAST",
      "powerKw": 60,
      "pricePerKwh": 3750,
      "status": "OCCUPIED",
      "createdAt": "2026-09-06T10:50:59.393Z",
      "updatedAt": "2026-09-06T10:50:59.393Z"
    },
    {
      "id": 166,
      "stationId": 16,
      "slotCode": "ST16-U01",
      "chargerType": "ULTRA",
      "powerKw": 150,
      "pricePerKwh": 5500,
      "status": "AVAILABLE",
      "createdAt": "2026-09-06T10:50:59.393Z",
      "updatedAt": "2026-09-06T10:50:59.393Z"
    },
    {
      "id": 167,
      "stationId": 17,
      "slotCode": "ST17-N01",
      "chargerType": "NORMAL",
      "powerKw": 22,
      "pricePerKwh": 2500,
      "status": "AVAILABLE",
      "createdAt": "2026-09-06T10:50:59.565Z",
      "updatedAt": "2026-09-06T10:50:59.565Z"
    },
    {
      "id": 168,
      "stationId": 17,
      "slotCode": "ST17-N02",
      "chargerType": "NORMAL",
      "powerKw": 22,
      "pricePerKwh": 2500,
      "status": "OCCUPIED",
      "createdAt": "2026-09-06T10:50:59.565Z",
      "updatedAt": "2026-09-06T10:50:59.565Z"
    },
    {
      "id": 169,
      "stationId": 17,
      "slotCode": "ST17-N03",
      "chargerType": "NORMAL",
      "powerKw": 22,
      "pricePerKwh": 2500,
      "status": "OCCUPIED",
      "createdAt": "2026-09-06T10:50:59.565Z",
      "updatedAt": "2026-09-06T10:50:59.565Z"
    },
    {
      "id": 170,
      "stationId": 17,
      "slotCode": "ST17-N04",
      "chargerType": "NORMAL",
      "powerKw": 22,
      "pricePerKwh": 2500,
      "status": "OCCUPIED",
      "createdAt": "2026-09-06T10:50:59.565Z",
      "updatedAt": "2026-09-06T10:50:59.565Z"
    },
    {
      "id": 171,
      "stationId": 17,
      "slotCode": "ST17-F01",
      "chargerType": "FAST",
      "powerKw": 60,
      "pricePerKwh": 3750,
      "status": "AVAILABLE",
      "createdAt": "2026-09-06T10:50:59.565Z",
      "updatedAt": "2026-09-06T10:50:59.565Z"
    },
    {
      "id": 172,
      "stationId": 17,
      "slotCode": "ST17-F02",
      "chargerType": "FAST",
      "powerKw": 60,
      "pricePerKwh": 3750,
      "status": "OCCUPIED",
      "createdAt": "2026-09-06T10:50:59.565Z",
      "updatedAt": "2026-09-06T10:50:59.565Z"
    },
    {
      "id": 173,
      "stationId": 17,
      "slotCode": "ST17-F03",
      "chargerType": "FAST",
      "powerKw": 60,
      "pricePerKwh": 3750,
      "status": "OCCUPIED",
      "createdAt": "2026-09-06T10:50:59.565Z",
      "updatedAt": "2026-09-06T10:50:59.565Z"
    },
    {
      "id": 174,
      "stationId": 17,
      "slotCode": "ST17-U01",
      "chargerType": "ULTRA",
      "powerKw": 150,
      "pricePerKwh": 5500,
      "status": "OCCUPIED",
      "createdAt": "2026-09-06T10:50:59.565Z",
      "updatedAt": "2026-09-06T10:50:59.565Z"
    },
    {
      "id": 175,
      "stationId": 18,
      "slotCode": "ST18-N01",
      "chargerType": "NORMAL",
      "powerKw": 22,
      "pricePerKwh": 2500,
      "status": "OCCUPIED",
      "createdAt": "2026-09-06T10:50:59.739Z",
      "updatedAt": "2026-09-06T10:50:59.739Z"
    },
    {
      "id": 176,
      "stationId": 18,
      "slotCode": "ST18-N02",
      "chargerType": "NORMAL",
      "powerKw": 22,
      "pricePerKwh": 2500,
      "status": "OCCUPIED",
      "createdAt": "2026-09-06T10:50:59.739Z",
      "updatedAt": "2026-09-06T10:50:59.739Z"
    },
    {
      "id": 177,
      "stationId": 18,
      "slotCode": "ST18-N03",
      "chargerType": "NORMAL",
      "powerKw": 22,
      "pricePerKwh": 2500,
      "status": "OCCUPIED",
      "createdAt": "2026-09-06T10:50:59.739Z",
      "updatedAt": "2026-09-06T10:50:59.739Z"
    },
    {
      "id": 178,
      "stationId": 18,
      "slotCode": "ST18-N04",
      "chargerType": "NORMAL",
      "powerKw": 22,
      "pricePerKwh": 2500,
      "status": "OCCUPIED",
      "createdAt": "2026-09-06T10:50:59.739Z",
      "updatedAt": "2026-09-06T10:50:59.739Z"
    },
    {
      "id": 179,
      "stationId": 18,
      "slotCode": "ST18-N05",
      "chargerType": "NORMAL",
      "powerKw": 22,
      "pricePerKwh": 2500,
      "status": "OCCUPIED",
      "createdAt": "2026-09-06T10:50:59.739Z",
      "updatedAt": "2026-09-06T10:50:59.739Z"
    },
    {
      "id": 180,
      "stationId": 18,
      "slotCode": "ST18-N06",
      "chargerType": "NORMAL",
      "powerKw": 22,
      "pricePerKwh": 2500,
      "status": "OCCUPIED",
      "createdAt": "2026-09-06T10:50:59.739Z",
      "updatedAt": "2026-09-06T10:50:59.739Z"
    },
    {
      "id": 181,
      "stationId": 18,
      "slotCode": "ST18-F01",
      "chargerType": "FAST",
      "powerKw": 60,
      "pricePerKwh": 3750,
      "status": "OCCUPIED",
      "createdAt": "2026-09-06T10:50:59.739Z",
      "updatedAt": "2026-09-06T10:50:59.739Z"
    },
    {
      "id": 182,
      "stationId": 18,
      "slotCode": "ST18-F02",
      "chargerType": "FAST",
      "powerKw": 60,
      "pricePerKwh": 3750,
      "status": "OCCUPIED",
      "createdAt": "2026-09-06T10:50:59.739Z",
      "updatedAt": "2026-09-06T10:50:59.739Z"
    },
    {
      "id": 183,
      "stationId": 18,
      "slotCode": "ST18-F03",
      "chargerType": "FAST",
      "powerKw": 60,
      "pricePerKwh": 3750,
      "status": "OCCUPIED",
      "createdAt": "2026-09-06T10:50:59.739Z",
      "updatedAt": "2026-09-06T10:50:59.739Z"
    },
    {
      "id": 184,
      "stationId": 18,
      "slotCode": "ST18-F04",
      "chargerType": "FAST",
      "powerKw": 60,
      "pricePerKwh": 3750,
      "status": "OCCUPIED",
      "createdAt": "2026-09-06T10:50:59.739Z",
      "updatedAt": "2026-09-06T10:50:59.739Z"
    },
    {
      "id": 185,
      "stationId": 18,
      "slotCode": "ST18-U01",
      "chargerType": "ULTRA",
      "powerKw": 150,
      "pricePerKwh": 5500,
      "status": "OCCUPIED",
      "createdAt": "2026-09-06T10:50:59.739Z",
      "updatedAt": "2026-09-06T10:50:59.739Z"
    },
    {
      "id": 186,
      "stationId": 18,
      "slotCode": "ST18-U02",
      "chargerType": "ULTRA",
      "powerKw": 150,
      "pricePerKwh": 5500,
      "status": "OCCUPIED",
      "createdAt": "2026-09-06T10:50:59.739Z",
      "updatedAt": "2026-09-06T10:50:59.739Z"
    },
    {
      "id": 187,
      "stationId": 19,
      "slotCode": "ST19-N01",
      "chargerType": "NORMAL",
      "powerKw": 22,
      "pricePerKwh": 2500,
      "status": "AVAILABLE",
      "createdAt": "2026-09-06T10:50:59.916Z",
      "updatedAt": "2026-09-06T10:50:59.916Z"
    },
    {
      "id": 188,
      "stationId": 19,
      "slotCode": "ST19-N02",
      "chargerType": "NORMAL",
      "powerKw": 22,
      "pricePerKwh": 2500,
      "status": "AVAILABLE",
      "createdAt": "2026-09-06T10:50:59.916Z",
      "updatedAt": "2026-09-06T10:50:59.916Z"
    },
    {
      "id": 189,
      "stationId": 19,
      "slotCode": "ST19-N03",
      "chargerType": "NORMAL",
      "powerKw": 22,
      "pricePerKwh": 2500,
      "status": "AVAILABLE",
      "createdAt": "2026-09-06T10:50:59.916Z",
      "updatedAt": "2026-09-06T10:50:59.916Z"
    },
    {
      "id": 190,
      "stationId": 19,
      "slotCode": "ST19-N04",
      "chargerType": "NORMAL",
      "powerKw": 22,
      "pricePerKwh": 2500,
      "status": "OCCUPIED",
      "createdAt": "2026-09-06T10:50:59.916Z",
      "updatedAt": "2026-09-06T10:50:59.916Z"
    },
    {
      "id": 191,
      "stationId": 19,
      "slotCode": "ST19-N05",
      "chargerType": "NORMAL",
      "powerKw": 22,
      "pricePerKwh": 2500,
      "status": "OCCUPIED",
      "createdAt": "2026-09-06T10:50:59.916Z",
      "updatedAt": "2026-09-06T10:50:59.916Z"
    },
    {
      "id": 192,
      "stationId": 19,
      "slotCode": "ST19-F01",
      "chargerType": "FAST",
      "powerKw": 60,
      "pricePerKwh": 3750,
      "status": "AVAILABLE",
      "createdAt": "2026-09-06T10:50:59.916Z",
      "updatedAt": "2026-09-06T10:50:59.916Z"
    },
    {
      "id": 193,
      "stationId": 19,
      "slotCode": "ST19-F02",
      "chargerType": "FAST",
      "powerKw": 60,
      "pricePerKwh": 3750,
      "status": "OCCUPIED",
      "createdAt": "2026-09-06T10:50:59.916Z",
      "updatedAt": "2026-09-06T10:50:59.916Z"
    },
    {
      "id": 194,
      "stationId": 19,
      "slotCode": "ST19-U01",
      "chargerType": "ULTRA",
      "powerKw": 150,
      "pricePerKwh": 5500,
      "status": "AVAILABLE",
      "createdAt": "2026-09-06T10:50:59.916Z",
      "updatedAt": "2026-09-06T10:50:59.916Z"
    },
    {
      "id": 195,
      "stationId": 20,
      "slotCode": "ST20-N01",
      "chargerType": "NORMAL",
      "powerKw": 22,
      "pricePerKwh": 2500,
      "status": "AVAILABLE",
      "createdAt": "2026-09-06T10:51:00.093Z",
      "updatedAt": "2026-09-06T10:51:00.093Z"
    },
    {
      "id": 196,
      "stationId": 20,
      "slotCode": "ST20-N02",
      "chargerType": "NORMAL",
      "powerKw": 22,
      "pricePerKwh": 2500,
      "status": "AVAILABLE",
      "createdAt": "2026-09-06T10:51:00.093Z",
      "updatedAt": "2026-09-06T10:51:00.093Z"
    },
    {
      "id": 197,
      "stationId": 20,
      "slotCode": "ST20-N03",
      "chargerType": "NORMAL",
      "powerKw": 22,
      "pricePerKwh": 2500,
      "status": "AVAILABLE",
      "createdAt": "2026-09-06T10:51:00.093Z",
      "updatedAt": "2026-09-06T10:51:00.093Z"
    },
    {
      "id": 198,
      "stationId": 20,
      "slotCode": "ST20-N04",
      "chargerType": "NORMAL",
      "powerKw": 22,
      "pricePerKwh": 2500,
      "status": "AVAILABLE",
      "createdAt": "2026-09-06T10:51:00.093Z",
      "updatedAt": "2026-09-06T10:51:00.093Z"
    },
    {
      "id": 199,
      "stationId": 20,
      "slotCode": "ST20-N05",
      "chargerType": "NORMAL",
      "powerKw": 22,
      "pricePerKwh": 2500,
      "status": "OCCUPIED",
      "createdAt": "2026-09-06T10:51:00.093Z",
      "updatedAt": "2026-09-06T10:51:00.093Z"
    },
    {
      "id": 200,
      "stationId": 20,
      "slotCode": "ST20-N06",
      "chargerType": "NORMAL",
      "powerKw": 22,
      "pricePerKwh": 2500,
      "status": "OCCUPIED",
      "createdAt": "2026-09-06T10:51:00.093Z",
      "updatedAt": "2026-09-06T10:51:00.093Z"
    },
    {
      "id": 201,
      "stationId": 20,
      "slotCode": "ST20-N07",
      "chargerType": "NORMAL",
      "powerKw": 22,
      "pricePerKwh": 2500,
      "status": "OCCUPIED",
      "createdAt": "2026-09-06T10:51:00.093Z",
      "updatedAt": "2026-09-06T10:51:00.093Z"
    },
    {
      "id": 202,
      "stationId": 20,
      "slotCode": "ST20-N08",
      "chargerType": "NORMAL",
      "powerKw": 22,
      "pricePerKwh": 2500,
      "status": "OCCUPIED",
      "createdAt": "2026-09-06T10:51:00.093Z",
      "updatedAt": "2026-09-06T10:51:00.093Z"
    },
    {
      "id": 203,
      "stationId": 20,
      "slotCode": "ST20-F01",
      "chargerType": "FAST",
      "powerKw": 60,
      "pricePerKwh": 3750,
      "status": "AVAILABLE",
      "createdAt": "2026-09-06T10:51:00.093Z",
      "updatedAt": "2026-09-06T10:51:00.093Z"
    },
    {
      "id": 204,
      "stationId": 20,
      "slotCode": "ST20-F02",
      "chargerType": "FAST",
      "powerKw": 60,
      "pricePerKwh": 3750,
      "status": "AVAILABLE",
      "createdAt": "2026-09-06T10:51:00.093Z",
      "updatedAt": "2026-09-06T10:51:00.093Z"
    },
    {
      "id": 205,
      "stationId": 20,
      "slotCode": "ST20-F03",
      "chargerType": "FAST",
      "powerKw": 60,
      "pricePerKwh": 3750,
      "status": "OCCUPIED",
      "createdAt": "2026-09-06T10:51:00.093Z",
      "updatedAt": "2026-09-06T10:51:00.093Z"
    },
    {
      "id": 206,
      "stationId": 20,
      "slotCode": "ST20-F04",
      "chargerType": "FAST",
      "powerKw": 60,
      "pricePerKwh": 3750,
      "status": "OCCUPIED",
      "createdAt": "2026-09-06T10:51:00.093Z",
      "updatedAt": "2026-09-06T10:51:00.093Z"
    },
    {
      "id": 207,
      "stationId": 20,
      "slotCode": "ST20-F05",
      "chargerType": "FAST",
      "powerKw": 60,
      "pricePerKwh": 3750,
      "status": "OCCUPIED",
      "createdAt": "2026-09-06T10:51:00.093Z",
      "updatedAt": "2026-09-06T10:51:00.093Z"
    },
    {
      "id": 208,
      "stationId": 20,
      "slotCode": "ST20-F06",
      "chargerType": "FAST",
      "powerKw": 60,
      "pricePerKwh": 3750,
      "status": "OCCUPIED",
      "createdAt": "2026-09-06T10:51:00.093Z",
      "updatedAt": "2026-09-06T10:51:00.093Z"
    },
    {
      "id": 209,
      "stationId": 20,
      "slotCode": "ST20-U01",
      "chargerType": "ULTRA",
      "powerKw": 150,
      "pricePerKwh": 5500,
      "status": "AVAILABLE",
      "createdAt": "2026-09-06T10:51:00.093Z",
      "updatedAt": "2026-09-06T10:51:00.093Z"
    },
    {
      "id": 210,
      "stationId": 20,
      "slotCode": "ST20-U02",
      "chargerType": "ULTRA",
      "powerKw": 150,
      "pricePerKwh": 5500,
      "status": "OCCUPIED",
      "createdAt": "2026-09-06T10:51:00.093Z",
      "updatedAt": "2026-09-06T10:51:00.093Z"
    },
    {
      "id": 211,
      "stationId": 20,
      "slotCode": "ST20-U03",
      "chargerType": "ULTRA",
      "powerKw": 150,
      "pricePerKwh": 5500,
      "status": "OCCUPIED",
      "createdAt": "2026-09-06T10:51:00.093Z",
      "updatedAt": "2026-09-06T10:51:00.093Z"
    }
  ]
}
```

### GET /charging-slots/:id

Retrieves a specific charging slot by its ID.

**Request**

```bash
curl -X 'GET' \ 'https://voltra-backend.vercel.app/api/charging-slots/1'
    -H 'Authorization: Bearer <JWT_ACCESS_TOKEN>' \
```

**Response**

```json
{
  "message": "Charging slot ID 1 retrieved successfully",
  "data": {
    "id": 1,
    "stationId": 1,
    "slotCode": "ST01-N01",
    "chargerType": "NORMAL",
    "powerKw": 22,
    "pricePerKwh": 2500,
    "status": "AVAILABLE",
    "createdAt": "2026-09-06T10:50:56.579Z",
    "updatedAt": "2026-09-06T10:50:56.579Z"
  }
}
```

### POST /charging-slots

Creates a new charging slot.

**Request**

```bash
curl -X 'POST' \ 'https://voltra-backend.vercel.app/api/charging-slots' \
  -H 'Authorization: Bearer <JWT_ACCESS_TOKEN>' \
  -H 'Content-Type: application/json' \
  -d '{
    "stationId": 1,
    "slotCode": "ST01-U03",
    "chargerType": "ULTRA",
    "powerKw": 150,
    "pricePerKwh": 5500
}'
```

**Response**

```json
{
  "message": "New charging slot created successfully",
  "data": {
    "id": 213,
    "stationId": 1,
    "slotCode": "ST01-U03",
    "chargerType": "ULTRA",
    "powerKw": 150,
    "pricePerKwh": 5500,
    "status": "AVAILABLE",
    "createdAt": "2026-09-07T11:10:27.707Z",
    "updatedAt": "2026-09-07T11:10:27.707Z"
  }
}
```

### PATCH /charging-slots/:id

Updates an existing charging slot.

**Request**

```bash
curl -X 'PATCH' \ 'https://voltra-backend.vercel.app/api/charging-slots/213' \
  -H 'Authorization: Bearer <JWT_ACCESS_TOKEN>' \
  -H 'Content-Type: application/json' \
  -d '{
    "slotCode": "ST01-N07",
    "chargerType": "NORMAL",
    "powerKw": 22,
    "pricePerKwh": 2500
}'
```

**Response**

```json
{
  "message": "Charging slot ID 213 updated successfully",
  "data": {
    "id": 213,
    "stationId": 1,
    "slotCode": "ST01-N07",
    "chargerType": "NORMAL",
    "powerKw": 22,
    "pricePerKwh": 2500,
    "status": "AVAILABLE",
    "createdAt": "2026-09-07T11:10:27.707Z",
    "updatedAt": "2026-09-07T11:13:13.750Z"
  }
}
```

### DELETE /charging-slots/:id

Delete a charging slot by its ID.

**Request**

```bash
curl -X 'DELETE' \ 'https://voltra-backend.vercel.app/api/charging-slots/213' \
    -H 'Authorization: Bearer <JWT_ACCESS_TOKEN>' \
```

**Response**

```json
{
  "message": "Charging slot ID 213 deleted successfully",
  "data": {
    "id": 213,
    "stationId": 1,
    "slotCode": "ST01-N07",
    "chargerType": "NORMAL",
    "powerKw": 22,
    "pricePerKwh": 2500,
    "status": "AVAILABLE",
    "createdAt": "2026-09-07T11:10:27.707Z",
    "updatedAt": "2026-09-07T11:13:13.750Z"
  }
}
```

---

## BOOKINGS

### GET /bookings

Retrieve all bookings belonging to the authenticated user

**Request**

```bash
curl -X 'GET' \ 'https://voltra-backend.vercel.app/api/bookings' \
    -H 'Authorization: Bearer <JWT_ACCESS_TOKEN>' \
```

**Response**

```json
{
  "message": "Bookings retrieved successfully",
  "data": [
    {
      "id": 5,
      "userId": 7,
      "slotId": 2,
      "bookingCode": "BOOK-1788750599842",
      "startTime": "2026-09-05T10:00:00.000Z",
      "endTime": "2026-09-05T11:30:00.000Z",
      "estimatedKwh": "33",
      "estimatedCost": "82500",
      "status": "PENDING",
      "createdAt": "2026-09-07T03:09:59.843Z",
      "updatedAt": "2026-09-07T03:09:59.843Z"
    },
    {
      "id": 6,
      "userId": 7,
      "slotId": 2,
      "bookingCode": "BOOK-1788780247294",
      "startTime": "2026-09-05T10:00:00.000Z",
      "endTime": "2026-09-05T11:30:00.000Z",
      "estimatedKwh": "33",
      "estimatedCost": "82500",
      "status": "PENDING",
      "createdAt": "2026-09-07T11:24:07.317Z",
      "updatedAt": "2026-09-07T11:24:07.317Z"
    }
  ]
}
```

### GET /bookings/:id

Retrieve a booking by ID belonging to the authenticated user

**Request**

```bash
curl -X 'GET' \ 'https://voltra-backend.vercel.app/api/bookings/5' \
    -H 'Authorization: Bearer <JWT_ACCESS_TOKEN>' \
```

**Response**

```json
{
  "message": "Booking ID 5 retrieved successfully",
  "data": {
    "id": 5,
    "userId": 7,
    "slotId": 2,
    "bookingCode": "BOOK-1788750599842",
    "startTime": "2026-09-05T10:00:00.000Z",
    "endTime": "2026-09-05T11:30:00.000Z",
    "estimatedKwh": "33",
    "estimatedCost": "82500",
    "status": "PENDING",
    "createdAt": "2026-09-07T03:09:59.843Z",
    "updatedAt": "2026-09-07T03:09:59.843Z"
  }
}
```

### POST /bookings

Create a booking for the authenticated user

**Request**

```bash
curl -X 'POST' \ 'https://voltra-backend.vercel.app/api/bookings' \
  -H 'Authorization: Bearer <JWT_ACCESS_TOKEN>' \
  -H 'Content-Type: application/json' \
  -d '{
    "slotId": 2,
    "startTime": "2026-09-05T10:00:00.000Z",
    "durationMinutes": 90
}'
```

**Response**

```json
{
  "message": "New booking created successfully",
  "data": {
    "id": 6,
    "userId": 7,
    "slotId": 2,
    "bookingCode": "BOOK-1788780247294",
    "startTime": "2026-09-05T10:00:00.000Z",
    "endTime": "2026-09-05T11:30:00.000Z",
    "estimatedKwh": "33",
    "estimatedCost": "82500",
    "status": "PENDING",
    "createdAt": "2026-09-07T11:24:07.317Z",
    "updatedAt": "2026-09-07T11:24:07.317Z"
  }
}
```

### PATCH /bookings/:id

Update a booking belonging to the authenticated user

**Request**

```bash
curl -X 'PATCH' \ 'https://voltra-backend.vercel.app/api/bookings/6' \
  -H 'Authorization: Bearer <JWT_ACCESS_TOKEN>' \
  -H 'Content-Type: application/json' \
  -d '{
   "slotId": 3
}'
```

**Response**

```json
{
  "message": "Booking ID 6 updated successfully",
  "data": {
    "id": 6,
    "userId": 7,
    "slotId": 3,
    "bookingCode": "BOOK-1788780247294",
    "startTime": "2026-09-05T10:00:00.000Z",
    "endTime": "2026-09-05T11:30:00.000Z",
    "estimatedKwh": "33",
    "estimatedCost": "82500",
    "status": "PENDING",
    "createdAt": "2026-09-07T11:24:07.317Z",
    "updatedAt": "2026-09-07T11:29:12.690Z"
  }
}
```

### DELETE /bookings/:id
	
Delete a booking belonging to the authenticated user

**Request**

```bash
curl -X 'DELETE' \ 'https://voltra-backend.vercel.app/api/bookings/6' \
    -H 'Authorization: Bearer <JWT_ACCESS_TOKEN>' \
```

**Response**

```json
{
  "message": "Booking ID 6 was deleted successfully",
  "data": {
    "id": 6,
    "userId": 7,
    "slotId": 3,
    "bookingCode": "BOOK-1788780247294",
    "startTime": "2026-09-05T10:00:00.000Z",
    "endTime": "2026-09-05T11:30:00.000Z",
    "estimatedKwh": "33",
    "estimatedCost": "82500",
    "status": "PENDING",
    "createdAt": "2026-09-07T11:24:07.317Z",
    "updatedAt": "2026-09-07T11:29:12.690Z"
  }
}
```

---

## PAYMENTS

### GET /payments
	
Retrieve all payments belonging to the authenticated user

**Request**

```bash
curl -X 'GET' \ 'https://voltra-backend.vercel.app/api/payments' \
    -H 'Authorization: Bearer <JWT_ACCESS_TOKEN>' \
```

**Response**

```json
{
  "message": "All payments retrieved successfully",
  "data": [
    {
      "id": 5,
      "bookingId": 5,
      "amount": 82500,
      "paymentMethod": "CASH",
      "status": "PENDING",
      "transactionId": null,
      "createdAt": "2026-09-07T11:36:00.800Z",
      "updatedAt": "2026-09-07T11:36:00.800Z"
    }
  ]
}
```

### GET /payments/:id

Retrieve a payment by ID belonging to the authenticated user

**Request**

```bash
curl -X 'GET' \ 'https://voltra-backend.vercel.app/api/payments/5' \
    -H 'Authorization: Bearer <JWT_ACCESS_TOKEN>' 
```

**Response**

```json
{
  "message": "Payment retrieved successfully",
  "data": {
    "id": 5,
    "bookingId": 5,
    "amount": 82500,
    "paymentMethod": "CASH",
    "status": "PENDING",
    "transactionId": null,
    "createdAt": "2026-09-07T11:36:00.800Z",
    "updatedAt": "2026-09-07T11:36:00.800Z",
    "booking": {
      "id": 5,
      "userId": 7,
      "slotId": 2,
      "bookingCode": "BOOK-1788750599842",
      "startTime": "2026-09-05T10:00:00.000Z",
      "endTime": "2026-09-05T11:30:00.000Z",
      "estimatedKwh": "33",
      "estimatedCost": "82500",
      "status": "PENDING",
      "createdAt": "2026-09-07T03:09:59.843Z",
      "updatedAt": "2026-09-07T03:09:59.843Z"
    }
  }
}
```

### POST /payments
	
Create a payment for the authenticated user

**Request**

```bash
curl -X 'POST' \ 'https://voltra-backend.vercel.app/api/payments' \
    -H 'Authorization: Bearer <JWT_ACCESS_TOKEN>' \
```

**Response**

```json
{
  "message": "Payments created successfully",
  "data": [
    {
      "id": 5,
      "bookingId": 5,
      "amount": 82500,
      "paymentMethod": "CASH",
      "status": "PENDING",
      "transactionId": null,
      "createdAt": "2026-09-07T11:36:00.800Z",
      "updatedAt": "2026-09-07T11:36:00.800Z"
    }
  ]
}
```

### PATCH /payments/:id
	
Update a payment belonging to the authenticated user

**Request**

```bash
curl -X 'PATCH' \ 'https://voltra-backend.vercel.app/api/payments/5' \
  -H 'Authorization: Bearer <JWT_ACCESS_TOKEN>' \
  -H 'Content-Type: application/json' \
  -d '{
   "paymentMethod": "CARD"
}'
```

**Response**

```json
{
  "message": "Payment updated successfully",
  "data": {
    "id": 5,
    "bookingId": 5,
    "amount": 82500,
    "paymentMethod": "CARD",
    "status": "PENDING",
    "transactionId": null,
    "createdAt": "2026-09-07T11:36:00.800Z",
    "updatedAt": "2026-09-07T11:46:54.527Z"
  }
}
```

### DELETE /payments/:id
	
Delete a payment belonging to the authenticated user

**Request**

```bash
curl -X 'DELETE' \ 'https://voltra-backend.vercel.app/api/payments/5' \
    -H 'Authorization: Bearer <JWT_ACCESS_TOKEN>' \
```

**Response**

```json
{
  "message": "Payment deleted successfully",
  "data": {
    "id": 5,
    "bookingId": 5,
    "amount": 82500,
    "paymentMethod": "CARD",
    "status": "PENDING",
    "transactionId": null,
    "createdAt": "2026-09-07T11:36:00.800Z",
    "updatedAt": "2026-09-07T11:46:54.527Z"
  }
}
```

---

## Users

### GET /users

Retrieves all registered users.

**Request**

```bash
curl -X 'GET' \'https://voltra-backend.vercel.app/api/users' \
    -H 'Authorization: Bearer <JWT_ACCESS_TOKEN>' \ 
```

**Response**

```json
{
  "message": "All users found successfully",
  "data": [
    {
      "id": 1,
      "fullName": "Voltra Administrator",
      "email": "admin@voltra.com",
      "phoneNumber": "081234567890",
      "role": "ADMIN",
      "createdAt": "2026-09-06T10:50:56.418Z",
      "updatedAt": "2026-09-06T10:50:56.418Z"
    },
    {
      "id": 2,
      "fullName": "Robby Arzy",
      "email": "robby@example.com",
      "phoneNumber": "081234567891",
      "role": "USER",
      "createdAt": "2026-09-06T10:50:56.455Z",
      "updatedAt": "2026-09-06T10:50:56.455Z"
    },
    {
      "id": 3,
      "fullName": "Maya Pratama",
      "email": "maya@example.com",
      "phoneNumber": "081234567892",
      "role": "USER",
      "createdAt": "2026-09-06T10:50:56.486Z",
      "updatedAt": "2026-09-06T10:50:56.486Z"
    },
    {
      "id": 6,
      "fullName": "Admin",
      "email": "admin@example.com",
      "phoneNumber": "081123554678",
      "role": "ADMIN",
      "createdAt": "2026-09-06T12:19:09.253Z",
      "updatedAt": "2026-09-06T12:19:09.260Z"
    },
    {
      "id": 7,
      "fullName": "Kevin Sanjaya",
      "email": "kevin@example.com",
      "phoneNumber": "081234567890",
      "role": "USER",
      "createdAt": "2026-09-07T02:33:07.723Z",
      "updatedAt": "2026-09-07T02:48:33.502Z"
    }
  ]
}
```

### GET /users/:id

Retrieves a specific users by its ID.

**Request**

```bash
curl -X 'GET' \'https://voltra-backend.vercel.app/api/users/7' \
    -H 'Authorization: Bearer <JWT_ACCESS_TOKEN>' \
```

**Response**

```json
{
  "message": "User ID 7 found successfully",
  "data": {
    "id": 7,
    "fullName": "Kevin Sanjaya",
    "email": "kevin@example.com",
    "phoneNumber": "081234567890",
    "role": "USER",
    "createdAt": "2026-09-07T02:33:07.723Z",
    "updatedAt": "2026-09-07T02:48:33.502Z"
  }
}
```

### PATCH /users/:id

Updates an existing user.

**Request**

```bash
curl -X 'PATCH' \ 'https://voltra-backend.vercel.app/api/users/9' \
  -H 'Authorization: Bearer <JWT_ACCESS_TOKEN>' \
  -H 'Content-Type: application/json' \
  -d '{
"fullName": "Jason Berg"
}'
```

**Response**

```json
{
  "message": "User ID 9 updated successfully",
  "data": {
    "id": 9,
    "fullName": "Jason Berg",
    "email": "jason@example.com",
    "phoneNumber": "081234534567",
    "role": "USER",
    "updatedAt": "2026-09-07T04:37:24.040Z"
  }
}
```

### DELETE /users/:id

Deletes a user by ID.

**Request**

```bash
curl -X 'DELETE' \ 'https://voltra-backend.vercel.app/api/users/9' \
    -H 'Authorization: Bearer <JWT_ACCESS_TOKEN>' \
```

**Response**

```json
{
  "message": "User ID 9 deleted successfully",
  "data": {
    "id": 9,
    "fullName": "Jason Berg",
    "email": "jason@example.com",
    "phoneNumber": "081234534567",
    "role": "USER"
  }
}
```