import {RootState} from '@reduxjs/toolkit';
import {Languages} from '@utils/enum/enums';
import {useSelector} from 'react-redux';

export function useIsRTL() {
  const {language} = useSelector((state: RootState) => state.app);
  const isRTL = language === Languages.ar;
  return {isRTL, language};
}
