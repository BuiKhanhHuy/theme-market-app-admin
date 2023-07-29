import { AxiosError } from 'axios';
import { Modal, message } from 'antd';
import { FieldData } from 'rc-field-form/es/interface';
import DataResponseType from '../types/DataReponseType';

const errorHandler = (
  error: unknown,
  callback?: (serverErrors: FieldData[]) => void
) => {
  if (typeof error === 'object' && error !== null) {
    const axiosError = error as AxiosError;

    if (axiosError.response) {
      const stt: number = axiosError.response.status;
      const dataReponse: DataResponseType = axiosError.response
        .data as DataResponseType;

      switch (stt) {
        case 400:
          if (dataReponse.typeError === 'ValidationError') {
            if (callback) {
              callback(dataReponse.errors);
            }
          } else if (dataReponse.typeError === 'AppError') {
            message.error(dataReponse.errors.join(', '));
          }
          break;
        default:
          message.error(dataReponse.errors.join(', '));
      }
    } else {
      Modal.error({
        title: 'Error! ',
        content: 'An error occurred. Please try again later!',
      });
    }
  } else {
    Modal.error({
      title: 'Error! ',
      content: 'An error occurred. Please try again later!',
    });
  }
};

export default errorHandler;
