import { Blocks } from 'react-loader-spinner';
import { LoaderWrapper } from './Loader.styled';
import { createPortal } from 'react-dom';

export const Loader = () => {
    
    const modalRoot = document.querySelector('#modal-root') as HTMLDivElement

    return (
        createPortal(
      <LoaderWrapper>
        <Blocks
          visible={true}
          height="80"
          width="80"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
        />
      </LoaderWrapper>, modalRoot)
    );
  };