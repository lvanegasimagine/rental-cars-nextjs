import Stripe from 'stripe';

export const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!, {
    apiVersion: '2024-09-30.acacia',
    typescript: true
})