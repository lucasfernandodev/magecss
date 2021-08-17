import GhostContentAPI from "@tryghost/content-api";

// Create API instance with site credentials
const api = new GhostContentAPI({
  url: process.env.API_URL,
  key: process.env.GHOST_ADMIN,
  version: "v3"
});

export async function getPosts() {
  return await api.posts
    .browse({
      limit: "all",
      include: "tags",
    })
    .catch(err => {
      console.error(err);
    });
}

export async function getSinglePost(postSlug) {

  return await api.posts
    .read({
      slug: postSlug,
      include: "tags",
    })
    .catch(err => {
      console.error(err);
    });
}

export async function getTagsAll() {
  return await api.tags.browse({ limit: "all", order: 'slug ASC' })
    .catch(err => {
      console.error(err);
    });
}

export async function getPostsFilterByTag(tag) {

  return await api.posts
    .browse({
      limit: "all",
      filter: `tags: [${tag}]`,
      include: "tags",
    })
    .catch(err => {
      console.error(err);
    });
}

export async function getPostToListBySlug(tagSlug) {
  return await api.posts
    .browse({
      limit: "5",
      filter: `tags: [${tagSlug}]`,
      fields: 'id, title, slug'
    })
    .catch(err => {
      console.error(err);
    });
};


export async function getList() {


  const respTags = await api.tags.browse({ limit: "5", include: 'count.posts', }).catch(err => { console.log(err) })


  const convertToArray = Array.from(respTags).map((item) => {

    const subscribe = {
      id: item.id,
      title: item.name,
      slug: item.slug,
      content: null,
      count: item.count,
    }

    return subscribe;
  });

  const populationPostsInList = convertToArray.map(async item => {
    item.content = await getPostToListBySlug(item.slug);
    return item;
  })

  const resultado = await Promise.all(populationPostsInList);
  return resultado
}

