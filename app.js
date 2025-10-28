
// Connect To DataBase
const MongoDB = require('./Config/DataBase');
const mongoose = require("mongoose"); // Data Base Configrations
const express = require('express');
const cors = require('cors');


// Set Up Port and Make Server listen To requests
const app = express();
const PORT = 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
app.use(express.json()); // Middleware to parse JSON


app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));


const SubscriptionPlan_Routes = require('./Routes/SubscriptionPlan_Routes');
app.use('/api/v2/subscription_plans', SubscriptionPlan_Routes);
