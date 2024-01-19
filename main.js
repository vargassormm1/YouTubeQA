import "dotenv/config";
import OpenAI from "openai";
import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
const rl = readline.createInterface({ input, output });

const loadYoutubeVideo = async (videoLink) => {};

const startChat = async () => {};

const main = async () => {};
