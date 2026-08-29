KKZONE — GitHub Copilot Instructions
Project

KKZONE is a Next.js e-commerce website for an online product-reselling business in Karachi, Pakistan.

Repository:

GitHub: kkzone754/kkzone
Main branch: main

Tech stack:

Next.js 16.2.10
React
TypeScript
Tailwind CSS
Firebase
Vercel
WhatsApp ordering
Core Development Principle

Reliability comes before features.

Do not add new features while important existing functionality is broken.

The priority is:

Correctness
Reliability
User experience
Performance
New features
Polish

Never sacrifice a working shopping flow just to add more features.

Before Making Changes

Always:

Inspect the relevant existing files.
Understand the current architecture.
Identify the exact cause of the issue.
Check which components depend on the code being changed.
Make the smallest safe change.
Test the change.
Check for TypeScript, runtime and console errors.

Do not immediately rewrite large parts of the project.

Do not modify unrelated files.

Do not create unnecessary components, files or dependencies.

Existing Project

Important project areas include:

app/components
app/data
app/lib
app/sections
app/cart
app/categories
app/checkout
app/context
app/product
app/shop
docs
public/products

Important existing files may include:

app/context/CartContext.tsx
app/data/products.ts
Product components
Navbar components
Checkout components
Product detail route

Always inspect the current repository instead of assuming the implementation.

DEVELOPMENT ROADMAP

Follow this order unless explicitly instructed otherwise.

PHASE 1 — BUGS

Do not move to major new features until the core shopping flow is reliable.

Priority:

Cart data consistency
Cart quantity
Cart price and total
LocalStorage persistence
Hydration mismatch
Product [id] routing
Product detail page
ProductCard Add to Cart
Checkout calculations
WhatsApp order generation
Navbar cart counter
Categories showing correct products
Important console errors = 0
PHASE 2 — WEBSITE QUALITY

After Phase 1:

Fast loading
Mobile responsiveness
Smooth animations
Product card improvements
Better buttons
Hover effects
Loading states
Empty-cart state
Error/not-found states
Image optimization

Do not use excessive animations.

The website must remain fast and usable.

PHASE 3 — BUSINESS FEATURES

After Phase 2:

Product search
Category filtering
Color selection improvements
Quantity selection improvements
Cart persistence improvements
Customer details in checkout
WhatsApp order generation
Delivery information
Order policy
Return policy
Customer trust sections
Featured products
Discounts and badges
PHASE 4 — PRODUCTION

After the website is stable:

GitHub
Production build
Firebase configuration
Environment variables
Vercel deployment
Production testing
Mobile testing
SEO
Security
Final launch

Before deployment, verify:

TypeScript passes
ESLint passes
Production build succeeds
No important runtime errors
No important browser console errors
PHASE 5 — POLISH

After the core system is stable:

SEO
Metadata
Favicon
Logo
Open Graph image
Performance optimization
Sitemap
robots.txt
Product metadata
Security improvements
CART RULES

The cart is business-critical.

Expected functionality:

Add product
Add same product → increase quantity
Different color → separate cart item where appropriate
Remove product
Increase quantity
Decrease quantity
Cart counter
Total items
Subtotals
Grand total
LocalStorage persistence

Cart data must be validated before use.

Never blindly trust LocalStorage data.

Invalid values must not produce:

NaN
undefined
negative quantities
invalid prices
broken UI

Expected LocalStorage key:

kkzone-cart

PRODUCT RULES

Product data currently exists in:

app/data/products.ts

Product data should remain consistent.

Possible fields include:

id
name
price
image
category
rating
badge
colors
description
stock
featured
discount
originalPrice

Do not perform a large data-model migration unless it is necessary for the requested task.

NEXT.JS RULES

This project uses Next.js 16.2.10.

Next.js 16 has important changes compared with older versions.

When working with dynamic routes such as:

/product/[id]

verify the current Next.js 16 behavior before changing the implementation.

Do not blindly apply older Next.js tutorials or patterns.

The existing AGENTS.md file contains an important Next.js-specific instruction and should be respected.

HYDRATION

Be careful with client-only state such as LocalStorage and cart information.

Do not render different server and client markup unnecessarily.

If a hydration error occurs:

Identify the exact server/client mismatch.
Find the source.
Fix the cause.
Test the affected page again.

Do not hide hydration errors.

CHECKOUT

Checkout must calculate totals reliably.

Customer information may include:

Full name
Phone
City
Complete address

Order summary should correctly show:

Product
Color
Quantity
Price
Subtotal
Total items
Grand total

Never trust invalid client-side quantities or prices.

WHATSAPP ORDERING

Current business WhatsApp number:

923218258573

Do not change this number unless explicitly instructed.

WhatsApp order generation should contain relevant order information, including:

Product name
Color
Quantity
Price
Subtotal
Total items
Grand total
Customer information where appropriate

Do not generate fake order confirmations.

CATEGORIES

Current categories include:

Electronics
Watches
Mobile Accessories
Gift Items
Pet Supplies
Home Essentials

Category filtering/routing must return the correct products.

Be careful about inconsistent category casing or spelling.

Do not assume:

Watches

and

watches

are automatically equivalent everywhere.

USER EXPERIENCE

The website should be:

Fast
Responsive
Mobile-friendly
Clear
Professional
Easy to navigate

Avoid:

unnecessary loading
excessive animations
horizontal scrolling
tiny unusable buttons
confusing navigation
broken links
blank error screens

Important responsive widths include:

320px
375px
390px
414px
768px
1024px
1440px
ERROR HANDLING

Provide appropriate states for:

Product not found
Empty cart
Loading
Runtime errors where appropriate

Do not hide errors simply to make the UI appear functional.

PERFORMANCE

Prefer:

Next.js Image
efficient components
appropriate server/client boundaries
optimized images
minimal unnecessary JavaScript
reasonable animations
efficient data loading

Do not make every component a client component.

Do not add a dependency when the existing stack can solve the problem cleanly.

SECURITY

Never:

expose secrets
commit private API keys
hardcode sensitive credentials
trust user input blindly
trust client-side prices blindly
trust client-side quantities blindly

Validate important input and product information.

Protect admin functionality if an admin system is introduced.

BUSINESS POLICIES

Do not invent:

delivery prices
delivery times
return rules
refund rules
fake reviews
fake ratings
fake customer claims

If business information is required but not defined, ask the developer/user before publishing it.

Return policy should be controlled and clearly communicated rather than automatically removing all returns.

TESTING AFTER CHANGES

After making a change, verify the affected functionality.

When appropriate, run:

npm run lint

and:

npm run build

Also check:

TypeScript errors
Runtime errors
Browser console
Mobile layout
Existing functionality

Do not claim a task is complete if it has not been tested.

GIT SAFETY

The repository uses:

main

Do not use force push unless explicitly instructed.

Do not overwrite unrelated work.

Do not delete files unless:

They are confirmed unnecessary, or
The requested task requires deletion.

Keep changes focused and reviewable.

TASK REPORTING

After completing a task, report:

What was changed
Which files were changed
Why the changes were necessary
What was tested
Any remaining issues

Do not silently make unrelated changes.

MASTER RULE

Before adding features:

Make the existing website reliable.

Before optimizing:

Make the functionality correct.

Before deploying:

Make the production build pass.

Before claiming completion:

Test the actual user flow.

KKZONE should become a reliable e-commerce website, not simply a website with many features.