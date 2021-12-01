import console from "console";

import { app } from "./app";

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`SERVER ON PORT ${PORT}`));
