export const getProjects = async () => {
  const response = await fetch("https://api.github.com/users/marcin10lw/repos");

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return await response.json();
};
