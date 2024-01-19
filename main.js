import "dotenv/config";
import OpenAI from "openai";
import { MemoryVectorStore } from "langchain/vectorstores/memory";
import { OpenAIEmbeddings } from "langchain/embeddings/openai";
import { YoutubeLoader } from "langchain/document_loaders/web/youtube";
import { CharacterTextSplitter } from "langchain/text_splitter";
import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
const rl = readline.createInterface({ input, output });

const createYoutubeVideoStore = async (videoLink) => {
  const loader = YoutubeLoader.createFromUrl(videoLink, {
    language: "en",
    addVideoInfo: true,
  });

  const docs = await loader.loadAndSplit(
    new CharacterTextSplitter({
      separator: " ",
      chunkSize: 2500,
      chunkOverlap: 100,
    })
  );

  const store = await MemoryVectorStore.fromDocuments(
    docs,
    new OpenAIEmbeddings()
  );

  return store;
};

const startChat = async () => {};

const main = async () => {
  console.log(
    "Paste a YouTube link and then ask me any questions about the YouTube video"
  );

  const youTubeLink = await rl.question("YouTube Link: ");
  if (youTubeLink.trim() === "" || youTubeLink.toLowerCase() === "exit") {
    rl.close();
    return;
  }

  const store = await createYoutubeVideoStore(youTubeLink);
  console.log(store);
};

main();
