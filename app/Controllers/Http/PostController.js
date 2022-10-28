'use strict'

const Post = use('App/Models/Post');

class PostController {

    async getPosts()
    {
        const posts = await Post.all();
        return posts;
    }

    async storePost( { request } )
    {
        const dados = request.only(['titulo', 'corpo']);
        try {
            const post = await Post.create(dados);
            return post;
        } catch (error) {
            return error;
        }
    }

    async updatePost( { request } )
    {
        const { titulo, corpo, id } = request.all();

        try {
            const post = await Post.find(id);

            const att = await post.merge({
                titulo,
                corpo
            });

            const result = await post.save();

            return post;


        } catch (error) {
            
        }

    }

    async destroyPost( {request} )
    {
        const { id } = request.all();
        try {
            const poste = await Post.find(id);

            const result = await poste.delete();

            return result;

        } catch (error) {
            return error;
        }
    }

}

module.exports = PostController
