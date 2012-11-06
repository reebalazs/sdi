from pyramid.config import Configurator

def main(global_config, **settings):
    config = Configurator()
    config.add_static_view(name='sdi_static', path='sdi:static')
    config.scan()
    return config.make_wsgi_app()
