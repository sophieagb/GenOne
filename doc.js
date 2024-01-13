const vision = require('@google-cloud/vision');
const { TranslationServiceClient } = require('@google-cloud/translate');
const fs = require('fs');
const path = require('path');

// Set your Google Cloud project ID
const projectId = 'genone-410915';

// Creates a Vision API client
const visionClient = new vision.ImageAnnotatorClient();

// Creates a Translation API client
const translationClient = new TranslationServiceClient();

async function ensureDirectoryExistence(filePath) {
  const dirname = path.dirname(filePath);
  if (fs.existsSync(dirname)) {
    return true;
  }
  ensureDirectoryExistence(dirname);
  fs.mkdirSync(dirname);
}

async function quickstart() {
  // Perform label detection on the image file
  const [visionResult] = await visionClient.labelDetection('./test/images.jpg');
  const labels = visionResult.labelAnnotations;
  console.log('Labels:');
  labels.forEach(label => console.log(label.description));

  // Extract text from the image
  const [textResult] = await visionClient.textDetection('./test/images.jpg');
  const text = textResult.fullTextAnnotation.text;
  console.log('Text:', text);

  // Translate the text using the Translation API
  const request = {
    parent: `projects/${projectId}/locations/global`,
    contents: [text],
    mimeType: 'text/plain',
    sourceLanguageCode: 'en',
    targetLanguageCode: 'es',
  };

  // Run request
  const [response] = await translationClient.translateText(request);
  const translatedText = response.translations[0].translatedText;

  // Save translation to a text file
  const filePath = './output/translated_text.txt';
  ensureDirectoryExistence(filePath);
  fs.writeFileSync(filePath, translatedText, 'utf-8');

  console.log(`Translation saved to '${filePath}'`);
}

quickstart();

