import moment from 'moment/moment';
import 'moment/locale/es';

export const formatDate = (dateString) => {
  return moment(dateString).format('LL');
};

export const sort = (posts) => {
  return posts.sort((a, b) => new Date(b.datePost) - new Date(a.datePost));
};

export const paginate = (posts, currentPage, itemsPerPage) => {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  return posts.slice(startIndex, endIndex);
};

export const truncate = (text, length, useWordBoundary) => {
  if (text.length <= length) {
    return text;
  }
  const subString = text.substr(0, length - 1);
  return (
    (useWordBoundary
      ? subString.substr(0, subString.lastIndexOf(" "))
      : subString) + "..."
  );
};

export const titlecase = (str) => {
  return str.replace(/\w\S*/g, (txt) => {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
};
