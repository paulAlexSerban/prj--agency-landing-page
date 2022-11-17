export const getNavigationList = (sectionList = {}) => {
  const navigationList = [];

  Object.entries(sectionList).forEach(section => {
    navigationList.push({
      href: section[1].sectionId,
      label: section[1].sectionName
    })
  })

  return navigationList
}