module.exports = require('enb/techs/css-stylus').buildFlow()
    .name('css-stylus')
    .methods({
        _configureRenderer: function (renderer) {
            var nib;
            try {
                nib = require('nib');
            } catch (e) {
                throw new Error(
                    'The technology "css-stylus" cannot be executed ' +
                    'because the npm module "nib" was not found.'
                );
            }

            renderer
                .include(require('nib').path)
                .include('libs/bem-stylus-lib')
                .import('nib')
                .import('vars')
                .import('mixins');
            return renderer;
        }
    })
    .createTech();
