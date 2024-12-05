function countAndSortCategories(categories) {
 
  const categoryCounts = categories.reduce((acc, category) => {
    acc[category] = (acc[category] || 0) + 1;
    return acc;
  }, {});

  const sortedCategories = Object.entries(categoryCounts)
    .sort((a, b) => b[1] - a[1]) 
    .map(([category]) => category); 

  return { categoryCounts, sortedCategories };
}
