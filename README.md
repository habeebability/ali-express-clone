# Ali Express Clone

This is a clone of Ali Express, a popular e-commerce platform, built using Nuxt 3. It is built to improve my Nuxtjs skill. The project utilizes several packages and technologies to enhance its functionality and performance.

## LINK

[AliExpressClone](https://aliexpressss-clone.netlify.app/)

## Features

- User-friendly interface with a responsive design for optimal viewing on different devices.
- Seamless integration with Supabase for managing user authentication and real-time data synchronization.
- Tailwind CSS integration for efficient styling and customization.
- Pinia and Pinia Persistedstate for state management, ensuring a robust and scalable application.
- Prisma as an ORM to facilitate database operations and interactions.
- Stripe integration for secure and reliable payment processing.
- Nuxt Icon for a wide range of icons to enhance the visual appeal of the application.
- Nuxt Lodash for utility functions and enhanced data manipulation.

## Prerequisites

Before running the application, ensure that you have the following installed:

- Node.js (version >= 14.0.0)
- Npm (version >= 7.0.0)

## Installation

1. Clone the repository:

   ```shell
   git clone https://github.com/your-username/ali-express-clone.git
   ```

2. Navigate to the project directory:
   cd ali-express-clone

3. Install dependencies
   npm install

## Configuration

Before running the application, you need to configure certain environment variables. Create a .env file in the root directory and add the following variables:

```
supabase_url=\***\*\*\*\*\***
supabase_key=**\*\*\***
stripe_public_key=\***\*\*\*\***

```

Replace your-supabase-url and your-supabase-key with your Supabase project URL and key, respectively. Similarly, replace your-stripe-public-key with your Stripe public key.

## Usage

To start the development server, run the following command:

```
npm run dev
```

## Build

To build the application for production, use the following command:

```
npm run build

```

## Packages used

##### [@nuxtjs/supabase](https://supabase.nuxtjs.org/)

##### [@nuxtjs/tailwindcss](https://tailwindcss.nuxtjs.org/)

##### [@pinia/nuxt](https://pinia.vuejs.org/ssr/nuxt.html)

##### [@prisma/client](https://www.prisma.io/docs/concepts/components/prisma-client)

##### [@stripe/stripe-js](https://stripe.com)

##### [nuxt-icon](https://nuxt.com/modules/icons)
