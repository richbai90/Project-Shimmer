import { SAVE_TEMPLATE, LOAD_TEMPLATE, LOADING_TEMPLATE } from '../types/templates';

export const saveTemplate = (templateName, templateStructure) => ({
  type: SAVE_TEMPLATE,
  payload: { templateName, templateStructure },
});

export const loadTemplate = template => ({
  type: LOAD_TEMPLATE,
  payload: { template },
});

export const startLoadingTemplate = () => ({
  type: LOADING_TEMPLATE,
  payload: true,
});

export const stopLoadingTemplate = () => ({
  type: LOADING_TEMPLATE,
  payload: false,
});
