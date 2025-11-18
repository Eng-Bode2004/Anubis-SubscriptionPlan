const express = require('express');
const router = express.Router();
const SubscriptionPlan_Controller = require('../Controllers/SubscriptionPlan_Controllers');

// Create new subscription plan
router.post('/', SubscriptionPlan_Controller.createPlan);

// Get all subscription plans
router.get('/', SubscriptionPlan_Controller.getAllPlans);

// Get subscription plan by ID
router.get('/:id', SubscriptionPlan_Controller.getPlanById);

router.delete('/:id',SubscriptionPlan_Controller.deletePlanById)

module.exports = router;
