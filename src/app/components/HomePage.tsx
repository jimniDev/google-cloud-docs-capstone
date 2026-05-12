export function HomePage() {
  return (
    <iframe
      src={`${import.meta.env.BASE_URL}pages/home.html`}
      title="Google Cloud Docs Home"
      style={{ width: '100%', height: 'calc(100vh - 57px)', border: 'none', display: 'block' }}
    />
  );
}
