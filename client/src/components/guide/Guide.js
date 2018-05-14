import React from 'react';

import Banner from '../common/Banner';
import ReactMarkdown from 'react-markdown';

import content from './guide-content';

export default () => {
  return (
    <div>
      <Banner bannerClass="guide-banner" title="Deck construction 101" subtitle="Some advices to build efficient decks" />
      <main>
        <section className="section" id="guide">
          <div className="container">
            <div className="content">
              {/* Parse markdown to HTML */}
              <ReactMarkdown source={content} />
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
