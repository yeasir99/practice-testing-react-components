const isTest = String(process.env.NODE_ENV) === 'test'

module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        modules: isTest ? 'commonjs' : false,
        targets: ['last 2 versions', 'not dead', 'not < 2%'],
        useBuiltIns: 'entry',
        corejs: 3,
      },
    ],
    [
      '@babel/preset-react',
      {
        runtime: 'automatic',
      },
    ],
  ],
  plugins: [['react-refresh/babel', { skipEnvCheck: isTest && true }]],
}
