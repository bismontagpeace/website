(() => {
  const link = document.getElementById("kontakt-mail");
  if (!link) return;

  const user = link.dataset.user;
  const domain = link.dataset.domain;
  if (!user || !domain) return;

  const email = `${user}@${domain}`;
  link.href = `mailto:${email}`;
  link.setAttribute("aria-label", `Kontakt per E-Mail an ${email}`);
})();
