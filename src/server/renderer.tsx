import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import App from "../client/App";

type Props = {
  url: string;
  pageData: unknown;
};

const createHtml = async ({ url, pageData }: Props) => {
  const pageElemHtml = ReactDOMServer.renderToString(
    <StaticRouter location={url}>
      <App serverData={pageData} />
    </StaticRouter>
  );

  return `<html>
  <head>
    <title>SSR practice</title>
  </head>
  <body>
    <div id="root" data-react="${JSON.stringify(
      pageData
    )}">${pageElemHtml}</div>
    <script src="/public/client.js"></script>
  </body>
</html>`;
};

export default createHtml;
