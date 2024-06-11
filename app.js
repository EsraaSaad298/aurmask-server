const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

const popular_items = [
    {logo: "https://i.postimg.cc/CKmCN450/crypto-card.png", name: "Crypto Card", url: "https://crypto-card.store"},
    {logo: "https://i.postimg.cc/LX5t0Zg1/blockchair.png", name: "Blockchair", url: "https://blockchair.com/"},
    {logo: "https://i.postimg.cc/rmH16F5Y/tronscan.png", name: "Tronscan", url: "https://tronscan.org/#/" },
];

app.get('/popularItems', (req, res) => {
  res.json(popular_items);
});

app.get('/', (req, res) => {
    res.json("Hello World!");
  });

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
