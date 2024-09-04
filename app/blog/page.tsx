import React from "react";

function BlogPage() {
  return (
    <div className="main_div">
      <article>
        <div className="top">
          <div className="container top_container top__container_issuite active">
            <h1 className="text-left title_text_default__title top_title">
              Google Gemini VS ChatGPT across seven standard criteria to
              determine who is AI No.1
            </h1>
            <div className="top_description">
              <p className="text-left text top_text title_text_default__paragraph">
                Which is more outstanding, Google&apos;s Gemini large model or
                OpenAI&apos;s GPT?
              </p>
              <p className="text-left text top_text title_text_default__paragraph">
                How much progress has Gemini made compared to Google&apos;s
                previous models? Currently, the company&apos;s self-touted
                Gemini Ultra, claimed to surpass GPT-4, is set to launch next
                year. However, Google&apos;s Bard chatbot has already been
                updated with the lower-end version Gemini Pro (equivalent to
                GPT-3.5).
              </p>
              <p className="text-left text top_text title_text_default__paragraph">
                The tech review website ARS TECHNICA conducted a comprehensive
                PK (Player Kill) test between Gemini Pro, GPT-3.5, and GPT-4 in
                areas such as mathematics, programming, and text generation.
                They also included test results from April for the older version
                of Bard (running the PaLM 2 model) to showcase the progress made
                by Google Bard and to demonstrate which of these AI assistants
                offers the most significant improvement in work efficiency for
                the average person.
              </p>
              <p className="text-left text top_text title_text_default__paragraph">
                The results showed that, despite the addition of Gemini Pro,
                Google&apos;s Bard chatbot still couldn&apos;t outperform
                ChatGPT in most areas. However, compared to the older version of
                Bard from eight months ago, there has been a significant
                qualitative leap.
              </p>
            </div>
          </div>
          <p>&nbsp;</p>
        </div>

        {/* Feature sections without images */}
        <div className="feature container-fluid">
          <div className="feature_items">
            <div className="feature_item_full feature_item_center">
              <h2 className="title_h3 title_default feature_title">
                First Question: Humor
              </h2>
              <h3>Prompt: Write 5 original puns</h3>
            </div>
            <div className="feature_item_full feature_item_center">
              <p className="text">
                （From top to bottom, the responses are from Gemini Pro, the
                older version of Bard, GPT-4, and GPT-3.5.）
              </p>
            </div>
          </div>
        </div>

        {/* Repeat similar structure for other questions */}
        <div className="feature container-fluid">
          <div className="feature_items">
            <div className="feature_item_full feature_item_center">
              <h2 className="title_h3 title_default feature_title">
                Second Question: Debate
              </h2>
              <h3>
                Prompt: Write a five-line debate speech between advocates of
                PowerPC processors and supporters of Intel processors, set
                around the year 2000.
              </h3>
            </div>
            <div className="feature_item_full feature_item_center">
              <p className="text">
                Compared to the older version of Bard, Gemini Pro shows
                significant progress, incorporating many industry-specific terms
                such as AltiVec instructions, RISC vs. CISC design, and MMX
                technology. These terms would not seem out of place in many tech
                forum discussions of that era.
              </p>
            </div>
          </div>
        </div>

        {/* Continue for remaining questions... */}

        <div className="feature container-fluid">
          <div className="feature_items">
            <div className="feature_item_full feature_item_center">
              <h2 className="title_h3 title_default feature_title">
                Seventh Question: Coding Ability
              </h2>
              <h3>
                Prompt: Write a Python script that inputs &apos;Hello
                World&apos; and then creates an endlessly repeating random
                string.
              </h3>
            </div>
            <div className="feature_item_full feature_item_center">
              <p className="text">
                Although Bard has been able to generate code since June, and
                Google has boasted about Gemini&apos;s AlphaCode 2 system aiding
                programmers, this test was surprisingly disappointing.
              </p>
            </div>
          </div>
        </div>

        <div className="feature container-fluid">
          <div className="feature_items">
            <div className="feature_item_full feature_item_center">
              <p className="text">
                <h3>
                  Ultimately, in the seven tests, GPT achieved an overwhelming
                  victory with 4 wins, 1 loss, and 2 draws. However, we can also
                  see that the results generated by Google&apos;s large AI
                  models have shown significant improvement in quality. In tests
                  involving mathematics, summarizing information, fact
                  retrieval, and creative writing, Bard equipped with Gemini has
                  made a significant leap compared to 8 months ago.
                </h3>
              </p>
              <p className="text">
                <h3>
                  Of course, judging such competitions involves a certain degree
                  of subjectivity. A more comprehensive and thorough testing is
                  needed to determine which is superior. Regardless, given the
                  strength that Google has demonstrated so far, the upcoming
                  Gemini Ultra is bound to be a strong competitor to GPT-4.
                </h3>
              </p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}

export default BlogPage;
