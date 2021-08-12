import db from '../../../lib/firebase';

export default async (req, res) => {

    const userIp = process.env.ENVIRONMENT === 'development' ? req.connection.remoteAddress : req.headers['x-real-ip'];
    const total = {}

    if (req.method === 'POST') {

        const ref = db.ref('likes').child(req.query.slug);
        const usersRef = ref.child('likes'); // define o nome do objeto para o do post


        const existesLikes = await usersRef.child('likesByUser').once('value');
        const searchUserLike = await usersRef.child('likesByUser').orderByValue().equalTo(userIp).once('value');


        if (existesLikes.val() !== null) {

            if (searchUserLike.val() == null) {
                // Like
                await usersRef.child('likeCount').transaction((currentCountLike) => {
                    if (currentCountLike === null || currentCountLike === 0) {
                        return 1;
                    }

                    return currentCountLike + 1;
                });

                usersRef.child('likesByUser').push(userIp).key

            } else {
                // Dislike
                await usersRef.child('likeCount').transaction((currentCountLike) => {
                    if (currentCountLike === null || currentCountLike === 0) {
                        return 0;
                    }

                    return currentCountLike - 1;
                });


                let unlike = await usersRef.child('likesByUser').orderByValue().equalTo(userIp).once('value');
                unlike = Object.entries(unlike.val());
                const unlikeUSerId = unlike[0][0];
                console.log('unlike',)
                usersRef.child(`likesByUser/${unlikeUSerId}`).remove();
                console.log('unlike', unlikeUSerId)
            }

        } else {

            // Nenhum usuário deu like na publicação
            // Verifica se existe contador de likes para a postagem
            await usersRef.child(`likeCount`).transaction((currentCountLike) => {
                if (currentCountLike === null) {
                    return 1;
                }
                if (currentCountLike === 0) {
                    return 1;
                }
            });

            usersRef.child('likesByUser').push(userIp).key

        }

        const isLiked = await usersRef.child('likesByUser').orderByValue().equalTo(userIp).once('value');
        total.likes = await usersRef.child('likeCount').once('value');
        total.isLiked = isLiked.val() === null ? false : true;

        return res.status(200).json({ total });
    }

    if (req.method === 'GET') {
        const ref = db.ref('likes').child(req.query.slug);
        const usersRef = ref.child('likes'); // define o nome do objeto para o do post

        const isLiked = await usersRef.child('likesByUser').orderByValue().equalTo(userIp).once('value');
        total.likes = await usersRef.child('likeCount').once('value');
        total.isLiked = isLiked.val() === null ? false : true;

        return res.status(200).json({ total });
    }
};