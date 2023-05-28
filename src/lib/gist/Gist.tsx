type GitHubGistProps = {
  id: string;
  file?: string;
  iframeStyle?: string;
  style?: React.CSSProperties;
};

const defaultStyle = '<style>*{font-size:12px;}</style>';

export function GitHubGist({ id, file, iframeStyle = defaultStyle }: GitHubGistProps) {
  const fileArg = `?file=${file}`;
  const gistURL = `https://gist.github.com/${id}.js${file ? fileArg : ''}`;
  const iframeId = file ? `gist-${id}-${file}` : `gist-${id}`;
  const iframeHtml = `
<html>
  <head>
    <base target="_parent">
    <style>
      body {
        margin: 0;
      }
      ${iframeStyle}
    </style>
  </head>
  <body  >
    <script type="text/javascript" src="${gistURL}"></script>
    <script>
      const observer = new ResizeObserver(entries => {
        // HTML height may not be the same as body height, so we use the parentElement's height
        // HTML real height may be float, but clientHeight is int, so we use getBoundingClientRect to get the real height
        var htmlHeight = entries[0].target.parentElement.getBoundingClientRect().height;
        parent.document.getElementById('${iframeId}').style.height = htmlHeight+ 'px';
      });
      observer.observe(document.body);
    </script>
  </body>
</html>`;

  return <iframe width="100%" id={iframeId} srcDoc={iframeHtml} />;
}
