import http from 'k6/http';
import { check } from 'k6';

export let options = {
  vus: 10,              // Usuarios virtuales
  duration: '30s',      // Duración de la prueba
  thresholds: {
    http_req_failed: ['rate<0.01'],   // Menos del 1% de errores
    http_req_duration: ['p(95)<500'], // 95% de respuestas < 500ms
  },
};

export default function () {
  let res = http.get('https://test-api.k6.io/public/crocodiles/');
  check(res, { 'status is 200': (r) => r.status === 200 });
}
