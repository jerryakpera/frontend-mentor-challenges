export default [
  { path: '/', name: 'Home', component: () => import('@/views/Home.vue') },
  {
    path: '/qr-code',
    name: 'QR Code Challenge',
    component: () => import('@/views/QRCode.vue'),
  },
  {
    path: '/newsletter-signup',
    name: 'Newsletter Signup',
    component: () => import('@/views/NewsletterSignup.vue'),
  },
  {
    path: '/multistep-form',
    name: 'Multistep Form',
    component: () => import('@/views/MultistepForm.vue'),
  },
];
