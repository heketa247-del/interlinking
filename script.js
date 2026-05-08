fetch('https://heketa247-del.github.io/interlinking/related-posts.json')
  .then(response => response.json())
  .then(data => {

    const currentPath = window.location.pathname;

    const relatedPosts = data[currentPath];

    if (!relatedPosts || relatedPosts.length === 0) {
      return;
    }

    if (document.querySelector('#seo-related-posts')) {
      return;
    }

    const block = document.createElement('div');

    block.id = 'seo-related-posts';

    block.innerHTML = `
      <div style="
        margin-top:60px;
        padding:32px;
        background:#f7f7f7;
        border-radius:20px;
      ">

        <h2 style="
          font-size:28px;
          margin-bottom:24px;
        ">
          Похожие статьи
        </h2>

        <ul style="
          margin:0;
          padding-left:20px;
        ">

          ${relatedPosts.map(post => `

            <li style="
              margin-bottom:14px;
              line-height:1.5;
            ">

              <a
                href="${post.url}"
                style="
                  color:#111;
                  text-decoration:none;
                  font-size:18px;
                "
              >
                ${post.title}
              </a>

            </li>

          `).join('')}

        </ul>

      </div>
    `;

    document.body.appendChild(block);

  })
  .catch(error => {
    console.log('Interlinking error:', error);
  });
