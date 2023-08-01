const pageBodyContainer = document.querySelector('body');
const successTemplate = document.querySelector('#success');
const successTemplateMessege = successTemplate.content.querySelector('.success');
const errorContainer = document.querySelector('#error');
const errorText = errorContainer.querySelector('.error__message');

const createSuccessMessege = () => {
  const successMessege = successTemplateMessege.cloneNode(true);

  pageBodyContainer.append(successMessege);
}

export {createSuccessMessege};
