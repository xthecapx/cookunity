# Cookunity API

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
  - [Endpoints](#endpoints)
- [Scripts](#scripts)
- [License](#license)

## Description

The Cookunity API is a Node.js application built with Express.js that provides endpoints for retrieving traces from an IP address and getting statistics about those traces.

## Installation

To run the Cookunity API, you'll need Node.js (version 18 or higher) installed on your system.

1. Clone this repository.
2. Navigate to the project directory.
3. Run the following command to install the dependencies:

   ```
   npm install
   ```

## Usage

### Endpoints

#### 1. POST /traces

This endpoint allows you to retrieve traces from an IP address.

- **Request:**

  - Method: `POST`
  - URL: `/traces`
  - Body:
    ```json
    {
      "ip": "210.138.184.59"
    }
    ```

- **Response:**

  - Status Code: `200 OK`
  - Body:
    ```json
    {
    "ip": "221.192.199.49",
    "name": "China",
    "code": "CN",
    "lat": 39.538,
    "lon": 116.684,
    "currencies": [
        {
        "iso": "CNY",
        "symbol": "CN¥",
        "conversion_rate": 7.312047505866494
        },
        {
        "iso": "USD",
        "symbol": "$",
        "conversion_rate": 1
        }
    ],
    "distance_to_usa": 11033673.043428171
    }
    ```

#### 2. GET /statistics

This endpoint allows you to get statistics of the traces.

- **Request:**

  - Method: `GET`
  - URL: `/statistics`

- **Response:**

  - Status Code: `200 OK`
  - Body:
    ```json
    {
        "longest_distance": {
            "country": "Japan",
            "value": 10854061.4192188
        },
        "most_traced": {
            "country": "Japan",
            "value": 3
        }
    }
    ```

## Scripts

In the project, you can use the following npm scripts:

- `npm start`: Start the API server in production mode.
- `npm test`: Run Jest for testing.
- `npm run lint:fix`: Run ESLint with auto-fixing.
- `npm run swagger-autogen`: Generate Swagger documentation.
- `npm run dev`: Start the API server in development mode.
- `npm run gcp-build`: Build the project for Google Cloud Platform (GCP).
