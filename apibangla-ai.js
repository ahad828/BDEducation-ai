export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).send('Method not allowed');
    return;
  }
  const { question } = req.body;
  const staticAnswer = `এই একটি ডেমো উত্তর। তুমি লিখেছো: "${question}"`;
  res.status(200).json({ answer: staticAnswer });
}
