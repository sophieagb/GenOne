# GenOne
GenOne utilizes Google Vision &amp; Translate API to read and translate documents

## Table of Contents

- [GenOne](#GenOne)
  - [Table of Contents](#table-of-contents)
  - [About](#about)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [License](#license)
  - [Acknowledgements](#acknowledgements)

## About

GenOne is a full-stack project created for a Capital One hackathon. It serves as a platform for immigrants who need to translate important documents. The project utilizes React for the front end, providing a user-friendly interface, and leverages Google Vision & Translate API in the backend to read and translate documents seamlessly.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

Obtain API keys for Google Vision API and Google Translate API. You can get them from the Google Cloud Console.

Create a file named .env in the backend directory and add your API keys:

VISION_API_KEY=your-vision-api-key
TRANSLATE_API_KEY=your-translate-api-key

Install backend dependencies:

npm install @google-cloud/vision @google-cloud/translate 
export GOOGLE_APPLICATION_CREDENTIALS="/path/to/your/keyfile.json"

Run the Node server:

node doc.js


Now, both the front end and the backend are set up. Open [http://localhost:3000](http://localhost:3000) to access GenOne locally.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

## Usage

Show examples and explain how to use your project. Include code snippets or screenshots if necessary.


## Contributing

If you'd like to contribute to GenOne, please follow these guidelines:

1. Fork the repository and create a new branch for your feature or bug fix.

2. Make small, focused commits with clear and descriptive commit messages.

3. Ensure your code follows our coding standards. We use [insert coding standards if any] for consistency.

4. Open a pull request, providing a detailed description of the changes you've made.

5. Request a review from team members. Address any feedback and make necessary changes.

6. Once your pull request is approved, it will be merged into the main branch.


## Acknowledgements

- [React](https://reactjs.org/): A JavaScript library for building user interfaces.
- [Google Cloud Vision API](https://cloud.google.com/vision): Powering document reading capabilities.
- [Google Cloud Translate API](https://cloud.google.com/translate): Enabling seamless translation of documents.
