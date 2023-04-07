import { LoadingIcon } from './Icon';

export const OverlayLoader = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full bg-white dark:bg-gray-800 bg-opacity-70 flex items-center justify-center z-50">
        <div className="text-center">
            <LoadingIcon className='text-blue-600 w-36' />            
        </div>
    </div>
  );
};
