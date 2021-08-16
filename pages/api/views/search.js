import db from '../../../lib/firebase';


const search = async (req, res) => {

  if (req.method === 'GET') {

    const snapshot = await db.ref('views').once('value');
    const views = snapshot.val();

    return res.status(200).json({ result: views });
  }

};

export default search;