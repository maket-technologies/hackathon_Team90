import { useEffect } from 'react';
import Head from 'next/head';
import ErrorPage from 'next/error';
import { useRouter } from 'next/router';
import { withDocsLayout } from '../../hocs/with-docs-layout';
import { gtm } from '../../lib/gtm';

const Article = (props) => {
  const { article } = props;
  const router = useRouter();

  useEffect(() => {
    gtm.push({ event: 'page_view' });
  }, []);

  if (!router.isFallback && !article?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <div>
    </div>
  );
};

export default withDocsLayout(Article);
