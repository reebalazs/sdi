
/*
 * SlickGrid configuration
 * It is stored as DOM data, and the slickgrid
 * component can look it up by the data key,
 * by specifying configName: 'slickgrid-config' as an option.
 *
 * We need this because functions are not JSON-convertible.
 */

(function ($) {

    // our custom validator
    function requiredFieldValidator(value) {
        if (value === null || value === undefined || !value.length) {
            return {valid: false, msg: "This is a required field"};
        }
        else {
            return {valid: true, msg: null};
        }
    }

    // mapping of all the functions we want to use in a column
    // definition if we send it from the server via JSON
    $(document).data('slickgrid-config', {
        editors: {
            text: Slick.Editors.Text,
            date: Slick.Editors.Date
        },
        formatters: {
        },
        validators: {
            required: requiredFieldValidator
        }
    });
})(window.jQuery);

