def includeme(config):
    config.include('pyramid_layout')
    config.add_static_view(name='sdi_static', path='sdi:static')
    config.scan('.layouts')
    config.scan('.panels')