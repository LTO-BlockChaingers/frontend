import { FormMetadata } from '@models/forms';

declare var require: any;

const formData = require('./backend-response-mock/form-example.json');
export const FORM_METADATA_MOCK = new FormMetadata(formData);
