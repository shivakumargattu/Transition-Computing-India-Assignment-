const express = require('express');
const app = express();
const checklistRoutes = require('./routes/checklistRoutes');

app.use(express.static('public'));
app.use('/api/checklist', checklistRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
