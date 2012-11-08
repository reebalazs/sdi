from pyramid.config import Configurator
from sdi.config import includeme

def main(global_config, **settings):
    config = Configurator()
    config.include('pyramid_layout')
    config.add_static_view(name='sdi_static', path='sdi:static')
    config.scan()
    return config.make_wsgi_app()
