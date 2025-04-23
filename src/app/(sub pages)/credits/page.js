
export const metadata = {
  title: "Credits",
};

export default function CreditsPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="pb-12 text-5xl text-accent text-center">Credits</h1>
      <div className="bg-secondary-light rounded-lg p-6 shadow-md">
        <p className="mb-4 text-center">
          This project uses a UFO 3D model from {' '}
          <a href="https://sketchfab.com/3d-models/ufo-f4de85ac3a994c5cb73610c21f6cd34d" target="_blank" rel="noopener noreferrer" className="text-accent font-semibold hover:underline">
            Sketchfab
          </a>{' '} done by
          <a href="https://sketchfab.com/fenixartur" target="_blank" rel="noopener noreferrer" className="text-accent font-semibold hover:underline">
            Artur
          </a>{' '}
          licensed under{' '}
          <a href="http://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer" className="text-accent font-semibold hover:underline">
            CC-BY-4.0
          </a>.
        </p>
      </div>
    </div>
  );
}
