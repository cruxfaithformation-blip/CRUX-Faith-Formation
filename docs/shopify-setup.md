# CRUX Store — Shopify + Printful Setup Guide

## Overview

The store runs on two tracks:
- **Apparel** — Designed in Canva, fulfilled automatically via Printful (drop ship, Bella+Canvas)
- **Devotionals & Saint Cards** — Sourced manually, fulfilled by you

Both tracks live in one Shopify store. Printful handles apparel orders end-to-end. You handle devotional inventory and ship yourself.

---

## Step 1 — Create Your Shopify Account

1. Go to [shopify.com](https://shopify.com) → Start free trial
2. Use **Basic plan ($39/mo)** — sufficient for this store size
3. Store name: `CRUX` (or `CRUX Faith` if taken)
4. Skip theme selection for now (you'll use Buy Buttons embedded in cruxfaith.com, not a Shopify theme)

---

## Step 2 — Set Up a Custom Domain

Point a subdomain at Shopify so the checkout feels on-brand.

1. In Shopify Admin → Settings → Domains → Buy new domain **or** Connect existing domain
2. Recommended subdomain: `shop.cruxfaith.com`
3. In your DNS (wherever cruxfaith.com is registered), add a CNAME:
   ```
   shop  →  shops.myshopify.com
   ```
4. Back in Shopify, verify the domain. SSL is automatic.

---

## Step 3 — Install Printful

Printful is the drop shipper for apparel. When a customer orders a shirt, Printful prints and ships it — you never touch inventory.

1. In Shopify Admin → Apps → App Store → search **Printful**
2. Install and connect your Printful account (create one at printful.com if needed)
3. In Printful dashboard → Stores → Connect → select your Shopify store

---

## Step 4 — Create Apparel Products in Printful

Do this for each apparel item (tee, hoodie, etc.):

1. Printful dashboard → Products → Add Product
2. Select product type: **T-Shirt** → choose **Bella+Canvas 3001** (unisex tee)
3. Upload your Canva design (export as PNG, 300 DPI, transparent background)
4. Set print placement (front chest is standard; sleeve for scripture reference)
5. Choose color options to offer (black, navy, white recommended)
6. Set your **retail price** — Printful shows their base cost, you set the markup
   - Bella+Canvas tee base cost: ~$13–15
   - Suggested retail: $32–38 (leaves $17–23 margin after Printful + Shopify fees)
7. Click **Submit to Store** — the product syncs to Shopify automatically

Repeat for hoodie (Bella+Canvas 3719), long sleeve, etc.

---

## Step 5 — Create Devotional & Saint Card Products Manually

For items you source yourself (rosaries, journals, card packs):

1. Shopify Admin → Products → Add Product
2. Fill in title, description, price
3. Upload product photos
4. Under **Shipping**: enter weight and dimensions
5. Set inventory quantity (you'll fulfill these yourself)
6. Under **Fulfillment**: set to **Manual** (not Printful)

For saint card packs, if they're physical printed cards: same process. If they're digital, use **Digital Downloads** app from the Shopify App Store.

---

## Step 6 — Connect the Store to cruxfaith.com

The cleanest approach is **Shopify Buy Buttons** — small embeds that let someone add to cart and checkout without leaving cruxfaith.com.

1. Shopify Admin → Sales Channels → Buy Button
2. Select a product → Generate embed code
3. In `crux-store.html`, replace the `btn-shop.soon` button for that product with the embed code
4. Shopify handles the cart drawer and checkout flow

Alternatively, link directly to product pages on `shop.cruxfaith.com`. Simpler, less integrated.

**To swap a "Coming Soon" button for a live Shopify link:**

Find the product card in `crux-store.html` and change:
```html
<!-- Before -->
<div class="product-price tbd">Price TBD</div>
<button class="btn-shop soon">Coming Soon</button>

<!-- After (direct link) -->
<div class="product-price">$32</div>
<a class="btn-shop live" href="https://shop.cruxfaith.com/products/scripture-tee" target="_blank">Shop Now →</a>

<!-- Or paste Shopify Buy Button embed code here instead -->
```

Also remove the `soon-ribbon` div from the product image wrap.

---

## Step 7 — Payments & Tax

1. Shopify Admin → Settings → Payments
2. Enable **Shopify Payments** (no transaction fees, cards accepted instantly)
3. Add PayPal as a second option if desired
4. Settings → Taxes → Shopify calculates automatically by region

---

## Step 8 — Test Before Going Live

1. Use Shopify's **Bogus Gateway** (in payment settings) to place a test order
2. Confirm Printful receives the apparel order and shows it as "pending production"
3. Confirm manual products show in your Shopify orders dashboard
4. Remove the Coming Soon hero note from `crux-store.html` and the `soon-ribbon` divs when ready

---

## Fulfillment Workflow Summary

| Product type | Who fulfills | How |
|---|---|---|
| Apparel (tees, hoodies) | Printful | Automatic — order flows to Printful, they print and ship |
| Rosaries, jewelry | You | Manual — Shopify notifies you, you pack and ship |
| CRUX Prayer Journal | You | Manual — same as above |
| Saint Card Packs (physical) | You | Manual — same as above |
| Saint Card Packs (digital) | Automatic | Shopify Digital Downloads app sends file by email |

---

## Recommended Printful Products (Bella+Canvas)

| Item | Printful SKU | Base Cost |
|---|---|---|
| Unisex T-Shirt | Bella+Canvas 3001 | ~$13–15 |
| Unisex Hoodie | Bella+Canvas 3719 | ~$27–30 |
| Long Sleeve Tee | Bella+Canvas 3501 | ~$17–19 |
| Crop Tee | Bella+Canvas 6682 | ~$16–18 |
| Tank | Bella+Canvas 3480 | ~$14–16 |

All available in the colors CRUX uses (black, navy, ash/white).
