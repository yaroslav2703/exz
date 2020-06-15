const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express();
app.use('/static', express.static('public'));

app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`);
})