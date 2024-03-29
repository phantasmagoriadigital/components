# sux-radio-group



<!-- Auto Generated Below -->


## Properties

| Property    | Attribute    | Description                                                                                                         | Type      | Default     |
| ----------- | ------------ | ------------------------------------------------------------------------------------------------------------------- | --------- | ----------- |
| `errorText` | `error-text` | The validation error text                                                                                           | `string`  | `undefined` |
| `helpText`  | `help-text`  | The help or explanation text                                                                                        | `string`  | `undefined` |
| `invalid`   | `invalid`    | Presentational only. Renders the Radio Group as invalid.                                                            | `boolean` | `false`     |
| `label`     | `label`      | The label of the radio group. For HTML content, use the `label` slot instead.                                       | `string`  | `undefined` |
| `name`      | `name`       | The name of the radio group - submitted with form data. Must match the name of the radios in the group.             | `string`  | `''`        |
| `value`     | `value`      | The value of the current selected radio in the group. Changing this will also mark that radio as checked in the UI. | `any`     | `undefined` |


## Events

| Event       | Description                                                                                                                                     | Type               |
| ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| `suxchange` | Fired when the value of the input changes - [HTMLElement/input_event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event) | `CustomEvent<any>` |


## Shadow Parts

| Part           | Description |
| -------------- | ----------- |
| `"form-field"` |             |
| `"label"`      |             |
| `"radiogroup"` |             |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
