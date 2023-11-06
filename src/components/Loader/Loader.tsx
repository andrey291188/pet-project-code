import { Blocks } from 'react-loader-spinner';
import { LoaderWrapper } from './Loader.styled';
import { createPortal } from 'react-dom';

export const Loader = () => {
    
    const modalRoot: any = document.querySelector('#modal-root')

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