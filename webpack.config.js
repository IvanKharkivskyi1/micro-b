new ModuleFederationPlugin({
    name: 'microB',
    filename: 'remoteEntry.js',
    exposes: {
      './App': './src/App',
    },
  });
  