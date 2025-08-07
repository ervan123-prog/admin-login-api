// Replit index.js dosyası
const express = require('express');
const cors = require('cors'); // Yeni eklendi!
const app = express();

app.use(cors()); // Bu satır kritik!
app.use(express.json());

const users = {
  admin: '2025BAYT',
  organizer: 'BOSPHORUS2025'
};

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (users[username] && users[username] === password) {
    res.json({ success: true });
  } else {
    res.status(401).json({ success: false });
  }
});

app.listen(3000, () => console.log('Sunucu çalışıyor'));