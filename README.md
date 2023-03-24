# SparkPost Bounce Check

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/893612fccd524ca5905be50e743bec83)](https://app.codacy.com/gh/cityssm/sparkpost-bounce-check/dashboard?utm_source=gh&utm_medium=referral&utm_content=&utm_campaign=Badge_grade)
[![Maintainability](https://api.codeclimate.com/v1/badges/66b749128317c5c016f0/maintainability)](https://codeclimate.com/github/cityssm/sparkpost-bounce-check/maintainability)
[![Snyk Vulnerabilities for GitHub Repo](https://img.shields.io/snyk/vulnerabilities/github/cityssm/sparkpost-bounce-check)](https://app.snyk.io/org/cityssm/project/589e02bc-4c75-431c-ba34-58ee621c942e)

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
