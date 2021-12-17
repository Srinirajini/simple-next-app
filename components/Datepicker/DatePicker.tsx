import React,{FunctionComponent}from 'react';
import { Dayjs } from 'dayjs';
import dayjsGenerateConfig from 'rc-picker/lib/generate/dayjs';
import generatePicker from 'antd/lib/date-picker/generatePicker';
import 'antd/lib/date-picker/style/index';

const AntDDatePicker = generatePicker<Dayjs>(dayjsGenerateConfig);

export const DatePicker: FunctionComponent = () => {
    return (<AntDDatePicker/>)
}