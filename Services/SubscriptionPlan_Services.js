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

    async deletePlanById(planId) {
        try {
            const deletedPlan = await SubscriptionPlan.findByIdAndDelete(planId);

            if (!deletedPlan) {
                throw new Error('Subscription plan not found');
            }

            return deletedPlan;

        } catch (error) {
            throw new Error(error.message || 'Error deleting subscription plan');
        }
    }
}

module.exports = new SubscriptionPlan_Service();
