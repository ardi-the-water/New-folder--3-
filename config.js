/* config.js - minimal configuration for Nik Optic template
   Edited to match the provided Google Sheets CSV columns:
   id,name,price,stock,male or female,brand,image,description
*/
const CSV_CONFIG = {
  // Google Sheets CSV URL provided by the user:
  CSV_URL: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRwWHTReNRj0HEnGzRGV1wOf9o1-_rP7cenNDXl5qPQp5Q4xCskKvPi8_9xURpssRY80PhRaPX9970G/pub?output=csv',

  // Map CSV columns to expected fields (edit only if your headers change)
  FIELD_MAP: {
    id: 'id',
    title: 'name',
    price: 'price',
    available: 'stock',
    gender: 'male or female',
    brand: 'brand',
    image: 'image',
    description: 'description'
  },

  // Theme colors (you can change to match your logo)
  THEME_COLORS: {
    primary: '#0a6ebd',
    accent:  '#f5a524',
    bg: '#ffffff',
    'card-bg': '#ffffff',
    text: '#111827'
  },

  // Default order link (example: WhatsApp). Use {message} to inject prefilled text.
  // Example: 'https://wa.me/989123456789?text={message}'
  ORDER_DEFAULT: 'https://wa.me/+989114618006'
};
