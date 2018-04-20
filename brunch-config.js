exports.config = {
  files: {
    javascripts : {
      joinTo: 'js/app.js'
    },
    stylesheets: {
      joinTo: 'css/app.css',
      order: {
        after: [ 'styles/styles.scss' ]
      }
    }
  },
  modules: {
    autoRequire: {
      'js/app.js': ['src/index']
    }
  },
  plugins: {
    sass: {
      mode: 'native',
      options: {
        includePaths: ['node_modules/bulma']
      }
    },
  }
}
