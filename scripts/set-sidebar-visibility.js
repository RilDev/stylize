//Sidebar show/hide

const setSidebarVisibility = flag => {
  const sidebar = document.querySelector('aside');

  //if no sidebar
  if (!sidebar) {
    return;
  }

  if (flag) {
    sidebar.classList.add('visible');
  } else {
    sidebar.classList.remove('visible');
  }
};
