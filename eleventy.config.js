export default function (eleventyConfig) {
  eleventyConfig.addGlobalData('year', new Date().getFullYear());
  eleventyConfig.addPassthroughCopy('src/assets');
  eleventyConfig.addPassthroughCopy('src/robots.txt');
  eleventyConfig.addPassthroughCopy('src/CNAME');
  eleventyConfig.addFilter('dateLabel', value => new Intl.DateTimeFormat('es', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' }).format(new Date(value)));
  eleventyConfig.addFilter('isoDate', value => new Date(value).toISOString());
  eleventyConfig.addCollection('articles', api => api.getFilteredByTag('article').filter(item => !item.data.draft && item.date <= new Date()).sort((a, b) => b.date - a.date));
  return { dir: { input: 'src', output: '_site', includes: '_includes', data: '_data' }, markdownTemplateEngine: 'njk', htmlTemplateEngine: 'njk' };
}
