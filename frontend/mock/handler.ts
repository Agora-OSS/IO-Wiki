import { http, delay, HttpResponse } from 'msw';

/** A collection of handlers to be used by default for all tests. */
export default [
  http.get('/api/users', async () => {
    return HttpResponse.json(
      [
        {
          id: 'bcff5c0e-10b6-407b-94d1-90d741363885',
          firstName: 'Rhydian',
          lastName: 'Greig',
        },
        {
          id: 'b44e89e4-3254-415e-b14a-441166616b20',
          firstName: 'Alessandro',
          lastName: 'Metcalfe',
        },
        {
          id: '6e369942-6b5d-4159-9b39-729646549183',
          firstName: 'Erika',
          lastName: 'Richards',
        },
      ],
      {
        status: 200,
      },
    );
  }),
];