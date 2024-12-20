import express from "express";
import cors from "cors";
import { exec } from "child_process";
import path from "path";
import getScriptResults from "./utils/getScriptResults";

const app = express();
app.use(cors());
app.use(express.json());

function handleGetScriptResults() {
  const results = getScriptResults('generate_connections_json.ts');
  console.log('DEBUG - Log results from handleGetScriptResults', results);
}

// Appel automatique au démarrage
const PORT = process.env.PORT || 9999;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  handleGetScriptResults();
});
