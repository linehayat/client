import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const rating = parseInt(req.body.rating);

    fetch(process.env.DATABASE_API as string, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        rating: isNaN(rating) ? req.body.rating : rating,
        message: req.body.message,
        feedbackTimestamp: new Date(),
      }),
    })
    .then((response) => {
      if (response.status === 200) {
        res.status(201);
      } else {
        res.status(500);
        console.error('ERROR:', response.status, response.statusText);
      }
    })
    .catch((error) => {
      res.status(500);
      console.error('ERROR:', error)
    })
    .finally(() => res.end());
  } else {
    res.status(405).end();
  }
}
