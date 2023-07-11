const openAiConfig = () => {
    const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
  });
  return configuration;
}

module.exports = configuration;

