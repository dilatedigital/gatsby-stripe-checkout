import React from "react"

import Layout from "../components/layout"
import Seo from "../components/SEO"

import Skus from "../components/Products/Skus"
import CartOverview from "../components/CartOverview"

import { loadStripe } from "@stripe/stripe-js"
import { CartProvider } from "use-shopping-cart"

const stripePromise = loadStripe(process.env.GATSBY_STRIPE_PUBLISHABLE_KEY)

const url = typeof window !== "undefined" ? window.location.origin : null

const CartExample = () => (
  <Layout>
    <Seo title="Bins" />
    <CartProvider
      mode="client-only"
      stripe={stripePromise}
      successUrl={`${url}/page-2/`}
      cancelUrl={`${url}/`}
      currency="AUD"
      allowedCountries={["AU"]}
      billingAddressCollection={true}
    >
      <CartOverview />
      <Skus />
    </CartProvider>
  </Layout>
)

export default CartExample
