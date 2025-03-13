import Webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import config, { devServer } from '../webpack.dev';
const PORT = 8087;

const compiler = Webpack(config);
const devServerOptions = {
 ...devServer, open: false, port: PORT
};
const server = new WebpackDevServer(devServerOptions, compiler);

const runServer = async () => {
  console.log('Starting server on port ' + PORT);
  await server.start();
};

runServer();