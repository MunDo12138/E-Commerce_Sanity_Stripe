# E-Commerce Store with Sanity CMS & Stripe Payments

A modern, full-stack e-commerce application built with Next.js, featuring Sanity CMS for content management and Stripe for secure payment processing.

![image](https://github.com/MunDo12138/E-Commerce_Sanity_Stripe/assets/66548936/9a941176-9f8f-4b73-8ac9-8759f2540026)

![image](https://github.com/MunDo12138/E-Commerce_Sanity_Stripe/assets/66548936/bf2c793e-d053-4156-9df6-29712e9ae9c5)

![image](https://github.com/MunDo12138/E-Commerce_Sanity_Stripe/assets/66548936/197ca4b9-46a2-4a5b-b199-dd298fc163d2)

## Features

- **Modern E-commerce Interface**: Clean, responsive design with product listings and detailed product pages
- **Shopping Cart**: Full cart functionality with add/remove items, quantity adjustments, and real-time price calculations
- **Secure Payments**: Integrated Stripe checkout with support for multiple shipping options
- **Content Management**: Sanity CMS for easy product and banner management
- **Real-time Updates**: Dynamic content updates without page refreshes
- **Toast Notifications**: User-friendly feedback for cart actions
- **Responsive Design**: Optimized for desktop and mobile devices

## Tech Stack

### Frontend
- **Next.js 12.1.0** - React framework with SSR/SSG capabilities
- **React 17.0.2** - UI library
- **React Context API** - State management for cart functionality
- **React Hot Toast** - Notification system
- **React Icons** - Icon library
- **Canvas Confetti** - Success animations

### Backend & Services
- **Sanity CMS** - Headless content management system
- **Stripe** - Payment processing platform
- **Next.js API Routes** - Serverless backend functions

### Styling
- **CSS3** - Custom styling with global styles

## Project Structure

```
├── components/           # Reusable UI components
│   ├── Cart.jsx         # Shopping cart component
│   ├── Footer.jsx       # Footer component
│   ├── FooterBanner.jsx # Footer banner component
│   ├── HeroBanner.jsx   # Hero section component
│   ├── Layout.jsx       # Main layout wrapper
│   ├── Navbar.jsx       # Navigation component
│   └── Product.jsx      # Product card component
├── context/             # React Context providers
│   └── StateContext.js  # Global state management
├── lib/                 # Utility functions
│   ├── client.js        # Sanity client configuration
│   ├── getStripe.js     # Stripe client setup
│   └── utils.js         # Helper functions
├── pages/               # Next.js pages
│   ├── api/             # API routes
│   │   └── stripe.js    # Stripe payment processing
│   ├── product/         # Dynamic product pages
│   ├── index.js         # Homepage
│   └── success.js       # Payment success page
├── sanity_ecommerce/    # Sanity CMS configuration
├── assets/              # Static images and media
└── styles/              # Global styles
```

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Sanity account
- Stripe account

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/MunDo12138/E-Commerce_Sanity_Stripe.git
   cd E-Commerce_Sanity_Stripe
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Sanity CMS**
   ```bash
   cd sanity_ecommerce
   npm install
   ```

4. **Environment Variables**
   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_SANITY_TOKEN=your_sanity_token
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
   STRIPE_SECRET_KEY=your_stripe_secret_key
   ```

5. **Run the development servers**
   
   Start the Next.js app:
   ```bash
   npm run dev
   ```
   
   Start Sanity Studio (in a separate terminal):
   ```bash
   cd sanity_ecommerce
   npm run dev
   ```

6. **Access the applications**
   - Frontend: http://localhost:3000
   - Sanity Studio: http://localhost:3333

## Configuration

### Sanity Setup
- Project ID: `nwjcx514`
- Dataset: `production`
- API Version: `2023-05-01`

### Stripe Configuration
The application supports:
- Card payments
- Adjustable quantities in checkout
- Multiple shipping options
- Automatic billing address collection

## Available Scripts

### Frontend
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Sanity CMS
- `npm run dev` - Start Sanity Studio
- `npm run build` - Build Sanity Studio
- `npm run deploy` - Deploy Sanity Studio

## Key Components

### StateContext
Manages global application state including:
- Shopping cart items
- Total price and quantities
- Cart visibility
- Product quantity controls

### Stripe Integration
- Secure checkout sessions
- Dynamic product data from Sanity
- Image URL transformation for Stripe
- Success/cancel URL handling

### Sanity Integration
- Real-time content updates
- Image optimization with `@sanity/image-url`
- Flexible content schemas
- CDN-optimized asset delivery

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Support

For support, please open an issue in the GitHub repository.

