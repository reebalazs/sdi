from pyramid_layout.panel import panel_config

@panel_config(
    name='header_sitemenu',
    renderer='sdi:templates/panel_header_sitemenu.pt'
)
def header_sitemenu(context, request, items=None):
    # If items are passed in, use items, otherwise use SDI concept of
    # what should show up in the site menu
    url = request.url
    items = [
        dict(
            title="Top",
            url=request.application_url,
            active='active' if 'contents' not in url else ''
        ),
        dict(
            title="Items",
            url=request.application_url + '/contents',
            active='active' if 'contents' in url else ''
        ),
        ]
    return dict(items=items)
