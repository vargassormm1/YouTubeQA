# AI-powered YouTube Video Analysis Terminal App

Terminal application that deeply analyzes and provide insights into the content of YouTube videos using OpenAI and Langchain. This application parses through YouTube video transcripts and allows users to interactively query specific details or obtain comprehensive summaries about the YouTube video.

## Installation

1. **Clone the Repository**
   - Clone the repository to your local machine using the following command:
     ```bash
     git clone https://github.com/vargassormm1/YouTubeQA.git
     ```

2. **Navigate to the Project Directory**
   - Change directory to the project folder:
     ```bash
     cd YouTubeQA
     ```

3. **Install Dependencies**
   - Ensure you have Node.js installed on your system. Then, execute the following command to install all required dependencies:
     ```bash
     npm install
     ```

4. **Configure Environment Variables**
   - Create a `.env` file in the root directory of the project. Add your OpenAI API key to the file like so:
     ```plaintext
     OPENAI_API_KEY=your_openai_api_key_here
     ```

## Usage

1. **Launch the Application**
   - Start the application by running the following command in your terminal:
     ```bash
     npm start
     ```

2. **Enter YouTube Link**
   - When prompted, paste the URL of the YouTube video you wish to analyze directly into the terminal.

3. **Query the Content**
   - After the video content is processed, you can start asking questions about the video content. The AI will provide responses based on the video's transcript.

4. **Terminate the Application**
   - To exit the application, simply type `exit` at any prompt.

## How It Works

- **YouTube Video Processing:** The application uses YoutubeLoader to fetch and process the transcript of the specified YouTube video.
- **Transcript Segmentation:** `CharacterTextSplitter` segments the transcript into smaller, more manageable sections for analysis.
- **Content Vectorization:** `MemoryVectorStore`, along with `OpenAIEmbeddings`, creates a searchable vector space of the video content.
- **Interactive Questioning:** The application provides a user-friendly terminal interface for users to ask questions. These questions are processed by OpenAI's language models to provide accurate and context-rich answers.

## Dependencies

This project makes use of several dependencies to function properly:

- **Langchain:** Utilized for loading documents and segmenting text.
- **OpenAI Node.js Library:** Enables interaction with OpenAI's language models.
- **Dotenv:** Manages environment variables for the project.
- **YouTube Transcript and YouTubei.js:** These libraries are used for fetching and processing YouTube video content.
