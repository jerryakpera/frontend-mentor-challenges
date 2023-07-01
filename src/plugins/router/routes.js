export default [
  { path: '/', name: 'Home', component: () => import('@/views/Home.vue') },
  {
    path: '/qr-code',
    name: 'QR Code Challenge',
    component: () => import('@/views/QRCode.vue'),
  },
];
