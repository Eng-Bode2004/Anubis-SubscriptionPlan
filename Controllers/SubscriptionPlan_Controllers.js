const SubscriptionPlan_Service = require('../Services/SubscriptionPlan_Services');

class SubscriptionPlan_Controller {
    async createPlan(req, res) {
        try {
            const planData = req.body;
            if (!planData.name || !planData.price || !planData.duration_days) {
                return res.status(400).json({
                    success: false,
                    message: 'Missing required fields: name, price, duration_days, or Admin_Profile'
                });
            }

            const newPlan = await SubscriptionPlan_Service.createSubscriptionPlan(planData);
            res.status(201).json({
                success: true,
                message: 'Subscription plan created successfully',
                data: newPlan
            });
        } catch (error) {
            res.status(500).json({ success: false, message: error.message });
        }
    }

    async getAllPlans(req, res) {
        try {
            const plans = await SubscriptionPlan_Service.getAllPlans();
            res.status(200).json({
                success: true,
                message: 'All subscription plans retrieved successfully',
                data: plans
            });
        } catch (error) {
            res.status(500).json({ success: false, message: error.message });
        }
    }

    async getPlanById(req, res) {
        try {
            const { id } = req.params;
            const plan = await SubscriptionPlan_Service.getPlanById(id);
            res.status(200).json({
                success: true,
                message: 'Subscription plan retrieved successfully',
                data: plan
            });
        } catch (error) {
            res.status(500).json({ success: false, message: error.message });
        }
    }
}

module.exports = new SubscriptionPlan_Controller();
