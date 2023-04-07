import { useLibrary } from "../hooks/useLibrary";
import { TrashIcon } from "../components/ui/Icon";
import { OverlayLoader } from "./../components/ui/OverlayLoader";
import { AnimationLayout } from "../components/layout/AnimationLayout";

export const Settings = () => {
  const { library, removePath, loading } = useLibrary();

  const handleRemove = (path) => (e) => {
    e.preventDefault();
    removePath(path);
  };

  return (
    <AnimationLayout>
      <div className="p-4 relative h-full">
        {loading && <OverlayLoader />}

        <h1 className=" font-bold tracking-widest uppercase text-gray-500 text-2xl mb-4">
          Configuración
        </h1>

        <div className="mt-2 border border-gray-300 rounded-md p-2 bg-white shadow-lg shadow-black/5">
          <h2 className="font-semibold tracking-widest uppercase text-gray-600 text-base mb-2 pb-1 border-b">
            Directorios
          </h2>
          {library.paths.map((path, index) => (
            <div
              key={index}
              className={
                "py-2 hover:bg-gray-100 px-4 flex items-center justify-between transition-colors " +
                (index < library.paths.length - 1
                  ? "border-b border-gray-200"
                  : "")
              }
            >
              <p>{path}</p>
              <button
                onClick={handleRemove(path)}
                className="bg-red-600/5 text-red-600 rounded-full flex items-center justify-center h-8 w-8 hover:bg-red-600 hover:text-white transition-colors"
              >
                <TrashIcon className="h-6 w-6" />
              </button>
            </div>
          ))}

          <div className="mt-2 text-right bg-gray-100 p-2">
            <button
              onClick={() => window.ipcRenderer.send("open-file-dialog")}
              className="px-4 py-2 bg-blue-700 text-white hover:bg-blue-600 rounded-md"
            >
              Agregar Directorio
            </button>
          </div>
        </div>
      </div>
    </AnimationLayout>
  );
};
