import { AnimationLayout } from "../components/layout/AnimationLayout";

export const NotFound = () => {
  return (
    <AnimationLayout>
      <div className="flex items-center justify-center h-full font-semibold tracking-widest uppercase text-gray-400 text-2xl">
        <h1>Error Cargando Esta Sección</h1>
      </div>
    </AnimationLayout>
  );
};
