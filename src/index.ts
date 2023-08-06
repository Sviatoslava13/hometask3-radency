import express from "express";
import cors from "cors";
import router from "routes/routes";
const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/notes', router);

app.listen(4000, () => {
  console.log("Server running. Use our API on port: 4000");
});

app.use((_, res: express.Response) => {
  res.status(404).json({ message: "Not found" });
});
