This is a website I developed with NextJS (written in typescript).

Visitors are welcome to opening the repository in personal development server.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

## Caution with API

Before you will be able to send emails in your development server you must replace the environment variables to your information.

The API utilized in this project is created with sendgrid as the 'mailman'.

You can replace the API call with any other Node mailing API, the contact form is designed to call whichever API is written in the "./api/contact.ts".
