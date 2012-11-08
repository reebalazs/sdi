from pyramid.config import Configurator

def main(global_config, **settings):
    config = Configurator()
    config.include('sdi')
    config.add_static_view(name='sdiapp_static', path='sdi_app:static')

    # Override the logo
    config.override_asset(
        to_override='sdi:static/images/pyramid-small.png',
        override_with='sdi_app:static/images/food-pyramid.png'
    )

    config.scan()
    return config.make_wsgi_app()
