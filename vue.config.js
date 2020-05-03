module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  
  publicPath: '/',
  chainWebpack: (config) => {
    config
        .plugin('html')
        .tap(args => {
            args[0].title = '&hearts; Surprise ME &hearts;';
            args[0].meta = {
              description: 'Surprise Me to kanapowe ubrania 🛋️ gotowe na każdą przygodę 🧘🌍 Szyte w Krakowie przez Martynę',
              author: 'Martyna Ścieszka',
              copyright: 'Copyright owner',
              robots: 'index,fallow',
              keywords: ''
            };

         return args;
    })
}
}
