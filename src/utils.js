// eslint-disable-next-line import/prefer-default-export
export const getTitle = (data, val) => val && data.find(i => i.value === val)?.title;
