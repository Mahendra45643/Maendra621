const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000; // Use the desired port number for your application
app.get('/trains', async (req, res) => {
  try {
    const API_URL = 'http://104.211.219.98'; // Replace with the actual API endpoint URL
    const response = await axios.get('http://104.211.219.98/train/register');
    // Process the train data, filter out trains departing in the next 30 minutes, handle delays, and sort the trains
    // Return the sorted train data as the API response
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
