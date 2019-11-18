/* REF: This is being used by the VSCode extention (I think), see
 * https://medium.com/@sean_27490/svelte-sapper-with-sass-271fff662da9
*/
const sveltePreprocess = require('svelte-preprocess');
module.exports = {
  preprocess: sveltePreprocess({
    scss: {
      includePaths: ['src'],
    },
    postcss: {
      plugins: [require('autoprefixer')],
    },
  }),
};
