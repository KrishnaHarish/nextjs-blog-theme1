import Link from 'next/link';
import { getPosts } from '../utils/mdx-utils';

import Footer from '../components/Footer';
import Header from '../components/Header';
import Layout, { GradientBackground } from '../components/Layout';
import ArrowIcon from '../components/ArrowIcon';
import { getGlobalData } from '../utils/global-data';
import SEO from '../components/SEO';

export default function Index({ posts, globalData }) {
  return (
    <Layout>
      <SEO title={globalData.name} description={globalData.blogTitle} />
      <Header name={globalData.name} />
      <main className="w-full">
        <h1 className="text-3xl lg:text-5xl text-center mb-12">
          {globalData.blogTitle}
        </h1>
        <ul className="w-full">
          {posts.map((post) => (
            <li
              key={post.filePath}
              className="md:first:rounded-t-lg md:last:rounded-b-lg backdrop-blur-lg bg-white dark:bg-black dark:bg-opacity-30 bg-opacity-10 hover:bg-opacity-20 dark:hover:bg-opacity-50 transition border border-gray-800 dark:border-white border-opacity-10 dark:border-opacity-10 border-b-0 last:border-b hover:border-b hovered-sibling:border-t-0"
            >
              <Link
                as={`/posts/${post.filePath.replace(/\.mdx?$/, '')}`}
                href={`/posts/[slug]`}
              >
                <a className="py-6 lg:py-10 px-6 lg:px-16 block focus:outline-none focus:ring-4">
                  {post.data.date && (
                    <p className="uppercase mb-3 font-bold opacity-60">
                      {post.data.date}
                    </p>
                  )}
                  <h2 className="text-2xl md:text-3xl">{post.data.title}</h2>
                  {post.data.description && (
                    <p className="mt-3 text-lg opacity-60">
                      {post.data.description}
                    </p>
                  )}
                  <ArrowIcon className="mt-4" />
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </main>
      <Footer copyrightText={globalData.footerText} />
      <GradientBackground
        variant="large"
        className="fixed top-20 opacity-40 dark:opacity-60"
      />
      <GradientBackground
        variant="small"
        className="absolute bottom-0 opacity-20 dark:opacity-10"
      />
      <div className='tableauPlaceholder' id='viz1685597832281' style={{ position: 'relative' }}>
        <noscript>
          <a href='#'><img alt='Dashboard 1' src='https://public.tableau.com/static/images/so/socialmedia_16853842767100/Dashboard1/1_rss.png' style={{ border: 'none' }} /></a>
        </noscript>
        <object className='tableauViz' style={{ display: 'none' }}>
          <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' />
          <param name='embed_code_version' value='3' />
          <param name='site_root' value='' />
          <param name='name' value='socialmedia_16853842767100/Dashboard1' />
          <param name='tabs' value='no' />
          <param name='toolbar' value='yes' />
          <param name='static_image' value='https://public.tableau.com/static/images/so/socialmedia_16853842767100/Dashboard1/1.png' />
          <param name='animate_transition' value='yes' />
          <param name='display_static_image' value='yes' />
          <param name='display_spinner' value='yes' />
          <param name='display_overlay' value='yes' />
          <param name='display_count' value='yes' />
          <param name='language' value='en-GB' />
          <param name='filter' value='publish=yes' />
        </object>
        <script type='text/javascript'>
          var divElement = document.getElementById('viz1685597832281');
          var vizElement = divElement.getElementsByTagName('object')[0];
          if (divElement.offsetWidth > 800) {
            vizElement.style.minWidth = '420px';
            vizElement.style.maxWidth = '950px';
            vizElement.style.width = '100%';
            vizElement.style.minHeight = '587px';
            vizElement.style.maxHeight = '887px';
            vizElement.style.height = divElement.offsetWidth * 0.75 + 'px';
          } else if (divElement.offsetWidth > 500) {
            vizElement.style.minWidth = '420px';
            vizElement.style.maxWidth = '950px';
            vizElement.style.width = '100%';
            vizElement.style.minHeight = '587px';
            vizElement.style.maxHeight = '887px';
            vizElement.style.height = divElement.offsetWidth * 0.75 + 'px';
          } else {
            vizElement.style.width = '100%';
            vizElement.style.height = '1727px';
          }
          var scriptElement = document.createElement('script');
          scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
          vizElement.parentNode.insertBefore(scriptElement, vizElement);
        </script>
      </div>
    </Layout>
  );
}

export function getStaticProps() {
  const posts = getPosts();
  const globalData = getGlobalData();

  return { props: { posts, globalData } };
}
