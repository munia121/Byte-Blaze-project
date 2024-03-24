import { ScaleLoader } from 'react-spinners';

const LoaderSpnner = () => {
    return (
        <div className='flex justify-center flex-col items-center'>
            <ScaleLoader size={100} color='pink'></ScaleLoader>
        </div>
    );
};

export default LoaderSpnner;