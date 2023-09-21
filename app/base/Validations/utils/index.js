import { removeLetters, stripSpecialCharacters } from '../../Utils';

const factoryOutput = (errors) => {
  return {
    valid: !errors.length,
    errors
  };
};

const createError = (key, messages) => ({
  key,
  message: messages[key]
});

const merge = (target, source) => {
  return Object.assign({}, target, source);
};

const removeCaractheresAndLetters = (text) => {
  return stripSpecialCharacters(removeLetters(text));
};

export { factoryOutput, createError, removeCaractheresAndLetters, merge };
