const SubscriptionPlan = require('../Models/SubscriptionPlan_Schema');

class SubscriptionPlan_Service {
    async createSubscriptionPlan(planData) {
        try {
            const newPlan = new SubscriptionPlan(planData);
            await newPlan.save();
            return newPlan;
        } catch (error) {
            throw new Error(error.message || 'Error creating subscription plan');
        }
    }

    async getAllPlans() {
        try {
            return await SubscriptionPlan.find()
        } catch (error) {
            throw new Error(error.message || 'Error fetching subscription plans');
        }
    }

    async getPlanById(planId) {
        try {
            const plan = await SubscriptionPlan.findById(planId)
            if (!plan) throw new Error('Subscription plan not found');
            return plan;
        } catch (error) {
            throw new Error(error.message || 'Error fetching subscription plan');
        }
    }
}

module.exports = new SubscriptionPlan_Service();
