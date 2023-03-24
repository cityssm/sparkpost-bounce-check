# SparkPost Bounce Check

An on-demand check of recent bouncebacks from SparkPost.

## Getting Started

**This application requires [NodeJS](https://nodejs.org/en) to run.**

- Clone the repository,
  or [download the latest release](https://github.com/cityssm/sparkpost-bounce-check/releases)

- Run `npm install` to get the dependencies

- Copy `configSample.js` to `config.js`

- Open `config.js` and update the `sparkPostApiKey`

- Run `npm start`

## Sample Output

```json
[
  {
    "timestamp": "2023-03-24T13:14:25.000Z",
    "message_id": "1234abcd5678efgh9012",
    "rcpt_to": "bad_email@example.com",
    "subject": "Super Important Newsletter",
    "bounce_class": "22",
    "error_code": "552",
    "raw_reason": "552 5.2.2 <bad_email@example.com>: user is over quota"
  }
]
```
