from pyramid_layout.layout import layout_config

from sdi.layouts import SDIMainLayout

@layout_config(
    template='sdi:templates/main_layout.pt'
)
class SDIAppMainLayout(SDIMainLayout):

    # Override just the project title
    @property
    def project_title(self):
        return 'My App'
