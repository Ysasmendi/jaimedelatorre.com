export default {
  layout: 'article.njk',
  tags: ['article'],
  eleventyComputed: {
    permalink: data => data.draft || data.page.date > new Date() ? false : `/blog/${data.page.fileSlug}/`
  }
};
