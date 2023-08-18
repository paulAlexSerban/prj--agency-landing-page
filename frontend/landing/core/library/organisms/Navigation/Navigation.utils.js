export const getNavigationList = (sectionList = {}) => {
  return Object.entries(sectionList).map((section) => {
    return {
      href: section[1].sectionId,
      label: section[1].sectionName,
    };
  });
};
